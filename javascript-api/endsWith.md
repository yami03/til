# string.endsWith

`endsWith()` 메소드는 문자열이 지정된 문자열의 문자로 끝나는지에 대한 여부를 `true`나 `false`로 return 한다.

```js
const str = '고양이들은 최고얏!';

str.endsWith('최고얏', 9); // true 
str.endsWith('최고얏', 8); // false
str.endsWith('!'); // true
str.endsWith('!', 10); // true
str.endsWith('!', 11); // true
str.endsWith('?'); // false
```



## Syntax

```js
str.endsWith(searchString[, lenght]);
```

### Parameters

**searchString**

이 문자열 끝에서 검색 할 문자

**length**

옵션, 문자열의 길이로 사용, 기본값은 문자열 전체의 길이이다.

## Return value

문자열의 끝이 주어진 문자열로 끝나면 **`true`**, 그렇지 않다면 **`false`**

## Description

대소문자를 구별한다.

## Polyfill

```js
if (!String.prototype.endsWith) {
  String.prototype.endsWith = function(search, this_len) {
    // 전체 문자열 길이를 넘어도 된다.
    if (this_len === undefined || this_len > this.lengh) this_len = this.lengh;
    return this.substring(this_len - search.length, this_len) === search;
  }
}
```

