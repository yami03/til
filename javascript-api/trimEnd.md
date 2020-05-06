# string.trimEnd

`trimEnd()` 메서드는 문자열의 끝에서 공백을 제거한다. `trimRight()` 이 메서드의 별칭이다.

```js
const greeting = '   Hello world!   ';
greeting; // "   Hello world!   "
greeting.trimEnd(); // "   Hello world!"
```

## Syntax

```js
str.trimEnd();
str.trimRight();
```

### Return value

호출된 문자열 (오른쪽) 끝에서 공백을 제거한 새로운 문자열이다.

## Description

`trimEnd()` 와 `trimRight` 메서드는 오른쪽의 공백을 제거한 문자열을 반환한다.

`trimEnd()` 와 `trimRight()` 는 원본 문자열에 영향을 주지 않는다.

### Aliasing

 Stirng 메서드인 `String.prototype.padEnd` 와 일관성을 가지기 위해 `trimEnd` 가 표준 이름이다. 그러나 웹 호환성을 가지기 위해 `trimRight` 은 별칭으로 유지된다. 

```js
String.prototype.trimRight.name === 'trimEnd';
```

## Examples

### trimEnd() 사용하기

```js
let str = '   foo   ';
str.length; // 9

str = str.trimEnd();
str.length; // 6
str; // "   foo"
```

## Browser compatibility

IE에서 지원하지 않음

