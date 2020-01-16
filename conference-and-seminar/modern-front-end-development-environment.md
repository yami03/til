# 모던 프론트엔드 개발환경의 이해

2020년 1월 15일 김정환님의 T아카데미 - 모던 프론트엔드 개발환경의 이해 세미나를 정리한 내용

[김정환님의 모던 프론트엔드 개발환경의 이해 블로그 링크](http://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)
[깃허브 실습 링크](https://github.com/jeonghwan-kim/lecture-frontend-dev-env)

## 차례

* NPM
* Webpack
* Babel
* Lint
* Webpack 심화
* CRA없이 환경 만들기

## NPM

프론트 개발에서 노드가 필요한 이유

* 최신 자바스크립트로 구축 할 수 있다.

  브라우저의 업데이트가 늦을 수 있다.

* 빌드 자동화
* 개발 환경 커스텀

**개인적으로 찾아본 업데이트 방법**

```shell
# 캐시 삭제
sudo npm cache clean -f

# n 설치
sudo npm install n -g

# 안전한 버전
sudo n stable

# 최신 버전
sudo n latest
```

