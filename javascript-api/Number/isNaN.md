# Number.isNaN()

`Number.isNaN()` 메서드는 인자값이 `NaN` 인지 판별하고 타입이 `Number` 인지도 판별한다. 전역 `isNaN()` 보다 더 강력한 버전이다. 숫자가 아니다 뜻을 의미하는게 아니라 `NaN` 이냐는 의미이다. 

```js
function typeOfNaN(x) {
  if (Number.isNaN(x)) return 'Number NaN';
  
  if (isNaN(x)) return 'NaN';
}

typeOfNaN('100F'); // 'NaN'

typeOfNaN(NaN); // 'Number NaN'
```

## Syntax

```js
Number.isNaN(value)
```

### Parameters 

**value**

`NaN` 인지 판별해야하는 값

### Return value

주어진 값이 `Number` 타입이고 `NaN` 이면 `true` 를 반환한다. 아니면 `false₩

## Description

`NaN` 이 `NaN` 인지 계산할 때, 두 동일 연산자 `==` 과 `===` 모두 `false` 로 평가된다. `NaN == NaN` 과 `NaN === NaN` 은 false 이다. `NaN` 이 `NaN` 인지 판별하기 위해선 `Number.isNaN()` 이 필수 요소이다.  이 경우는 JavaScript에서 있을 수 있는 다른 모든 값의 비교와는 다르다.

전역 `isNaN()` 함수와 달리 `Number.isNaN()` 는 강제로 인수가 숫자로 변환되지 않는다.  `NaN` 으로 변환하여 값이 안전하게 전달되지만, 이것은 `NaN` 이 아닌다. 오직 `Number` 형이고 `NaN` 일 때만 `true` 를 반환한다.

## Examples

```js
Number.isNaN(NaN); // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0) // true

// e.g isNaN() 이었다면 true를 반환한다.
// 들어온 값이 정말 NaN 인지를 판별한다.
Number.isNaN("NaN"); // false
Number.isNaN(undefined); // false
Number.isNaN({}); // false
Number.isNaN('blabla'); // false

// 이 모든것은 false를 반환한다.
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37 37');
Number.isNaN('');
Number.isNaN(' ');
```

## Polyfill

```js
Number.isNaN = Number.isNaN || function isNaN(input) {
  return typeof input === 'number' && input !== input;
}
```

정말 `NaN`의 특이점인데 `NaN !== NaN` 은 `true` 이다.



