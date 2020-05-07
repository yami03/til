# String.fromCodePoint

정적 `String.fromCodePoint()` 메소드는 코드 포인트 시퀀스를 이용하여 문자열을 생성해 반환한다.

```js
String.fromCodePoint(9731, 9733, 9842, 0x2F804) // "☃★♲你"
```

## Syntax

```js
String.fromCodePoint(num1, [, ...[ numN ]])
```

### Parameters

**num1, ..., numN**

코드 포인트의 시퀀스

### Return value

코드 포인트의 시퀀스를 이용해 생성한 문자열

### Exceptions

유효하지 않은 유니코드 코드포인트를 넘긴다면 RangeError ("RangeError: NaN is not a valid code point")

## Description

이 메소드는 String object가 아닌 string을 return한다. `fromCodePoint()` 는 String의 정적 메소드이기 때문이다. 스스로 생성한 String object 메소드가 아니라 항상 String.fromCodePoint()로 사용한다. 

## Example

### fromCodePoint() 사용하기

```js
String.fromCodePoint(42); // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404" -> "Є"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04" -> "你"
String.fromCodePoint(194564);   // "\uD87E\uDC04" -> "你"
String.fromCodePoint(0x1D306, 0x61, 0x1D307); // "𝌆a𝌇"
```

유효하지 않은 input

```js
String.fromCodePoint('_'); //  RangeError: Invalid code point NaN
// at Function.fromCodePoint (<anonymous>)
// at <anonymous>:1:8
```

## fromCharCode()와 비교

String.fromCharCode()는 코드 포인트를 지정하여 0x010000 – 0x10FFFF를 반환할 수 있다. 대신 반환하려면 UTF-16의 surrogate pair가 필요하다. \

```js
String.fromCharCode(0xD83C, 0xDF03); // "🌃"
String.fromCharCode(55356, 57091);   // "🌃"
```

반면  String.fromCodePoint()는 UTF-32 코드 유닛에 해당하는 코드 포인트를 지정하여 4-byte 보조 문자열과 일반적인 2바이트 BMP 문자를 반환할 수 있다.

```js
String.fromCodePoint(0x1F303); // "🌃"
```

## Polyfill

IE에서는 전혀 지원이 안된다.

```js
if(!String.fromCodePoint) (function(stringFromCharCode) {
  var fromCodePoint = function(_) {
    var codeUnits = [], codeLen = 0, result = '';
    for (var index = 0, len = arguments.length; index !== len; ++index) {
      var codePoint = +arguments[index];
      // `NaN`, `-Infinity`, `+Infinity` 포함된 모든 케이스를 처리
      // NaN 케이스를 처리하려면 `!(...)` 필요
      // (codePoint>>0) === codePoint 소수점과 negatives 처리
      if (!(codePoint < 0x10FFFF && (codePoint>>>0) === codePoint)) 
        throw RangeError("Invalid code point: " + codePoint);
      if (codePoint <= 0xFFFF) { // BMP code point
      	codeLen = codeUnits.push(codePoint);
      } else { //  Astral code point; surrogate를 분활
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      	codePoint = codeUnits.push(
        	(codePoint >> 10) + 0xD800, // high Surrogate
          (codePoint % 0x400) + 0xDC00 // low Surrogate
        )
      }
      if (codeLen >= 0x3fff) {
        result += stringFromCharCode.apply(null, codeUnits);
        codeUnits.length = 0;
      }
    }
    return result + stringFromCahrCode.apply(null, codeUnits);
  };
  try { // DOM element `Object.defineProperty` IE 8 서포트
    Object.definePropery(String, "fromCodePoint", {
      "value": fromCodePoint, "configurable": true, "writable": true
    });
  } catch (e) {
    String.fromCodePoint = fromCodePoint;
  } 
}(String.fromCharCode));
```





