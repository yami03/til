# 함수 

생활코딩 javascript 값으로서 함수와 콜백을 보고 정리한 내용

[생활코딩 바로가기](https://youtu.be/zGBkPTwydeg)



## 값으로서의 함수

* 함수도 객체다. 
* 일종의 값 



```js
function a(){};
```

이 예제는 a라는 자바스크립트 변수에 담겨진 값이다.

```js
var a = function(){};
```

function(){} 이 함수정의가 a라는 변수에 담긴 것이다.  

이것이 가능한 이유는 함수가 값이기 때문이다.

값으로서의 함수는 변수에만 담기지 않는다.



```js
a = {
    b : function(){}
}
```

{} 중괄호로 시작하는 객체 안에  `b`라는 key가 있다. 그 key의 값은 function(){} 이다.

함수는 값이고 객체안에 저장될 수 있다. 여기서 key라고 불리는 `b`는 변수와 같은 역할을 하고 있다.

왜냐면 어떠한 값을 저장하고 있기 때문이다.  

여기서 `b` 는 속성 property라고 한다. 

만약 그 속성에 저장되어 있는 값이 함수일 경우 메소드(method)라고 한다.

메소드 b라고도 부른다.



### 함수는 값이기 때문에 매개변수로 사용 가능 

```javascript
function cal(func, num){
  return func(num);  
};

function increase(num){
    return num + 1;
};

function decrease(num){
  return num - 1;  
};

console.log(cal(increase, 1)); //2
console.log(cal(decrease, 2)); //1
```



 ### 함수는 리턴값으로도 사용 가능

```js
function cal(mode){
    var funcs = {
        'plus' : function (left, right){return left + right},
        'minus' : function (left, right){return left - right}
    }
    return funcs[mode];
}

console.log(cal('plus')(2,1));
console.log(cal('minus')(2,1)); 
```



배열일 경우

```js
var process = [
    function(input){return input + 10;},
    function(input){return input * input;},
    function(input){return input / 2;}
];
var input = 1;
for (var i = 0; i < process.length; i++){
    input = process[i](input);
}
console.log(input);
```



### 함수가 사용되는 곳

* 변수
* 매개변수
* 리턴값

> first-class citizen / first-class object 

다양한 곳에 사용된다.

