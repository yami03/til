# Number.isInteger

`Number.isInteger()` 메서드는 주어진 값이 정수인지 판별한다.

```js
function fits(x, y) {
  if (Number.isInteger(y / x)) return 'Fits!';
  
  return 'Does NOT fit!';
}

fits(5, 10); // 'Fits'
fits(5, 11); // 'Does NOT fit!'
```

## Syntax

```js
Number.isInteger(value)
```

### Parameters

**value**

정수인지 확인하기 위한 값

### Return value

주어진 값이 정수인지를 나타내는 `Boolean` 값

## Description

타겟 값이 정수이면 `true` 를 반환하고 아니면 `false` 를 반환한다. 만약 value가 `NaN` 이거나 `Infinity` 인 경우 `false` 를 반환한다. 또한 정수로 나타낼 수 있는 부동 소수점은 `true` 를 반환한다.

## Examples

```js
Number.isInteger(0); // true
Number.isInteger(1); // true
Number.isInteger(-10000); // true
Number.isInteger(9999999999) // true

Number.isInteger(0.1); // false
Number.isInteger(Math.PI); // false

Number.isInteger(NaN); // false
Number.isInteger(Infinity); // false
Number.isInteger(-Infinity); // false
Number.isInteger('10'); // false
Number.isInteger(true); // false
Number.isInteger(false); // false
Number.isInteger([1]); // false

Number.isInteger(5.0); // true; 
Number.isInteger(5.000000000000001); // false 
Number.isInteger(5.0000000000000001); // true... 정수로 나타낼 수 있는 부동 소수점은 true를 반환한다.
```

## polyfill

```js
Number.isInteger = Number.isInteger || function(value) {
  return typeof value === 'number' &&
    isFinite(value) && Math.floor(value) === value;
}
```

### Browser compatibility

IE에서는 지원안됨