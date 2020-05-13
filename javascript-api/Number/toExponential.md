# number.toExponential

`toExponential()` 메서드는 지수 표기법으로 Number 객체를 나타내는 문자열을 반환한다.

```js
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

expo(123456, 2); // "1.23e+5"
expo('123456'); // "1.23456e+5"
expo('oink'); // "NaN"
```

## Syntax

```js
numObj.toExponential([fractionDigits])
```

### Parameters

**fractionDigits**(Optional)

소수점 뒤의 자릿수를 지정하는 정수이다. 숫자를 지정하는데 필요한 만큼의 숫자로 기본 설정된다.

### Return value

`Number` 소수점 앞의 한 자리 숫자로 지수 표기법으로 주어진 객체를 나타내는 문자열이며 소수점 이하 `fractionDigits` 뒤의 숫자로 반올림한다.

## Exceptions

### RangeError

`fractionDigits` 가 너무 작거나 너무 크면 `RangeError` 가 발생한다.

`fractionDigits` 가 0에서 20 사이의 값이면 `RangeError` 에러는 발생하지 않는다. 구현에 따라 더 크거나 작은 값도 사용할 수 있다.

### TypeError

`Number` 가 아닌 객체가 이 메서드를 실행시키면 `RangeError` 에러가 발생한다.

## Description

`fractionDigits` 가 생략된 경우, 소수점 이후의 자릿수는 값을 고유하게 나타내는데 필요한 자릿수로 기본값이 지정된다. 

지수나 소수점이 없는 숫자 리터럴에 `toExponential()` 메서드를 사용하려먼, 점 앞에 공백을 두어 점이 소수점으로 해석되는 것을 막도록 한다. `console.log(77 .toExponential()); ` 

주어진 값의 자릿수가 `fractionDigits` 매개변수보다 크다면, 주어진 값은 `fractionDigits` 에 가까운 자릿수로 반올림되어 한다. `toFixed()` 메서드의 반올림에 관한 설명을 참조

## Examples

### toExponential 사용하기

```js
const numObj = 77.1234;

// `fractionDigits` 가 생략된 경우, 소수점 이후의 자릿수는 값을 고유하게 나타내는데 필요한 자릿수로 기본값이 지정된다. 
numObj.toExponential(); // "7.71234e+1"

numObj.toExponential(4); // "7.7123e+1"

numObj.toExponential(2); // "7.71e+1"

77.1234.toExponential(); // "7.71234e+1"

// 지수나 소수점이 없는 숫자 리터럴에 `toExponential()` 메서드를 사용하려먼, 점 앞에 공백을 두어 점이 소수점으로 해석되는 것을 막도록 한다. 
77 .toExponential(); // "7.7e+1"
```

