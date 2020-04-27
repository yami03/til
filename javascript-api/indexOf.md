# String.indexOf

`indexOf()` 메소드는  `String object` 중에서 `fromIndex` 검색을 시작하고 명시된 값이 처음 시작되는 index를 반환한다. 값이 없는 경우 `-1` 를 반환한다.

```js
const sentence = '삼색고양이가 최고야!';

const searchTerm  = '고양이';
const indexOfFirst = sentence.indexOf(searchTerm); // 2
```

## Syntax

```js
str.indexOf(searchValue, [, fromIndex])
```

### Parameters

**searchValue**

찾기 위한 문자열

만약 찾기 위한 문자열이 제공되지 않는 경우, [searchValue는 "undefined"가 된다.](https://tc39.es/ecma262/#sec-tostring)😮 그리고 이 값은 str에서 찾는다.

'undefined'.indexOf() -> 0을 반환한다. searchValue가 없어 'undefined'를 찾을테니까

'undefine'.indexOf() -> -1 d가 빠졌네요.

**fromIndex (optional)**

표현할 수 있는 정수의 찾기 시작하는 위치의 index이다. 기본값은 0이다. `fromIndex` 값이 0보다 작다면 0부터 str.length까지 검색을 시작한다. 

'hello world'.indexOf('o', -5) // fromIndex가 0보다 작기 때문에 0부터 시작한다. 반환값은 4
'hello world'.indexOf('o', 11) // fromIndex가 전체 문자열의 length와 같거나 크기 때문에 -1을 반환한다.

### Return value

searchValue가 존재하는 첫번째 index 값이나 존재하지 않을 경우 -1을 반환한다.

searchValue가 `빈문자열('')` 일 경우 이상한 결과가 만들어진다. 😳 fromIndex 값이 없거나 문자열의 전체 길이보다 작은 값의 index라면 반환값은 fromIndex와 같다. 😶

```js
'hello world'.indexOf(''); // 0 생략되면 default 값은 0
'hello world'.indexOf('', 0); // 0
'hello world'.indexOf('', 3); // 3
'hello world'.indexOf('', 8); // 8
```

그러나 fromIndex값이 문자열의 길이와 같거나 클 경우엔 문자열의 길이 값을 반환한다.

```js
'hello world'.indexOf('', 11); // 11
'hello world'.indexOf('', 13); // 11
'hello world'.indexOf('', 22); // 11
```

전자의 예는 JS는 지정된 위치에서 빈 문자열을 반환하고, 후자의 예에는 문자열끝에서 빈 문자열을 발견한다.
뭐지 문자열의 길이보다 크면 -1을 반환해야하는데.. 

## Description

문자열 내의 문자들은 왼쪽에서 오른쪽 방향으로 index가 매겨진다. 

`indexOf()` 메소드는 대소문자를 구분한다. 

### Checking occurrences

-1을 return하다보니 true, false로 명시하기가 좀 불편하다. -1이 falsy값도 아니니까, 그리고 0은 존재하지만 falsy값이 false를 return 한다.

그래서 존재여부를 확인할 때는 아래와 같이 👇

```js
'고양이가 짱이얏!'.indexOf('고양이') !== -1 // true
'고양이가 짱이야아'.indexOf('멍뭉이') !== -1 // false
```

## Examples

### case-sensitivity

대소문자를 구별한다.

```js
'Cats are the best'.indexOf('Cats'); // 0
'Cats are the best'.indexOf('cats'); // -1
```

### 문자가 몇 개 존재하는지 세기

으잉 이런게 있네 사실 Codewars에서 이런문제를 푼다면 배열로 바꿔서.. 주로 풀지.. 문자열을 유지하면서 푸는건 신선

```js
const str = '고양이 하나 고양이 둘 고양이 셋 고양이 넷 고양이 다섯';
let count = 0;
let position = str.indexOf('고양이');

while (position !== -1) {
  count++;
  position = str.indexOf('고양이', position + 1);
}

count; // 5 😻
```

