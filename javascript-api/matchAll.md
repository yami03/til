# string.matchAll()

`matchAll()` 메소드는 그룹캡쳐를 포함하여 정규식에 대한 문자열과 일치하는 모든 결과의 반복자(iterator) object가  반환한다.

```js
let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

let array = [...str.matchAll(regexp)];

/* 
str.matchAll(regexp)를 console에 찍으면.. 
RegExpStringIterator {}
__proto__: RegExp String Iterator
next: ƒ next()
Symbol(Symbol.toStringTag): "RegExp String Iterator"
__proto__: Object 
*/

array[0]; // ["test1", "e", "st1", "1", index: 0, input: "test1test2", groups: undefined]
array[1]; // ["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]

```

## Syntax

```js
str.matchAll(regexp)
```

### Parameters

**regexp**

정규 표현식 객체

비 정규식 객체를 전달한다면, 이것은 `newExp(obj)` 를 이용하여 `RegExp` 로 변환된다. 

`RegExp` 객체는 무조건 `/g` 플래그를 가져야 하며, 아니면 `TypeError` 를 던진다. (당연 All이니까)

### Return value

[iterator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) (재시작 반복은 불가능하다)

## Examples

### Regexp.exec() 와 matchAll()

`MatchAll` 를 JavaScript에 추가하기 전에 모든 일치 항목을 얻기 위해서는 루프에서 regexp.exec(및 `/g` 플래그가 있는 regexe) 호출하여 사용할 수 있었다.

```js
const regexp = RegExp('foo[a-z]*', 'g');
const str = 'table foolball, foosball';
let match;

while ((match = regexp.exec(str)) !== null) {
  console.log(`Found ${match[0]} start=${match.index} end=${regexp.lastIndex}`);
}

// Found foolball start=6 end=14
// Found foosball start=16 end=24
```
`MatchAll` 를 사용한다면 `while` loop와 `g`  플래그와 함께 `exec` 피할 수 있다.

대신에 `matchAll` 를 사용하면 더 편리한 `array spread` 나 `Array.from()` , `for...of` 를 사용하여 반복자(iterator) 를 얻을 수 있다.

```js
const regexp = RegExp('foo[a-z]*', 'g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
}

// Found football start=6 end=14.
// Found foosball start=16 end=24.

// 매치 반복자는 for...of 반복이후 다 써버린다. (재시작 반복은 불가능하다)
// 새로운 반복자를 만들어 matchAll을 다시 호출해야한다.
Array.from(str.matchAll(regexp), m => m[0]);
//  ["football", "foosball"]
```

`matchAll` 은 `g` 플래그가 없다면 TypeError가 발생한다.

```js
const regexp = RegExp('[a-c]', '');
const str = 'abc';
str.matchAll(regexp);
// TypeError
```

`matchAll` 은 `regexp.exec()` 와 달리 내부적으로 `regexp` 를 clone하여 만든다. `lastIndex` 는 문자열을 스캔할 때 변경되지 않는다.

```js
const regexp = RegExp('[a-c]', 'g'); // regexp.lastIndex는 0
regexp.lastIndex = 1;

const str = 'abc';
Array.from(str.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`);
//  ["1 b", "1 c"]

regexp.lastIndex = 0;
Array.from(str.matchAll(regexp), m => `${regexp.lastIndex} ${m[0]}`);
// ["0 a", "0 b", "0 c"]
```

**lastIndex**

읽기 쓰기가 가능한 속성, 매칭을 시작할 위치를 지정한다. 

## 캡쳐 그룹에 더 엑세스 향상 (String.prototype.match() 보다)

`matchAll` 이 설득력 있는 이유는 캡쳐 그룹에 향상된 접근이다.

`match()` 는 `/g` 플래그와 함께 쓰일 때 캡쳐 그룹은 무시된다.

```js
let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2';

str.match(regexp); // ["test1", "test2"]
```

`matchAll` 를 사용한다면, 캡쳐 그룹에 더 쉽게 접근할 수 있다.

```js
let regexp = /t(e)(st(\d?))/g;
let str = 'test1test2'
let array = [...str.matchAll(regexp)];

array[0]; 
/* ["test1", // 완전히 매치
"e", // '(e)' 부분에 의해 매치
"st1", // '(st(\d?))' 매치
"1", // '(\d?)' 매치
index: 0,  // 0에서부터 완전 매치된 문자열이 나타남
input: "test1test2", // 입력된 원래 문자열
groups: undefined] 
*/

array[1]; // ["test2", "e", "st2", "2", index: 5, input: "test1test2", groups: undefined]
```

## Browser compatibility

IE와 Safari에서 지원 안됨.

모바일에선 Safari와 Samsung Internet에서 지원이 안된다. 