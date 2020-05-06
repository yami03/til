# string.toUpperCase

`toUpperCase()` 메서드는 호출된 문자열 값을 대문자로 변환하여 반환한다. (값이 아닌 경우 문자열로 변환됨)

```js
const sentence = 'The whiskers of a cat are highly sensitive to touch.';
sentence.toUpperCase(); // "THE WHISKERS OF A CAT ARE HIGHLY SENSITIVE TO TOUCH."
```

## Syntax

```js
str.toUpperCase()
```

### Return value

대문자로 변환된 호출 문자열을 나타내는 새 문자열

### Exceptions

**TypeError**

`Function.prototype.call()` 을 사용하여 `null` 이나 `undefined` 을 호출 할 때

```String.prototype.toUpperCase.call(undefined)```

## Description

`toUpperCase()` 메서드는 대문자로 변환된 문자열 값을 반환한다. JavaScript 문자열은 변경할 수 없으므로 이 메서드는 문자열 자체의 값에는 영향을 미치지 않는다.

## Examples

### 기본 사용법

```js
'alphabet'.toUpperCase(); // "ALPHABET"
```

### 문자열이 아닌 this을 문자열 변환

문자열이 아닌 값은 문자열로 변환한다. `this` 문자열이 아니므로 문자열로 변환한다.

```js
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return 'abcdef';
  }
});

a; // "ABCDEF"

const b = String.prototype.toUpperCase.call(true);
b; // "TRUE"
```

