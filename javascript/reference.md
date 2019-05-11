# 참조

## 복제

두개는 연결되지 않은 별도의 데이터다.

```js
var a = 1;
var b = a;
b = a;
console.log(a); //1
```

별도의 데이터로 만들어서 a 따로 b 따로가 존재하는 거다 .

> a에는 어떠한 영향도 안받는거다.  
>
> 원시데이터 타입일 때 가능하다.

## 참조

바로가기

```js
var a = {'id':1};
var b = a;
b.id = 2;

console.log(a.id); //2
```

> a와 b는 같은 곳을 바라보고 있기 때문이다.



```js
var a = {'id':1};
var b = a;
b = {'id':2};

console.log(a.id); //1
```

`b = {'id':2};` 새로운 객체를 생성한거다. 

> data type이 무엇인지가 중요한거다.

## 함수와 참조

```js
var a = 1;
function func(b){
    b = 2;
}
func(a);
console.log(a); //1
```

변수 a의 값을 변경한게 아니라 b에 a값을 담은것이다. 
그래서 1

```js
var a = {'id':1};
function func(b){
    b = {'id':2};
}
func(a);
console.log(a.id); //1
```

똑같은 객체를 바라보고 있었는데 새로운 객체를 정의하여 a와 b관계가 끊키게 된다.

```js
var a = {'id':1};
function func(b){
    b.id = 2;
}
func(a);
console.log(a.id);
```

a와 b가 같은곳을 바라보기 때문에 당연하다. 'ㅁ' /