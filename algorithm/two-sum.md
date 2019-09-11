# Two Sum

[LeetCode 바로가기](https://leetcode.com/problems/two-sum/)

## 문제

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **exactly** one solution, and you may not use the *same* element twice.

**Example:**

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
```

## 문제 이해

* 첫번째 인자로 숫자들로 이루어진 배열이 들어옴
* 두번째 인자는 첫번째 요소로 들어온 배열요소에서 2개를 이용하여 더한값이 두번째 인자 값이 되어야 한다.
* 리턴값은 `[인덱스, 인덱스]`

## 해결 방법

* for문을 돌려 배열을 순회한다.
* slice를 통해 index + 1 한 요소에서 target을 만들 수 있는 요소를 찾는다.

## 코드 구현

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        const number = target - nums[i];
        const index = nums.slice(i + 1).indexOf(number);
        if(index >= 0) return [i, index + i + 1];
    }
};
```



## 결과 분석

Runtime: **176 ms**

Memory Usage: **41.1 MB**