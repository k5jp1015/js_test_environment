# ベースイメージを指定
# 今回は LTS の 8.9.4 にする
# alpine は 軽量の linux OS
FROM node:8.9.4-alpine

# node.js の環境変数を定義する
# 本番環境ではproduction
ENV NODE_ENV=development

# 雛形を生成するのに必要なパッケージのイントール(いらなくなるかも)
# RUN npm install -g express-generator@4.16.0

# ADD package.json /app/

# ディレクトリを移動する
WORKDIR /app

# RUN npm install mocha --save-development
# RUN npm install chai --save-development
# RUN npm install assert --ave-development
# RUN npm install babel-preset-es2015 --save-development
# RUN npm install babel-register --save-development

# ポート3000番を開放する
EXPOSE 3000




