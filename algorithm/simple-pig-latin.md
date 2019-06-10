# Simple Pig Latin

[Codewars Link](https://www.codewars.com/kata/520b9d2ad5c005041100000f) 

## 문제

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

**Examples**

```js
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
```

## 문제 이해

1. 단어의 첫번째 알파벳을 맨 뒤로 옮긴다. 
2. 단어마다 끝에 'ay'를 붙인다.
3. 특수문자는 그대로 나온다.

## 해결 방법

1. 단어마다 접근하기 위해 문자열를 배열로 만든다.
2. 사용하기 좋은 메서드
   1.  **concat()** - 메서드는 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환
		* 'ay'를 붙일 때 사용하기 좋을 거 같다.
   2.  **slice()** - 메소드는 문자열의 일부를 추출하면서 새로운 문자열을 반환합니다.
		* 첫번째 알파벳을 자를 때 사용한다. 
   3.  **split()** - 메서드는 String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눕니다.
       * 배열로 만들 때 유용하다.
   4.  **join()** - 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.**
       * 문자열로 return 할 때 사용한다.
3. !와 ?는 그대로 나온다. 

## 코드 구현

```js
function pigIt(str) {
  const result = str.split(' ').map(word => {
    if (word !== '!' && word !== '?') {
      word = word + word[0] + 'ay';
      word = word.slice(1);
    }
    return word;
  }).join(' ');
  return result;
}
```

## 결과 분석

랜덤 테스트 통과

###### [@e.mihaylin](https://www.codewars.com/users/e.mihaylin)'s Solution

```js
pigIt = s => s.split(' ').map(e => e.substr(1) + e[0] + 'ay').join(' ');
```

나는 첫번째를 제거했지만..
이 소스는 인덱스 1부터 문자열을 만들기 때문에 slice를 할 필요가 없다.

대신 내가 푼 문제는 변경된 문제라 이 솔루션은 '!'와 '?'에도 'ay'가 붙는다.

[js파일 바로가기](https://github.com/yami03/algorithm/blob/master/Codewars/13%20-%20Simple%20Pig%20Latin/pigIt.js)