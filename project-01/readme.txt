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