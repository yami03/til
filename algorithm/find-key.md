# find key

컵 돌리기 게임

## 문제

세 개의 뒤집힌 컵 중 한 개의 컵 안에 열쇠가 있습니다.
당신이 열쇠를 찾기 위해 컵을 들어올리려는 순간, Drogon이 빠르게 컵의 위치를 뒤섞기 시작합니다.
컵의 교환이 끝났을 때, 열쇠가 들어있는 컵을 찾아야 합니다.

* 컵의 위치는 인덱스로 표현됩니다. (0부터 시작)

* 키가 들어있는 컵의 인덱스와 교환된 컵의 인덱스를 나타내는 배열(swaps)을 입력으로 받습니다.

예를들어, 열쇠가 들어있는 컵의 처음 위치가 `0`이고 컵이 교환되는 순서가 다음과 같다면 [(0, 1), (1, 2), (1, 0)]

* 첫 교환때 열쇠가 있는 컵은 0 에서 1로 이동하게 됩니다.
* 두번째 교환때 열쇠가 있는 컵은 1 에서 2로 이동하게 됩니다.
* 마지막 교환때 1에 있는 컵이 0으로 가지만, 열쇠가 있는 컵에는 영향을 미치지 않습니다.
* 따라서 열쇠가 있는 컵의 위치는 2가 됩니다.

swaps = [[0, 1], [1, 2], [1, 0]]
firstPosition = 0
findKey(firstPosition, swaps) == 2

컵의 갯수는 최소한 두 개 이상입니다.

```js
/*
* @param {number} start
* @param {number[]} swaps
* @return {number}
*/

findKey (start, swaps){
    //code
}
```

## 문제 이해

첫번째 인자는 열쇠의 위치이다.
두번째 인자로 들어온 배열안의 배열에서 열쇠의 위치를 찾고 -> 바뀐위치를 기억 -> 열쇠 추적 -> 바뀐 위치가 있을 시 기억 ->.. 두번째 인자가 끝날 때 까지 추적한다!

## 해결 방법

1. start 인자의 값을 가진 배열을 찾는다.
2. 같은 숫자인 인덱스가 0이면 인덱스 1의 숫자를 변수에 담는다. 인덱스 1의 숫자와 같다면 인덱스2의 숫자에 변수에 담는다. 
3. swaps의 배열을 총 다 돌았다면 마지막으로 담은 숫자를 return 해준다.

##  코드 구현

```js
function findKey (start, swaps){
  // Complete the findKey function.
  let position = start;
  const startIdx = 0;
  const endIdx = 1;

  swaps.forEach(cup => {

    //첫번째 위치와 두번째위치에 이동한 숫자와 일치하는지 판별 
    if (cup[startIdx] === position) {
      position = cup[endIdx];
    } else if (cup[endIdx] === position) {
      position = cup[startIdx];
    }

  });
  return position;
}
```

## 결과 분석

테스트 통과

> startIdx 와 endIdx 변수를 굳이 만들 필요 없다는 피드백을 받았습니다.

:white_check_mark: 하드코딩을 안하기 위해 변수를 담게 되었지만 0과 1이라는 분명한 값은 직접 입력하는게 더 낫다.

