# string.slice

`slice()` 메서드는 문자열의 섹션을 추출하여 원래 문자열을 수정하지 않고 새 문자열을 리턴한다.

```js
const str = 'The cat (Felis catus) is a domestic species of small carnivorous mammal.';
str.slice(31); // "stic species of small carnivorous mammal."
str.slice(4, 19); // "cat (Felis catu"
str.slice(-4); // "mal."
str.slice(-9, -5); // "s ma"
```

## Syntax

```js
str.slice(beginIndex[, endIndex]);
```

### Parameters

**beginIndex**

추출을 시작할 인덱스(0부터 시작)이다. 만약 음수이면 `str.length + beginIndex`로 취급한다. (예를 둘면 `-3`이면 `str.length + - 3` 이다)

`beginIndex`가 `str.length`와 같거나 크면 `slice()`는 빈 문자열을 반환한다. 

**endIndex** (Optional)

추출을 끝내는 0부터 시작하는 index, 이 index의 문자는 포함되지 않는다. 만약 endIndex가 생략된다면, slice()는 문자열 마지막까지 추출한다. 만약 음수라면, endIndex는 str.length + endIndex로 취급한다. (예를 들면 endIndex가 -3이면 시작점은 str.length - 3)

### Return value

문자열의 섹션을 추출한 새로운 문자열

## Description

`slice()`는 한 문자열에서 텍스트를 추출하여 새 문자열을 반환한다. 한 문자열의 텍스트를 변경해도 다른 문자열에는 영향을 미치지 않는다. `slice()` 는 `endIndex` 를 포함하지 않는다. `str.slice(1, 4)` 는 두번째 문자부터 네번째 문자까지 추출한다. (1, 2, 3 인덱스 문자).

`str.slice(2, -1)` 세 번째 문자부터 문자열의 마지막에서 두번째 문자까지 추출한다.

## Examples

### slice()를 이용하여 새로운 문자열 만들기

```js
let str1 = 'Cats are common pets throughout the world, and their worldwide population exceeds 500 million as of 2007.',
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
str2; // "ats are"
str3; // " are common pets throughout the world, and their worldwide population exceeds 500 million as of 200"
str4; // "mon pets throughout the world, and their worldwide population exceeds 500 million as of 2007."
str5; // "t the world, and their worldwide population exceeds 500 million as of 2007."
```

### 음수 인덱스로 slice() 사용하기 

```js
let str = 'Cats are common pets throughout the world';
str.slice(-1); // "d" str.length-1 부터 끝까지이다.
str.slice(-1, -1); // ""
str.slice(-3); // "rld" str.length - 3 부터 끝까지이다.
str.slice(-3, -1); // "rl"  str.length - 3 부터 str.length - 1을 포함하지 않음 
str.slice(0, -1); // "Cats are common pets throughout the worl" 0부터 str.length - 1을 포함하지 않음 
```

```js
str.slice(-11, 33); // "t t"
```

beginIndex는 str.length - 11 부터인 30이고 endIndex는 33이며 포함하지 않은 그 앞까지이다. (30, 31, 32)

```js
str.slice(30, -8); // "t t"
```

beginIndex는 33부터, endIndex는 str.length - 8 인 33이며 포함되지 않은 그 앞까지이다. (30, 31, 32)

```js
str.slice(-5, -1); // "worl"
```

beginIndex는 str.length - 5 인 36부터이고, endIndex는 str.length - 1인 40이고 포함하지 않은 그 앞까지이다. (36, 37, 38, 39)