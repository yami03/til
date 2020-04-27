# string.includes

`includes()` 메소드는 하나의 문자열이 다른 문자열에 포함되어 있는지에 판별하고 이를 `true` 혹은 `false` 로 반환한다.

```js
const sentence = '고양이가 짱이닷!';

const word = '고양이';

`이 문장엔 ${word}가 포함되어 ${sentence.includes(word) ? '있다' : '있지 않다'}`; // "이 문장엔 고양이가 포함되어 있다"
```

## Syntax

```js
str.includes(searchString[, position])
```

## Parameters

**searchString**

`str` 안에 찾을 문자열

**position** (Optional)

문자열 안에 찾기 시작할 위치 (기본값은 0이다)

## Return value

주어진 문자열 내에서 검색 문자가 존재하면 `true` 그렇지 않다면 false

## Description

### Case-sensitivity

대소문자를 구분한다.

```js
'Cats are the best!'.includes('cats'); // false
```

## Examples

```js
const sentence = '고양이가 짱이다!';

sentence.includes('고양이'); // true
sentence.includes('고양이', 1); // false
sentence.includes('강아지'); // false
sentence.includes(''); // true
```

## Polyfill

IE는 지원되지 않는다. 

ECMAScript 2015 스펙에 추가됨 

```js
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    
    if (search instanceof RegExp) { // 오? instanceof RegExp로?
      throw TypeError('first argument must not be a RegExp');
    }
    if (start === undefined) start = 0;
    return this.indexOf(search, start) !== -1;
  }
}
```



