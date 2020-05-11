# Number.MIN_VALUE

`Number.MIN_VALUE` 속성은 JavaScript에서 가장 작은 양수 값을 나타낸다. 

```js
function multiply(x, y) {
  if (x * y < Number.MIN_VALUE) return 'Process as -Infinity';
  
  return (x * y);
}

multiply(5e-324, 1); // 5e-324
multiply(-1.7976931348623157e+308, 2); // "Process as -Infinity"
```

## Description

`MIN_VALUE` 속성은 JavaScript에서 표현할 수 있는 0에 가장 가깝지만 음수는 아닌 수이다.

`MIN_VALUE` 의 값은 약 `5e-324` 이다. `MIN_VALUE` 보다 작은 값("언더플로우 값")은 0으로 변환된다.

`MIN_VALUE` 는 `Number` 의 정적 속성이기 때문에, 직접 생성한 `Number` 객체의 속성이 아니라 `Number.MIN_VALUE` 형식으로 사용해야 합니다.

## Examples

### `MIN_VALUE` 사용하기

다음 코드는 숫자를 두 개의 수를 받아 나누기 연산을 한다. 만약 결과가 `MIN_VALUE` 보다 크거나 같으면 `func1` 함수를 호출하고, 그렇지 않으면 `func2` 함수를 호출한다.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
  func1();
} else {
  func2();
}
```

