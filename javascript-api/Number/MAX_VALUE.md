# Number.MAX_VALUE

`Number.MAX_VALUE` 속성은 JavaScript가 표현할 수 있는 제일 큰 양의 숫자 값을 나타낸다.

```js
function multiply(x, y) {
	if (x * y > Number.MAX_VALUE) return 'Process as Infinity';
	return (x * y);
}

multiply(1.7976931348623157e+308, 1); // 1.7976931348623157e+308
multiply(1.7976931348623157e+308, 2); // Process as Infinity
```

## Description
`MAX_VALUE` 속성은 약 `1.79E+308` or 2^1024 의 값을 가진다. `MAX_VALUE`보다 큰 값은 `Infinity`로 나타낸다. 

`MAX_VALUE`는 `Number`의 정적 메서드이기 때문에, 사용할 때는 `Number` object는 만들지 않고 항상 `Number.MAX_VALUE`로 사용한다. 

## Examples

### `MAX_VALUE 사용하기`

다음 코드는 두 개의 숫자 값을 곱한다. 결과가 MAX_VALUE보다 작거나 같으면 `func1` 함수를 호출하고, 그렇지 않으면 `func2` 함수를 호출한다.

```js
if (num * num2 <= NumberMAX_VALUE) {
  func1();
} else {
  func2();
}
```

