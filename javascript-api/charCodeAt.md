# string.charCodeAt

주어진 인덱스에 대한 UTF-16 code unit을 나타내는 0 - 65535사이의 정수를 반환한다.

```js
const sentence = "dhgn gkstl dhtlqtkqns";

const index = 4;

console.log(`index: ${index}, ${sentence.charCodeAt(index)}`); // index: 4, 32
```

UTF-16 코드 단위는 single UTF-16 코드 단위로 표현할 수 있는 코드 포인트의 Unicode 코드 포인트와 일치하지만, Unicode 코드 포인트를 UTF-16 코드 단위로 나타낼 수 없다면 (값이  0x10000보다 크기 때문에) 코드 포인트의 surrogate pair 첫번째 part를 반환한다. 전체 코드 포인트 값을 원한다면 `codePointAt()`을 사용한다.

## Syntax

```js
str.charCodeAt(index)
```

### Parameters

**index**

0보다 같거나 크고, string의 length보다 작은 정수, number가 아닐경우 default는 0이다.

**Return value**

주어진 index에 대한 문자의 UTF-16 code unit 값를 나타낸 숫자

index가 범위밖을 넘었을 땐 NaN

## Description

Unicode code point 범위는 0에서 1114111 (0x10FFFF)까지이다.

앞쪽 128 Unicode 코드 포인트는 ASCII 문자 인코딩에 대응된다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Obsolete_Pages/Core_JavaScript_1.5_Guide/Unicode

charCodeAt()는 65536보다 작은 값을 항상 반환한다.

higher code points는  surrogate pair로 나타낸다. 65536이상인 개별 문자는 전체 문자를 검사하거나 `charCodeAt(i)`와 `charCodeAt(i+1)` 두 문자를 검사해야한다. 

이럴땐 codePointAt(i)를 사용한다.

## Examples

### using charCodeAt()

```js
'ABC'.charCodeAt(0); // A의 Unicode 값인 65를 return 한다.
```

#### 문자열의 이전 부분에 "**다국어 기본평면이 아닌 문자"가 존재한다는 것을 알지 못할 때**

for 루프 등에 사용될 수 있다.

```js
function fixedCharCodeAt(str, idx) {
  // ex. fixedCharCodeAt('\uD800\uDC00', 0); // 65536
  // ex. fixedCharCodeAt('\uD800\uDC00', 1); // false 앞에 있는 경우 false
  idx = idx || 0;
  let code = str.charCodeAt(idx);
  let hi, low;
  
  // High surrogate
  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    if (isNaN(low)) {
      throw 'High surrogate not followed by ' +
        'low surrogate in fixedCharCodeAt()';
    }
    return ((hi - 0xD800) * 0x400) +
      (low - 0xDC00) + 0x10000;
  }
 	// Low surrogate일 경우 앞부분에 non-BMP가 존재하는 경우
  if(0xDC00 <= code && code <= 0xDFFF) return false;

  return code;
}
```



#### 문자열의 이전 부분에 "**다국어 기본평면이 아닌 문자"가 존재한다는 것을 알 때**

```js
function knownCharCodeAt(str, idx) {
  str += '';
  let code,
      end = str.length;
  
  let surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) != null) {
    let li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    } else {
      break;
    }
  }
  
  if (idx >= end || idx < 0) return NaN;
  
  code = str.charCodeAt(idx);
  
  let hi, low;
  // surrogate pair
  if (0xD800 <= code && code <= 0xDBFF) {
    hi = code;
    low = str.charCodeAt(idx + 1);
    return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
  }
  
  return code;
}
```

🤔
