# Notyra Theme

Blue theme plugin for Notyra 3.1.7+, plus the existing standalone JSON theme collection.

Notyra 3.1.7 以降で使える Blue カラーテーマプラグインと、従来の JSON テーマ集です。

## Install the plugin / プラグインとしてインストール

In Settings → Plugins, install **Blue Theme / ブルーテーマ** from the registry, or enter `yuma-shin/Notyra-Theme`. Then select Blue in Settings → Appearance. The plugin requests no permissions and runs no JavaScript. It provides both light and dark palettes; additional CSS is applied only while the theme is selected.

**設定 → プラグイン** から **Blue Theme / ブルーテーマ** をインストールし、**設定 → 外観** で選択します。`yuma-shin/Notyra-Theme` の直接指定も使えます。権限の要求や JavaScript の実行はありません。テーマ ID は `notyra-blue` で、従来の JSON インポートの `blue` と重複しません。

## Developer Mode / 開発者モード

Select this repository folder in Notyra's Developer Mode. A theme needs no compilation. Edit `theme.json` or `theme.css`, then Reload. `default-themes/` and `custom-themes/` remain available for the existing JSON-import feature; those files are not separate plugin Releases.

## Validate and release

Use Node 24 and pnpm 12.15.0. Run `pnpm typecheck`, `pnpm build`, `pnpm test`, and `pnpm package`. The resulting `notyra-plugin.zip` has `package.json`, `theme.json`, and `theme.css` at its root. Push `v1.0.0` (matching `package.json`) to run the release workflow. Only a successfully published Release can be installed by repository name.

The light/dark palette is based on the existing `custom-themes/blue.json`; the full original collection remains intact.
