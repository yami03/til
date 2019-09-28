```js


```

투표가져온다.

투표 스키마..

투표를 넣는데 사용자아이디를 참조해야한다. 

창의적.. ㅎ.....


voting 변수에 담긴 await Voting.find()를 담은것을 수정할 수가 없다.
이것은 몽구스 스키마를 따르기 때문이다.

## ._doc

객체는 레퍼런스이기 때문에 직접적으로 수정하는건 비추한다.

```js
const a = async (a) => {
  const temp = await Promise.all(votings.map(async function (){
    await
  }))
}
```

map 안에 있는 함수들이 async이기 때문에 
안에 된것들이 프로미스 instance고
promise all의 return값들도 프로미스다

promise all를 써서 기다리는것이고

Promise all도 비동기기 때문에 기다려야 한다.

만약 Promise.all 앞에 await을 하기 싫다면
.then(resolve => ) 해서 써야한다.

__proto__
도 있을 수 있다..

Object.keys로 확인 할 수 있다.
is / new... 

**코드워즈 할 때.. 터진이유..**
this가 뭘까. .코드를 실행하는 곳에..
this__proto__ 가 있는지 확인해봄

