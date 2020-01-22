# let

* 재선언 할 수 없다.
* block 스코프

* 똑같은 명으로 정의할 수 없다.
* **window에 붙지 않는다.**

**Quiz**

```js
for (var i = 1; i < 11 i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
```

```js
for (let i = 1; i < 11 i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
```

**Example** 

```js
{
    let jason = {
        codename: 'blackbriar',
        kill: function (target) {
            target = null;
        }
    };
    let operator = {
        codename: 'onion',
        answer: function () {
            alert('run away!');
        }
    };
    jason.kill(operator);
}
console.log(jason.codename);
console.log(operator.codename);
```

**quiz**

```js
let jason = {
    codename: 'blackbriar',
    kill: function (target) {
        target = null;
    }
};
let operator = {
    codename: 'onion',
    answer: function () {
        alert('run away!');
    }
};
jason.kill(operator);
console.log(jason.codename);
```

풀이

```js
let jason = {
    codename: 'blackbriar',
    kill: function (target) {
        var target = operator; //참조값이 들어갔다고 생각할 수 있다. 위치값
        target = null; //operator는 아무 영향을 받지 않는다.
        //매개변수로 죽이는건 불가능하다.
        //직접 죽이고 싶다면
        //operator = null; 로 해야 죽일 수 있다.
        //target.codename = null 은 가능하다.'ㅁ'/ 
    }
};
let operator = {
    codename: 'onion',
    answer: function () {
        alert('run away!');
    }
};
jason.kill(operator);
console.log(jason.codename);
```

### window에 붙지 않는다

```js
var x = 'global';
let y = 'global';

console.log(window.x); //'global'
console.log(window.y); //undefined
```

> why?
> window가 객체인데.. 없는 속성한테 접근하려고 해서이다.

```js
function doSomething() {
    console.log(bar); // undefined
    console.log(foo); // ReferenceError - 
    var bar = 1;
    let foo = 2;
}

doSomething();
```

> 더 엄격해졌다.

```
VM307:3 Uncaught ReferenceError: Cannot access 'foo' before initialization
```

라는 에러를 띄운다. 'ㅁ' hoisting이 아예 안됐다곤 할 수 없으니 더 엄격해져서 error를 띄운다.

### TDZ

[Temporal dead zone(MDN)](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone>) 참조

> hoisting이 일어나지만 var와는 다르게 var는 undefined로 초기화가 되는거지만, 
> let은 초기화가 안되는거다.

## const

* constant 상수(변하지 않는 수)에서 온 이름이다.
* 재선언 할 수 없다.
* 재할당 할 수 없다.

**Example**

```js
const obj = {
  arr: [1, 2, 3]  
};

obj = []; 
obj.arr = null; //안에 내용만 바꾸는거는 상관없다.
obj.arr.length = 0 //?
obj.arr.push(1); //?
```

# rest parameter

나머지 **매개변수**

>  배열로 만들어 준다.

```js
function foo (a,b, ...c) {
    console.log(c); // ['2', '3', '4', '5']
    console.log(Array.isArray(c)); // true
}

foo('0', '1', '2', '3', '4', '5');
```

**"arguments" is different**

```js
function foo2 (a, b, ...c) {
    console.log(arguments); // Arguments [1, 2, 3, 4, 5]
    console.log(Array.isArray(arguments)); //유사배열 false
}

foo2(1, 2, 3, 4, 5);
```

# spread operator

* 변수의 값으로 사용될 수 있다.
* **인자**에 사용 될 수 있다.
* 배열과 객체의 [], {} 모양을 벗길 수 있다.

**Example**

```js
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var total = [...arr1, ...arr2];

console.log(total); // [1, 2, 3, 4, 5, 6]
```

rest랑 똑같이 생겼는데 rest는 함수에서 마지막 매개변수에서만 사용된다.

**Example**

```js
function foo (a, b, c) {
    return a + b + c;
}

foo(...[1, 2, 3]); //6
```

**Example**

