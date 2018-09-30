# javascriptテスト環境作成

## 概要
Dockerを使ったmocha,chai,assertを使ったJavaScriptテスト実行環境  

TestEnvironmentディレクトリ以下に関しては、[@shibayu36氏による「一から始めるJavaScriptユニットテスト」](https://github.com/shibayu36/bcon-js-unit-test/tree/master)をCloneし、そこから追記するような形で作成させてもらった。

自分以外にもテスト実行環境を配布できるように、Dockerで必要なモジュールをnpm installしたイメージを用意  

2018.6.11時点では通常の関数のユニットテストにしか対応できていないが、  
そのうちDOM操作に対応したたり、TypeScriptをトランスコンパイルしてテスト実行できるように環境は整える予定。  
ただし、先にmocha,chai(もしくはassert)の仕様を覚えるほうが先  

### いけてないところ
イメージを作成するためのpackage.jsonとテスト実行に必要なpackage.jsonを同一化できなかったので、二重管理状態。。。  
(誰か解決方法あれば教えてほしい)  

## テスト実行するまでのコマンド一覧

Dockerでテスト環境コンテナ作って、コンテナにログインして、テスト実行する  
`TestEnvironment`以下をData Volumeとして設定しているので、ローカルでの変更がそのままコンテナに反映される。  

### Docker部分
以下のURLを参考にしている  
[【初心者向け】Dockerで手軽にNode.js開発環境構築 (2)](https://qiita.com/yukin01/items/4f54496fd2f577c56b1d)

イメージの作成
`docker-compose -f Infrastructure/docker-compose.yml build`

コンテナの起動(デタッチモードで起動)
`docker-compose -f Infrastructure/docker-compose.yml up -d`

コンテナに入る
`docker exec -it node /bin/sh`

※コンテナに入ったら下記のテスト実行コマンドを叩けば良い

### テスト実行コマンド
`npx mocha --require babel-register src/js/test/*/*.js`

### 補足
純粋にJSの実行コマンド  
`node --require babel-register  src/js/sample_functions.js`
- --require 拡張機能の指定 babel-registerを利用していることでES2015でソースを記載していても対応しているようにしている

---------------------

元のREADME

## 一から始めるJavaScriptユニットテスト

- buildersconの発表「一から始めるJavaScriptユニットテスト」用のサンプルコードです
- 発表の流れにそってブランチを切り、diffを見れるようにPullRequestを作っています

### 通常の関数のユニットテスト
- branch: assert-mocha
    - https://github.com/shibayu36/bcon-js-unit-test/tree/assert-mocha
- PR: https://github.com/shibayu36/bcon-js-unit-test/pull/1

### DOM操作する機能のユニットテスト(Karma導入編)
- branch: karma
    - https://github.com/shibayu36/bcon-js-unit-test/tree/karma
- PR: https://github.com/shibayu36/bcon-js-unit-test/pull/2

### DOM操作する機能のユニットテスト(HTML断片を使ったテスト編)
- branch: dom-api-unit-test
    - https://github.com/shibayu36/bcon-js-unit-test/tree/dom-api-unit-test
- PR: https://github.com/shibayu36/bcon-js-unit-test/pull/3

### その他様々なユニットテスト
- branch: various-test
    - https://github.com/shibayu36/bcon-js-unit-test/tree/various-test
- PR: https://github.com/shibayu36/bcon-js-unit-test/pull/4
