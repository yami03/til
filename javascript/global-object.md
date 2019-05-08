# 전역객체(Global object)

```js
function func(){
    return 'Hello?';
}
console.log(func());
console.log(window.func());
```

여기서 알 수 있는점은 window는 점(.)앞에 있으니 **객체**이고 그 뒤에 있는 함수 func()는 **메소드**이다.

> window라는 전역객체는 생략가능
> 암시적이다.   
> 모든 변수와 함수는 window의 프로퍼티고 메소드이다.

```js
var o = {
    'func': function(){
        return 'Hello?';
    }
};
console.log(o.func());
console.log(window.o.func());
```

## 전역객체 API

[MDN 참조](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference>)

전역객체의 이름은 모든 언어에서 window는 아니다. node.js에서는 global이 전역객체! 