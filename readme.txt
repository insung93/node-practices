1. package(패키지)
    - 완전한 애플리케이션 ex) devtoos(nodemon, babel, webpack ...)
    - 코드 샘플, 프로젝트에서 사용하는 모듈(라이브러리)
2. dependency(의존성)
    - 개발하고 있는 프로젝트 (패키지, 애플리케이션)에서 설치하고 사용하는 다른 패키지
    - 1) 일반 의존성 : 개발하고 있는 애플리케이션 배포에 꼭 포함.
        npm i
    - 2) 개발 의존성 : 개발에 필요하거나 도움이 되는 패키지(dev tool) 패키지에 포함 
        npm i -D 
3. 패키지 설치 방식
    1) global(전역) 설치: 여러 프로젝트에서 공통으로 사용하는 도구를 설치
        npm i -g ... --> 지양
    2) project local(지역) 설치 : 특정 프로젝트에만 종속적인 도구나 라이브러리
        npm i ...
    warning : description 파일이 없어서 생김
    package.json

패키지 설치
[project-01] $ npm install package      (local install, general dependency)
[project-01] $ npm i -D package         (local install, developement dependency)
[project-01] $ npm i -g nodemon         (global install)

패키지 삭제
[project-01] $ npm un ejs ( local install 삭제 )        (local install 삭제)
[project-01] $ npm un -g gulp ( global install 삭제)    (global install 삭제)

Node(JavaScript) Project (Application, Package) 생성
1. 프로젝트 디렉터리 생성   (mkdir)
2. 프로젝트 디렉터리 이동   (cd)
3. 프로젝트 매니페스트 파일(package.json) 파일 생성
[project-01] $ npm init -y

===============================================================================
**모듈**
1. 코어모듈 : fs, os, ... node에서 제공해주는 모듈
2. 파일모듈 : 파일의 경로로 불러와서 모듈 안의 객체, 함수, 클래스를 사용하는 모듈
3. npm 모듈 : npm을 통해서 node_modules에 설치해서 사용하는 모듈
    패키지 설치 방법 :  1. 로컬 배포
                        2. 원격 배포
===============================================================================
npmjs.com npm registry에 패키지 배포하기
1. 사용자 등록
    npm adduser
    Username : insung93
    Password : 
    Email : insung93@gmail.com

2. 업로드
[insung93-math]$ npm publish
    
[CMD]:git clone git://github.com/douzone-busan-bitacademy/node-practices.git
[CMD]:cd node-practices/
[CMD]:cd project-ex03
[CMD]:node app-ex01.js 
[CMD]:npm install
[CMD]:node app-ex01.js 


===============================================================================
맨바닥에서 웹애플리케이션 만들어보기
app 01. based on http
    : core module
app 02. based on (http, fs)
    : core module
app 03. based on (connect , serve-static)
    : npm package(module)
app 04. based on (connect , serve-static, connect-route )
    : npm package(module)

helloweb-ex02 based on express
    :npm package(module)
[helloweb-ex02] npm init -y
[helloweb-ex02] npm i express
[helloweb-ex02] npm i ejs
[helloweb-ex02] npm i -D nodemon

paackage.json 수정
  "scripts": {
    "start" : "node index.js",
    "debug" : "nodemon index.js"
  }
[helloweb-ex02] npm start       (운용시)
[helloweb-ex02] npm run debug   ( 개발시... Live Update )

[helloweb-ex02] mkdir public
[helloweb-ex02] mkdir views
[helloweb-ex02] mkdir routes
[helloweb-ex02] mkdir controllers
[helloweb-ex02] mkdir models