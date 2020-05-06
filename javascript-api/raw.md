# String.raw

`String.raw()` 정적 메소드는 template Iiterals의 태그 함수이다. Python의 `r` prefix와 문자열 리터럴의 경우 C#의 @ 접두사와 유사하다. (그러나 동일하지 않음) template 문자열의 원시 문자열 형태, 대체(예 ${foo}) 처리가 되지만 이스케이프(예: \n)는 처리되지 않는다.

```js
// "C:Developmentprofileaboutme.html"
// raw를 사용하지 않았을 때
`C:\Development\profile\aboutme.html`;

// 백슬래시가 빠지지 않게 윈도우 파일 경로를 담는 변수를 만들어라
const filePath = String.raw`C:\Development\profile\aboutme.html`;


console.log('The file was uploaded from:' + filePath); // The file was uploaded from:C:\Development\profile\aboutme.html

```

## Syntax

```js
String.raw(callSite, ...substitutions)

string.raw`templateString`
```

### Parameters

**callSite**

`{ raw: ['foo', 'bar', 'baz'] } 같이 잘 형성된 template를 호출하는 site object

**...substitution**

template string, 필요한 경우 교체한다  (`${...}`).

### Return value

주어진 template 문자열의 원시 문자열이다.

### 예외

site object가 잘못된 형성이면 `TypeError`(값이 기대하던 자료형이 아니라서 연산을 할 수 없을 때 발생하는 오류) 가 발생한다.

## Description

대부분의 경우, `String.raw()` 는 template string과 같이 사용된다.

위에서 언급한 첫번째 구문은 거의 사용되지 않는다. JavaScript 엔진이 (다른 태그 기능과 마찬가지로) 적절한 인수로 호출하기 때문이다. 

`String.raw()` 템플릿 문자열의 유일한 built-in tag function이다. 기본 템플릿 기능과 동일하게 작동하며 연결을 수행한다. JavaScript 코드로 다시 구현할 수 있다.

### String.raw() 사용

```js
`Hi\n${2+3}!` /* "Hi
5!" */

String.raw`Hi\n${2+3}!`; 
// 'Hi' 다음에 오는 문자열은 줄바꿈이 일어나지 않는다.

`Hi\u000A!`; /* "Hi
!" */

String.raw`Hi/u000A!`; // String.raw`Hi\u000A!`;
// escape character(\', \", \\, \n, \r, \t, \b, \v, \0, \xFF)는 효과가 없다. 백슬래시도 출력
// 문자열의 .length 속성을 사용하여 확인할 수 있다.

`Hi\u000A!`.length // 4
String.raw`Hi/u000A!`.length // 9

let name = 'Bob';
String.raw`Hi\n${name}!`; // "Hi\nBob!" ${name}는 처리가 된다. 

// 일반적으로 String.raw()를 함수로 호출 하지 않는다.
// 't${0}e${1}s${2}t'을(를) 시뮬레이션하려면 아래와 같이.. 
String.raw({raw: 'test'}, 0, 1, 2); // "t0e1s2t"
// 문자열인 'test'는 배열과 유사한 객체이다.

// `foo${2 + 3}bar${'Java' + 'Script'}baz`에 해당한다.
String.raw({raw: ['foo', 'bar', 'baz']}, 2 + 3, 'Java' + 'Script'); // "foo5barJavaScriptbaz"
```

## Browser compatibility

IE 놉, Opera 놉, 안드로이드 웹뷰 놉, 안드로이드 오페라 놉
