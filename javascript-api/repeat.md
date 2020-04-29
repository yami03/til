# string.repeat

repeat() 메서드는 호출된 문자열에서 사본이 포함. 연결하여 지정된 횟수의 새 문자열을 구성하고 반환한다. 

```js
const str = '고양쓰 너무 귀엽쓰 ';

str.repeat(2); // "고양쓰 너무 귀엽쓰 고양쓰 너무 귀엽쓰 "
```

## Syntax

```js
str.repeat(count)
```

### Parameters

**count**

문자열을 반복 할 횟수를 나타내는 0과 `+Infinity` 사이의 정수 

### Return value

주어진 문자열의 지정된 수의 사본을 포함하는 새로운 문자열

### Exceptions

* `RangeError`: 반복 횟수는 음수가 아니여야 한다.
* `RangeError`: 반복 횟수는 무한대보다 작아야하며 최대 문자열 크기를 넘지 않아야 한다.

## Examples

```js
'abc'.repeat(-1); // RangeError:  Invalid count value at String.repeat
'abc'.repeat(0); // ''
'abc'.repeat(1); // 'abc'
'abc'.repeat(2); // 'abcabc'
'abc'.repeat(3.5); // "abcabcabc" count를 정수로 변환됨
'abc'.repeat(1/0); // RangeError: Invalid count value at String.repeat

({ toString: () => 'abc', repeat: String.prototype.repeat }).repeat(2); // "abcabc" repeat() generic method 이다? 
```

## Polyfill

repeat는 ECMAScript 2015 명세에 추가되었다. 

```js
if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) count = 0;
    if (count < 0) throw new RangeError('repeat count must be non-negative');
    if (count == Infinity) throw new RangeError('repeat count must be less than infinity');
    count = Math.floor(count);
    if(str.length == 0 || count == 0) return '';
    
    // count가 31비트 정수인지 확인하면 main part를 크게 최적화 할 수 있다. 
    // 그러나 대부분의 최신(2014년 8월) 브라우저는 문자열 1 << 28 자 이상을 처리할 수 없으므로 
    // 다음과 같이 해야한다.
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var maxCount = str.length * count;
    count = Math.floor(Math.log(count) / Math.log(2));
    while(count) {
      str += str;
      count--;
    }
    str += str.substring(0, maxCount - str.length);
    return str;
  }
}
```

## Browser compatibility

IE 놉 안드로이드 웹뷰 놉