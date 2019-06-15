# Find the odd int

홀수 번 나타나는 정수 찾기

[Codewars Link](<https://www.codewars.com/kata/54da5a58ea159efa38000836>)

## 문제

주어진 배열에서, 홀수 번 나타나는 정수를 찾아주세요. 단, 홀수 번 나타나는 정수는 항상 한개뿐입니다.

예를들어, [1, 1, 1, 1, 10] 에서 1은 4번 나타나고, 10은 1번 나타나므로, 홀수 번 나타나는 정수는 10 입니다.

```js
// @param { Array } n

function findOddInt (n) {
    //happy coding!
}
```

## 문제 이해

정확한 이해를 위해 테스트 인자를 확인해 보자 

```js
expect(findOddInt([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).to.eql(5);

expect(findOddInt([9])).to.eql(9);

expect(findOddInt([1, 1, 1, 1, 1, 1, 3, 3, 3])).to.eql(3);

expect(findOddInt([5, 6, 4, 6, 5, 7, 1, 5, 7, 6, 5, 7, 6, 4, 1])).to.eql(7);
```

특별히 더 요구하는 사항은 없다.
배열에서 들어오는 숫자중 반복 횟수가 정확히 홀수인 원소를 찾는다.

## 해결 방법

1. 원소마다의 들어간 횟수를 체크하는데 **이전에 체크한 원소인지 정확하게 판단한다.**

1. 체크한 원소는 따로 배열에 담는다.

1. 홀수 개수인지 체크

4. 맞다면 return 

## 코드 구현

```js
function findOddInt (n) {
  let newN = [];
  let overlap = false;
  let count = 1;
  let answer;

  n.forEach((num, idx) => {
    
    // 이전 체크한 숫자인지 체크한다.
    for (let newNum of newN) {
      if (num === newNum) {
        overlap = true;
        break;
      }
      overlap = false;
    }

    // 이전에 체크한 숫자가 아니라면, 
    if (!overlap || idx === 0) {
      newN.push(num);

      // num 의 index 다음자리부터 개수를 체크
      for (let checkNum = (idx + 1); checkNum < n.length; checkNum++) {
        if (n[checkNum] === num) {
          count++;
        }  
      }

      // 홀수 개수인지 체크
      if (count % 2 === 1) {
        answer = num;
      }

    }
    //count 리셋
    count = 1;
  });

  return answer;
}
```

## 결과 분석

랜덤테스트 통과

**[harms280](https://www.codewars.com/users/harms280), [ChingChangChong](https://www.codewars.com/users/ChingChangChong), [oscar6654](https://www.codewars.com/users/oscar6654), [aaronbulnes](https://www.codewars.com/users/aaronbulnes), [ghismovd](https://www.codewars.com/users/ghismovd), [Jaykobee](https://www.codewars.com/users/Jaykobee)'s Codewars Solution**

```js
function findOddInt(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
```

새로운 배열을 만들어서 findOddInt 함수의 인자 배열에서 원소가  key가 되고 그 key의 개수가 value가 된다.
전부다 담게 되면 value값이 홀수인 key를 리턴해 준다.

**[Unnamed](https://www.codewars.com/users/Unnamed), [classic016](https://www.codewars.com/users/classic016), [Fantom1991](https://www.codewars.com/users/Fantom1991), [TroyMaeder](https://www.codewars.com/users/TroyMaeder), [saiful_coder](https://www.codewars.com/users/saiful_coder), [dany.dlinker](https://www.codewars.com/users/dany.dlinker)'s Codewars Solution**

```js
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
```

이거슨.. [^ (비트 XOR)](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Bitwise_XOR>) 관한 solution인데 아직 잘 모르겠다. 

