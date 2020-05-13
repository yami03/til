## number.toFixed

`toFixed()` 메서드는 숫자를 고정 소수점 표기법으로 표기해 반환한다.

```js
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
}

financial(123.456); // "123.46"
financial(0.004); // "0.00"
financial('1.23e+5'); // "123000.00"
```

## Syntax

```js
numObj.toFixed([digits])
```

### Parameters

**digits** (Optional)

소수점 뒤에 표시되는 자릿수이다. 0 이상 20 이하의 값을 사용할 수 있으며, 구현체에 따라 더 넓은 범위의 값을 지원할 수도 있다. 값을 지정하지 않으면 0을 사용한다.

### Return value

고정 소수점 표기법을 사용하여 주어진 숫자를 나타내는 문자열이다.

### Exceptions

**RangeError**

`digits` 가 너무 작거나 너무 클 때, 값이 0과 100 사이의 값이라면 `RangeError` 가 발생하지 않는다. 구현체에 따라 더 크거나 작은 값을 지원할 수 있다.

**TypeError**

`Number` 가 아닌 객체에서 호출한 경우

### Description

`toFixed()` 는  지수 표기법을 사용하지 않는다. 소수자리 뒤에 정확한 자릿수를  `digits` 만큼 나타낸 `numObj` 문자열 표현을 반환한다. 필요에 따라 수치는 반올림된 소수 부분을 지정된 길이가 되도록 필요에 따라서 0으로 채워진다. `numObj` 가 `1e+21` 보다 큰 경우, 이 메서드는 단순히 `Number.prototype.toString()` 을 호출하여 받은 지수 표기법 결과를 대신 반환한다.

> 경고: 부동 소수점 수는 모든 소수를 정확하게 이진수로 나타낼 수 없다. 이로 인해 `0.1 + 0.2 === 0.3` 이 `false` 같은 예기치 않은 결과가 발생할 수 있다.

## Examples 

### toFixed 사용

```js
const numObj = 12345.6789;

numObj.toFixed(); // "12346" 반올림하며, 소수 부분이 없는 점을 유의하자
numObj.toFixed(1); // '12345.7' 반올림한다.
numObj.toFixed(6); // "12345.678900" 빈공간을 0으로 채운다.
(1.23e+20).toFixed(2); // "123000000000000000000.00"
(1.23e-10).toFixed(2); // "0.00"
2.34.toFixed(1);  // "2.3"
2.35.toFixed(1); // "2.4" 반올림한다.
2.55.toFixed(1); // "2.5" 🧐
-2.34.toFixed(1); // -2.3 (연산자 우선 순위이기 때문에, 음수의 경우 문자열을 반환하지 않는다) 오 ""가 없다.
(-2.34).toFixed(1); // "-2.3" 괄호를 사용할 경우 문자열을 반환한다. 
```





