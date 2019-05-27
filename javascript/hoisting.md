# Hoisting 

자신이 속한 scope에서 최상단까지 끌어올린다.

```js
console.log(a);//error
```

정의되지 않은 a를 찾을 땐 `error` 가 뜬다.

```js
console.log(a); //undefined
var a = 1;
console.log(a); //1
```

첫번째 `console.log(a)` 에서 error가 안나고 `undefined`가 나온다.
이게 바로 Hoisting 'ㅁ'/ Hoisting을 통해 자바스크립트가 위에서 아래까지 쭉 읽어 내려가기만 한다는게 아니라는걸 알 수 있다.

```js
var a 
console.log(a);
a = 1;
console.log(a);
```

이렇게 된거라고 생각하면 쉽다. 끌어올려서 미리 변수를 정의했지만 값은 제자리에서 넣어짐

> 전체가 끌어올려지는게 아니라 변수에 대한 선언부분만 끌어올려진다.

```js
console.log(a);
var a = 1;
console.log(a);
foo();
function foo(){
    console.log(a);
}
```

`foo()` 함수는 문제없이 실행된다.

```js
bar();

var b = 1;

function bar(){
    if (false) {
        b = 2;
    } else {
    	console.log(b);
    }
}
console.log(b);
```

`bar()`를 실행하면 console.log(b)가 찍히는데 b는 아직 정의 되기 전 함수를 호출하였다.
하지만 호이스팅으로 var b 가 먼저 선언이 되어 있기 때문에 `undefined`가 뜬다. 

```js
var b;

bar(); // undefined

b = 1;

function bar(){
    if (false) {
        b = 2;
    } else {
    	console.log(b);
    }
}
console.log(b); //1
```

이런식으로 생각하면 쉽다.

## Function Expressin 함수 표현식

```js
d();

var d = function () {
  console.log('I am inside function d');  
};
```

변수로 정의하고 함수를 할당해 준다. `d()`는 undefined가 나온다. 왜냐하면 var d 까지만 hoisting 되기 때문이다. 

```js
var d;

d();

d = function () {
  console.log('I am inside function d');  
};
```

이와 비슷하다고 생각하면 좋다.

## Function Declaration 함수 선언식

```js
j();

function j (){
	console.log('j');
}
```

선언식으로 적은건 함수 자체가 hoisting 된다.  회사 컨벤션에 맞추어 작업하면 된다.

**함수 선언식은 세미콜론(;)을 찍지 않는다.**

```js
var e = 2;
var d = function () {};

function j () {
    console.log('j');
} //이 부분에 세미콜론을 찍지 않는다.
```



### hoisting 되는건 본인이 속한 scope 까지 끌어올려진다.

```js
var me = 'sla';

function foo () {
    alert(me);
    
    var me = 'someone else';
}

foo();
```

```js
var me = 'sla';

function foo () {
    var me;
    alert(me);
    
    me = 'someone else';
}

foo();
```

그래서 `undefined`가 뜬다.



### Quiz

```js
function foo() {
    return
    {
      age: 30  
    };
}

console.log(typeof foo());
```

`undefined`가 뜬다. return 구문은 개행해서는 안되서.. 

```js
var arr = ['hello', 'world'];
arr[a] = 'thank you';
console.log('2' in arr);
```

인덱스 in arr 인데 인덱스도 결국 문자라 실행이 된다.