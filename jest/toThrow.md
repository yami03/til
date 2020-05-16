# toThrow(error?)

https://jestjs.io/docs/en/expect#tothrowerror

별칭으로 `.toThrowError(error?)`

> Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.

꼭꼭 감싸줘야한다. 

```js
it('@param precision이 1에서 100사이가 아니면 RangeError가 발생한다.', () => {
  expect(() => { number.toPrecision(101) }).toThrow(RangeError);
});
```

감싸지 않고, `expect(number.toPrecision(101)).toThrow(RangeError);` 이렇게 썼더니 test가 되지 않음

## Parameters

- 정규식: error message가 패턴과 일치
- 문자열: error message에 하위 문자열이 포함됨
- error object: error message는 동일한 object의 message property
- error class: error object는 class의 인스턴스

parameter가 생각보다 다양하네

```js
// Test that the error message says "yuck" somewhere: these are equivalent
expect(drinkOctopus).toThrowError(/yuck/);
expect(drinkOctopus).toThrowError('yuck');

// Test the exact error message
expect(drinkOctopus).toThrowError(/^yuck, octopus flavor$/);
expect(drinkOctopus).toThrowError(new Error('yuck, octopus flavor'));

// Test that we get a DisgustingFlavorError
expect(drinkOctopus).toThrowError(DisgustingFlavorError);
```

