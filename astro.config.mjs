import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const base = process.env.SITE_BASE || '/docs/';
export default defineConfig({
  site: process.env.SITE_URL || 'https://hnmt.jp',
  base,
  trailingSlash: 'always',
  integrations: [starlight({
    title: '日ノ本鯖 ガイド',
    favicon: '/assets/hinomoto.png',
    description: '日ノ本鯖の暮らし・町づくり・取引を案内するガイド',
    defaultLocale: 'root',
    locales: { root: { label: '日本語', lang: 'ja' } },
    logo: { src: './public/assets/hinomoto.png', alt: '日ノ本鯖' },
    editLink: { baseUrl: 'https://github.com/hnmt-mc/hnmt-docs/edit/main/' },
    social: [{ icon: 'github', label: 'GitHubでガイドを編集', href: 'https://github.com/hnmt-mc/hnmt-docs' }],
    customCss: ['./src/styles/theme.css'],
    sidebar: [
      { label: 'ガイドの入口', slug: '' },
      { label: 'はじめに', items: [{ autogenerate: { directory: 'start' } }] },
      { label: '暮らしの便利機能', items: [{ autogenerate: { directory: 'life' } }] },
      { label: '町とお店', items: [{ autogenerate: { directory: 'town' } }] },
      { label: 'ガイドの編集', slug: 'contributing' },
    ],
  })],
});
