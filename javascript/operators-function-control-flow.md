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

**클로즈 스코프를 찾아서 공부해보기**

# Control Flow