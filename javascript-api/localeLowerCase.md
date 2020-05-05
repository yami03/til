# string.toLocaleLowerCase

`toLocalLowerCase()` 메서드는 임의의 locale 고유의 케이스 매핑에 따라 참조 문자열 값을 소문자로 변환하여 반환한다.

```js
const dotted = 'İstanbul';

`EN-US: ${dotted.toLocaleLowerCase('en-US')}`; // "EN-US: i̇stanbul"
`TR ${dotted.toLocaleLowerCase('tr')}`; // "TR istanbul"
dotted.toLowerCase() // "i̇stanbul"
```

## Syntax

```js
str.toLocaleLowerCase()
str.toLocaleLowerCase(locale)
str.toLocaleLowerCase([locale, locale, ...])
```

### Parameters

**locale** (Optional)

`locale` 인자는 locale 고유의 케이스 매핑에 따라 소문자로 변환하는데 사용하는 locale을 보여준다.

배열에서 여러 locale이 지정된 경우, [best available locale](https://tc39.github.io/ecma402/#sec-bestavailablelocale) 이 사용된다. 기본값은 호스트 환경의 실행중인 locale이다.

### Return value

모든 locale 고유의 케이스 매핑에 따라 호출 문자열을 소문자로 변환된 새 문자열

### Exceptions

* `RangeError` ("잘못된 language 태그: xx_yy")는 `locale` 인자가 유효한 language 태그가 아닌 경우 발생한다.
* `TypeError` ("locale 인자중 잘못된 요소")는 배열의 요소가 문자열 type이 아닌 경우에 발생한다.

## Description

`toLocaleLowerCase()` 메서드는 임의의 locale 고유의 케이스 매핑에 따라 소문자로 변환된 문자열 값을 반환한다.

`toLocaleLowerCase()` 문자열 자체의 값에는 영향을 주지 않는다. 대부분의 경우 `toLowerCase()` 와 같은 결과가 되지만, 터키어와 같은 Unicode의 기본 케이스 매핑을 따르지 않는 일부 locale은 다른 결과가 될지 모른다.

## Examples

### toLocaleLowerCase() 사용하기

```js
'ALPHABET'.toLocaleLowerCase(); // "alphabet"

'\u0130'.toLocaleLowerCase('tr')  === 'i' // true
'\u0130'.toLocaleLowerCase('en-US')  === 'i' // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i' // true
```

