# string.localeCompare

`localeCompare()` 메서드는 참조 문자열과 비교 했을 때 정렬된 순서가 인수로 주어진 문자열보다 전에오는지 후에 오는지 혹은 같은 순서에 배치되는지를 알려주는 숫자를 리턴한다.

```js
const a = 'cat'; // 소문자
const b = 'Cat'; // 대문자

a.localeCompare(b); // -1
a.localeCompare(b, 'en', {sensitivity: 'base'}); // 0
```

새 `locales` 와 `option` 인수를 통해 응용 프로그램은 정렬 순서에서 사용되는 언어를 지정, 함수의 동작을 사용자 정의 할 수 있다. 이전 `locales` 와 `option` 인수는 무시된다. locale과 정렬순서는 구현에 의존하고 있다.

## Syntax

```js
referenceStr.localeCompare(compareString[, locales, [, options]])
```

### Parameters

**compareString**

참조하는 문자열과 비교하는 문자열

**locales** 과 **options**

함수의 동작을 커스텀하고 애플리케이션의 사용해야 하는 언어를 지정, 이전 `locales` 와 `option` 인수는 무시된다. locale과 정렬순서는 구현에 의존하고 있다.

인자가 어떻게 사용되는지 [`Intl.Collator()` constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator/Collator) 에서 자세히 알 수 있다.

### Return value

음수는 referenceStr이 compareString보다 앞에 배치되는 경우,

양수는 compareString 다음에 배치되는 경우 

0은 동등하다.

## Description

**-1 또는 1의 반환값에 의존하지 않는다!**

W3C spec에서 음수와 양수만 요구하기 때문에 결과는 브라우저마다 다양하고 일부 브라우저는 -2 또는 2를 반환하며 심지어 다른 음수와 양수를 반환할 수 있다.

## Examples

### localeCompare() 사용하기

```js
'a'.localeCompare('c'); // -2 or -1 브라우저마다 다르다
'check'.localeCompare('against'); // 2 or 1 브라우저마다 다르다.
'a'.localeCompare('a'); // 0
```

### 배열 정렬

`localeCompare()` 는 배열의 대소문자 정렬이 가능하다.

```js
let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort((a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true}));
// ["Adieu", "café", "Cliché", "communiqué", "Premier", "réservé"]
```

### extended argument에 대한 브라우저 지원 확인하기

locales와 options 는 모든 브라우저에서 지원하지 않는다.

`i` argument를 사용하여 확인할 수 있다. 잘못된 인자가 거부되어야 한다. [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError) 가 예외가 되는지 본다.

```js
function localeCompareSupportsLocales() {
  try {
    'foo'.localeCompare('bar', 'i');
  } catch (e) {
    return e.name === 'RangeError';
  }
  return false;
}

// chrome에서 실행했을 때는 true 🧐
```

### locales 사용

`localeCompare()` 는 결과는 제공되는 언어마다 다르다. 애플리케이션의 사용자 인터페이스에서 사용되는 언어의 정렬 순서를 얻으려면 `locales` 인수를 사용하여 해당 언어를 지정해야한다.

```js
'ä'.localeCompare('z', 'de'); // 음수 독일어는 z 뒤에 ä가 온다.
'ä'.localeCompare('z', 'sv'); // 양수 스웨덴어는 z 앞에 ä가 온다.
```

### options 사용

localeCompare()에서 제공받은 결과는 `options` 를 이용하여 사용자 정의할 수 있다.

```js
// 독일어에서 ä는 a를 기본으로 가지고 있다.
'ä'.localeCompare('a', 'de', { sensitivity: 'base' }); // 0
// 스웨덴어에서는 ä는 a와 별개이다.
'ä'.localeCompare('a', 'sv', { sensitivity: 'base' }); // 양수
```

### 수 정렬

```js
// 기본 값, "2" > "10" 앞자리로 계산해서 ?
"2".localeCompare("10"); // 1

// options 사용한 수 정렬
"2".localeCompare("10", undefined, {numeric: true}); // -1

// loales tag를 사용한 수 정렬
"2".localeCompare("10", "en-u-kn-true"); // -1
```

## Performance

큰 배열 정렬과 같이 많은 수로된 문자열을 비교할 때는 `Intl.Collator` 객체를 만들고  `Intl.Collator` 에서 제공하는  `compare` 함수를 사용하는 것이 좋다.

## Browser compatibility

`locales` 와 `options` 는 안드로이드 웹뷰, 안드로이드 firefox와 안드로이드 opera에서 지원되지 않음