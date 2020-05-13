# Number.POSITIVE_INFINITY

`Number.POSITIVE_INFINITY` 속성은 양의 무한대를 나타낸다.

```js
function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) return 'Process number as Infinity';
  
  return bigNumber;
}

checkNumber(Number.MAX_VALUE); // 1.7976931348623157e+308
checkNumber(Number.MAX_VALUE * 2); // "Process number as Infinity"
```

## Description

`Number.POSITIVE_INFINITY` 의 값은 전역 객체인 `Infinity` 속성의 값과 같다.

이 값은 수학에서의 무한대와 다르게 행동한다.

* `POSITIVE_INFINITY` 를 포함한 아무 양의 수와, `POSITIVE_INFINITY` 를 곱한 값은 `POSITIVE_INFINITY` 이다.
* `NEGATIVE_INFINITY` 를 포함한 아무 음의 수와, `POSITIVE_INFINITY` 를 곱한 값은 `NEGATIVE_INFINITY` 이다.
* 아무 양의 수를 `POSITIVE_INFINITY` 로 나눈다면 양의 부호를 가진 0이 된다.
* 아무 음의 수를 `POSITIVE_INFINITY` 로 나눈다면 음의 부호를 가진 0이 된다.
* 0을 `POSITIVE_INFINITY` 로 곱한다면 결과 값은 `NaN` 이다.
* `NAN` 을 `POSITIVE_INFINITY` 로 곱한다면 결과 값은 `NaN` 이다.
* `POSITIVE_INFINITY` 를 `NEGATIVE_INFINITY` 를 제외한 어떤 음의 값으로 나눈다면 결과값은 `NEGATIVE_INFINITY` 이다.
* `POSITIVE_INFINITY` 를 `NEGATIVE_INFINITY` 혹은 `POSITIVE_INFINITY` 로 나눈다면 결과값은 `NaN` 이다.



