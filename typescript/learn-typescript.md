# TypeScript 

* A javaScript Superset
* A Language building up on javaScript
* Adds new Features + Advantages to javascript (새로운 것이 아니다)
* Browser can't execute it
* Compiled to js





```js
const add = (num1, num2) => num1 + num2;

console.log(add('1','2'));
```

`add('1','2')` Unwanted Behavior at Runtime

result `23`

Mitigation Stategies 

Add if check to add fuction Validate & sanitize user input

```js
const button = document.querySelector("button");
const input1 = document.querySelector("num1");
const input2 = document.querySelector("num2");

const add = (num1, num2) => num1 + num2;

button.addEventListener('click', () => consle.log(input1.value, input2.value));
```

this is not a technical error

it's not an error which is thrown but it's a logical error

the value of an input element is always a number

```js
const add = (num1, num2) => {
  if(typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2
  } 
  return Number(num1) + Number(num2);
}
```

**using typescript**

```typescript
const button = document.querySelector("button");
const input1 = document.querySelector("num1")! as HTMLInputElement;
const input2 = document.querySelector("num2");

const add = (num1: number, num2: number) => num1 + num2;

button.addEventListener('click', () => consle.log(input1.value, input2.value));
```

```shell
tsc using-ts.ts
```

compiler error

여기서 `!`는 절대 null이 오지 않는다는 뜻이다.

타입스크립트를 추가하는것은 type과 data가 매우 중요하다.

**장점**

* clean code
* 오류 방지(예기치 않은 상황을 피할 수 있다.)
* 어떻게 작동하는지 명시적으로 지정
* 컴파일하여 이전버전의 브라우저도 지원한다.(Next-gen JavaScript)
* Non-javaScript Features like Interfaces or Generics
* Meta-Programming Features like Decorators
* Rich Configuration Options
* Modern Tooling that helps even in non-TypeScript Projects

**lite server**

```shell
npm install --save-dev lite-server
```

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server"
}
```

## Core Types

* number
* String
* boolean

### number

```js
function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = '5';
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
```

> typeScript's type system only helps you during development.

브라우저는 지원해주지 않는다.

> JavaScript uses "dynamic types" (resolved at runtime), TypeScript uses "static types" (set during development).






