# string.match

`match()` 메서드는 문자열에서 정규식과 매치되는 부분을 검색한 결과를 받는다. 

```js
const paragraph = 'Cats are the best';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

found; // ["C"]
```

## Syntax

```js
str.match(regexp)
```

### Parameters

**regexp**

정규식 객체이다.

regexp가 정규식 객체가 아닌 경우, `new RegExp(regexp)`를 사용하여 암시적으로 RegExp로 변환

인수를 넘기지 않고 `match()` 메서드를 사용하면 빈문자열을 가진 Array `['']` 이  반환된다.

### return value

global(g) flag에 따른 다른 결과의 `Array`, 매치되는 결과가 없다면 `null`

* `g` flag를 사용하고 있다면, 전체 정규 표현식과 일치하는 모든 결과를 반환하지만, 캡쳐그룹은 반환하지 않는다.
* `g` flag가 없다면 처음 일치한것과 그에 대한 캡쳐 그룹을 반환한다. `RegExp.exec()` 와 같은 결과를 반환한다.  반환된 요소는 다음 👇 아래와 같은 추가 프로퍼티를 가진다.

**global(g) flag**

전체 판별, 처음 일치에서 중단하지 않고, 문자열 전체를 판별한다.

**캡쳐링 그룹(capturing group)**

괄호를 둘러싼 영역이다. 결과값에 첫번째엔 매칭 문자열이 들어가고 그 후부턴 캡쳐링 그룹 안에 있는 문자열이 차례대로 들어간다. 캡쳐링 그룹을 사용하면 패턴 안의 원하는 부분을 편리하게 분리할 수 있다.

**(?<Name>x)**

x에 매치하고 <Name>으로 명명된 이름으로 매치된 반환값이 그룹 프로퍼티로 저장된다.

('<'과 '>')에 그룹명은 필수다.

예를 들어 전화번호에서 미국의 지역 코드를 꺼낼 때 /\((?<area>\d\d\d)\)/을 사용할 수 있고 결과번호는 matches.groups.area 에 표시된다. 

```js
const str = "Cats are the best. The cat will rule the universe.";
const regexpWithoutE = /\b[a-df-z]+\b/ig;
str.match(regexpWithoutE); // ["Cats", "cat", "will"]

const imageDescription = "이 이미지의 해상도는 1440×900 이다.";
const regexpSize = /([0-9]+)×([0-9]+)/;
const match = imageDescription.match(regexpSize); //  ["1440×900", "1440", "900", index: 12, input: "이 이미지의 해상도는 1440×900 이다.", groups: undefined]
// 첫번째는 매칭 문자열 "1440×900"
// 캡쳐링 그룹 안에 있는 문자열이 차례로 들어감 match[1]는 "1440", match[2]는 900
```

```js
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
const result = '2015-01-02'.match(re);
result; 
/* [ "2015-01-02", "2015", "01", "02"
 	groups: {year: "2015", month: "01", day: "02"},
	index: 0,
	input: "2015-01-02",
	length: 4 ] */
```

**`g` flag를 사용한 경우**

```js
let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;
const result = '2015-01-02'.match(re);
result;
// ["2015-01-02"]
// length: 1
```



**논-캡쳐링 그룹(non-capturing group)**

`?:` 기호를 추가하면 non-capturing 그룹이 된다. 

non-capturing group은 결과 배열에 추가되지 않는다.

```js
let re = /(?:\d{4})-(?:\d{2})-(?:\d{2})/u;
const result = '2015-01-02'.match(re);
result; 
/* ["2015-01-02",
groups: undefined,
index: 0,
input: "2015-01-02",
length: 1] */
```

**(?:*x*)**

x에 매치되지만, 매치된 내용을 기억하지 못한다. 

### 추가 property

**groups**

 key가 이름이고 value가 캡쳐링 그룹인 명명된 캡쳐링 그룹의 object, 캡쳐링 그룹이 정의되어 있지 않은 경우 `undefined` 

## Description

정규식에 `g` flag가 없다면, [RegExp.exec()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)와 같은 결과를 반환한다. 

### Other methods

* 정규식이 문자열과 일치하는지 알아야 할 때는 `RegExp` 사용한다. `RegExp.test()`
* 첫번째 일치 항목만 찾으려면 `RegExp.exec()` 
* 캡처 그룹을 확보하고 그로벌 플래그를 설정하려면 `RegExp.exec()` 또는 `String.prototype.matchAll()` 대신 사용한다.

## Examples

### match() 사용

match()를 사용하여 `'Chapter'` 라는 단어와 에 이어지는 1 이상의 숫자, 소숫점으로 숫자형태가 반복되는 문자열을 찾음

`i` flag는 대소문자를 구분하지 않는다.

```js
const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

found;
// ["see Chapter 3.4.5.1", "Chapter 3.4.5.1", ".1", index: 22, input: "For more information, see Chapter 3.4.5.1", groups: undefined]

// 'see Chapert 3.4.5.1' 완전히 매치된 부분
// 'Chapter 3.4.5.1'는 '(chapter \d+(\.\d)*)' 부분에 의해 캡쳐됨
// .1'은 '(\.\d)' 부분에서 캡쳐된 마지막 값
// 'index' 요소가 22라는건 22번째 위치분터 완전히 매치된 문자열이 나타남을 의미한다.
// 'input' 요소는 입력된 원래 문자열을 나타냄 

```

### match()와 함께 `g` (글로벌) 플래그와  `i`(대소문자 무시) 플래그 사용하기

```js
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let regexp = /[A-E]/gi;
let matches_array = str.match(regexp);

matches_array; // ["A", "B", "C", "D", "E", "a", "b", "c", "d", "e"]

```

### 매개변수 없이 match() 사용하기

```js
let str = "매개변수 없이 사용하기~";

str.match(); // [""]
```

### 비 정규표현식 객체를 매개변수로 사용하기

매개변수가 문자열이나 숫자이면, 해당 매개변수는 내부적으로 `new RegExp(obj)` 를 사용하여 `RegExp` 로 변환된다. 만약 매개변수가 플러스 기호와 이어지는 숫자형이라면, RegExp() 메서드는 플러스 기호를 무시한다. 

```js
let str1 = 'NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript',
  str2 = 'My grandfater is 65 years old and My grandmother is 63 years old.',
	str3 = 'The contract was declared null and void.';
str1.match('number'); // 'number' is a string. return ["number"]
str1.match(NaN); // NaN의 타입은 number이다. return ["NaN"]
str1.match(Infinity); // Infinity의 타입은 number이다. return ["Infinity"]
str1.match(+Infinity); // return ["Infinity"]
str1.match(-Infinity); // return ["-Infinity"]
str2.match(65); // return ["65"]
str2.match(+65); // return ["65"]
str3.match(null); // return ["null"]
```



**참고**

[자바스크립트 정규표현식의 capturing group](https://blog.rhostem.com/posts/2018-11-11-regex-capture-group)

[MDN web docs - Groups and ranges](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)

[RegExp Named Capture Groups](https://github.com/tc39/proposal-regexp-named-groups)