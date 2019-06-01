# The Office II - Boredom Score

시리즈가 재밌다. The Office 2탄이다.

[codewars 링크](<https://www.codewars.com/kata/57ed4cef7b45ef8774000014>)

## 문제

Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2 
canteen = 10 
regulation = 3 
trading = 6 
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

**Sample Tests**

```js
function boredom(staff){
  
}

Test.describe("Example tests",_=>{
Test.assertEquals(boredom({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' }), 'kill me now');
Test.assertEquals(boredom({ tim: 'IS', jim: 'finance',
  randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
  katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
  alex: 'regulation', john: 'accounts', mr: 'canteen' }), 'i can handle this');
Test.assertEquals(boredom({ tim: 'accounts', jim: 'accounts',
  randy: 'pissing about', sandy: 'finance', andy: 'change',
  katie: 'IS', laura: 'IS', saajid: 'canteen', alex: 'pissing about',
  john: 'retail', mr: 'pissing about' }), 'party time!!');
})
```



## 문제 이해

```js
boredom(
    {tim: 'change', 
     jim: 'accounts', 
     randy: 'canteen', 
     sandy: 'change', 
     andy: 'change', 
     katie: 'IS',
     laura: 'change', 
     saajid: 'IS', 
     alex: 'trading', 
     john: 'accounts',
     mr: 'finance'}
)    
```

boredom이라는 함수에 인자로 객체가 들어온다. 매개변수명은 staff이다.
staff 객체의 key는 스태프의 이름이고, value는 부서명이 된다. 이 부서명의 역할이 특별하다.

```
accounts = 1
finance = 2 
canteen = 10 
regulation = 3 
trading = 6 
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25
```

이렇게 점수를 나타낸다. 

전체 스태프가 적은 부서명으로 점수를 찾아내어 그 값을 총 더한다.

```
<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
```

그 값이 80이하면 `'kill me now'`,
100보다 작거나 80 초과일 경우 `'i can handle this'`
100이상일 경우 `'party time!!'`를 return한다.

## 해결 방법

* 점수를 나타내는 부서명을 객체로 만든다.
  * 변수명은 assessmentScore 
* for...in문을 통해 부서명에 접근한 뒤 이를 assessmentScore의 key값으로 사용하여 점수를 찾아낸다. 
* 찾아낸 점수는 totalScore 변수에 더해준다.
* 마지막 if문을 통해 return값을 분기처리한다. 

## 코드 구현

```js
function boredom(staff) {
  let totalScore = 0;
  const assessmentScore = {
    accounts: 1, 
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25
  }
  
  for (const key in staff) {
    totalScore += assessmentScore[staff[key]];
  }
  if (totalScore <= 80) {
    return 'kill me now';
  } else if (totalScore < 100) {
    return 'i can handle this';
  }
  return 'party time!!';
}
```

해결 방법대로 썼다.

당황스러웠던건 객체의 키에 띄어쓰기가 들어간다는 점

```js
"pissing about": 25
```

이 부분에 대해서는 이전 객체를 공부했을 때 있던내용이라 이전 TIL를 참고했다.
[Object TIL](<https://github.com/yami03/til/blob/master/javascript/array-object.md#object>)

```js
if (totalScore <= 80) {
    return 'kill me now';
} else if (totalScore < 100) {
    return 'i can handle this';
}
return 'party time!!';
```

이 부분에서 따로 80이상까지는 체크할 필요가 없어서 체크 하지 않았다.



## 결과 분석

random 테스트 통과

### CodeWars Solutions

**@[WompWomp](https://www.codewars.com/users/WompWomp)'s Solution**

```js
function boredom(staff){
   var map = {
     accounts:1,
     finance:2,
     canteen:10,
     regulation:3,
     trading: 6,
     change:6,
     IS:8,
     retail:5,
     cleaning:4,
     'pissing about':25
   };
   
   var score = Object.keys(staff).reduce(
     function(a,b){       
       return a+map[staff[b]]
    },0); 
   
   return score <= 80 ? 'kill me now': score < 100 && score > 80 ? 'i can handle this' : 'party time!!';
}
```

[Object.keys() MDN링크](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys>) 
Object.keys() 메서드는 key를 배열로 반환해준다. 그 배열을 가지고 Array.prototype.reduce()를 이용하면 숏코드로 해결할 수 있다.
총 합은 reduce() 메소드를 이용하도록 하자

[js파일 바로가기](https://github.com/yami03/algorithm/blob/master/Codewars/07%20-%20The%20Office%20II%20-%20Boredom%20Score/boredomScore.js)

 