# string.split

`split()` 메서드는 문자열을 정렬된 하위 문자열 집합으로 나누고 이러한 하위 문자열을 배열로 넣은 다음 배열을 반환한다. 분할은 패턴을 검색하여 수행한다. 여기서 패턴은 메서드의 호출에서 첫번째 매개변수로 제공된다.

```js
const str = 'A cat playing with a mouse.';
const words = str.split(' '); // ["A", "cat", "playing", "with", "a", "mouse."];
const strCopy = str.split(); // ["A cat playing with a mouse."]
```

## Syntax

```js
str.split([separator[, limit]])
```

### Parameters

**separator** (Optional)

각 분할이 발생하는 위치를 나타내는 패턴이다. `separator` 는 단순한 문자열이 될 수 있고 정규표현식이 될 수 있다.

* 가장 간단한 경우는 `separator` 가 단일 문자일 때 이다. 구분된 문자열을 분할하는데 사용된다. 예를 들어  탭 구분 값 (TSV)을 포함하는 문자열은 다음과 같이 탭 문자를 구분 기호로 전달하여 구문을 분석할 수 있다. `myString.split("\t")` 
* `separator` 가 두글자 이상일 경우, 분할하려면 해당 전체 문자와 일치하여야 한다.
* `separator` 가 생략되거나 str에서 없는 문자열일 경우, 전체 문자열로 구성된 하나의 요소만이 있는 배열을 반환한다.
* `separator` 가 문자열의 시작이나 끝지점으로 나타나도 여전히 분할의 효과가 있다. 결과는 반환된 배열의 첫번째 위치(혹은 마지막)에는 빈 문자열이다.
* `separator` 가 빈 문자열인 경우, str은 각각의 UTF-16 문자의 배열로 변환된다.

> 주의: separator가 빈 문자열("")로 제공되면, 사용자가 인식하는 문자 하나(grapheme cluster)또는 유니코드 문자(코드포인트) 하나씩으로 나누는 것이 아니라, UTF-16 코드 유닛으로 나누게 되며 surrogate pair가 망가질 수 있다. 스택 오버플로우의 [How do you get a string to a character array in JavaScript?](https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript) 를 참고하자.

UTF-16 코드 유닛이 아닌 유니코드 문자(코드포인트) 하나씩 나누는 surrogate pair가 망가지지 않고 분할하는 방법

1. Spread syntax 사용

   ```js
   [...'𝟘𝟙𝟚𝟛']; // ["𝟘", "𝟙", "𝟚", "𝟛"]
   ```

2. Array.form

   ```js
   Array.from('𝟘𝟙𝟚𝟛'); // ["𝟘", "𝟙", "𝟚", "𝟛"]
   ```

