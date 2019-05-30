# this - 'this'를 사용하는 해당 함수를 '어떻게' 실행하느냐에 따른 4가지 this 정의

> this는 무조건 객체다.

1. 일반함수 실행
   strict 모드에서는 일반함수 호출일때 this값이 바뀐다. 
   window라고 직접적으로 지정하지 않을때 error가 뜬다. window를 굳이 사용하는 일이 적고 헷갈리게 만드는일이기 때문이다.
2. dot notation 점방식
3. call, aply, bind로 호출
4. new로 호출

---

### 일반함수 실행(Regular function call)

**example  1**

```js
var name = sla;

function log () {
    console.log(this.name); 
}

log();
```

**example 2 - strict mode**

```js
'use strict';
var name = 'sla';

function log () {
    console.log(this.name); //'this' === undefined
}

log();
```

> strict mode에 대해 찾아보자.
> window라고 지정해야한다. window를 굳이 this로 쓰지 않기 때문이다.

**example 3**

```js
var age = 100;

function foo () {
    var age = 99;
    bar(age);
}

function bar (age) {
    console.log(this.age);//100
}

foo();
```

bar는 일반호출 방식으로 호출했기 때문에 100이 찍힌다.

---

### Dot Notation

**example  1**

```js
var age = 100;

var sla = {
    age: 28,
    foo: function foo () {
        console.log(this.age);
    }
};

sla.foo();
```

점 앞에 찍힌게 this가 된다. 

**example  2**

```js
var age = 100;
var sla = {
    age: 35,
    foo: function() {
        console.log(this.age);
    }
}
var yami = {
    age: 7,
    foo: sla.foo
}
sla.foo(); // 35
yami.foo(); // 7
foo(); // foo() is not defined
```

---

### Function.prototype.call, Function.prototype.apply, Function.prototype.bind

call - 인자로 여러개를 받을 수 있고, 첫번째는 무조건 this
apply - 인자는 두개만 받을 수 있고, 첫번째는 무조건 this
bind - 변수에 할당후 사용해야한다. 

**example - call, apply**

```js
var age = 100;

function foo (a, b, c) {
    console.log(this.age);
    console.log(arguments);
}

var sla = {
    age: 28
};

foo.call(sla, 1, 2, 3, 4, 5, 6, 7, 8, 9);
foo.apply(sla, [ 1, 2, 3, 4, 5, 6, 7, 8, 9]);
```

**example - bind**

```js
var age = 100;

function foo () {
    console.log(this.age); //28
    console.log(arguments); //1, 2, 3, 1, 2, 3, 4, 5
}

var sla = {
    age: 28
};

var bar = foo.bind(sla, 1, 2, 3);
bar(1, 2, 3, 4, 5); 
```



### 'new' keyword: Constructor function (생성자 함수)

**example 1**

```js
function Person () {
    console.log(this);
}

new Person();
```

new를 붙이고 함수를 실행했을 때는 아주 깨끗한 빈 객체가 return 된다. `{}`

**example 2**

```js
function Person () {
    this.name = 'sla';
    console.log(this);
}

var sla = new Person();
console.log(sla);
```

this.프로퍼티 , this.메소드를 리턴해준다. 따로 return을 안써도 된다.

설명

```js
function Person () {
    // this = {}; //빈 객체를 만든다.
    this.name = 'sla';
    // this = {name: 'sla' }; this의 빈 객체는 내가 만든 프로퍼티,메소드가 담긴다.
    // return this; 따로 return을 쓰지 않아도 return 된다.
}

var sla = new Person();
console.log(sla);
```

**생성자함수에서 객체를 return할땐 return 된다**

```js
function foo() {
    var age = 100;
    return 100;
}

new foo(); //{}
```

생성자 함수로 만들었을 때 일반적으로 {}빈 객체나 {}안에 this만 담겨 리턴한다. 

하지만 객체를 리턴할 때는 return이 사용가능하다. 

```js
function foo () {
    var age = 100;
    return { hahaha: 23232 };
}

new foo() //{hahaha: 23232 };
```

**Quiz 1**

```js
var age = 100;

const something = {
  age: 1,
  speak: function () {
    console.log(this.age); // 100
  }
};

const butler = {
  age: 10,
  serve: function (cb) {
    cb();
  }
};

butler.serve(something.speak);

```

**Quiz 2**

```js
function programmer() {
  this.isSmart = false;
  this.upgrade = function (version) {
    this.isSmart = !!version;
    work();
  };
}

function work() {
  if (this.isSmart) {
    window.alert("I can do my work! I am smart!"); // ?
  }
}

var programmer = new programmer();
// THINK: What should happen?
programmer.upgrade(1.1);
```

