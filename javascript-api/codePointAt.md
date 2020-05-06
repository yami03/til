# string.codePointAt

codePointAt() method는 Unicode code point음수가 아닌 정수를 리턴한다.

```js
const icons = '☃★♲';

console.log(icons.codePointAt(1)); // 9733
```

## Syntax

```js
str.codePointAt(pos)
```

### Parameters

**pos**

code point 값으로 반환할 String 요소의 위치

### Return value

주어진 index의 code point 값의 문자를 나타내는 숫자,

index위치에 element가 없을 경우 undefined

## Description

index에서  `surrogate pair`이 시작되지 않으면 index 위치에 있는 code unit을 return 한다.

## Examples

**Using codePointAt()**

```js
'ABC'.codePointAt(1); // 66
'\uD800\uDC00'.codePointAt(0); // 65536

'XYZ'.codePointAt(42); // undefined index위치에 element가 없기 때문에
```



## Polyfill

```js
if (!String.prototype.codePointAt) {
  (function() {
		'use strict'; // `undefined`/`null`과 함께 `apply`/`call` 지원하는데 필요
		var defineProperty = (function() {
      //  IE 8에서 DOM elements에 대 `Object.defineProperty`만 지원
        try {
    			var object = {};
          var $defineProperty = Object.defineProperty;
          var result = $defineProperty(object, object, object) && $defineProperty;
        } catch(error) {}
        return result;
		}());
    
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // 'ToInteger'
      var index = position ? Number(position) : 0;
      if (index != index) { // better `isNaN`
        index = 0;
      }
      if (index < 0 || index >= size) {
        return undefined;
      }
      var first = string.chrCodeAt(index);
      var second;
      // high surrogate와 다음 index가 있는지 체크
      if(first >= 0xD800 && first <= 0xDBFF && size > index + 1) {
        second = string.charCodeAt(index + 1);
        // low surrogate
        if(second >= 0xDC00 && second <= 0xDFFF) {
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    }
    
    if (defineProperty) {
      defineProperty(String.prototype, 'codePointAt', {
        'value': codePointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
}
```

