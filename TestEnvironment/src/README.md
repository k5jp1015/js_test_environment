# javascriptのテスト環境をもくもく

## 各種コマンド

テスト実行コマンド  
`npx mocha --require babel-register src/js/test/*/*.js`

- test配下に存在するテストコードに対してテストメソッドを実行する

純粋にJSの実行コマンド  
`node --require babel-register  src/js/sample_functions.js`
- --require 拡張機能の指定 babel-registerを利用していることでES2015でソースを記載していても対応しているようにしている

------------

以下、もともとのREADME

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