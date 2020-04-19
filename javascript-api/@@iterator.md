# string.@@iterator

The `[@@interator]()` method는 String value의 code point를 반복하는 new `Iterator` object를 반환하고 각 code point를 string value로 반환한다. 🧐

```js
const str = "뉸뉴냔냐냐냐 코로나로 유튜브에 오페라의 유령 무료로 풀림";

let iterator = str[Symbol.iterator](); // StringIterator {}
let theChar = iterator.next(); // {value: "뉸", done: false}

while(!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
	// expected output: "뉸"
	// "뉴"
	// "냔"
	// "냐"
}
```

next() 메소드는 value로 done(boolean)과 value를 가진다. 

## Syntax

```js
str[Symbol.iterator]
```

### Return value

new Iterator Object

## Examples

### Using `[@@iterator]()`

```js
const str = 'A\uD835\uDC68';

let strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // 𝑨 (\uD835\uDC68)
```

### Using `[@@iterator]()` with for..of

for..of 구문은 컬렉션 전용
[Symbol.iterator]속성이 있는 모든 컬렉션 요소에 대해 이 방식으로 반복한다.

```js
String.prototype.strCustom = function () {};

let iterable = 'A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A';

for (let i of iterable) {
  console.log(i); //logs A, 𝑨, B, 𝑩, C, 𝑪
}
```

Browser compatibillity: IE, Opera, Safari에서 No

