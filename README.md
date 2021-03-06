# アプリ名：Daily

## このアプリでできること
- 新規投稿をすることができる
- 投稿内容を編集することができる
- 投稿内容を削除することができる
- ログインとログアウトができる
- 見本を触りどんなアプリか知ることができる

## 本番環境
- https://daily.kento-portfolio.com
- テストアカウント（メールアドレス：test197@sample.com , パスワード：123asd）

## このアプリを作成した意図
- このアプリを開発した意図は「自分」の為でした
- これまでの自分は1日を無駄に消費するような日々を送っていました。なので、毎日無駄なく過ごすために日記と言う形でアプリにしました
- その日に行ったことを記録することで、「明日は更によくしよう」と目標が生まれます
- 日記は紙に書くアナログのやり方もありますが、デジタルにすることで、瞬時に過去の記録を振り返ることができます
- 背景の画像はパソコンとノートとスマートフォンが並んでありますが、デジタルの風景も残しつつ、アナログのノートも大事にしたいと言う想いで、背景の画像を選びました。

## このアプリでどんな課題を解決したいか
- 自分の人生に対しての時間の使い方で無駄にしていることを無くすこと

## ターゲット
- 20代〜30代の男女
- 時間の使い方を見直したい人
- 日記をアナログではなく、デジタルでやってみたい人

## 工夫したポイント
 - 工夫したポイントはログアウトする際や、投稿内容を削除する際、画面上にポップアップを表示して、誤ってクリックしてもすぐに画面が遷移しないようにしました
 - トップページではタイトルだけ表示させて、その内容は詳細ページに遷移すると見れるようにし、トップページはシンプルにして見やすくしました
 - このアプリはログインしないと使用できないので、見本のビューを作り、どんなアプリか触ってもらえるようにJavaScriptで開発した

 このアプリ開発で使用した言語等
 - HTML
 - CSS
 - Ruby
 - Ruby on Rails
 - JavaScript
 - git
 - Git Hub

 ## 今回実装した機能
 - ログイン・ログアウト機能
 - 日記の投稿機能
 - 日記の編集・削除機能
 - 使い方がわかるsample機能
![new-daily-sample](https://user-images.githubusercontent.com/72017542/114267356-0358e100-9a36-11eb-9804-757ad8e9f438.gif)

 ## 今後実装したい機能
 - 検索機能
 - 検索機能は日付やタイトルを入力することで、その内容をトップページで見れるようにすると言うものです。

# dailyのER図

## usersテーブル
| Column             | Type   | Options     |
| -------------------| ------ | ----------- |
|nickname            |string  |null: false  |
|email               |string  |null: false  |
|encrypted_password  |string  |null: false  |

### Association
* has_many :contents

## contentsテーブル
| Column      | Type       | Options         |
| ----------- | -----------| --------------- |
|title        |string      |null: false      |
|contents     |text        |null: false      |

### Association
* belongs_to :users