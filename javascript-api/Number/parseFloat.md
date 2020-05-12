# Number.parseFloat

`Number.parseFloat()` 메서드는 인수를 구문 분석하고 부동 소수점 실수를 반환한다. 인수에서 숫자를 구문 분석 할 수 없으면 `NaN` 을 반환한다. 

```js
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) return 0;
  
  return parseFloat(r) * 2.0 *  Math.PI;
}

circumference('4.533432dsfsdf'); // 28.484393333497767
circumference('dkfkdsfksd'); // 0;
```

## Syntax

````js
Number.parseFloat(value)
````

## Parameters

**value**

분석하고자 하는 값이다. 문자열이나 숫자이어야 한다.

### retrun value

부동 소수점 값이다. 인수가 숫자이면 숫자가 반환된다. 인수가 문자열이면 문자열이 숫자로 해석되어 그 결과가 반환된다. 인수가 해석 할 수 없는 숫자일 경우, `NaN` 을 반환한다.

## Description

`Number.parseFloat()` 메서드는 전역 `parseFloat()` 함수와 같은 기능을 가지고 있다.

```js
Number.parseFloat === parseFloat; // true
```

`Number.parseFloat()` 는 ECMAScript 2015에서 전역 범위의 모듈화를 위해 추가되었다. 

## Polyfill

```js
if (Number.parseFloat === undefined) {
  Number.parseFloat = parseFloat;
}
```

## Browser compatibility

IE 지원안됨