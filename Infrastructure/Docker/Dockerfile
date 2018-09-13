# ベースイメージを指定
# 今回は LTS の 8.9.4 にする
# alpine は 軽量の linux OS
FROM node:8.9.4-alpine

# node.js の環境変数を定義する
# 本番環境ではproduction
ENV NODE_ENV=development

# ディレクトリを移動する
WORKDIR /app

# カレントディレクトリにあるpackage.jsonをコンテナ内の/app/に配置
ADD package.json /app/
# コンテナ内でnpm installコマンドを実行
RUN npm install

# ポート3000番を開放する
EXPOSE 3000




