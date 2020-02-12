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



