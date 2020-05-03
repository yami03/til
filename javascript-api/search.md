# string.search

`search()` 메서드는 정규식과 String object 사이의 일치에 대한 검색을 실행한다.

```js
const paragraph = 'The cat (Felis catus) is a domestic species of small carnivorous mammal.';
// 단어나 공백이 아닌 모든 문자
const regex = /[^\w\s]/g;
const result = paragraph.search(regex); // 8
paragraph.charAt(result); // "("
```

## Syntax

```js
str.search(regexp)
```

### Parameters

**regexp**

정규표현식 객체

정규식이 아닌 객체가 전달되면, 그것은 new RegExp(obj)를 이용하여 RegExp으로 암묵적으로 변환된다.

### Return value

주어진 문자열과 정규식사이에 가장 첫 매치의 index이다. 매치되지 않는다면 -1을 return 한다.

## Description

패턴이 있는지 여부와 문자열 내에 index를 알고 싶다면 `search()` 를 사용한다. (오직 존재 유무만 알고싶다면 test() 메서드를 사용하여 boolean값을 반환한다.) 더 많은 정보를 얻지만 느릴 수 있는 match()를 사용할 수 있다. (exec()와 유사하다)

## Examples

### search() 사용

다음 예제는 두 개의 다른 정규식 객체로 문자열을 검색하여 성공적인 검색(양수)와 심패한 검색(-1)을 표시한다.

```js
const str = 'The cat (Felis catus) is a domestic species of small carnivorous mammal.';
const re = /[A-Z]/g;
const re2 = /[,]/g;
str.search(re); // 0
str.search(re2); // -1
```



