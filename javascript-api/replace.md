# string.replace()

`replace()` 메서드는 어떤 `pattern`에 일치하는 일부 또는 모든 부분을 `replacement`로 대체하여 새로운 문자열을 반환한다. 그 `pattern`은 문자열이나 정규식(`RegExp`)이 될 수 있으며  `replacement`는 문자열이나 각 매치에 대해서 호출된 함수일 수 있다. `pattern` 이 문자열일 경우, 최초로 일치한 부분만 대체된다.

```js
const p = 'Cats are the best! cats are cute!';

const regex = /cats/gi; // i는 대소문자를 따지지 않는다.

p.replace(regex, 'Dogs'); // "Dogs are the best! Dogs are cute!"
p.replace(regex, 'Hamsters'); // "Hamsters are the best! Hamsters are cute!"
```

## Syntax

```js
const newStr = str.replace(regexp\substr, newSubstr\function);
```

### Parameters

**regexp** (pattern)

`RegExp` 정규식 객체 또는 리터럴

일치하는 항목은 `newSubStr` 또는 지정된 함수가 반환 한 값으로 대체된다.

**substr** (pattern - 문자열인 경우)

`newSubStr` 로 대체 될 `String`, 정규식으로 해석하지 않고 먼저 나온 것만 바뀐다.

**newSubStr** (replacement)

매개변수로 지정된 `regexp`(pattern) 나 `substr` (pattern) 문자열을 대체하는 문자, 여러가지 특수 rplacement pattern이 지원되며, "매개변수가 `string`으로 지정" 참고

**function** (replacement)

주어진 `regexp` 또는 `substr`로 일치 항목을 대체하는데 사용할 새 하위 문자열을 만들기 위해 호출되는 함수

이 함수에 제공된 인수는 "`함수` 를 매개변수로 지정"참고

### Return value

일부 또는 전체 패턴이 대체된 새 문자열

## Description

이 메서드는 호출된 String obejct를 바꾸지 않는다. 새로운 문자열을 반환한다.

전체를 검색하고 변경하면 `g` 플래그를 사용한다.

### 매개변수가 문자열로 지정되었을 때

대체 문자열은 다음과 같은 특수 교체 패턴을 포함할 수 있다.

| 패턴 | 삽입                                                         |
| ---- | ------------------------------------------------------------ |
| $$   | "$" 삽입                                                     |
| $&   | 매치된 부분 문자열을 삽입                                    |
| $`   | 매치된 부분 문자열 앞의 단어 부분을 삽입한다.                |
| $'   | 매치된 부분 문자열 직후의 문자열 부분을 삽입                 |
| $n   | `n`이 1이상 99이하의 정수라면, 첫번째 매개변수로 넘겨진 RegExp 객체에서 소괄호로 묶인 `n` 번째의 부분 표현식으로 매치된 문자열을 삽입한다. 인덱스가 1부터 시작된다. |

**$& 예시**

```js
const html = `<ul>
	<li>고양이</li>
	<li>강아지</li>
	<li>고양이</li>
</ul>`;
const regex = /고양이/gi;

const newHtml = html.replace(regex, "<a href='#none'>$&</a>");
/*
"<ul>
	<li><a href='#none'>고양이</a></li>
	<li>강아지</li>
	<li><a href='#none'>고양이</a></li>
</ul>"
*/
```

**$`**

```js
const str = '고양이1 강아지1 고양이2 강아지2 고양이3';
const regex =  /강아지/gi;
const result = str.replace(regex, "$`앞에 있는 텍스트가 복사된다"); // 현재 텍스트는 삭제된다. 
// "고양이1 고양이1 앞에 있는 텍스트가 복사된다1 고양이2 고양이1 강아지1 고양이2 앞에 있는 텍스트가 복사된다2 고양이3"
```

**$'**

```js
const str = '고양이1 강아지1 고양이2 강아지2 고양이3';
const regex =  /강아지/gi;
const result = str.replace(regex, "$'뒤에 있던 텍스트가 붙는다.");
// "고양이1 1 고양이2 강아지2 고양이3뒤에 있던 텍스트가 붙는다.1 고양이2 2 고양이3뒤에 있던 텍스트가 붙는다.2 고양이3"
```



### 함수를 매개 변수로 지정

두번째 매개변수가 함수로 지정될 수 있다. 일치하는 경우 함수가 호출된다. 함수의 결과(반환값)가 대체 문자열로 사용된다.

(참고: 이 경우 위에 언급 된 특추 교체 패턴은 적용되지 않는다.)

매개변수 👇

| 이름        | 주어진 값                                                    |
| ----------- | ------------------------------------------------------------ |
| match       | 매치된 문자열(위의 `$&` 에 해당)                             |
| p1, p2, ... | replace() 첫번째 인수가 `RegExp` 객체인 경우, n번째 괄호에서 갭쳐된 그룹의 문자열($1, $2에 대응)이다. 예를 들어 `/(\a+)(\b+)/` 이 주어진다면 `p1` 은 `\a+` 과 매치되고 `p2`는 `\b+ 과 매치된다.` |
| offset      | 검색중인 전체 문자열 중에서 일치하는 부분 문자열의 오프셋이다. (예를 들어, 전체 문자열이 'abcd'이고 일치하는 하위 문자열은 'bc'인 경우 인수는 1이다.) |
| string      | 전체 문자열을 검사한다.                                      |

인수의 정확한 개수는 첫번째 인수가 RegExp객체인지 여부에 따라 달라지며, 괄호로 지정된 부분의 개수에 따라 달라진다.

다음 예제는 `newString` 을 `abc-12345-#$*%` 로 교체한다.

