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
* Boolean
* Object
* Array
* Tuple
* Enum
* Any

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

### Object Types

```typescript
const person = {
  name: 'sla'
};

console.log(person.nickname);
```

nickname을 설정하지 않은 상태에서 nickname을 확인하고자 한다면 개발환경에서 타입스크립트가 오류를 알려준다.

> Property 'nickname' does not exist on type '{ name: string; age: number; }'.
>
> 6 console.log(person.nickname);

```typescript
const person: {
  name: string;
} = {
  name: 'sla'
};

console.log(person.name);
```

### Array

```typescript
const person = {
  name: 'sla',
  hobbies: ['Sports', 'Cooking']
};

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
}

console.log(person.name);
```

toLocaleUpperCase를 썼을때는 문제가 없다.

```typescript
for (const hobby of person.hobbies) {
  console.log(hobby.map());
}
```

map은 Array 메소드기 때문에 타입스크립트가 에러를 뿜뿜해준다.

### Tuple

```js
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: 'sla',
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};
```

### Enum

```js
const ADMIN = 0;

const person = {
  name: 'sla',
  hobbies: ['Sports', 'Cooking'],
  role: ADMIN
};
```

js에서 상수관리를 할 때는 const와 대문자 변수명을 이용하여 하였다.

enum은 열거형으로 쉽게 할 수 있다.

typescript로 바꾼다면

```typescript
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'sla',
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};
```

`enum Role { ADMIN, READ_ONLY, AUTHOR };` 이렇게 사용할 수 있다.
배열처럼 0, 1, 2에 해당된다.

변환한 파일에서 확인할 수 있다.

```js
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
```

```typescript
enum Role { ADMIN = 5, READ_ONLY = 'READ_ONLY', AUTHOR };
```

수를 변경할 수 있는 숫자도 되고 텍스트도 된다.

### any

* 최대한 쓰는 것을 피하자
* 명시적으로 타입을 나타내지 않고 유추를 통한다면 타입스크립트 장점 x

## Union Types

 ```js
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combinedAges = combine(30, 26);

console.log(combinedAges)
 ```

`|` 을 이용하여 타입을 지정할 수 있다.

## Type Aliases

```typescript
type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  // ...code
}
```

type을 이용하여 상단에 지정할 수 있다.

## Function Return Types and Void

```typescript
function add(n1: number, n2: number): number {
  return n1 + n2
}
```

parameter 매개변수 옆에 `:` 를 이용하여 return값의 타입을 정의해준다.

```typescript
function printResult(num: number): void {
  console.log('Result: ' + num);
}
```

return값이 없을 때나, return;만 할때 void로 정의한다.

undefined 인 경우은 안될까?

```typescript
function printResult(num: number): undefiend {
  console.log('Result: ' + num);
  return;
}
```

`return;` 이런 상황을 말할 수 있다. 하지만 `void` 로 쓴다.

 ## Function Types

```typescript
function add(n1: number, n2: number): number {
  return n1 + n2
}

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

```

변수의 타입을 함수로 지정할 때 function이라고 하지 않는다. `(a: number, b: number) => number;` 으로 지정한다.

## Function Types and Callbacks

```typescript
function add(n1: number, n2: number, cb: (num: number) => void): number {
  cb(result);
  return n1 + n2
}

console.log(add(1, 2, (num) => console.log(num)));
```

인자에 대한 정의는 매개변수에서 한다.
의심이 들어 확인하는 방법은 add함수를 호출 할 때 마우스를 올려보면 타입이 지정되어 있다.

## The Unknown Type

```typescript
let userInput: unknown;
let useName: string;

userInput = 5;
userInput = 'sla';

userName = userInput;
```

이렇게 하면 런타임 에러가 난다. unknown로 설정한건 string에 할당할 수 없다.

**그렇다면 any는? **

```typescript
let userInput: any;
let userName: string;

userInput = 5;
userInput = 'sla';

userName = userInput;
```

문제 없다. any로 설정하는 것은 `자바스크립트처럼 유연하게 쓰겠다는 뜻이고 기본적으로 타입검사를 비활성화하고 타입스크립트를 쓰는 것을 포기하겠다` 는 뜻이다.

**userInput에 할당하는 법**

```typescript
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'sla';

if (typeof userInput === 'string') {
  userName = userInput;
}
```

extra check를 추가한다.

## The Never Type
```typescript
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
  // while (true) {}
}

generateError('An error occurred!', 500);
```

함수에서 절대 return이 없을 때 사용한다. 

generateError에 마우스를 올리면 void가 뜨지만 훨씬 명확하다.