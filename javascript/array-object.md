# Array

* Array 안에는 내가 넣고 싶은거 뭐든 넣을 수 있다.
* 객체안에 배열도 속해 있다.
* 자바스크립트 Array는 키값은 항상 인덱스 숫자이고 value로 구성되어 있다.
* arr[3] // [이 안엔] 숫자만 들어 올 수 있다.



## 메서드 공부할 때 중요한 점

```
var arr = [1,2,3]

console.log(arr.push(4)); //? push 메서드가 리턴해주는건 뭘까? 
```

* MDN 문서를 참고한다.
* **매개변수 / 반환값 / 설명문구 첫줄** 을 필수적으로 본다.



# Object

```js
var obj = {
    name: 'sla'
};
```

name(key) / 'sla'(value) 로 구성되어 있다. 

value자리엔 뭐든 들어갈 수 있다. 배열/객체/함수...☆



```js
var obj = {
    "first Nmae": 'sla'
};
//띄어쓰기를 하고자 할때 "first Name"으로 들어갈 수 있지만. 카멜케이스를 추천한다.
```



## for in 문 

```js
var obj = {
    name: 'sla',
    Age: '2n',
	birthday: 0427    
};

for (var key in obj){
    console.log(`obj는 ${obj} key는 ${key}이고 value는 ${obj[key]}`);
};
```



## key를 변수값으로 넣고 싶을 때

```js
var a = 'firstName';

var obj = {
    [a]: 'sla'
};
```

이렇게 대괄호를 써서 a변수를 가져온다!ㅁ!



## 사용하기

```js
obj.key;
obj['key']; //문자열!

obj[함수변수..등등];
```



```js
var obj = {
    name: 'sla'
};

console.log(obj[a]); //undefined
console.log(obj['a']); //'sla'
```



```js
var a = 'name';

var obj = {
    [a]: 'sla'
};

function foo() {
  return a;  
};

function bar() {
    return 'name';
}

console.log(obj[a]); //변수 a= 'naem'; 이 들어가서 'sla'
console.log(obj['name']); //key[a]는 'name'이라 바로 호출 가능 'sla'
console.log(obj.name); //들어간 스트링값으로 호출 가능 'sla'
console.log(obj[foo()]); //a변수가 리턴되어 호출 가능 'sla'
console.log(obj[bar()]); //스트링'name'이 리턴되어 호출 가능 'sla'

console.log(obj.bar()) //는 다른거.. 메서드 bar를 실행하라 해서 undefined
```



## [object object] 가 왜 콘솔에 찍힐까?

```js
var a = {}
console.log(''+a); //[object object]
```

문자열로 만드는 과정에서 생기는 일!

