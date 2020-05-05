# string.toLocaleUperCase()

`toLocaleUpperCase()` 메서드는 임의의 locale 고유 케이스 매핑에 따라 참조 문자열 값을 대문자로 변환하여 반환한다.

```js
const city = 'istanbul';
city.toLocaleUpperCase('en-US'); // "ISTANBUL"
city.toLocaleUpperCase('TR'); // "İSTANBUL"
```

## Syntax

```js
str.toLocaleUpperCase()
str.toLocaleUpperCase(locale)
str.toLocaleUpperCase([locale, locale, ...])
```

### Parameters

**locale** (Optional)

`locale` 인수는 locale 고유의 케이스 매핑에 따라 대문자로 변환하는데 사용하는 locale을 나타낸다. 배열로 여러 locale이 지정된 경우, [best available locale](https://tc39.github.io/ecma402/#sec-bestavailablelocale) 이 사용된다. default 값은 호스트 환경의 실행중인 locale이다.

### Return value

모든 locale 고유의 케이스 매핑에 따라 문자열이 대문자로 변환된 새로운 문자열이다.

### Exceptions

* `RangeError` ("잘못된 language 태그: xx_YY")는 `locale` 인수가 유효한 language 태그가 아닌 경우이다.
* `TypeError`("locale 인수 중 잘못된 요소")는 배열의 요소가 문자열 type이 아닌 경우이다.

## Description

`toLocaleUpperCase()` 메서드는 임의의 locale 고유 케이스 매핑에 따라 대문자로 변환된 문자열 값이다. `toLocaleUpperCase()` 는 문자열 자체의 값에는 영향을 주지 않는다. 대부분의 경우 `toUpperCase()` 와 같은 결과가 되지만, 터키어와 같은 Unicode의 기본 케이스 매핑을 따르지 않는 일부 locale은 다른 결과가 될지 모른다.

또한 일부 문자는 대문자로 변환될 때 두개 (또는 그 이상)의 문자가 생성 될 수 있으므로 변환이 반드시 1:1 매핑이여야 하는 것은 아니다. 따라서 결과 문자열의 길이는 입력 문자열의 길이와 다를 수 있다. 이것 또한 변환이 안정적이지 않을 수 있으므로 `false` 를 반환한다. `x.toLocaleLowerCase() === x.toLocaleUpperCase().toLocaleLowerCase()`

## Examples

### toLocaleUpperCase() 사용하기

```js
'alphabet'.toLocaleUpperCase(); // "ALPHABET"
'Gesäß'.toLocaleUpperCase(); // "GESÄSS"
'i\u0307'.toLocaleUpperCase(); // "İ"

let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva'];
'i\u0307'.toLocaleUpperCase(locales);
```

