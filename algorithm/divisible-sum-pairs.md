# Divisible Sum Pairs

합해서 나눠떨어지는 쌍 찾기

## 문제

정수로 이루어진 배열 ar과 양의 정수 k가 있습니다.
다음과 같은 조건을 만족하는 배열 원소들의 쌍의 개수를 반환하는 함수를 작성해주세요.

i < j 이다.
ar[i] + ar[j] 는 k의 배수이다.

예를들어, 
ar = [1, 2, 3, 4, 5, 6] 이고 k = 5 일때, 조건을 만족하는 쌍은 [1, 4], [2, 3], [4, 6] 세 쌍입니다.
그러므로 결과값은 3이 나와야 합니다.

```js
/*
* @param {number} k
* @param {numnber[]} ar
* @return {number}
*/
divisibleSumPairs(k, ar) {
    //code
}     
```

## 문제 이해

배열 ar의 원소를 가지고 k의 배수를 찾는 문제이다.
특이한 점은

>i < j 이다.
>ar[i] + ar[j] 는 k의 배수이다.

첫번째 피연산자가 두번째 피연산자보다 인덱스 수가 크면 안된다.



## 해결 방법

1. 결과값을 나타낼 count 변수를 만든다.
2. forEach문 안에 for문을 써 forEach문은 첫번째 피연산자를 구하고 for문으로 초기문을 첫번째 피연산자보다 +1한 값으로 시작한다.
3. 두 값을 더한다.
4. % 나머지 연산자를 이용해 나머지가 0일 경우 count 변수에 +1 해준다.

## 코드 구현

```js
function divisibleSumPairs(k, ar) {
  // Complete the divisibleSumPairs function.
  let count = 0;

  ar.forEach((num,idx) => {
    for (let j = (idx + 1); j < ar.length; j++) {
      if ((num+ar[j])%k === 0) {
        count++  
      }
    }    
  });
  return count;
}
```

## 결과 분석

테스트 통과 