# Directions Reduction

[Codewars Link](https://www.codewars.com/kata/550f22f4d758534c1100025a)

## 문제

**Once upon a time, on a way through the old wild west,…**

… a man was given directions to go from one point to another. The  directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and  "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and  coming back the opposite direction is a needless effort. Since this is  the wild west, with dreadfull weather and not much water, it's important  to save yourself some energy, otherwise you might die of thirst!

**How I crossed the desert the smart way.**

The directions given to the man are, for example, the following:

```
["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
```
You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable, better stay to the same place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
```js
["WEST"]
```

**Other examples:**

In` ["NORTH", "SOUTH", "EAST", "WEST"]`, the direction `"NORTH" + "SOUTH"` is going north and coming back right away. What a waste of time! Better to do nothing.

The path becomes `["EAST", "WEST"]`, now `"EAST"` and `"WEST"` annihilate each other, therefore, the final result is [] .

In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

**Task**

Write a function `dirReduc` which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

The Haskell version takes a list of directions with `data Direction = North | East | West | South`. The Clojure version returns nil when the path is reduced to nothing. The Rust version takes a slice of enum `Direction {NORTH, SOUTH, EAST, WEST}`.

**Examples**

```js
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => ["WEST"]
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
```

**Note**

Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible. "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].

## 문제 이해

문제 설명이 매우 친절하다.

배열을 쭉 훑는데 `"WEST" <-> "EAST"`, `NORTH<->SOUTH`가 겹치면 두 요소를 제거한다. 
그리고 다시 처음부터 체크해서 제거하고 다시 처음부터 체크해서 또 제거한다. 

그리고 최종 남은 요소를 return 한다.



## 해결 방법

1. 동서남북을 담은 배열을 만든다.
2. 배열 요소 하나하나에 접근한다.
3. 배열요소와 동서남북을 담은 배열과 매치해 그 다음 요소로 오면 안되는게 있는 지 확인한다.
4. 있다면 현재 요소와 다음 요소를 삭제한다.
5. 다시 2로 돌아간다.
6. 겹치는 요소가 없다면 return 한다.



## 코드 구현

```js
function dirReduc(arr) {
  const compass = ["NORTH", "SOUTH", "WEST", "EAST"];

  arr.map((dir, idx) => {
    let MatchIdx = compass.findIndex(ele => {
      return dir === ele;
    });
    
    let comIdx = MatchIdx % 2 ? MatchIdx - 1 : MatchIdx + 1;

    if (arr[idx + 1] === compass[comIdx]) {
      arr.splice(idx, 2);
      dirReduc(arr);
    };
  });

  return arr;
}
```



## 결과 분석

random 테스트 통과

**[Unnamed](https://www.codewars.com/users/Unnamed), [Meow](https://www.codewars.com/users/Meow), [Quantumke](https://www.codewars.com/users/Quantumke), [JeffP6](https://www.codewars.com/users/JeffP6), [jmcilhargey](https://www.codewars.com/users/jmcilhargey), [Dimzdey](https://www.codewars.com/users/Dimzdey)'s Solution**

```js
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH',
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  };
  return plan.reduce(function (dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir])
      dirs.pop();
    else
      dirs.push(dir);
    return dirs;
  }, []);
}
```

변수명이 마음에 든다. opposite 
else도 한줄로 쓸 수 있구나.

opposite 객체로 만든게 훨씬 깔끔하고 가독성이 좋다.

`pop()`은 배열에서 **마지막 요소**를 제거 한다.

내 코드의 단점은 

1. 확인한 요소를 다시 처음부터 확인해야 한다.
2. 재귀함수를 이용했기 때문에 새로운 배열에 담을 수 없다.

를 단점으로 가졌는데 이 solution에선 이러한 점이 보안되어있다.

**배열을 검수하는 일을 reduce를 사용해 새로운 배열을 만들었다.**

```js
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"]) => []
```

만약 이런예시가 있다면,

1. 이전요소가 없기 때문에 맨처음 dirs에는 "NORTH"가 담긴다.
2. dirs의 마지막 요소와 배열의 현재요소와 비교
   1.   "NORTH" === opposite["SOUTH"] 는 같다
   2.   dirs에서 "NORTH"는 제거 된다.
3. 이전요소가 없기 때문에 "SOUTH"가 담긴다.
4. "SOUTH" === opposite["EAST"] 는 같지 않기 때문에 "EAST"는 dirs에 담긴다.
5. "EAST" === opposite["WEST"] 와 같기 때문에 dirs에서 "EAST"는 제거 된다.
6. dirs배열엔 "SOUTH"만 남는다.
7. "SOUTH" === opposite["NORTH"] 같기 때문에 "SOUTH" 제거 된다. 
8. 빈 배열만 return 한다.

내가 짠 코드는 현재요소와 다음요소만을 비교하여 제거했기 때문에 
검수가 완벽하다고 할 수 없다.
이전요소가 새로운 환경이 될 수 있는 가능성에 처음부터 다시 배열을 검수 했다.

하지만 이 코드는 이전요소와 현재 요소를 비교하여 이전요소를 삭제하기 때문에 
이전요소가 새로운 환경에 따른 상황에 훨씬 대응하기 편한 코드이다.

 [js파일보기](https://github.com/yami03/algorithm/blob/master/Codewars/12 - Directions Reduction/dirReduc.js)

