# string.charAt

charAt() method는 특정 인덱스에 위치한 문자에 접근하는 방법으로 하나의 UTF-16 코드로 구성된 새 문자열을 반환한다.

```js
const title = "The Phantom of The Opera - FULL STAGE SHOW";

const index = 4;

console.log(title.charAt(index)); // expected output: P
```



## Syntax

```js
character = str.charAt(index)
```

### Parameters

**index**

0과 string의 length보다 -1인 정수. 
인덱스가 제공되지 않으면 default가 0이 되어 첫번째 문자를 반환한다.

### Return value

지정된 인덱스에서 문자(정확히 하나의 UTF-16코드)를 나타내는 문자열이다.

index 범위를 벗어난 경우 빈 문자열

## Examples

### 문자열 내의 다른 위치에 있는 문자들 출력하기

```js
const anyString = "it will be available to watch until Sunday 11am PT / 2pm ET**";
console.log(`index:0, character: ${anyString.charAt(0)}`);
console.log(`index:1, character: ${anyString.charAt(1)}`);
console.log(`index:2, character: ${anyString.charAt(2)}`);

index:0, character: "i"
index:1, character: "t"
index:2, character: ""
```

### 전체문자 얻기

문자열에 기본 다국어 평면에 없는 문자가 포함 된 경우에도 문자열 루프를 통과할 때 항상 전체 문자를 제공하도록 하는 방법

비구조화 할당을 사용하는게 더 간결하고, 문자가  surrogate pair가 되는것을 허용할 때는 증가해야 하는 변수를 자동적으로 증가하기에 더 유연하다.

https://ko.wikipedia.org/wiki/UTF-16 🧐

```js
let str = 'A\uD87E\uDC04Z';

for (var i = 0, chr; i < str.length; i++) {
  console.log(str.charAt(i));
}

// expected output: "A"
// "�"
// "�"
// "Z"

console.log(str.charAt(1) + str.charAt(2)) // "你"
```

for문을 그냥 돌리면 `"�"`

이 문자에 사실 한자 1개인데 "�" X 2개가 나왔다.
Surrogate pair는 두개의 쌍으로 이루어진 문자이기 때문이다. 

UTF-16 코드가 6만 5천 글자를 넘어서는 글자들을 표현하기 위해 도입되었는데.. 

Supplementary Characters는 유니코드의 2바이트 기본 범위에 속하는 BMP(Basic Multilingual Plane: Plane 0) 영역을 넘어선 글자들을 말하고 Surrogate Pair는 이 범주에 속하는 Supplementary Characters를 표현하기 위해 UTF-16에 도입된 인코딩 방식이다.
16비트 코드 두개를 사용하여 문자 하나를 표현한 것을 surrogate pair라고 하며 high surrogate, low surrogate로 이루어짐

```js
let str = 'A\uD87E\uDC04Z'; // 또한 비 BMP 문자를 직접 사용할 수도 있다.

for (let i = 0, chr; i < str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i);
  // 전체 문자열과 현재 current iterationd을 전달하고
	// 개별 문자와 i값을 가진 Array를 반환한다.(surrogate pair 있는 경우에만 변경된다.)
  
  console.log(chr);
}

function getWholeCharAndI(str, i) {
  let code = str.charCodeAt(i);
  
  if(Number.isNaN(code)) {
    return ''; // 위치를 찾을 수 없음
  }
  
  if(code < 0xD800 || code > 0xDFFF) {
    return [str.charAt(i), i]; // Normal character, 'i'는 그대로 유지
  }
  
  // High surrogate
	// high private surrogates를 단일 문자로 처리하기 위해 마지막 16진수를 0xDB7F로 변경할 수 있음
  if(0xD800 <= code && code <= 0xDBFF) {
    // 16비트 코드 두개를 사용하여 문자 하나를 표현한 것을 surrogate pair라고 하며 high surrogate, low surrogate로 이루어짐
    // low surrogate가 없는 경우
    if(str.length <= (i + 1)) {
      throw 'High surrogate without following low surrogate';
    }
    
    let next = str.charCodeAt(i + 1);
    if(0xDC00 > next || next > 0xDFFF) {
      throw 'High surrogate without following low surrogate';
    }
   	return [str.charAt(i) + str.charAt(i + 1), i + 1];
  }
  
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if(i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  let prev = str.charCodeAt(i - 1);
  
  // high private surrogates를 단일 문자로 처리하기 위해 마지막 16진수를 0xDB7F로 변경할 수 있음
  if(0xD800 > prev || prev > 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate';
  }
  
  // 대신 다음 문자 반환(및 증가)
  return [str.charAt(i + 1), i + 1];
}
```

### non-Basic-Multilingual-Plane 문자들을 지원하도록 `charAt()` 고치기

non-BMP 문자들을 지원하는 예는 👆 위 예제들이 더 자주 사용되지만, 인덱스로 문자를 선택하는데 있어서 문자열 내에 Surrogate Pair가 하나의 문자열로 처리되길 원한다면! 👇

```js
let str = 'A\uD87E\uDC04Z';

console.log(fixedCharAt(str,1));

function fixedCharAt(str, idx) {
  let ret = '';
  str += '';
  let end = str.length;

	let surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str) != null)) {
    let li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx ++
    } else {
      break;
    }
  }
  
  if(idx >= end || idx < 0) return '';
  
  ret += str.charAt(idx);
  
  if(/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx + 1))) {
    ret += str.charAt(idx + 1);
  }
  
  return ret;
}
```


