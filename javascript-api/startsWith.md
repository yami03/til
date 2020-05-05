# string.startsWith

`startWith()` 메서드는 어떤 문자열이 특정 문자로 시작하는지 확인하여 결과를 `true` 또는 `false` 로 반환한다.

## Syntax

```js
str.startsWith(searchString[, postion])
```

### Parameters

**searchStarting**

이 문자열의 시작 부분에서 검색할 문자

**position** (Optional)

문자열에서 `searchString` 검색을 시작할 위치이다. 기본값은 0이다.

### Return value

주어진 문자열이 문자가 문자열의 시작 부분에서 발견되면 `true`, 그렇지 않으면 `false` 

## Description

이 문자열이 다른 문자열로 시작하는지 확인할 수 있다. 대소문자를 구분한다.

## Examples

### startsWith() 사용하기

```js
const str = 'Domestic cats, especially young kittens, are known for their love of play.';

str.startsWith('Domestic cats'); // true
str.startsWith('cats'); // false
str.startsWith('cats', 9); // true
```

## Polyfill

startsWith 메서드는 ECMAScript 2015 명세에 추가되었다.

```js
if (!String.prototype.startsWith) {
  Object.defineProperty(String.prototype, 'startsWith', {
    value: function(search, rawPos) {
      var pos = rawPos > 0 ? rawPos|0 : 0;
      return this.substring(pos, pos + search.length) === search;
    }
  });
}
```

ES2015 규격 준수의 견고하지만 퍼포먼스는 떨어지는 Polyfill은 [Mathias Bynens의 GitHub](https://github.com/mathiasbynens/String.prototype.startsWith) 에서 확인할 수 있다.

