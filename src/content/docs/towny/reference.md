---
title: 📋 コマンドの探し方と収録範囲
description: Townyのコマンドを用途と役割から探す索引、短縮形、確認操作、公式出典
sidebar:
  order: 13
---

初めての方は[最初の3ステップ](../)から読むのがおすすめです。
このページは、コマンド名や目的が分かっているときの索引として使えます。
画面上の検索でも、コマンド名や「税金」「フレンド」などの言葉を探せます。

## 一般プレイヤー向け

| コマンド・機能 | 説明のあるページ |
| --- | --- |
| `/town`・`list`・`here`・`online`・`reslist`・`ranklist` | [町を探す・住民情報](../residents/) |
| `/town join`・`/town leave` | [町への参加・脱退](../residents/) |
| `/invite list`・`accept`・`deny`、`/accept`・`/deny` | [招待への返事](../residents/#町を探して参加する) |
| `/town spawn`・`outpost`、`/resident spawn` | [拠点への移動](../residents/#町や自分の拠点へ移動する) |
| `/resident`・`list`・`tax`・`plotlist`・`outlawlist`・`set about` | [住民情報とプロフィール](../residents/) |
| `/resident friend add`・`remove`・`list`・`clear` | [フレンドの登録](../residents/#フレンドを登録する) |
| `/plot claim`・`unclaim`・`forsale`・`notforsale` | [土地の購入と売却](../plots/) |
| `/plot info`・`perm`・`perm hud`、`/town nearby`・`plots`・`plotgrouplist` | [地図と区画の情報](../information/) |
| `/plot set perm`、`/resident set perm` | [対象と操作別の権限](../permissions/) |
| `/plot perm gui`・`add`・`remove`、`/plot trust add`・`remove` | [個別設定とtrust](../permissions/) |
| `/resident toggle`・`set mode` | [表示・作業モード](../information/#境界と情報表示を切り替える) |
| `/resident toggle pvp`・`fire`・`explosion`・`mobs` | [自分の土地の環境設定](../land-settings/#区画のpvp環境を変える) |
| `/towny map`・`prices`・`time`・`top`・`tree`・`universe`・`version` | [全体情報とランキング](../information/) |
| `/towny switches`・`itemuse`・`allowedblocks`・`wildsblocks`・`plotclearblocks` | [対象のブロック・アイテム](../information/#サーバー全体の情報を見る) |
| `/resident jail`・`jail paybail` | [投獄と保釈](../jails/) |
| `/nation`・`list`・`online`・`townlist`・`ranklist`・`allylist`・`enemylist`・`spawn`・`townoutposts` | [国家の情報と移動](../nations/) |
| `/town deposit`・`/nation deposit` | [銀行への入金](../economy/#入金と出金) |

## 町長・町の役職向け

| コマンド・機能 | 説明のあるページ |
| --- | --- |
| `/town new`・`create` | [町をつくる](../town-land/#町をつくる) |
| `/town claim`・`unclaim`・`buy bonus`・`cede plot`・`takeoverclaim` | [領土の取得と解除](../town-land/) |
| `/town set homeblock`・`spawn`・`outpost`・`spawncost` | [町の中心と移動先](../town-land/#町の中心移動先を決める) |
| `/town forsale`・`notforsale`・`buytown`・`merge`・`delete`・`reclaim` | [町の売買・合併・削除・復興](../town-land/) |
| `/town add`・`invite`・`kick`・`purge` | [住民と招待の管理](../town-management/) |
| `/town rank add`・`remove` | [ランク・役職](../ranks/) |
| `/town say`・`mayor`、`set mayor` | [役職と町長の引き継ぎ](../town-management/) |
| `/town set name`・`board`・`tag`・`title`・`surname`・`mapcolor` | [名前と案内](../town-management/#名前と案内を整える) |
| `/town toggle` | [PvP・環境と公開の設定](../town-management/#pvp環境の設定) |
| `/town outlaw`・`ban`・`outlawlist` | [無法者の指定](../town-management/#無法者の指定) |
| `/town set perm`・`trust`・`trusttown`、`plots 町名 trustlist` | [町の権限と信頼登録](../permissions/) |
| `/town withdraw`・`baltop`・`bankhistory` | [銀行の管理](../economy/) |
| `/town set taxes`・`taxpercentcap`・`plottax`・`shoptax`・`embassytax`・`plotprice`・`shopprice`・`embassyprice` | [町の税金と価格](../economy/#町長向け税金と売地の初期価格) |
| `/plot evict` | [土地の所有解除](../plots/#町長が住民の所有を解除する) |
| `/plot set`・`toggle`・`clear` | [区画の種類と設定](../land-settings/) |
| `/plot group`・`district` | [グループと地区](../land-settings/) |
| `/town jail`・`unjail`、`set primaryjail`、`/plot jailcell` | [牢屋の管理](../jails/) |
| `/nation join`・`leave`、`/town invite received`・`accept`・`deny` | [町ごとの国家加入](../nations/#町長向け国家に参加する抜ける) |

土地の設定には、個人所有者が使えるものも含みます。
その土地の所有関係・役職の権限が実行可否を決めます。

## 国王・国家の役職向け

| コマンド・機能 | 説明のあるページ |
| --- | --- |
| `/nation new`・`create` | [国家の設立](../nations/#国家をつくる) |
| `/nation add`・`invite`・`kick`・`rank`・`say`・`king`・`leader` | [加盟する町と役職](../nations/#国王国家の役職向け加盟する町の管理) |
| `/nation set king`・`leader`・`capital`・`name`・`board`・`tag`・`title`・`surname`・`mapcolor`・`spawn`・`spawncost` | [国家の名前・首都・案内](../nations/#名前首都案内の設定) |
| `/nation toggle neutral`・`peaceful`・`public`・`open` | [国家の状態](../nations/) |
| `/nation withdraw`・`deposit 金額 町名`・`baltop`・`bankhistory` | [国家の銀行](../economy/) |
| `/nation set taxes`・`conqueredtax`・`taxpercentcap`、`toggle taxpercent` | [国家税](../economy/#国王向け国家税) |
| `/nation ally`・`enemy`・`sanctiontown`、`/town allylist`・`enemylist` | [外交と制裁](../diplomacy/) |
| `/nation merge`・`delete` | [国家の合併と削除](../nations/#国家を合併する削除する) |

## 確認と取り消し

| コマンド | 用途 |
| --- | --- |
| `/confirm` | 現在届いている操作確認を承諾する |
| `/cancel` | 現在の操作確認を取り消す |

確認が表示されたときだけ使います。
対象・費用・影響を読み、確認の有効期限内に返事をしてください。
確認がなくても実行される操作もあるので、**危険な操作すべてに確認が出るとは限りません**。

`/accept`・`/deny`は招待への返事で、`/confirm`・`/cancel`は操作の確認です。
それぞれのコマンド名は設定で変更できるため、サーバーが表示するボタン・入力案内を優先してください。

## ヘルプと短縮形

| 基本コマンド | 標準の短縮形・別名 |
| --- | --- |
| `/town` | `/t` |
| `/nation` | `/n`・`/nat` |
| `/resident` | `/res`・`/p`・`/player` |
| `/invite` | `/invites` |
| `forsale` | `fs` |
| `notforsale` | `nfs` |
| `new` | `create`。グループ・地区では`add`も作成を兼ねる |

`/town ?`・`/nation ?`・`/resident ?`・`/plot ?`で、それぞれのヘルプを開けます。
多くの下位コマンドでも`?`を使えます。
短縮形が別プラグインと競合する場合は、長い名前を使ってください。

## 収録範囲と出典

**基準：Towny 0.103.2.0 / 2026年10月15日確認**

一般プレイヤー、土地所有者、町長・町の役職、国王・国家の役職に関係するTowny本体のコマンドを収録しています。
権限設定の全組み合わせや`on/off`は、共通の入力形式としてまとめています。
サーバー固有の設定値と、未確認の追加機能は断定していません。

- [公式の安定版リリース](https://github.com/TownyAdvanced/Towny/releases/tag/0.103.2.0)
- [基準版のコマンド実装](https://github.com/TownyAdvanced/Towny/tree/db92beace5fc73a14a3484facbdcbe945f6c4691/Towny/src/main/java/com/palmergames/bukkit/towny/command) — TownCommand、NationCommand、ResidentCommand、PlotCommand、TownyCommand、InviteCommand、確認コマンドを照合
- [基準版のヘルプ定義](https://github.com/TownyAdvanced/Towny/blob/db92beace5fc73a14a3484facbdcbe945f6c4691/Towny/src/main/java/com/palmergames/bukkit/towny/command/HelpMenu.java)
- [基準版の表示・作業モード](https://github.com/TownyAdvanced/Towny/blob/db92beace5fc73a14a3484facbdcbe945f6c4691/Towny/src/main/java/com/palmergames/bukkit/towny/object/resident/mode/ResidentModeHandler.java)
- [基準版の権限・別名](https://github.com/TownyAdvanced/Towny/blob/db92beace5fc73a14a3484facbdcbe945f6c4691/Towny/src/main/resources/plugin.yml)
- [公式コマンドWiki](https://github.com/TownyAdvanced/Towny/wiki/Towny-Commands) — 併読用。基準版と異なる古い表記は、このガイドでは実装に合わせています

`/townyadmin`・`/townyworld`、監視や管理回避のモード、コンソール専用操作は対象外です。
TownyChatの一般プレイヤー向け操作は[チャットのガイド](../../town/chat/)に分けています。
戦争・資源・課税などを追加する別プラグインのコマンドは、導入が確認できたものから別途扱います。

Towny更新時は`/towny version`とリリースの版を照合し、変更されたコマンドの書式・費用・対象範囲を確認してから記事を更新します
