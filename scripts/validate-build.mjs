import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, relative } from 'node:path';
import { parse } from 'parse5';

const root = resolve('dist');
const base = (process.env.SITE_BASE || '/docs/').replace(/\/$/, '') + '/';
const origin = process.env.SITE_URL || 'https://hnmt.jp';
const pages = new Map();
const errors = [];
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith('.html')) {
      const document = parse(await readFile(path, 'utf8'));
      const nodes = [];
      function visit(node) {
        if (node.tagName) nodes.push({ tag: node.tagName, attrs: Object.fromEntries((node.attrs || []).map(a => [a.name, a.value])) });
        for (const child of node.childNodes || []) visit(child);
      }
      visit(document);
      pages.set(path, { nodes, ids: new Set(nodes.map(n => n.attrs.id).filter(Boolean)) });
    }
  }
}
await walk(root);
const joinRedirect = pages.get(join(root, 'town/join/index.html'));
const joinDestination = `${base}towny/residents/`;
if (!joinRedirect) {
  errors.push('town/join/: missing legacy redirect');
} else {
  const { nodes } = joinRedirect;
  const refresh = nodes.find(n => n.tag === 'meta' && n.attrs['http-equiv']?.toLowerCase() === 'refresh');
  const canonical = nodes.find(n => n.tag === 'link' && n.attrs.rel === 'canonical');
  const robots = nodes.find(n => n.tag === 'meta' && n.attrs.name === 'robots');
  const body = nodes.find(n => n.tag === 'body');
  if (refresh?.attrs.content !== `0;url=${joinDestination}`) errors.push('town/join/: invalid redirect destination');
  if (canonical?.attrs.href !== new URL(joinDestination, origin).href) errors.push('town/join/: invalid redirect canonical');
  if (!nodes.some(n => n.tag === 'a' && n.attrs.href === joinDestination)) errors.push('town/join/: missing fallback link');
  if (!robots?.attrs.content?.split(',').map(v => v.trim()).includes('noindex')) errors.push('town/join/: must not be indexed');
  if (!body || !('data-pagefind-ignore' in body.attrs)) errors.push('town/join/: must be excluded from site search');
}
for (const [file, { nodes }] of pages) {
  const path = relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, '');
  const pageUrl = new URL(base + path, origin);
  const html = nodes.find(n => n.tag === 'html');
  if (html?.attrs.lang !== 'ja') errors.push(`${path}: lang must be ja`);
  if (!nodes.some(n => n.tag === 'title')) errors.push(`${path}: missing title`);
  if (nodes.filter(n => n.tag === 'h1').length !== 1) errors.push(`${path}: must have one h1`);
  for (const node of nodes) {
    if (node.tag === 'img' && !('alt' in node.attrs)) errors.push(`${path}: image missing alt`);
    for (const key of ['href', 'src']) {
      const value = node.attrs[key];
      if (path === '404.html' && node.attrs.rel === 'canonical') continue;
      if (!value || /^(?:mailto:|tel:|data:)/.test(value)) continue;
      const url = new URL(value, pageUrl);
      if (url.protocol !== 'https:' && url.protocol !== 'http:') {
        errors.push(`${path}: unsafe URL ${value}`); continue;
      }
      if (url.origin !== pageUrl.origin) continue;
      if (!url.pathname.startsWith(base)) { errors.push(`${path}: link outside base ${value}`); continue; }
      let target = resolve(root, '.' + decodeURIComponent(url.pathname.slice(base.length - 1)));
      if (target !== root && !target.startsWith(root + '/')) { errors.push(`${path}: invalid path ${value}`); continue; }
      try {
        if ((await stat(target)).isDirectory()) target = join(target, 'index.html');
        await stat(target);
      } catch { errors.push(`${path}: missing target ${value}`); continue; }
      if (url.hash && pages.has(target) && !pages.get(target).ids.has(decodeURIComponent(url.hash.slice(1)))) {
        errors.push(`${path}: missing anchor ${value}`);
      }
    }
  }
}
if (errors.length) {
  console.error(errors.join('\n')); process.exitCode = 1;
} else console.log(`Validated ${pages.size} pages: internal links, anchors, assets, language, headings and image alternatives (${base})`);
