# String

https://devdocs.io/javascript/global_objects/string
String 전역객체는 문자열의 생성자이다.

## Syntax

문자열 리터럴은 👇

```ts
'sting text'
"string text"
"영어 한국어 기타 등등 다양한 언어를 수용"
```

`''`, `""` 를 사용 

global object를 바로 만들어서 사용할 수 있다.

```ts
String(thing)
```

### Parameters

**thing**
	string 아무값이나.

### Template literals

ECMAScript 2015부터는 string literal이 Template Iiterals가 string literal이 될 수 있다.

```ts
`hello ${world}`
```

### Escape notation

특수문자 표현 
이런걸 Escape  notation 이라고 하는구나 🤔

javascript는 작은 따옴표와 큰 따옴표를 구분하지 않기 때문에 상관없이 동작한다.

| 코드   | 출력                                                         |
| ------ | ------------------------------------------------------------ |
| \XXX   | 8진수 Latin-1 문자<br />(where `XXX` is 1–3 octal digits; range of `0`–`377`) |
| \\'    | "\\'" => "''" 작은 따옴표                                    |
| \\"    | "\\"" => """ 큰 따옴표                                       |
| \\\    | "\\\\" => "\\" 역슬래시                                      |
| \n     | "\n abc" => "<br />abc" 개행                                 |
| \r     | carriage return <br />이것이 무엇인가.. 예전 타자기를 예로 들어야 할 정도<br />line feed와 carriage return이 함께해야 다음줄 시작부분에서 글을 쓸 수 있었다. <br />https://stackoverflow.com/questions/12747722/what-is-the-difference-between-a-line-feed-and-a-carriage-return 참고<br /> |
| \v     | vertical tab<br />🤔                                          |
| \b     | backspace                                                    |
| \f     | form feed <br />If you were programming for a 1980s-style printer, it would eject the paper and start a new page. You are virtually certain to never need it.<br />https://stackoverflow.com/questions/4334370/escape-sequence-f-form-feed-what-exactly-is-it |
| \uXXXX | unicode codepoint<br />"\u0056" => "V"                       |
| \xXX   | Latin-1 문자<br />(where `XX` is 2 hex digits; range of `0x00`–`0xFF`) |

## Long literal strings

한줄을 여러줄내에 입력하고 싶을 때엔 

`+연산자` 혹은 `"\"`  역슬래시를 이용하여 긴 문자열을 개행하여도 한줄로 보여줄 수 있다.

```js
let longString1 = "여러 줄 작성 한다.. " + 
									"여러 줄.."
let longString2 = "여러줄 작성 한다.. \
									역슬래시는 역슬래시 다음에 공백을 포함한 \
                  어떤 문자가 와서는 안된다."
```

역슬래시를 사용할 경우 \ 역슬래시 다음에 어떤 문자도 와서는 안된다.

## Description

문자열은 텍스트 형태로 표현될 수 있는 데이터를 보관하는 데 유용하다.
가장 많이 사용되는 것은 `length `
연결하는 `+`와 `+=` 연산자
서브 문자를 확인하는 `substring`, 
있으면 위치를 확인하는 `indexOf()` , 
서브 문자를 추출하는 `substring()` 

 

### Character access(문자접근)

1. charAt() 메서드 이용하기

   ```js
   return 'cat'.charAt(1); // returns "a"
   ```

   

2. ECMAScript 5에서 소개하고 있는 문자열을 배열과 같은 object로 취급하여 배열처럼 인덱스로 접근하기

   ```js
   return 'cat'[1]; // returns "a"
   ```

   하지만 배열처럼 새로운 값을 할당하거나 삭제할 수 없다.



## 배열과 다르다

```ts
const str = "foo";
const arr = ["f","o","o"];

str.length; // 3
arr.length; // 3

str.indexOf("o"); // 1
arr.indexOf("o"); // 1

const strConcat = str.concat("bar"); // "foobar"
const arrConcat = arr.concat(["b", "a", "r"]); // ["f","o","o,"b","a","r"]

str === strConcat // false
arr === arrConcat // false

str // "foo"
arr // ["f","o","o"]
```

이런점을 보고 둘 다 "문자의 배열"이라고 생각할 수 있지만 아니다.

```ts
str[1] = "0";
arr[1] = "0";

str; // "foo"
arr; // ["f", "0", "o"]
```

1. 문자열은 **"불변 값 Immutable"**이지만 배열은 **"가변값 Mutable"**이다. 
   str[1]번처럼 특정문자를 접근하는 형태가 모든 자바스크립트 엔진에서 유효한 것은 아니다.
   실제 인터넷 익스플로러 7은 이를 문법 에러로 인식한다. 
   str.charAt(1)로 접근하는게 맞다.
2. 문자열은 불변 값으로 문자열 메서드는 그 내용을 바로 변경하지 않고 항상 새로운 문자열은 생성한 후 반환한다. 
   하지만 배열메서드는 그 자리에서 수정한다.



문자열을 다를 때 유용한 배열 메서드는 문자열에 쓸 수 없지만, **문자열에 대해 불변 배열 메서드**를 빌려 쓸 수 있다.

```ts
str.join; // undefined
str.map; // undefined

// The join() method creates and returns a new string by concatenating all of the elements in an array
const strJoin = Array.prototype.join.call(str, "-");

// map은 새로운 배열을 return하기 때문에 join()하지 않으면 배열로 return
const strMap = Array.prototype.map.call(str, function(v){
  return v.toUpperCase() + ".";
}).join("");

strJoin // "f-o-o"
strMap // "F.O.O."
```



**배열의 가변 메서드는 사용할 수 없다.**

```ts
// The reverse() method reverses an array in place.
Array.prototype.reverse.call(str);
// String 객체 래퍼를 반환한다.
str // "foo" :(
```

문자열은 **불변 값이라 바로바로 변경되지 않으므로** 배열의 가변 메서드는 메서드는 통하지 않고, 빌려 쓰는 것 또한 안된다.

문자열을 배열로 바꾸고 원하는 작업을 수행한 후 다시 문자열로 바꾸는 Hack을 사용하기도 한다.
이 사용은 Codewars에서 매우 흔흔.. 하지만 이러한 방법은 `유니코드가 섞여 있는 경우(특수문자, Multibyte 등) 이 방법이 통하지 않는다.` 

> 생각을 달리하여 작업이 빈번히 필요한 문자열이라면 문자 단위로 저장하는 배열로 취급하는게 더 나을 수 있다.



### Comparing strings(문자열 비교)

`less-than과 greater-than 연산자`만을 사용하여 문자열을 비교할 수 있다.

```js
const a = "a";
const b = "b";

if(a === b) console.log(`${a} and ${b} are equal.`);
if(a > b) console.log(`${a} is gerater than ${b}`);
if(a < b) console.log(`${a} is less than ${b}`);
```

String 인스턴트에 상속된 `localeCompare()` 메서드를 사용 할 수 있다.

### native

특정 브라우저에 종속되지 않은 ECMAScript 명세의 내장객체를 말한다. (Window, Button 등은 제외) 

`Stirng()을 포함하여 Number(), Boolean(), Array(), Object(), Function(), RegExp(), Dat(), Error(), Symbol() `  가장 많이 쓰는 네이티브
네이티브는 내장 함수이다.

#### native prototype

내장 네이티브 생성자는 각자의 .prototype 객체를 가진다.(Array.prototype, String.prototype)

prototype 객체에는 해당 객체의 하위 타입별로 고유한 로직이 담겨 있다.

문자열 원시 값을 박싱으로 확장한 것까지 포함하여 모든 String 객체는 기본적으로 Stirng.prototype 객체에 정의된 메서드에 접근 할 수 있다. 프로토타입 위임(prototype Delegation) 덕분에 모든 문자열이 메서드들을 같이 쓸 수 있다.

String은 **"불변 값 Immutable"**이기 때문에 문자열 값을 변경하는 메서드는 없다. 수정이 일어나면 새로운 값을 생성한다.

프로토타입을 변경할 수도 있지만, 변경하지 않는게 좋다.

### Distinction between string primitives and String objects

string primitives와 string object는 서로 다르게 취급한다.

**primitive strings**

문자열 리터럴(작은 따옴표나 큰 따옴표)과 생성자 없이(new 키워드 없이) String 을 호출하여 반환한 문자열

```ts
const stringPrimitive = "string primitve";
const stringObject = new String('string object');

typeof stringPrimitive // "string"
typeof stringObject // "object"

stringPrimitive instanceof String // false
stringObject instanceof String // true

// The toString() 은 문자열을 반환하는 object의 대표적인 방법
// 이 메서드가 사용자 지정 개체에서 재정의되지 않으면 toString()은 "[object type]"을 반환합니다. 여기서 type은 object type입니다. 
Object.prototype.toString.call(stringPrimitive) // "[object String]"
Object.prototype.toString.call(stringObject) // "[object String]"
```

`new String('string object')` 생성자의 결과는 원시값 `'string object'`를 감싼 **object wrapper** 이다.

`typeof stringObject // "object"` 이 결과 값을 보면 자신을 감싼 원시값의 타입이 아니라 object의 하위 타입에 가깝다. 

```ts
String {"string object"}
0: "s"
1: "t"
2: "r"
3: "i"
4: "n"
5: "g"
6: " "
7: "o"
8: "b"
9: "j"
10: "e"
11: "c"
12: "t"
length: 13
__proto__: String
[[PrimitiveValue]]: "string object"
```

console.log로 확인했을 때 모습 (브라우저 마다 다르다)

String, Number, Boolean 같은 단순 primitive는 **`boxing`** 고정을 거친다.

```ts
Object.prototype.toString.call(stringPrimitive) // "[object String]"
```

`String` 으로 표시된 것을 보아 해당 객체 래퍼로 자동 박싱됨을 알 수 있다.

#### Wrapper Boxing

원시값엔 프로퍼티나 메서드가 없으므로 접근하기 위해서는 원시 값을 객체 레퍼로 감싸야하는데 ->  이를 자바스크립트가 자동적으로 해준다. 

그렇다면? 

```js
const str = "string";
for(let i = 0; i < str.length; i++) {
  console.log(str.charAt(i));
}
```

str.length는 객체로 감싸는 일이 생기니까 처음부터 객체를 생성할 수 없도록 String Object로 쓰는게 더 좋을까?

답은 놉!

1. 브라우저가 스스로 최적화 한다.
2. 개발자가 선 최적화(pre-Opimize)하게 된다면 오히려 더 느려질 수 있다.

직접 객체 형태로 써야할 이유는 거의 없다.
알아보기 쉽게 원시 값을 사용하자

**수동으로 원시 값을 박싱하고자 한다면 Object()함수를 사용하자**

```ts
const stringPrimitive = "string primitve";
const stringObject = new String('string object');
const objSting = Object("string");

typeof stringPrimitive // "string"
typeof stringObject // "object"
typeof objSting // "object"

stringPrimitive instanceof String // false
stringObject instanceof String // true
objSting instanceof String // true

Object.prototype.toString.call(stringObject) // "[object String]"
Object.prototype.toString.call(objSting) // "[object String]"
```

**객체 래퍼로 직접 박싱하는건 권하지 않는다.** 

하지만 만약 `new Boolean(false` 같은 경우 객체 래퍼로 truthy 값이 된다. 이런경우등을 대비하여 Object()로 하쟈



**참고**

* https://devdocs.io/javascript/global_objects/string

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

* https://stackoverflow.com/questions/17256182/what-is-the-difference-between-string-primitives-and-string-objects-in-javascrip
* You Don't Know JS: 타입과 문법, 스코프와 클로저
  https://maximdenisov.gitbooks.io/you-don-t-know-js/content/types_&_grammar/natives.html