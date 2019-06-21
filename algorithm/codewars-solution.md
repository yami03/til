### Counting Duplicates  - 앞 문자열과 마지막 문자열을 비교

---

[link](https://www.codewars.com/kata/counting-duplicates/javascript) 배열에서 2번이상의 문자가 들어있는 문자의 수

[@glalev](https://www.codewars.com/users/glalev), [@ChungGor](https://www.codewars.com/users/ChungGor), [@Pradeep Reddy](https://www.codewars.com/users/Pradeep Reddy), [@larokey](https://www.codewars.com/users/larokey), [@sahalatobing](https://www.codewars.com/users/sahalatobing), [@ellie-grace](https://www.codewars.com/users/ellie-grace)

```js
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}
```

filter를 통해 2번이상 들어 있는 문자만의 배열을 새롭게 만드는데,  `arr.indexOf(val) !== i`와 `arr.lastIndexOf(val) === i;`를 통해 맨 마지막 문자열과 앞의 문자열이 중복된게 있는지 체크 해준다. 

### DubstepDubstep -  특정글자 잘라내기

---

[link](<https://www.codewars.com/kata/551dc350bf4e526099000ae5>) WUB라는 글자가 나오면 삭제하고 나머지 글자 사이엔 하나의 공백만 넣는다.

```js
function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}
```

split를 사용하여 'WUB'를 제거하는 효율적인 방법이 놀랍다. 또한 split 이후 filter로 배열의 원소가 `""` 공백인 곳을 잡아준다. 매우 효율적으로만 구성된 코드다. 