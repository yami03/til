# String.lastIndexOf

`lastIndexOf()` 메소드는 String object의 `fromIndex` 부터 역방향으로 명시된 값을 찾기 시작하여 index로 반환한다. 값을 찾을 수 없는 경우 -1을 반환한다.

```js
const sentence = '고양이 최고야! 최고야! 최고야!'; // 총 length는 18
const searchTerm = '최고야';

sentence.lastIndexOf(searchTerm); // 14 '최'가 시작하는 지점
```

## Syntax

```js
str.lastIndexOf(searchValue[, fromIndex])
```

### Parameters

**searchValue**

검색할 값을 나타내는 문자열. searchValue는 빈 문자열이라면 `fromIndex` 를 반환한다. 

**formIndex** (Optional)

매치할 시작지점으로 여겨지는 마지막 문자의 index. (마지막 문자열이지만 사실 시작점이나 같은..)

기본값은 `+Infinity` 이다. (끝이 어딘지 모르니까?) 
만약 `fromIndex >= str.length` 이면 문자열 전체를 검색한다.
`fromIndex < 0` 이면 0을 입력한것과 같다. 

### Return value

`searchValue` 의 마지막에 나타나는 index, 없다면 -1

 ## Description

문자들은 왼쪽에서 오른쪽으로 index가 매겨진다.

```js
const sentence = 'Cats are the best';

sentence.lastIndexOf('s'); // 15
sentence.lastIndexOf('s', 14); // 3
sentence.lastIndexOf('s', -2); // -1 fromIndex가 0보다 작은 수를 입력하면 0을 입력한것과 같다.
sentence.lastIndexOf('s', 0); // -1
sentence.lastIndexOf('k'); // -1
sentence.lastIndexOf(''); // 18 빈 문자열을 입력하면 마지막 index
sentence.lastIndexOf('', 2); // 2 빈 문자열일 경우 fromIndex가 있다면 fromIndex 반환
sentence.lastIndexOf('', -2); // fromIndex가 0보다 작으면 0을 입력한것과 같다.
```

**fromIndex는 match의 시작점을 제한한다. 문자가 잘린다고 생각하면 안된다.**

```js
'abab'.lastIndexOf('ab', 2); // 0이 아니라 2이다. 
```

### 대소문자 구분

```js
const sentence = 'Cats are the best';

sentence.lastIndexOf('C'); // 0
sentence.lastIndexOf('c'); // -1
```

브라우저 지원 문제없음

