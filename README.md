# 日ノ本鯖 ガイド

`https://hnmt.jp/docs/` のガイドをAstro + Starlightで作ります
記事とガイドのコードは、このPublicリポジトリで管理します
トップサイトは別のPrivateリポジトリで管理します

## 開発

Node.js 22.12以降を使用します

```sh
npm ci
npm run dev
```

`http://localhost:4321/docs/` を開いてください

```sh
npm run check
npm run build
npm run validate
npm run preview
```

検索はビルド後のプレビューで確認できます
Pagefindによる検索はブラウザー内で動き、検索語を外部サービスに送信しません

## 編集

記事は `src/content/docs/` に置きます
記事下の編集ボタンからFork・PRを作成できます
詳しいルールは [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください

## 公開の構成

`main` へのマージ後、GitHub Actionsが静的ファイルをGitHub Pagesに公開します
公開用のURLパス `/docs/` でビルドし、Cloudflare側のトップサイトが `/docs/` へのリクエストだけをこの成果物に中継します
GitHub PagesのプロジェクトURLを直接開く用途ではありません

このリポジトリの変更から、Privateのサイトコードを取得・編集することはできません
公開済みファイルの配信を経由して連携するため、リポジトリ間の秘密トークンも不要です

公開に失敗した場合はActionsのログを確認し、修正PRを作成してください
誤った変更はRevertのPRで戻して再公開します

## 依存関係

lockfileでバージョンを固定します
`postcss-selector-parser` はGHSA-rj75-hqrm-r3gfへの対処として7.1.6に固定しています
依存元が対応した際は、overrideの削除とビルドを確認してください

- [StarlightのMarkdown](https://starlight.astro.build/guides/authoring-content/)
