# String.prototype

* **@@iterator**

  `code point` 를 반복하는 new `Iterator` object 반환한다.

  `str[Symbol.iterator]`

* **charAt**

  특정 인덱스에 위치한 문자에 접근하는 방법, `UTF-16 코드`로 구성된 새 문자열을 반환한다. 16비트 코드 두개로 구성된 Surrogate Pair같은경우 🙅‍♀️
  `str.charAt(index)`
  
* **charCodeAt**

  주어진 인덱스에 대한 `UTF-16 code unit`을 나타내는 0 - 65535 사이의 정수를 반환한다. Surrogate Pair 인 경우 첫번째 part가 반환된다.

  `str.charCodeAt(index)`

* **codePointAt**

  `Unicode code point` 를 정수로 반환

  `str.codePointAt(pos)`

* **fromCharCode**

  `UTF-16 코드 유닛의 시퀀스`에서 문자열로 만들어서 반환 (0 - 65535 까지)

  `String.fromCharCode(num1, [,... [, numN ]])`

* **fromCodePoint**
  `유니코드 코드 포인트 시퀀스` 를 이용해 문자열을 만들어서 반환
  `String.fromCodePoint(num1, [, ...[ numN ]])`

* **includes**
  주어진 문자열 내에서 검색 문자가 존재하면 `true` 그렇지 않다면 `false`

  `str.includes(searchString[, position])`

* **indexOf**
  주어진 문자열 내에서 검색 문자가 처음 시작되는 index값을 반환한다. 존재하지 않을 경우 `-1` 을 반환한다.

  `str.indexOf(searchValue, [, fromIndex])`

* **lastIndexOf**

  주어진 문자열 내에서 역방향으로 검색 문자를 찾기 시작하여 뒤에서 부터 처음 시작되는 index 값을 반환한다. 존재하지 않을 경우 -1을 반환한다.

  `str.lastIndexOf(sarchValue[, fromIndex])`

* **length**

  `UTF-16 코드 유닛` 기준으로 문자열 길이를 나타낸다. Surrogate Pair인 경우 실제 문자와 일치하지 않을 수 있다.

  `string.length`

* **localeCompare**

  참조 문자열과 비교 했을 때 정렬된 순서가 인수로 주어진 문자열(비교하는 문자열)보다 앞에 배치되는 경우 음수를 반환하고, 참조 문자열이 다음에 배치되는 경우 양수를 반환한다. 0은 동등하다.

  `referenceStr.localeCompare(compareString[, locales, [, options]])` 

* **match**

  문자열에서 정규식과 매치되는 부분을 검색한 결과를 받는다.

  `str.match(regexp)`

* **matchAll**

  그룹캡쳐를 포함하여 정규식에 대한 문자열과 일치하는 모든 결과의 반복자(iterator) object가 반환된다.

  `str.matchAll(regexp)`

* **padStart**

  현재 문자열에서 지정된 길이에 도달할 때까지 공백 혹은 지정된 문자열로 채운다. (필요한 경우 여러번) 문자열의 `시작(왼쪽)`부터 적용된다.

  `str.padStart(targetLength, [, padString])`

* **padEnd**

  현재 문자열에서 지정된 길이에 도달할 때까지 공백 혹은 지정된 문자열로 채운다. (필요한 경우 여러번) 문자열의 `끝(오른쪽)` 부터 적용된다.

  `str.padEnd(targetLength, [, padString])`
  
* **raw**

  주어진 template 문자열의 원시 문자열이다. 대체(예 ${foo}) 처리가 되지만 이스케이프(예 \n)는 처리되지 않는다.

  `String.raw(callSite, ...substitutions)`
	
	<pre>string.raw`templateStrimg`</pre>
	
* **repeat**
  호출된 문자열에서 사본을 포함 연결하여 지정된 횟수의 새 문자열을 구성하고 반환한다.

  `str.repeat(count)`

