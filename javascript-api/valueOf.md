# string.valueOf

`valueOf()` 메서드는 `String` 객체의 primitive 값을 반환한다.

```js
const stringObj = new String('foo');

stringObj; // String {"foo"}
stringObj.valueOf(); // "foo"
```

## Syntax

```js
str.valueOf()
```

### Return value

지정된 `String` 객체의 원시 값을 나타내는 문자열

## Description

`String` 의 `valueOf()` 메서드는 `String` 객체의 원시 값을 문자열 데이터 타입으로 반환한다. 이 값은 `String.prototype.toString()` 과 동일하다. 

이 메서드는 보통 자바스크립트에 의해 내부적으로 호출되고, 직접 호출해서 사용하지 않는다.

## Examples

### valueOf() 사용

```js
const x = new String('Hollo world');
x.valueOf(); // "Hollo world"
```

