# primitive

뜻.. 원시적인

자바스크립트 타입중 object(배열,함수)만 뺀 나머지.

string, number, null, undefined, boolean



포스트잇이 하나 있다 생각하자. 

나는 포스트잇에 

```js
var a = 7;
var a = 6;
```

두장의 포스트잇 a는 

이전에 7이였던 포스트잇은 버려지고 새로 만들어진 포스트잇 6만 남는다.



# reference

**참조**

자, 상상하자

메일주소 리스트를 적는데 포스트잇은 너무 작아서 A4용지로 적는다

그걸 두번째 서랍에 넣는데 포스트잇에는 서랍위치를 적었다.

혹시나,

메일주소 리스트를 잃어버릴까봐 하나더 복사를 했다.

이건 세번째 서랍에 넣고 포스트잇에 세번째 서랍위치라 적었다.



```js
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];

console.log(list1 === list2);
```

list1랑 list2가 과연 같을까? `false`! 이유는

object(배열,함수)를 어떤변수에 할당했다. list1, list2인데

list1, list2는 포스트잇이라 할 수 있다. 어떠한 위치값! 그렇기 때문에 서로의 위치값이 다른 

list1, list2는 다르다! 



```js
var list3 = [1,2,3];
var list4 = list3;

console.log(list3 === list4); //?
```

`true` ! 이유는 list3은 위치값인데 list4에다 list3의 참조값을 넣은거기 때문에 같다! 



```js
var obj1 = { num: 1 }; //새롭게 만듬 ☆

var obj2 = obj1;
var obj3 = obj2;
var obj4 = obj3;
var obj5 = obj4;

obj1.num++ //값을 수정했다.

console.log(obj5);
```

`{num: 2}` 참조값을 계속 변수에 할당하여 정의를 하였고 변경된 값도 반영이 된다. 



```js
var child1 = { age: 3 };
var child2 = { age: 5 };

var mother = {
    age: 55,
    children: [ child1, child2 ]
};

child1.age++;
child2.age++;

console.log(mother.children);
```

mother.children에 child1, child2의 참조값을 넣었다.

그 값을 ++증가 시켰다.

mother의 프로퍼티 children에도 영향을 받을까?

영향을 받는다.. 왜? var child1, child2를 바라보고 있기 때문에! 



## 1차 예시

```js
function updateAge () { this.age++; };

var son = { age: 3, growUp: updateAge };

var daughter = { age: 7, growUp: updateAge };

var mother = { age: 38, growUp: updateAge, children: [son, daughter] };

var father = { age: 38, growUp: updateAge, wife: mother, children: [son, daughter] };

if ( father.age === mother.age ){
    console.log('동갑!');
}

if ( father.children === mother.children ){
    console.log('부부!');
}

if ( father.growUp === son.growUp ){
    console.log('성장가능..');
}
```



하나씩 살펴보자..



```js
function updateAge () { this.age++; };

var son = { age: 3, growUp: updateAge };

var daughter = { age: 7, growUp: updateAge };

var mother = { age: 38, growUp: updateAge, children: [son, daughter] };

var father = { age: 38, growUp: updateAge, wife: mother, children: [son, daughter] };

if ( father.age === mother.age ){
    console.log('동갑!');
    //두 값은 primitive로 값이 비교가 가능하다.
}

if ( father.children === mother.children ){
    console.log('부부!');
    
    // [] === [] 이런 비교는! 위치값을 꼭 자세히 확인하자..
    // 안에 요소가 같은건 의미가 없다!
    
    // [son, daughter] 이 자체는 같을 수 있으나 이 참조값은 서로 father.children이고
    // mother.children 이기 때문에 배열과 함수는 이 위치값을 확인해야한다.. 
}

if ( father.growUp === son.growUp ){
    console.log('성장가능..');
    
    // 함수를 만들고 그 함수를 updateAge에다 넣어 놓았다.
    // upadateAge의 위치값을 father.growUp에다 저장하고 son.growUp에다 저장했기 때문에
    // true 다! 
    /* 이와 같은거다..
    var updateAge = function(){} 
    */
}

```



## 2차 예시

```js
function updateAge () { this.age++; };

var son = { age: 3, growUp: updateAge };

var daughter = { age: 7, growUp: updateAge };

var mother = { age: 38, growUp: updateAge, children: [son, daughter] };

var father = { age: 38, growUp: updateAge, wife: mother, children: [son, daughter] };

var test1 = (mother.children[1] === father.children[1]);

var test2 = (mother === father.wife);

console.log(test1);
console.log(test2);
```



test1

[] 이 안에 있는 요소  daughter를 콕 찝어서 비교한다.  둘다 primitive 라 비교도 가능하다.

`true`!



test2

같은 mother의 위치를 가리켜서 `true`!



## 3차 예시

```js
function updateAge () { this.age++; };

var son = { age: 3, growUp: updateAge };

var daughter = { age: 7, growUp: updateAge };

var mother = { age: 38, growUp: updateAge, children: [son, daughter] };

var father = { age: 38, growUp: updateAge, wife: mother, children: [son, daughter] };

mother.children = father.children;

console.log(mother.children === father.children);
```

 

mother.children에다가 father.children의 위치를 할당하였다.

이젠 mother.children과 father.children을 같은 위치를 바라보고 있다.



## 4차 예시

```js
function updateAge () { this.age++; };

var son = { age: 3, growUp: updateAge };

var daughter = { age: 7, growUp: updateAge };

var mother = { age: 38, growUp: updateAge, children: [son, daughter] };

var father = { age: 38, growUp: updateAge, wife: mother, children: [son, daughter] };

var children = mother.children;

mother.children = father.children;

console.log(mother.children === children);
```



1. children에 mother.children을 할당했다.
2. mother.children에는 father.children을 할당함.
3. mother.children은 father.children의 위치값을 가지게 되고..
4. children은 mother.children의 위치값을 가지게 되어 다르다!

   `var children은 값이 업데이트 되지않음.. 'ㅁ'/` 