```js
function replacer(match, p1, p2, p3, offset, string) {
  console.log('offset', offset); // offset 0 검색 중인 전체 문자열중에 일치가 시작되는 부분
  console.log('string', string); // string abc12345#$*%
  // p1는 숫자가 아닌 것, p2는 숫자, p3는 숫자와 문자가 아닌 것 
  return [p1, p2, p3].join(' - '); // abc - 12345 - #$*%
}

let newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
console.log(newString);
```

## Examples

### replace()의 정규표현식 정의

i는 대소문자를 구분하지 않는다.

```js
const str = 'Cats are the best! cats are cute!';
const newStr = str.replace(/cats/i, 'dogs');
newStr; // "dogs are the best! cats are cute!"
```

### global과 ignore을 replace()에서 사용하기

global replace는 정규식에서만 사용할 수 있다. 전역으로 탐색할 수 있다.

```js
const str = 'Cats are the best! cats are cute!';
const newStr = str.replace(/cats/gi, 'dogs');
newStr; // "dogs are the best! dogs are cute!"
```

### 문자열에서 단어 치환

대체 텍스트의 경우 스크립트는 $1, $2와 그룹캡쳐를 사용한다.

```js
const re = /(\w+)\s(\w+)/;
const str = 'John Smith';
const result = str.replace(re, '$2, $1');

result; // "Smith, John"
```

### 일치하는 문자를 수정하는 인라인 함수 사용

이 예시에서는 모든 대문자는 소문자로 변환되고, 일치하는 위치 바로 앞에 하이픈이 삽입된다. 

여기서 중요한것은 추가 작업은 일치하는 항목이 대체되어 반환하기 전에 필요한 것이다.

대체 함수에서는 match된 부분이 함수의 인자로 들어온다. 그리고 그 인수를 대소문자 변형 반환 직전에 하이픈으로 연결된다.

```js
function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase();
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
}

styleHyphenFormat('borderTop'); // "border-top"
```

최종 대체가 이루어지기 전에 일치하는 결과를 추가로 변환하려는 함수를 사용해야 한다. `toLowerCase()` 메서드 전에 평가되어야 한다. 함수없이 매치에 사용하는 경우 `toLowerCase()` 방법은 효과가 없을 것이다.

```js
// '$&: 매치된 부분 문자열을 삽입'
const newString = 'borderTop'.replace(/[A-Z]/, '-'+ '$&'.toLowerCase()); 
// "border-Top" 소문자로 변환되지 않았다.
```

문자를 패턴으로 사용하기 전에 먼저 '$&'.toLowerCase() 문자열 리터럴로 평가되기 때문이다. 

### 화씨를 섭씨 온도로 대체

화씨 온도 F로 끝나는 숫자이어야 한다. 함수는 C로 끝나는 섭씨로 돌려준다. 예를 들어, 입력되는 수가 212F인 경우, 함수는 100C를 돌려준다. 입력되는 숫자 0F인 경우, 함수는 -17.77777777777778C를 돌려준다.

정규 표현식 test는 임의의 숫자가 F로 끝나는지 확인한다. 화씨 온도의 수는 함수의 두번째 인수 p1을 통해 그 기능에 액세스 할 수 있다. f2c()함수는 문자열을 전달받아 화씨를 기준으로 섭씨 숫자를 설정한다. 그런다음 f2c() 함수는 섭씨 숫자를 반환한다. 이 함수는 Prel의 s///e 함수와 유사하다.

```js
function f2c(x) {
  function convert(str, p1, offset, s) {
    return ((p1 - 32) * 5/9) + 'C';
  }
  let s = String(x);
  let test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convert);
}

f2c("212F"); // "100C"
```

