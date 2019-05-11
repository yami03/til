# 표준 내장 객체의 확장

Standard Built-in Object 자바스크립트가 기본적으로 가지고 있는 객체들을 의미 

* Object 
* Function 
* Array
* String
* Boolean
* Number
* Math
* Date
* RegExp

## 내장 객체에 새로운 기능 추가하기

```js
var arr = new Array('seoul', 'new york', 'busan', 'ladarkh');
function getRandomValueFromArray(arr){
    var index = Math.floor(arr.length * Math.random());
    return arr[index];
}
console.log(getRandomValueFromArray(arr));
```

위에 스크립트를 가지고
모든 Array가 랜덤으로 원소를 return 할 수 있는 기능을 추가해 보쟈

```js
Array.prototype.random = function(){
    var index = Math.floor(this.length * Math.random());
    return this[index];
}
var arr = new Array('seoul', 'new york', 'busan', 'ladarkh');
console.log(arr.random());
```

prototype으로 들어가면서 function명처럼 길게 적을 이유가 없어진다.
그리고 인자를 받을 필요도 없어진다. Array가 this가 되기 때문이다.
이렇게 간략해지고 유용해진다.