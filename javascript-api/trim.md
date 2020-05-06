# string.trim

`trim()` 메서드는 문자열의 끝의 공백을 제거한다. 이 context에서 공백은 공백 문자(공백, 탭과 줄바꿈없는 공백)과 모든 줄 바꿈(LF나 CR 등)을 포함한다.

```js
const greeting = '   Hello world!   ';
greeting; // "   Hello world!   "
greeting.trim(); // "Hello world!"
```

## Syntax

```js
str.trim()
```

### return value

호출된 문자열의 양 끝에서 공백을 제거한 새로운 문자열이다.

## Description

`trim()` 메서드는 양 끝의 공백을 제거한 문자열을 반환한다. `trim()` 은 원본 문자열에는 영향을 주지 않는다.

## Examples

### trim() 사용하기

아래의 예제는 소문자 문자열 'foo'를 표시한다.

```js
const orig1 = '   foo   ';
orig1.trim(); // "foo"

const orig2 = 'foo   ';
orig2.trim(); // "foo"
```

## Polyfill

IE 9까지 지원

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  }
}
```

위 코드 정규식 문자열에 있는 `"\s"` 공백 문자와 일치하는 메타 문자이다. 그러나 IE 의 일부 버전은 EcmaScript 에서 `trim` 제거되도록 정의된 공백인 `\u00A0` 에 일치하지 않는다. 또한 Google Chrome의 일부 버전은 현재 사양에서 삭제 대상이 되지 않는 `\u3000` 을 제거 대상으로 하고 있다. 따라서 위 코드는 모든 브라우저에서 `trim` 의 동작과 정확히 일치하는 것은 아니다.