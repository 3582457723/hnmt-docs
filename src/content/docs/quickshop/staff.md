---
title: 🤝 共同管理とお店の引き継ぎ
description: お店のスタッフを追加・解除する方法と、所有者を変更するときの注意点
sidebar:
  order: 4
---

友達と補充を分担したり、町のみんなでお店を続けたり。
共同管理は便利ですが、誰が何を操作できるかを確認してから使いましょう！

ここでいう**スタッフは、そのお店を手伝う人**です。
日ノ本鯖の運営スタッフになる機能ではありません。

## お店のスタッフを追加する

対象のお店を見ながら実行します。`Alex`は相手のMCIDに置き換えてください。

```text
/qs staff add Alex
```

設定によっては、管理GUIのスタッフ項目から追加することもできます。
登録後は一覧を確認しましょう。

```text
/qs staff list
```

:::caution[補充だけを任せる権限とは限りません]
標準のスタッフ権限には、在庫へのアクセスのほか、価格・商品・取引数量の変更なども含まれます。
商品を取り出せることも考えて、信頼できる相手だけを追加してください。
実際に使える操作は、サーバーの権限設定とお店ごとの権限にも左右されます。
:::

## お手伝いを終えるとき

1人を解除する場合は、次のコマンドを使います。

```text
/qs staff del Alex
```

全員のスタッフ登録を解除する場合は、対象のお店を確認して実行します。

```text
/qs staff clear
```

解除後は`/qs staff list`で確認してください。

## 土地の権限も確認する

QuickShopのスタッフ登録と、Townyの土地・チェスト操作の許可は別の設定です。
登録しただけで町の全チェストを開けたり、町の役職を使えたりするわけではありません。

補充できないときは、[建築と操作の権限](../../towny/permissions/)も確認してください。
作業のために町全体の権限を広げる前に、必要な区画と相手を絞りましょう。

## お店の持ち主を変更する

所有権の引き継ぎ機能が使える場合は、元の持ち主がお店を見ながら申請します。

```text
/qs transferownership Alex
```

受け取る側は、申請内容を確認したうえで承認します。

```text
/qs transferownership accept
```

受け取らない場合はこちらです。

```text
/qs transferownership reject
```

:::caution[スタッフ登録より大きな変更です]
所有者を変更すると、お店の持ち主そのものが変わります。
在庫・買取に使うお金・町の場所代・撤去時の扱いを、相手と先に相談してください。
土地の所有者も自動で変わると思わず、Towny側の設定は別に確認しましょう。
:::

買取店の引き継ぎが制限されているなど、設定によって使えない場合があります。
無理に別の人のチェストを操作せず、表示された理由を運営へ伝えてください。

確認元：[基準版のスタッフ操作](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/6.3.0.3/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/command/subcommand/SubCommand_Staff.java)・[標準のショップ内権限](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/6.3.0.3/quickshop-api/src/main/java/com/ghostchu/quickshop/api/shop/permission/BuiltInShopPermissionGroup.java)・[所有権の引き継ぎ](https://github.com/QuickShop-Community/QuickShop-Hikari/blob/6.3.0.3/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/command/subcommand/SubCommand_TransferOwnership.java)
