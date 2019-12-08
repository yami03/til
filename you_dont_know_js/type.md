# 타입



## 내장 타입

* null
* undefined
* boolean
* number
* string
* object
* symbol



## null

```js
typeof null === "object"; // true
typeof null === "null" // false
```

 7가지 내장타입과 일치하지 않은 오류가 있다. 
지금 바꾸기에는 지금까지 자바스크립트로 개발된 웹 소프트웨어에 문제가 생길 수 있기 때문에 버그가 유지될 가능성이 높다.



## "function"

```js
typeof function a(){ /*...*/ } === "function" // true
```

내장타입 7가지중에 포함된 타입 object의 하위인 "function"을 반환한다.



## 변수엔 따로 타입이 없다.

> 어떠한 형태의 값이라도 가질 수 있다.

변수에 typeof 연산자를 대어보는 건 "이 변수의 타입은 무엇이니"  (X) -> "이 변수에 들어있는 값의 차입은 무엇이니?"가 옳다.