# Javascript scopes

Scope determines the accessibility (visibility) of variables.

> 변수에 접근 가능한 범위
>
> **내부에서 외부는 접근 가능**
> **외부에서 내부는 접근 불가능**

```js
var a = 1;

function foo() {
    var b = 2;
    console.log(a);
    console.log(b);
}

foo();
console.log(b); // cannot access 'b'
```

foo() 함수 내부에는 a와 b에 접근 가능하지만, (내부에선 외부에 접근 할 수 있다.)
외부에서 foo() 함수 내부에 있는 var b에는 접근 할 수 없다.

> **내부 외부를 판별하는 기준은 함수** 이다.

```js
var a = 1;

function foo () {
    var a = 2;
    console.log(a);
}

foo();
console.log(a);
```

마지막 줄 `console.log(a);` 는 1이다. 외부에서 내부 `var a = 2`에 접근 할 수 없고 호출과 동시에 var a = 2는 사라진다. 뿅

 ```js
function foo () {
    var a = 10;
    
    for (var i = 0; i < a; i++){
        console.log(i);
    }
    console.log(i); //마지막 console.log(i); 찍은 부분
}

foo();
 ```

for문이 끝나고 마지막 console.log(i)가 찍힌 부분에는 10이 나온다. 

> 왜냐하면 scope 범위는 함수이기 때문이다. (var 기준)

## IIFE 이피 Immediately Invoked Function Expression 즉시실행함수

```js
(function (){
    var a = 1;
    
    function foo () {
        var b = 2;
        console.log(a);
        console.log(b);
    }
    
    //foo();
})();

foo(); //즉시실행함수 내부에 있던 함수 실행
```

> IIFE를 이용해 고의로 범위를 만들 수 있다.

마지막 foo(); 호출은 error가 뜬다. 'ㅁ'/ {} 범위를 만들었기 때문에 'ㅁ' / 예~~

## Global Scope, Global variable, Global Object

```js
var a = 1;
function foo () {
    //bar function scope
    function bar() {
        //foo function scope
        console.log(a);
    }
    bar();
}
foo();
```

### Scope chain

bar() -> foo() -> global 순으로 타고 올라간다.

#### Global Object 는 browser에서는 window다.

### function안에 var를 붙이지 않은 변수는 Global에다 정의한다.
```js
function foo () { b = 2 };
foo();
```

라고 했을 경우 foo 안에는 var를 붙이지 아니하여서 변수 b는 global에 정의된다.

**global object에 key value로 붙는다.

```js
console.log(window.b) //2 
```

```js
function foo() {
    a = 1;
    
    function bar () {
        var a = 2;
        console.log(a);
    }
    bar();
}

foo();
console.log(a); 
```

#### 글로벌 스코프의 단점

```js
var a = 'sla';
console.log(`[On Load] ${a}`);
setTimeout(function () {
    console.log(`[1 second] ${a}`);
}, 1000);

var a = 'sla2';
console.log(`[On Load] ${a}`);
setTimeout(function () {
    console.log(`[1 second] ${a}`);
}, 1000);
```

setTimeout 위 아래 전부 `sla2` 가 뜬다.  setTimeout은 백그라운드에서 기다리고 있고, 기다리는 사이에 변경된 글로벌 함수가 뜬다. 

> 글로벌 스코프는 page에 1개다.

#### solution

```js
function foo () {
	var a = 'sla';
	console.log(`[On Load] ${a}`);
	setTimeout(function () {
    	console.log(`foo 함수의 [1 second] ${a}`);
	}, 1000);  
}

foo();

var a = 'sla2';
console.log(`[On Load] ${a}`);
setTimeout(function () {
    console.log(`[1 second] ${a}`);
}, 1000);
```

이렇게 foo()라고 쓴것도 글로벌 스코프에 포함된다.

```js
(function(){
	var a = 'sla';
	console.log(`[On Load] ${a}`);
	setTimeout(function () {
    	console.log(`foo 함수의 [1 second] ${a}`);
	}, 1000);    
})()

var a = 'sla2';
console.log(`[On Load] ${a}`);
setTimeout(function () {
    console.log(`[1 second] ${a}`);
}, 1000);
```

> 즉시실행함수를 쓰는게 더 안전하다.

