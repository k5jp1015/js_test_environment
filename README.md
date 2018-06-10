# javascriptテスト環境作成

## コマンド一覧

テスト実行コマンド  
` $(npm bin)/mocha --require babel-register src/js/test/*.js`


## Docker部分
以下のURLを参考  
[【初心者向け】Dockerで手軽にNode.js開発環境構築 (2)](https://qiita.com/yukin01/items/4f54496fd2f577c56b1d)

やりたいこと

ローカルのpackage.jsonをコンテナの中に移動
npm install

上記をDockerfile, またはdocker-compose.ymlで実施

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
