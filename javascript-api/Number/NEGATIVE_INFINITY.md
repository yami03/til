# Number.NEGATIVE_INFINITY

`Number.NEGATIVE_INFINITY` 속성은 음의 무한대를 나타낸다.

```js
function checkNumber(smallNumber) {
  if (smallNumber === Number.NEGATIVE_INFINITY) return 'Process number as -Infinity';
  
  return smallNumber;
}

checkNumber(-Number.MAX_VALUE); // -1.7976931348623157e+308
checkNumber(-Number.MAX_VALUE * 2); // "Process number as -Infinity"
```

## Description

`Number.NEGATIVE_INFINITY` 의 값은 전역 객체 `Infinity` 속성의 부호를 바꾼 값과 동일하다.

`NEGATIVE_INFINITY` 는 수학에서의 무한대와 약간 다르다.

* `POSITIVE_INFINITY` 를 포함한 아무 양의 값에 `NEGATIVE_INFINITY` 를 곱한 값은 `NEGATIVE_INFINITY` 이다.
* `NEGATIVE_INFINITY` 를 포함한 아무 음의 값에 `NEGATIVE_INFINITY` 를 곱한 값은 `POSITIVE_INFINITY` 이다.
* 아무 양의 수를 `NEGATIVE_INFINITY` 로 나눈 값은 음의 부호를 가진 0 이다.
* 아무 음의 수를 `NEGATIVE_INFINITY` 로 나눈 값은 0 이다.
* 0을 `NEGATIVE_INFINITY` 로 나눈 값은 `NaN` 이다.
* `NaN` 에 `NEGATIVE_INFINITY` 를 곱한 값은 `NaN` 이다.
* `NEGATIVE_INFINITY` 를 제외한 어떤 음의 값으로 나눈 `NEGATIVE_INFINITY` 값은 `POSITIVE_INFINITY` 이다.
* 

