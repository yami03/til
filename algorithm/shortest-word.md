# Shortest Word

[Shortest Word Link](https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9)

## 문제 이해

> Simple, given a string of words, return the length of the shortest word(s).
>
> String will never be empty and you do not need to account for different data types.

문장에서 가장 짧은 단어를 찾아내어 단어의 수를 return 한다.

## 해결 방법

* 단어를 Array 메소드인 split를 이용해 배열의 원소로 담는다.
* for문을 이용해 원소의 가장 짧은 단어의 length를 변수에 담는다.
* length를 담은 변수를 return 한다.

## 코드 구현

```js
function findShort(s){
  var array = s.split(' ');
  var textLength = array[0].length;
  
  for(var i = 1; i < array.length; i++) {
    if(textLength > array[i].length) {
      textLength = array[i].length;
    }
  }
  
  return textLength;
}
```

## 결과 분석

통과

### codewars user's solution

[sgmaster](https://www.codewars.com/users/sgmaster), [Armand](https://www.codewars.com/users/Armand), [naiqum](https://www.codewars.com/users/naiqum), [3421412](https://www.codewars.com/users/3421412), [robinab](https://www.codewars.com/users/robinab), [kalamisu](https://www.codewars.com/users/kalamisu) (plus 42 more warriors)

```js
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
```

```js
function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
```

두개의 solution 다 Math,min을 사용하였다.

차이는 apply를 이용해 배열을 열거 하거나 spread 연산자를 사용하였다.

