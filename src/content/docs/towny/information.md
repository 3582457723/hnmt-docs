---
title: 地図・情報・便利な表示
description: Townyの地図、境界表示、ランキング、料金や時刻を確認するコマンド
sidebar:
  order: 5
---

自分の土地がどこまでか分からなくなったら、地図や境界表示を使ってみましょう！
表示を変えるだけの操作と、土地の設定そのものを変える操作は区別してください

## Townyの地図を見る

| コマンド | 表示するもの |
| --- | --- |
| `/towny map` | 現在地周辺の区画をチャットの地図で見る |
| `/towny map big` | より広い範囲のチャット地図を見る |
| `/towny map hud` | 地図HUDの表示を切り替える。利用権限や表示方式は設定による |
| `/plot info` | 今いる場所の区画情報を見る。`/plot perm`でも確認できる |
| `/plot perm hud` | 現在地の権限HUDの表示を切り替える |
| `/town nearby` | 現在地の近くにある町を調べる |
| `/town plots [町名]` | 町の土地数、土地の種類、売地などの集計を見る |
| `/town plotgrouplist [町名] [ページ]` | 町の区画グループを一覧で見る |

チャット地図はMinecraftの地図アイテムやWeb地図とは別の機能です
地図上の記号や色は表示された凡例を見てください
近くの土地でも、町が取得していない区画なら保護範囲は続きません

## 境界と情報表示を切り替える

`/resident toggle 名前`でモードを切り替えます
もう一度同じコマンドを使うと元に戻せます

| 名前 | 使いどころ |
| --- | --- |
| `map` | 移動に合わせて周辺のチャット地図を表示する |
| `plotborder` | 区画の境界を表示する |
| `constantplotborder` | 区画の境界を継続して表示する |
| `townborder` | 町の境界を確認する |
| `bordertitles` | 境界を通ったときのタイトル表示を切り替える |
| `ignoreplots` | 区画に入ったときの通知を抑える |
| `ignoreinvites` | 招待の受け取りを無視する。招待待ちなら解除する |
| `perm` | 区画を移動したときの権限情報表示を切り替える |
| `bedspawn` | Townyによるベッドスポーンの扱いを切り替える。リスポーン設定に関係するため、サーバーの案内も確認 |
| `ignoreotherchannels` | TownyChatで、選択中以外の無視できるチャンネルを抑える |

例えば`/resident toggle plotborder`で境界を見てから、建築する範囲を決められます
表示されない場合は、権限、パーティクルの描画設定、利用中のワールドを確認してください

### 複数の表示モードをまとめる

```text
/resident set mode map plotborder
```

基準版の`set mode`は、列挙したモードをそれぞれ反転します
指定した組み合わせに必ず置き換わる操作ではありません
確実にモードを揃えたい場合は、まず`/resident set mode clear`で外してから、必要なものだけ指定してください
`/resident set mode clear`・`/resident toggle clear`でモードを外し、`reset`でサーバーが指定する初期モードに戻せます

### 作業しながら土地を管理するモード

| 名前 | 効果と条件 |
| --- | --- |
| `townclaim` | 移動した先で町の領土取得を行う。町の取得権限と費用が必要 |
| `townunclaim` | 移動した先で町の領土を解除する。保護が外れるため、経路に注意 |
| `plotgroup` | 移動に合わせて区画グループへ追加する。グループ名と管理権限が必要 |
| `district` | 移動に合わせて地区へ追加する。地区の選択と管理権限が必要 |

例えば`/resident toggle townclaim`を有効にしたまま歩くと、意図しない土地の取得や費用が発生する場合があります
作業後は同じコマンドで解除してください
`spy`・`infotool`・`adminbypass`は管理用途なので、プレイヤー向けの設定手順には含めません

## サーバー全体の情報を見る

| コマンド | 分かること |
| --- | --- |
| `/towny`・`/towny ?` | Townyのヘルプを見る |
| `/towny prices` | 設立、土地の取得、維持などに設定されている料金を確認する |
| `/towny time` | 次の日次処理までの時間などを確認する |
| `/towny universe` | 町や国家などの全体集計を見る |
| `/towny tree` | 町・国家などの構成を見る |
| `/towny version`・`/towny v` | Townyのバージョンを確認する |
| `/towny top residents [all/town/nation]` | 住民数のランキングを見る |
| `/towny top land [all/resident/town]` | 所有する土地の数のランキングを見る |
| `/towny top balance [all/town/nation]` | 銀行残高のランキングを見る。経済機能が必要 |
| `/towny switches` | `switch`権限で管理されるブロックを確認する |
| `/towny itemuse` | `itemuse`権限で管理されるアイテムを確認する |
| `/towny allowedblocks` | 区画種別ごとに設定された、利用可能なブロックの一覧を確認する |
| `/towny wildsblocks` | `wilds`区画で対象になるブロックを確認する |
| `/towny plotclearblocks` | `/plot clear`で除去対象になるブロックを確認する |

ランキングの`all/town/nation`などは、どれかひとつを選びます
例えば`/towny top residents town`は町の住民数ランキングです

## 町・国家一覧を並べ替える

入力例は`/town list 1 by name`、`/nation list 1 by residents`です

| 一覧 | `by`の後に指定できる値 |
| --- | --- |
| `/town list` | `name`・`residents`・`balance`・`townblocks`・`forsale`・`online`・`open`・`public`・`ruined`・`bankrupt`・`founded`・`upkeep` |
| `/nation list` | `name`・`residents`・`balance`・`towns`・`townblocks`・`online`・`open`・`public`・`founded`・`upkeep` |

`open`は自由参加、`public`は公開スポーン、`upkeep`は維持費に関係する並べ方です
`ruined`や`bankrupt`は、その機能が有効な場合の廃墟・破産状態を表します
一覧の表示内容や利用できる情報は設定・権限によって変わります
