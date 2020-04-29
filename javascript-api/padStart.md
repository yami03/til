# string.padStart

`padStart()` 메소드는 현재 문자열에 지정된 길이에 도달할 때까지 다른 문자열(필요한 경우 여러번)을 채운다. 패딩은 현재 문자열의 시작(왼쪽)부터 적용된다.

```js
const str = "고양이가 최고야!";

str.padStart(13, '😻'); // "😻😻고양이가 최고야!"
```

## Syntax

```js
str.padStart(targetLength [, padString])
```

### Parameters

**targetLength**

현재 `str`이 채워진 후 결과 문자열의 길이

값이 `str.length`보다 작으면 `str`은 그대로 반환된다.

**padString** (Optional)

현재 `str`을 채울 문자열

`padString`이 너무 길어서 `targetLength` 내에 머무를 수 없는 경우, 끝부터 잘리게 된다.

기본값은 " " (U+0020 '공백') 이다.

### Return value

`padString` 이 시작부분부터 적용된 `targetLength` 길이의 문자열

## Examples

### Basic examples

```js
'abc'.padStart(10); // "       abc"
'abc'.padStart(10, "foo"); // "foofoofabc"
'abc'.padStart(6, "123456"); // "123abc"
'abc'.padStart(8, "0"); // "00000abc"
'abc'.padStart(1); // "abc"
```

### number를 string으로 변환후 사용

```js
function leftFillNum(num, targetLength) {
  return num.toString().padStart(targetLength, 0);
}

const num = 123;
leftFillNum(num, 5); // "00123"
```

## Browser compatibility

IE에서 지원안됨

