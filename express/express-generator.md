# express generator

```shell
$ npx express-generator
```

-h
로 옵션을 볼 수 있다.

html 템플릿 엔진 ejs, pug

```shell
$ express --view=ejs --css=less <파일이름>
```

package.json

scripts 
기본 명령어는 그냥 쓸 수 있지만
나만의 커스텀 명령어를 쓰고자 할때에는 run을 붙여야 한다.

미들웨어는 순서가 중요하다.
stack구조처럼 줄을 선다.

next 다음 미들웨어로 넘긴다. 

**에러 핸들러**
next의 인자는 다 에러로 친다.
그래서 app.js의 가장 마지막의 에러 미들웨어로 직행한다.

next('route') 는 특별하게 취급되어 에러로 가지 않는다.

express의 엄청난 장점중의 하나는 에러 핸들링이다.

에러가 났을 때 클라이언트한테 에러가 났다는 응답을 줘야한다.

next는 디폴트 에러핸들러를 호출한다.

logging을 통해서 error를 찾아낸다.

에러 핸들러는 여러개 만들 수 있다.

**환경변수**

환경변수값이 key value가 들어있다.
db를 연결한다.



