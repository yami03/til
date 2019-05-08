# 함수의 호출

함수도 객체(배열도 포함)다. 객체는 속성들을 가지고 있다.(프로퍼티, 메서드)
그래서 함수도 내장 메소드를 가지고 있다.

 

## apply

```js
function sum(arg1, arg2){
    return arg1+arg2;
} 
console.log(sum.apply(null, [1,2]));
```

apply 호출하는 역할을 한다.
간단한 예제를 보여주기 위해 이렇게 쓴거지만 첫번째 인자가 null을 쓰는경우 apply를 써야할 이유는 1도 없다.

## 호출한 함수의 this를 apply 첫번째 인자로 지정할 수 있다.

```js
o1 = {val1:1, val2:2, val3:3};
o2 = {v1:10, v2:50, v3:100, v4:25};

function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
console.log(sum.apply(o1)); // 6
console.log(sum.apply(o2)); //185
```

콘솔 부분을 다르게 설명하자면,

```js
console.log(sum.apply(o1)); //이 부분은
console.log(o1.sum()); //이와같다고 할 수 있다

console.log(sum.apply(o2));
console.log(o2.sum());
```

코드 전체를 바꿔 설명해보면,

```js
function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}

o1 = {val1:1, val2:2, val3:3, sum:sum};
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum};

console.log(o1.sum());
console.log(o2.sum());
```

이와 같다. 하지만,

```js
// 첫번째 콘솔에 찍힌 값
6function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
// 두번째 콘솔에 찍힌 값
185function sum(){
    var _sum = 0;
    for(name in this){
        _sum += this[name];
    }
    return _sum;
}
```

이렇게 쓰면 sum도 객체의 하나의 속성이 되어 숫자 6과 function이 같이 함쳐져서 나온다. 그래서 수정이 한번 더 필요하다.

```js
function sum(){
    var _sum = 0;
    for(name in this){
        if(typeof this[name] !== 'function'){
        	_sum += this[name];   
        }
    }
    return _sum;
}

o1 = {val1:1, val2:2, val3:3, sum:sum};
o2 = {v1:10, v2:50, v3:100, v4:25, sum:sum};

console.log(o1.sum());
console.log(o2.sum());
```

이렇게 직접 추가할 때는 객체에 굳이 함수를 추가해야하고 if문도 추가해야 한다. 이럴경우 apply가 적합하다.

### apply와 call의 차이는 

call는 두번째 인수에서 인수 목록을 받고 apply는 인수 배열 하나만 받는다. 