# string.length

`length` 는 UTF-16 코드 유닛기준으로 문자열 길이를 나타내는 String object의 property이다. string instance의 읽기 전용 데이터 프로퍼티이다.

```js
const str = '고양이 최고얏';
str.length; // 7
```

## Syntax

```js
string.length
```

## Description

문자열에 코드 유닛 수를 반환한다. JavaScript는 문자열 포맷으로 사용하는 UFT-16은 기본 문자를 표현하기 위해 16비트를 사용하지만, 일반적으로 사용되지 않는 문자를 표현하기 위해 2개의 16 비트를 사용하는 경우가 있기 때문에 실제 문자와 일치하지 않을 수 있다. 

ECMAScript 2016은 최대 길이를 `2^53 - 1`로 재정의하였다. 그 이전에는 최대 길이는 정해져 있지 않았다. Firefox에 있는 문자열의 최대 길이는 `2**30 - 2` (~1GB) 이다. Firefox 65 이전의 최대 길이는 `2**28-1`(~256MB) 였다.

빈 문자열인 경우 length는 0dlek.

정적 속성 String.length는 문자열의 길이와 상관이 없으며 String 함수의 arity(함수가 취하는 인수(arguments또는 피연산자(operand)의 숫자) 이다. 1을 반환한다. 🤔

## Unicode

문자대신 code unit을 세기 때문에 문자 수를 얻으려면 다음과 같은 것이 필요하다. 👇

```js
function getCharacterLength (str) {
  // 여기서 사용되는 문자열 순회는 단순한 코드 단위가 아니라 문자 위에서 순회한다.
  return [...str].length; // 🧐 배열의 요소로 만든 후 그 length 
}

console.log(getCharacterLength('A\uD87E\uDC04Z')) // 3

// 권장하진 않지만 다음과 같이 추가할 수 있다.

Object.defineProperty(String.prototype, 'charLength', {
  get () {
    return getCharacterLength(this);
  }
});

console.log('A\uD87E\uDC04Z'.charLength); // 3
```

## Examples

### length 할당하기

```js
let myString = "고양이는 귀엽다";

// length를 할당해도 관찰가능한 결과는 없다. 
myString.length = 4;
console.log(myString);
// expected output: "고양이는 귀엽다"
console.log(myString.length);
// expected output: 8
```