```js
var agentA = {
    codeName: 'oi',
    powerLevel: -999
};

var agentAA = {
    ...agentA,
    category: 'chaeso'
};

console.log(agentAA); //{codeName: 'oi', powerLevel: -999, category: 'chaeso'}
```

# destructuring

* 배열과 객체 뿌셔..
* 키는 변수명 선언 자리와 매개변수 자리에 쓸 수 있다.
* 변수명은 변수의 값 자리와 인자 자리에 쓸 수 있다.
* 배열의 요소와 객체의 키값을 키 이름(또는 새로운)의 변수로 만들 수 있다.



**Example**

```js
var address = {
    city: 'new york',
    state: 'NY',
    zipcode: '10003'
};

var { city, state } = address;
//오른쪽에 있는 address 객체를 파괴한다 'ㅁ'/
//var city = address.city;
//var state = address.city; 가 된다고 보면 된다.

console.log(city + ', '+ state);
```

객체 뿌시기

1. 왼쪽에 객체 모양을 만든다 {}
2. 안에는 속성 값을 써준다.
3. 오른쪽엔 객체 변수명을 써준다.

### key말고 다른 변수 명을 쓰고 싶을 때

```js
var address = {
    city: 'new york',
    state: 'NY',
    zipcode: '10003'
};

var { city: c, state: s } = address;
// var c = address.city;
// var s = address.state;

console.log(c + ', ' + s);
```

### 매개변수에서도 객체 Destructuring

```js
var address = {
    city: 'new york',
    state: 'NY',
    zipcode: '10003'
};

function logAddress ({ city, state }) {
    console.log(city + ', ' + state);
}

logAddress(address);
```

변수를 선언하고 만드는곳에 Destruturing 하였다. -> 매개변수

1. 함수 인자부분에 변수명을 썼다.
2. 매개변수 부분에 {} 쓰고 안에 부시고자 하는 key를 썼다. 

### Array Destructuring

```js
var numbers = [1, 2, 3, 4, 5];
var [ one, two, three, four, five ] = numbers;

console.log(one);
console.log(two);
```

**Example**

```js
var numbers = [1, 2, 3, 4 ,5];

var [one, , , five ] = numbers;

console.log(one);
console.log(five);
```

### 매개변수에도 배열 Destructuring

```js
var numbers = [ 1, 2, 3, 4, 5];

function sum ([ a, b, c, d, e]) {
    console.log( a + b + c + d + e);
}

sum(numbers);
```

1. 함수의 인자값으로 배열 변수명을 적는다.
2. 매개변수에 []을 작성하고 안에 지정하고자 부시고자 하는 매개변수 명을 적는다.

### rest parameter + destructuring

example 1 

```js
var numbers = [ 1, 2, 3, 4, 5 ];

function sum ([ a, b, ...c ]){
    console.log(c);
}

sum(numbers); // [3, 4, 5]
```

example 2

```js
const guicheokPeople = [1, 2, 3, 4 ,5 ];

function punish (...people) {
    const [ a, b, c, d, e ] = people;
    return c;
}

const result - punish(guicheokPeople);
```

풀이 

```js
const guicheokPeople = [1, 2, 3, 4 ,5 ];

function punish (...people) {
    //rest는 나머지를 배열로 반환해준다. 
    //console.log(people); // [[1, 2, 3, 4, 5]] 배열의 배열로 반환된다.
    const [ a, b, c, d, e ] = people;
    // const [ a, b, c, d, e ] = [[1, 2, 3, 4, 5]];
    // a = [1, 2, 3, 4, 5 ];
    return c;
}

const result = punish(guicheokPeople); //undefined
```

처음에 원했던 return c를 했을 때 3을 도출하는 법 

**구조가 일치해야 한다**

```js
const guicheokPeople = [1, 2, 3, 4 ,5 ];

function punish (...people) {
    const [ [a, b, c, d, e] ] = people;
    return c;
}

const result = punish(guicheokPeople);
```

