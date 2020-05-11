# Number.isSafeInteger()

`Number.isSafeInteger()` 메서드는 전달된 값이 안전한 정숫값인지 확인한다.

```js
function warn(x) {
  if(Number.isSafeInteger(x)) return 'Precision safe.';
  
  return 'Precision may be lost!';
}

// pow n제곱
warn(Math.pow(2, 53)); // "Precision may be lost!"
warn(Math.pow(2, 53) - 1); // "Precision safe."
```

**안전한 정숫값**
* IEEE-754 배수도수 형태로 정확히 표현될 수 있는 수
* IEEE-754 표현에 맞게 반올림하는 다른 정수의 결과가 아닌 IEEE-754 표현

`2^53 - 1`은 안전한 정숫값이다. 이 정수는 정확하게 표현할 수 있으며 IEEE-754 반올림 모드에서 다른 정숫값이 이 값을 반올림하지 않는다. 반면 `2^53`은 안전하지 않은 정수이다. 이 정수는 정확히 IEEE-754로 표현될 수 있지만, 정확하게 표현되지만, IEEE-754에서는 표현할 수 없으며 가까운 수로 반올림하는 것과 0으로 반올림하는 것으로 2^53 반올림한다.

**IEEE-754**
IEEE에서 개발한 컴퓨터에서 부동소수점을 표현하는 가장 널리 쓰이는 표준이다. ±0 등의 수와 무한, NaN 등의 기호를 표시하는 법과 이러한 수에 대한 연산을 정의하고 있다. 가장 최신 버전인 IEEE 754-2019가 2019년 6월에 배표되었다.

최대 정밀도로 최대 9조 달러보다 크거나 작은 값을 처리하려면 Arbitrary-precision arithmetic 라이브러리를 사용해야한다.

[프로그래머 모두가 알아야 하는 부동 소수점](https://floating-point-gui.de/) 을 참고하쟈 

큰 정수는 `BigInt` 를 사용하자

## Syntax

```js
Number.isSafeInteger(testValue)
```

### Parameters
**testValue**
안전한 정숫값인지 판별한다. 

### Return value
주어진 값이 안전한 정숫값인지를 나타내는 `Boolean` 값이다.

## Examples

```js
Number.isSafeInteger(3); // true
Number.isSafeInteger(Math.pow(2, 53)); // false
Number.isSafeInteger(Math.pow(2, 53) - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity) // false
Number.isSafeInteger('3'); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Polyfill
```js
Number.isSafeInteger = Number.isSageInteger || function (value) {
	return Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER;
}
```

## Browser compatibility
IE 지원안됨