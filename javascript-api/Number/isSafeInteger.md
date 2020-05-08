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

언잔한 정숫값이란 다음과 같다.

