# Arguments

인자에 대한 정보를 담고있는 객체 
사용방법이 배열 스럽다 - 

```js
function sum(){
    var i, _sum = 0;
    for(var i = 0; i < arguments.length; i++){
        console.log(`${i}: ${arguments[i]}`);
		_sum += arguments[i];
    }
    return _sum;
}
console.log(`result: ${sum(1,2,3,4)}`)
```

arguments는 인자의 정보를 담고있고 그 인자에 접근 가능하다. 



## 인자(argument)와 매개변수(parameter)의 차이 

```js
function a(parameter){ //괄호 안에 쓴게 매개변수
    return parameter
}
a("argument"); //인자 아규먼츠 
```



## 함수이름.length와 argument.length의 차이

```js
function one(para){
    return `one.length: ${one.length}, arguement: ${arguments.length}`;
}
one('val1','val2'); //"one.length: 1, arguement: 2"
```

one.length는 매개변수의 개수를 알려주고
arguments.length는 인자의 개수를 알려준다.

 이는 매개변수의 수와 인자의 수를 일치하냐 안하냐를 찾아낼 수 있고 그로인해 에러를 띄울 수 있다. 