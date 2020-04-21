# string.concat

매개변수로 전달받은 모든 문자열을 문자열과 연결하여 새 문자열을 반환한다.

```js
const str1 = "Hello";
const str2 = "world";

console.log(str1.concat(' ', str2)); // Hello world
```

## Syntax

```js
str.concat(str2 [, ...strN])
```

### Parameters

`str2, [, ...strN]`

str에 연결시킬 String

### Return Value

제공된 문자열을 조합한 새로운 문자열

## Description

새로운 문자열을 반환하기 때문에 원본 문자열 변형되거나 영향을 끼치지 않는다. 문자열은 **불변 값 Immutable**.. 인자의 값의 type string이 아니면 연결시키기 전의 문자열을 반환한다.

## Performance

concat() 메소드 대신에 할당 연산자 ("+", "+=")를 사용하는것이 강력히 권장한다.

할당 연산자가 더 빠르다.



## Examples

```js
const hello = "안녕, ";
hello.concat("sla", ". 좋은 하루 보내"); // "안녕, sla. 좋은 하루 보내"

const greetArr = ['Hello', ' ', 'sla', '!'];
''.concat(...greetArr); // "Hello sla!"


// If the arguments are not of the type string, they are converted to string values before concatenating. 이 설명이랑 안맞는 느낌.. 
"".concat({}); // [object Object] 🤔
"".concat([]); // ""
"".concat(function(a) => return a); // "(a) => a"
"".concat(null); // "null"
"".concat(true); // "true"
"".concat(4, 5); // "45"
```



