## Codewars 이용자 솔루션 모음

### Counting Duplicates  - 앞 문자열과 마지막 문자열을 비교

---

[link](https://www.codewars.com/kata/counting-duplicates/javascript) 배열에서 2번이상의 문자가 들어있는 문자의 수

[@glalev](https://www.codewars.com/users/glalev), [@ChungGor](https://www.codewars.com/users/ChungGor), [@Pradeep Reddy](https://www.codewars.com/users/Pradeep Reddy), [@larokey](https://www.codewars.com/users/larokey), [@sahalatobing](https://www.codewars.com/users/sahalatobing), [@ellie-grace](https://www.codewars.com/users/ellie-grace)'s Solution

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

[@VictorArias](https://www.codewars.com/users/VictorArias), [@Smoggy](https://www.codewars.com/users/Smoggy), [@etselp](https://www.codewars.com/users/etselp), [@Firedrake969](https://www.codewars.com/users/Firedrake969), [@Psycho](https://www.codewars.com/users/Psycho), [@cmac2992](https://www.codewars.com/users/cmac2992)'s Solution

```js
function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}
```

split를 사용하여 'WUB'를 제거하는 효율적인 방법이 놀랍다. 또한 split 이후 filter로 배열의 원소가 `""` 공백인 곳을 잡아준다. 매우 효율적으로만 구성된 코드다. 



### Rectangle into Squares - 정사각형의 개수 구하기
---

[link](Rectangle into Squares) 인자로 가로(a)와 세로값(b)을 받으며 가장 큰 정사각형부터 시작하여 총 몇개의 정사각형이 나올 수 있는지에 관한 문제이다. 같은 자리에 작은 정사각형은 세지 않는다.

[@sulkowski](https://www.codewars.com/users/sulkowski)'s Solution

```js
function sqInRect(a, b, initial = true){
  if (a === b) { return initial ? null : [a] }  
  const min = Math.min(a, b)
  const max = Math.max(a, b)
    
  return [min, ...sqInRect(max - min, min, false)]
}
```

return을 본인으로 하여 재귀함수가 되지만 신선한건 재귀값들을 배열로 만들었다는 점이다.

a와 b가 같아질때까지 계속 재귀함수가 실행되고 
return []안에는 min값이 계속쌓이고 
마지막 `a === b`같아지는 순간에는 [a]가 리턴되는데 
이 값은 ...으로 destructuring되어 
맨처음 시작했던 함수에서 최종적으로 모든 min값이 return되는 
정말 재밌고 신기한 구조쓰

 ### Snail

---

[link](https://www.codewars.com/kata/snail/javascript) 인자로는 배열을 받는데 nxn 의 정사각형의 각각 숫자를 배열로 받는다.
배열안에 배열로 구성되어 있다.

```js
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]

//return 값 
//snail(array) #=> [1,2,3,6,9,8,7,4,5]
```

[@altrubypirate](https://www.codewars.com/users/altrubypirate), [@xiaright](https://www.codewars.com/users/xiaright), [@Unihedron](https://www.codewars.com/users/Unihedron), [@YGYOOO](https://www.codewars.com/users/YGYOOO), [@link.](https://www.codewars.com/users/link.), [@theyellowkang](https://www.codewars.com/users/theyellowkang)'s Solution
```js
snail = function(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}
```

result에 들어간 요소들은 처음받은 array에서 제거된다.
정확하게 정사각형이 도는 순환구조대로 짜져있으며 
array는 계속 수정되므로 length가 없을때는 result가 return된다.

### By 3, or not by 3

---

type이 string인 숫자를 인자로 받아 총합이 3으로 나뉘어 지는지에 대한 알고리즘

[Voile](https://www.codewars.com/users/Voile)'s Solution

```js
function divisibleByThree(str){
  return [...str].reduce((s,d)=>+d+s,0)%3===0;
}
```

str을 split('')을 사용하지 않고 배열로 만든점이 신선하다.
또한 아직 문자열을 `+d+s`로 하여(순서를 바꿈) 숫자로 바꿔버림.

### Sum of Digits / Digital Root

---

[link](https://www.codewars.com/kata/sum-of-digits-slash-digital-root/javascript) 인자로 받은 숫자가 계속 더하여 한자리가 되면 리턴한다!

```js
digital_root(16)
=> 1 + 6
=> 7
```

[Balkoth](https://www.codewars.com/users/Balkoth), [fidelius](https://www.codewars.com/users/fidelius), [FunGuy](https://www.codewars.com/users/FunGuy), [rojohnmico](https://www.codewars.com/users/rojohnmico), [Mattordrag](https://www.codewars.com/users/Mattordrag), [Binayre](https://www.codewars.com/users/Binayre) 's Solution

```js
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
```

헉 무조건 답이 나오는데 이유는 모르겠다. 헉

