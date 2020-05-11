# Number.MIN_SAFE_INTEGER

`Number.MIN_SAFE_INTEGER` 는 JavaScript에서 최소 안전한 정수값을 나타낸다. (`-(2^53 - 1)`)

이보다 작은 정수를 나타내고 싶으면 `BigInt` 를 고려해보자 

```js
const x = Number.MIN_SAFE_INTEGER - 1;
const y = Number.MIN_SAFE_INTEGER - 2;

Number.MIN_SAFE_INTEGER; // -9007199254740991
x; // -9007199254740992
y; // -9007199254740992
x === y; // true
```

## Description

`MIN_SAFE_INTEGER` 상수는 `-9007199254740991` (-9,007,199,254,740,991 또는 약 -9000조)의 값을 가지고 있다. 이 값의 이유는 JavaScript가 IEEE 754에 기술된 배정밀도 부동소수점 형식 숫자 체계를 사용하기 때문으로, 이로 인해 `-(2^53 - 1)` 과 `2^53 - 1` 사이의 수만 안전하게 표현할 수 있다.

`MIN_SAFE_INTEGER` 는 `Number` 의 정적 속성이기 때문에, 직접 생성한 `Number` 객체의 속성이 아니라 `Number.MIN_SAFE_INTEGER` 형식으로 사용해야 합니다.

## Examples

### `MIN_SAFE_INTEGER` 사용하기

```js
Number.MIN_SAFE_INTEGER // -9007199254740991
-(Math.pow(2,53) - 1) // -9007199254740991
```

## Browser compatibility

IE에서 지원안됨