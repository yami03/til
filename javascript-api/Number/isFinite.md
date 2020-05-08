# Number.isFinite()

들어온 값이 유한 수(Finite Number)인지 정의해준다. 

[**What is finite number? What are some examples?**](https://www.quora.com/What-is-finite-number-What-are-some-examples)

```js
Number.isFinite(1 / 0); // false
Number.isFinite(10 / 5); // true
Number.isFinite(0 / 0); // false
```

## Syntax

```js
Number.isFinite(value)
```

### Parameters

**value**

유한수인지 확인할 값

### Return value

주어진 수가 유한수인지에 대한 Boolean 값

## Description

전역 `isFinite()` function과 비교했을 때 인자값을 숫자로 변한하지 않는다. 즉 이 의미는 값이 숫자이여만 하고 동시에 유한수일 때만 `true` 을 반환한다.

## Examples

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite('0'); // false
Number.isFinite(null); // false
```

##  Polyfill

```js
if (Number.isFinite === undefined) Number.isFinite = function(value) {
  return typeof value === 'number' && isFinite(value);
}
```



