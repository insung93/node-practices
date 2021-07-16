# MySite on Node(Express)

## project manifest 파일(package.json) 생성
- $ npm init -y
## 설치 패키지
- $ npm i express
- $ npm i ejs
- $ npm i dotenv
- $ npm i sequelize
- $ npm i mysql2
- $ npm i multer
- $ npm i momnet
- $ npm i winston                   (logback)
- $ npm i winston-daily-rotate-file (archive)
- $ npm i -D nodemon

## scripts in package.json
```JSON
  "scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js"
  },
```

## project sturcture
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- /node-modules
    |--- /config
    |--- /logging
    |--- /logs
    |--- /multer-temporary-store
    |--- /public
            |--- /assets
                    |--- /gallery
    |--- /routes
    |--- /controllers
    |--- /models
    |--- /views
            |---- /main
            |---- /user
            |---- /guestbook
            |---- /board
            |---- /gallery
            |---- /admin
</pre>