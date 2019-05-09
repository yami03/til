# Operator 

```js
false || true && false
```
연산자 우선순위가 있다. <br>
사람이 읽는게 코드이기 때문에 먼저 연산되길 바라는 곳엔 괄호를 먼저 하는게 좋다. 

# Function  

## arguments

```js
function add(x, y) {
    console.log(arguments[0]);
    console.log(arguments.length);
    return x + y;
}
```

유사배열이라고 할 수 있다.

```js
function add(x, y){
    return function bar () {};
}

console.log(add() || 3) //function bar() {};

console.log(add()() || 3); //3 

```
첫번째 console 찍은건 return 다음의 function bar () {}; 를 나타낸다. 두번째 console 찍은건 bar를 나타내는데 return하는게 없기때문에 undefined다


## return

```js
function a(b){
    return 
}
console.log(a); //undefined 
```

return은 return 문구를 실행시키고 function을 종료 시킨다.

**클로저 스코프를 찾아서 공부해보기**

# Control Flow

```js
if(Truthy & Falsy) //true false가 아니라 Truthy & Falsy냐
```

```js
if(이 안은 확실하게 읽을 수 있게 짜는게 좋다. 넘 길면 함수 추천)

function areValidNumbers(){};

if(areValidNumbers)
```
이렇게 짤때의 장점은 굳이 긴 if문을 안보고 function 이름만 보고 내용을 유추하고 넘어가도 될때 유용하다.


```js
var i = 0;
function init () {
    console.log('me');
}

function isValid () {
    console.log('you');
    return i < 3;
}

funcrion update () {
    console.log('we');
    i++
}

for (init(); isValid(); update()){
    console.log(i)
}
```
이렇게 할때 console.log엔 어떻게 찍힐까?<br>
1. me
2. you
3. 1
4. we
5. you
6. 2
7. we
8. you
예상

```js
for (제일 최초의 1회성; 조건; 업데이트)
```

```js
var i = 0;
function init () {
    console.log('me');
}

function isValid () {
    console.log('you');
}

function foo () {
    
    for (init(); isValid(); console.log('update')){
        return;
    }
}

foo(); 

```
예상
1. me
2. you

```js
var i = 0;
function init () {
    console.log('me');
}

function isValid () {
    console.log('you');
    return i < 3;
}

function foo () {
    
    for (init(); isValid(); console.log('update')){
        return; //이것또한 undefined를 리턴한다. 
    }
}
```
예상
1. me
2. you
3. undefined

**return은 return구문을 실행하고! 함수종료쓰!**

**break, continue를 찾아본다 - loof와 관련된거, function이랑은 상관없다**