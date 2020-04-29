# string.padEnd

`padEnd()` 메소드는 현재 문자열에 주어진 문자열을 (필요하다면 반복해서)채워, 주어진 길이에 도달하도록 한다. 채워넣기는 현재 문자열에 오른쪽 끝에서부터 적용한다.

```js
const str1 = '고양이 너무 귀여워어어';
str1.padEnd(16, '😽'); // "고양이 너무 귀여워어어😽😽"

const str2 = "고양이";
str2.padEnd(6); // "고양이   "
```

## Syntax

```js
str.padEnd(targetLength [, padString])
```

### Parameters

**targetLength**

현재 "str"이 채워진 후 결과 문자열의 길이

값이 str.length보다 작다면 현재 문자열 그대로 반환된다.

**padString** (Optional)

현재 "str"을 채울 문자열

padString이 너무 길어서 targetLength 내에 머무를 수 없을 경우 잘리게 된다. 기본 값은 `" "` (`U+0020`) 이다.

### Return value

현재 "str"의 끝에 "padString"이 적용된 "targetLength"의 길이인 문자열

## Examples

```js
'abc'.padEnd(10); // "abc       "
'abc'.padEnd(10, "foo"); // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1); // "abc"
```

## Browser compatibility

IE에서 지원안됨