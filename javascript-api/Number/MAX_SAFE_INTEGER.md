# Number.MAX_SAFE_INTEGER

`Number.MAX_SAFE_INTEGER` 상수는 JavaScript 에서 안전한 최대 정수값을 나타낸다. (2^53 - 1)

```js
const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

Number.MAX_SAFE_INTEGER; // 9007199254740991
x; // 9007199254740992
y; // 9007199254740992

x === y; // true
```
상수라 대문자네

## Description
`MAX_SAFE_INTEGER` 상수는 `9007199254740991`(9,007,199,254,740,991 또는 약 9000조)의 값을 가진다. 이 값의 이유는 JavaScript가 IEEE 754 에서 기술된 배정밀도 부동소수점 형식 숫자체계를 사용하기 때문에, 이로 인해 `-(253 - 1)`과 `253 - 1` 사이의 수만 안전하게 표현할 수 있다.

여기서 안전함이란 정수를 정확하고 올바르게 비교할 수 있음을 의미한다. 예를 들어 
```js
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;
// true가 반환된다.
```
이는 수학적으로 옳지 않다. `Number.isSafeInteger()`를 참고하자

`MAX_SAFE_INTEGER`는 `Number`의 정적 속성이기 때문에, 직접 생성한 `Number` 객체의 속석이 아니라 `Number.MAX_SAFE_INTEGER` 형식으로 사용해야 한다.

## Example
MAX_SAFE_INTEGER의 반환값

```js
Number.MAX_SAFE_INTEGER; // 9007199254740991
```

안전한 정수보다 큰 숫자

이는 부동 소수점에서는 0과 같은 정상 이하의 정밀도 경우를 제외하고 실제로는 소수점 이하 자릿수가 "1"이므로 2로 반환한다.
```js
Number.MAX_SAFE_INTEGER * Number.EPSILON;
```
🤔 2가 아니라 1.9999999999999998 이 나오는데.. 

## Polyfill
```js
if (!Number.MAX_SAFE_INTEGER) {
	Number.MAX_SAFE_INTEGER = 9007199254740991; // Math.pow(2, 53) - 1;
}
```

## Browser compatibility

IE 지원안됨