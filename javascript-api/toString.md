# string.toString

`toString()` 메서드는 지정된 객체를 나타내는 문자열을 반환한다.
```js
const stringObj = new String('foo');
stringObj; // String {"foo"}
stringObj.toString(); // "foo"
```

## Syntax

```js
str.toString()
```

### Return value

호출된 객체를 나타내는 문자열

## Description

`String` object는 `Object` object의 `toString()` 메서드를 재정의한다. 이것은 `Object.prototype.toString()` 을 상속하지 않는다. `String` object의 경우, `toString()` 메서드는 해당 object를 나타내는 문자열을 반환한다. (`Stirng.prototype.valueOf()`와 동일)

## Examples 

### toString() 사용

```js
const x = new String('Hello world');

x.toString(); // "Hello world"
```

