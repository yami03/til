# The Office III - Broken Photocopier

[CodeWars 링크](https://www.codewars.com/kata/57ed56657b45ef922300002b/solutions/javascript)
오피스 3탄 왜 난이도가 낮아지는가.. :disappointed:

## 문제

The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!
Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.
Given a string of binary, return the version the photocopier gives you as a string.

## 문제 이해

피묻은(?) 복사기가 고장났는데.. 
복사를 하면 0 -> 1로 1 -> 0으로 된다.

**Sample Tests**

```js
function broken (x) {}

assertSimilar(broken("1"), "0");
assertSimilar(broken("10000000101101111110011001000"), "01111111010010000001100110111");
assertSimilar(broken("100010"), "011101");
```

## 해결 방법

* 매개변수를 String.prototype.split()을 이용해 string을 배열로 만든다.
* 배열이 된 x를 Array.prototype.map()을 사용해 요소 하나하나에 접근하여 0 -> 1, 1 -> 0으로 
  바꿔 새로운 배열을 return 한다.
* Array.prototype.join()으로 string으로 return한다.

## 코드 구현

```js
function broken(x) {
  var result = x.split('').map(num => {
    var val = num === '0' ?  1 : 0;
    return val;
  }).join('');

  return result;
}
```

## 결과 분석

랜덤 테스트 통과

@[mordoss](https://www.codewars.com/users/mordoss), [user5036852](https://www.codewars.com/users/user5036852), [jsheng1996](https://www.codewars.com/users/jsheng1996)'s Solution

```js
function broken(x){
  return x.split('').map(a => a == "0" ? "1" : "0").join('');
}
```

아앗 내 소스에서

```js
var val = num === '0' ?  1 : 0;
```

가 아쉬웠는데 이 부분을 

```js
num === '0' ?  1 : 0;
```

이렇게 arrow 함수의 한줄 return으로 사용할껄 아쉬움이 남는다.

[js 파일 바로가기](https://github.com/yami03/algorithm/blob/master/Codewars/08%20-%20The%20Office%20III%20-%20Broken%20Photocopier/broken.js)