3. string.prototype.split() 와 RegExp u flag 사용하기

   ```js
   '𝟘𝟙𝟚𝟛'.split(/(?=[\s\S])/u); // ["𝟘", "𝟙", "𝟚", "𝟛"]
   ```

   u flag는 유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급한다. `/(?=.)/u` 대신에 `/(?=[\s\S])/u` 를 사용한 이유 `.` [How to use JavaScript regex over multiple lines?](https://stackoverflow.com/questions/1979884/how-to-use-javascript-regex-over-multiple-lines)

**limit** (Optional)

음이 아닌 정수로 나눌 수를 제한한다. 이 매개변수가 제공되면 `separator` 가 등장할 때마다 문자열을 끊지만 배열의 원소가 `limit`개가 되면 멈춘다. 남은 텍스트는 배열에 포함되지 않는다.

* `limit` 에 도달하기 전에 문자열 끝에 도달하면 배열에는 제한보다 적은 미만의 원소가 있을 수도 있다.
* 만약 `limit` 는 `1` 이면 `[str]` 이 반환된다.
* 만약 `limit` 는 `0` 이면 `[]` 이 반환된다.

## Return value

문자열이 원소로 이루어진 `Array`로, 주어진 문자열이 `spearator` 포인트로 분할된 것이다.

## Description

`separator`가 발견됐을 때 문자열은 삭제되고, 남은 문자열은 배열로 반환된다. 만약  `separator` 가 포획괄호(capturing parentheses)를 포함하는 정규식일 경우, `separator` 가 일치할 때 마다 포획 괄호의 (정의되지 않은 경우도 포함하여) 결과가 배열의 해당 위치에 포함된다. 

`separator`가 배열인 경우, 해당 배열은 문자열로 강제 변환되어 `sperator`로 사용된다. 

## Examples

### split() 사용

문자열이 비였을 때 `split()`는 하나의 빈 문자열을 포함한 배열을 반환한다. (빈 배열이 아니다.) 만약 `separator`과 문자열이 둘 다 빈 문자열이라면 빈 배열을 반환한다. 

```js
const myString = '';
myString.split(); // [""]
myString.split(''); // []
```

다음 예제는 문자열을 주어진 separator로 끊는 함수를 정의한다. 문자열을 끊은 다음에는 (끊기 이전의) 원본 문자열과 사용한 separator, 배열의 길이와 원소를 log로 출력한다.

```js
function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator);
  
  console.log('원본 문자열: ', stringToSplit);
  console.log('separator: ', separator);
  console.log('array: ', arrayOfStrings.length, 'elements: ', arrayOfStrings.join(' / '))
}

const wikiString = 'A cat playing with a mouse.';
const monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

const space = ' ';
const comma = ',';

splitString(wikiString, space);
splitString(wikiString);
splitString(monthString, comma);
```

log 확인하기 

```js
// splitString(wikiString, space);
원본 문자열:  A cat playing with a mouse.
separator: 
array:  6 elements:  A / cat / playing / with / a / mouse.

// splitString(wikiString);
원본 문자열:  A cat playing with a mouse.
separator:  undefined
array:  1 elements:  A cat playing with a mouse.

// splitString(monthString, comma);
원본 문자열:  Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec
separator:  ,
array:  12 elements:  Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec 
```

### 문자열에 공백 제거하기

다음 예제는 `split()`은 0개 이상의 공백을 찾고, 그 다음이 세미콜론이고, 그 다음이 0개 이상의 공백을  찾아내고, 찾으면 문자열에서 공백과 세미콜론을 제거한다. -> 세미콜론의 앞뒤의 공백을 찾고 공백과 세미콜론을 제거한다.

```js
const names = 'harry Trump ;Fred Barney; helen Rigby ; Bill Abel ; Chris Hand ';

console.log(names);

const re = /\s*(?:;|$)\s*/
const nameList = names.split(re); // harry Trump ;Fred Barney; helen Rigby ; Bill Abel ; Chris Hand 

console.log(nameList); // ["harry Trump", "Fred Barney", "helen Rigby", "Bill Abel", "Chris Hand", ""]
```

### 제한된 수의 분할 결과를 반환

이 예제는 `split()`은 문자열에서 공백을 찾고, 발견된 최초의 3개의 분할 결과를 반환한다.
```js
const myString = 'A cat playing with a mouse.';
myString.split(' ', 3); // ["A", "cat", "playing"]
```

### RegExp를 사용해 구분자도 결과에 포함하기

separator가 캡쳐링 괄호`()` 를 포함하는 정규표현식일 경우, 캡쳐링된 결과도 배열에 포함된다. 

```js
const mySting = 'Hello 1 word. Sentence number 2.';
// 캡쳐링을 사용하지 않는 경우
myString.split(/\d/); // ["Hello ", " word. Sentence number ", "."] 숫자 부분을 찾아내 제거되고 분할되었다.

// 캡쳐링을 사용한 경우
myString.split(/(\d)/); // ["Hello ", "1", " word. Sentence number ", "2", "."] 숫자부분도 같이 포함되었다.
```

`\d` 는 character class에서 0부터 9사이의 수와 일치한다.

### split()으로 문자열 뒤집기
```js
const str = 'asdfghjk1';
str.split('').reverse().join(''); // "1kjhgfdsa"
// split()에서 반환하는 배열에는 reverse()와 join()을 사용할 수 있다.
```

이 방법은 문자열 뒤집기에 효과적인 방법이 아니다.

문자열에 grapheme clusters가 있을 경우, 유니코드 플래그를 설정해도 오류를 일으킵니다.

(esrever 등의 라이브러리를 대신 사용하라)

```js
const str = 'résumé';
str.split(/(?:)/u).reverse().join(''); // "émusér"
```

`===` 를 사용하면 palindrome(앞에서 부터 읽으나 뒤에서 부터 읽으나 동일한 단어)인지 확인할 수 있다. 
