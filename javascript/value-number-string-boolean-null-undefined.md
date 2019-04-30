# 시작하기 전에

* `기능 구현` 에만 집중
* 인내심을 기른다.
* 질문을 하기 전에 반드시 꼼꼼하게 조사해보고 깊게 생각해보는 시간을 갖는다.
* 최대한 스스로 해결하도록 노력한다.
* 영어를 두려워 하지마라
* **같은 실수를 반복하지 않기**
* 공부한 내용을 기록한다.
* 코드는 사람이 이해하기 위해 쓰는것. 좋은 코드를 쓰도록 하쟈 'ㅁ'

# Table of Contents

* [Value](#value)
* [Number](#number)
* [String](#string)
* [Boolean](#Boolean)
* [Null & Undefined](null--undefined)

# value

```js
var catAge = 7;
```

* 값이다.
* 자바스크립트 코드를 쓰게되면 값을 다루고 넘기고 받기
* 한글자도 다 알고 써라
* 카멜케이스를 추천

## Type

```js
console.log(typeof 1); //"string"
```
* 문자열(스트링으로)로 number가 나온다.
* 모든걸 문자열로 반환한다.

### Available types in Javascript

* String Type
* Number Type
* Boolean Type
* Null Type
* Undefined Type
* Object Type
* Symbol Type (new in ES2015)


# Number

## isInteger

정수인지 판별후 true / false 값을 반환한다.
```js
Number.isInteger(0);         // true
Number.isInteger(1);         // true
Number.isInteger(-100000);   // true
Number.isInteger(99999999999999999999999); // true

Number.isInteger(0.1);       // false
Number.isInteger(Math.PI);   // false

Number.isInteger(NaN);       // false
Number.isInteger(Infinity);  // false
Number.isInteger(-Infinity); // false
Number.isInteger('10');      // false
Number.isInteger(true);      // false
Number.isInteger(false);     // false
Number.isInteger([1]);       // false
```

## Arithmetic_Operators

### Addition (+)

```js
// Number + Number -> addition
1 + 2 // 3

// Boolean + Number -> addition
true + 1 // 2

// Boolean + Boolean -> addition
false + false // 0
```
[참고 MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)

### Exponentiation (**)

```js
a ** b // a의 3제곱 
```

## comparison operators

```js
8 === 8;
8 !== 9;
```
최대한 3개를 쓰도록 한다.

## Special numbers

```js
NaN
-0
Infinity
-Infinity
```
값을 표기해주는 특별한 키워드인데 숫자다.


## NaN

```js
0 / 0; //NaN
1 * 'hello'; //NaN 

console.log(typeof NaN); //"number"
NaN === NaN //true
```

# String

## comparison

```js
'a' < 'b'; // true
'aaa' < 'abc'; // treu
'a' < 'Z'; // false
'한글' < '한국어'; // false
'2' < '10'; // false
```
문자열끼리 비교가 가능하다.

## Characteristics

### String​.prototype​.concat()

```js
'hello'.concat('fun', 'javascript'); //"hellofunjavascript"
```
[String​.prototype​.concat() MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/concat)

### 문자열은 인덱스 위치로 접근할 수 있다.

```js
var a = 'hello'
console.log(a[3]); // l
```

### 문자열은 인덱스 위치로 이미 만든걸 넣을 수 없다.

```js
var a = 'hello'
a[3] = 'o';
console.log(a); //"hello"
```
인덱스 3번째 위치에 o가 위치하지 않고 그대로 l이 위치한다.



# Boolean

## Truthy & Falsy

```js
undefined;
null;
0;
-0;
NaN;
false;
'';
"";
```
공백조차 없는 빈 문자열이여야 한다

이 값을 제외하곤 모두 true

# null & undefined

## undefined 

* 어떤 변수의 값이 아직 할당되어지지 않았음을 의미
* 직접 undefined를 할당하는 경우는 없어야 한다.


## null

* 없는 값 

* 있다가 없어진 값일 수도 있고, 애초에 없을 수도 있다.

* 없는 값을 나타내고 싶을때 프로그래머는 undefined를 넣지 말고 null값을 입력한다. 

```js
typeof(null); //object 자바스크립트 mistake 이슈있음
```

  


