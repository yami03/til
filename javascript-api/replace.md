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

### Description



​    

