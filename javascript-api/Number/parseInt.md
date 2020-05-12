# Number.parseInt

`Number.parseInt()` 메서드는 문자열을 분석하고 특정 진수를 사용한 정수 또는 베이스의 정수를 사용한 정수로 변환해 반환한다.

`an integer of the specified radix or base.`

```js
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  
  if (Number.isNaN(parsed)) return 0;
  return parsed * 100;
}

roughScale(' 0xf', 16); // 1500
roughScale('321', 2); // 0
```

## Syntax

```js
Number.parseInt(string, [ radix])
```

### Parameters

**string**

분석할 값. 만약 이 인자가 문자열이 아니라면 `ToString`  추상 연산을 사용하여 문자열로 변환한다. 이 매개변수의 공백은 무시된다.

**radix** (Optional)

`string` 이 표현하는 정수를 나타내고자 하는 2와 36 사이의 진수 (수의 진법 체계에 기준이 되는 값) 조심해라 default는 10이 아니다.

### Return value

주어진 `string` 을 분석한 정수, `radix` 가 2보다 작거나 36보다 크거나 혹은 첫번째 공백 문자가 아닌 숫자로 변환 할 수 없는 경우 `NaN` 을 반환한다.

## Description

`Number.parseInt()` 메서드는 `parseInt()` 함수와 같은 기능을 가지고 있다.

```js
Number.parseInt = parseInt; // true
```

`Number.parseInt()` 는 ECMAScript 2015에서 전역 범위를 모듈화 하기 위해서다. 

## Polyfill

```js
if (Number.parseInt === undefined) {
  Number.parseInt = window.parseInt
}
```

## Browser compatibility

IE에서는 지원안됨



