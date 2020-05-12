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
* `NEGATIVE_INFINITY` 를, 제외한 어떤 음의 값으로 나눈 `NEGATIVE_INFINITY` 값은 `POSITIVE_INFINITY` 이다.
* `NEGATIVE_INFINITY` 를, `POSITIVE_INFINITY` 를 제외한 아무 양의 수로 나눈 결과는 `NEGATIVE_INFINITY` 이다.
* `NEGATIVE_INFINITY` 를, `NEGATIVE_INFINITY` 또는 `POSITIVE_INFINITY` 로 나눈 결과는 `NaN` 이다.

`Number_NEGATIVE_INFINITY` 속성을 사용하여 성공 시 유한수를 반환하는 함수가 오류인 상태를 나타내기도 한다. 그러나 이러한 경우 `isFinite` 가 더 적절하다는 것을 유의하자.

왜냐하면 `NEGATIVE_INFINITY` 는 `Number` 의 정적 속성이기 때문에, 직접 생성한 `Number` 객체의 속성이 아니라 `Number.NEGATIVE_INFINITY` 의 형식으로 사용해야 한다.

## Example

### `NEGATIVE_INFINITY` 사용하기

다음 코드에서 `smallNumber` 는 JavaScript의 최솟값보다 작은 값을 할당받는다. `if` 문이 실행되면, `smallNumber` 의 값이 `-Infinity` 이므로 `smallNumber` 는 계산에 좀 더 적합한 값을 다시 할당 한다.

```js
var smallNumber = (-Number.MAX_VALUE) * 2;

if (smallNumber === Number.MEGATIVE_INFINITY) smallNumber = returnFInite();
```