* **replace**

  문자열이 일치하는 부분 또는 정규식에 일치하는 부분 또는 전체를 replacement(문자열이나 함수)로 대체하여 새로운 문자열을 반환한다.

  `const newStr = str.replace(regexp\substr, newSubstr\function);`

* **search**

  주어진 문자열에서 정규표현식 객체와 가장 처음 매치되는 index를 반환한다. 매치되지 않는다면 -1을 반환한다.

  `str.search(regexp)`

* **slice**

  문자열에서 텍스트를 추출하여 새 문자열을 반환한다. endIndex는 포함하지 않는다.

  인자가 음수라면 str.length + beginIndex / str.length +endIndex를 한다.

  양수의 경우 beginIndex > indexEnd일 경우 빈 문자열을 반환한다.

  NaN은 0으로 취급한다.

  `str.slice(beginIndex,[, endIndex])`

* **substring**

  문자열에서 텍스트를 추출하여 새 문자열을 반환한다. endIndex는 포함하지 않는다.

  인자가 음수나 NaN 이라면 메서드는 이를 0 으로 취급 한다.

  양수의 경우 beginIndex > indexEnd일 경우 두 개의 index를 스왑한다.

* **split**

  문자열이나 정규표현식을 패턴으로 문자열 집합을 나누고(발견된 문자열은 삭제된다.) 이러한 하위 문자열을 배열로 넣은 다음 배열에 반환한다.

  빈문자열('')이 인자로 제공되면 문자하나씩으로 나누는 것이 아니라, UTF-16 코드 유닛으로 나뉘게 되어 surrogate pair가 망가질 수 있다.

  `str.split([separator[, limit]])`

* **startsWith**

  문자열이 지정된 문자로 시작하는지 확인하여 결과를 `true` 혹은 `false` 로 반환한다.

  `str.startsWith(searchSting[, position])`

* **endsWith**

  문자열이 지정된 문자로 끝나는지 확인하여 결과를 `true` 혹은 `false` 로 반환한다.

  `str.endsWith(searchString[, length])`

* **toLocaleLowerCase**

  임의의 locale 고유의 케이스 매핑에 따라 참조 문자열 값을 소문자로 변환하여 반환한다.

  `str.toLocaleLowerCase()`

  `str.toLocaleLowerCase(locale)`

  `str.toLocaleLowerCase([locale, locale, ...])`

* **toLocaleUpperCase**

  임의의 locale 고유의 케이스 매핑에 따라 참조 문자열 값을 대문자로 변환하여 반환한다.

  `str.toLocaleUpperCase()`

  `str.toLocaleUpperCase(locale)`

  `str.toLocaleUpperCase([locale, locale, ...])`

* **toLowerCase**

  호출 문자열 값을 소문자로 변환하여 새로운 문자열을 반환한다.

  `str.toLowwerCase()`

* **toUpperCase**

  호출된 문자열 값을 대문자로 변환하여 새로운 문자열을 반환한다.

  `str.toUpperCase()`

* **trim**

  문자열 양 끝의 공백을 제거하여 새로운 문자열을 반환한다.

  `str.trim()`

* **trimStart**

  문자열 시작부분의 공백을 제거하여 새로운 문자열을 반환한다. trimLeft()는 이 메서드의 별칭이다.

  `str.trimStart()`

  `str.trimLeft()`

* **trimEnd**

  문자열 끝의 공백을 제거하여 새로운 문자열을 반환한다. trimRight()는 이 메서드의 별칭이다.

  `str.trimEnd()`

  `str.trimRight()`

* **toString**

  String object를 나타내는 문자열을 반환한다. Object.prototype.toString()을 상속하지 않는다. String.prototype.valueOf()와 동일

  `str.toString()`

* **valueOf**

  String 객체의 원시 값을 문자열 데이터 타입으로 변환한다. 이 값은 String.prototype.toString()과 동일

  `str.valueOf()`



  