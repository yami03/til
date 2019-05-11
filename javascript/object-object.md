# Object 객체

* 연관있는 변수와 함수를 묶어준다.
* prototype을 이용해 상속이 가능하다. 
  * 이전 Ultra -> Super -> Sub 를 상속받던 예시에서 사실 Ultra는 Object를 상속받고 있다.
  * Object -> Ultra -> Super -> Sub 
* Object의 prototype은 모든객체의 prototype이다. 모든객체의 원형이다.

## Object의 생성자의 메소드와 Object의 프로토타입 객체

```js
// Object.keys() 생성자 메소드
var arr = ['a','b','c'];
console.log(Object.keys(arr));

//Object.prototype.toString() 프로토타입객체 
var a = new Array(1,2,3);
console.log(a.toSring());
```

1번과 2번의 사용방법이 왜 다를까? 
1번 Object.keys()는 인자를 받아서 사용한다.

```js
Object.key(arr) //의 Object는 생성자 함수일 것이고
Object.keys = function(){}; // 이렇게 정의되어 있을 것이다.
```

2번 Object.prototype.toString()은

```js
Object.prototype.toSring = function(){};
```

이렇게 prototype으로 정의되어 있을 것이다. 

메소드가 프로토타입이라는 의미는 
new Object();라고 실행을 하는 순간에 어떠한 객체를 만들고 Object.prototype 이라는 특수한 프로퍼티의 저장되어 있는 객체를 원형으로 하는 객체가 생성된다. 그렇게 생성된 객체는 toString이라는 메소드를 쓸 수 있다.

> 이 두 차이를 이해해야 한다. 

## Object 객체 확장

```js
Object.prototype.contain = function(needle){
    for(var name in this){
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}

var o = {name: 'sla', 'city':'seoul'};
console.log(o.contain('sla'));
```

## Object 확장의 위험

```js
Object.prototype.contain = function(needle){
    for(var name in this){
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}

var o = {name: 'sla', 'city':'seoul'};
//console.log(o.contain('sla'));

for(var name in o){
    console.log(o[name]);
} 

//결과는
/*
sla
seoul
ƒ (needle){
    for(var name in this){
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}
*/
```

이렇게 contain 까지 같이 나온다. 
모든 객체에 영향을 준거다. 

```js
Object.prototype.contain = function(needle){
    for(var name in this){
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}

var o = {name: 'sla', 'city':'seoul'};
//console.log(o.contain('sla'));

for(var name in o){
    console.log(name);
} 
//결과
//name
//city
//contain 
```

contain 이 포함되어 있다.

> object에 프로퍼티에 추가한다는건 편리하면서도 위험하다.  

## 그래도 써야한다면 hasOwnProperty

```js
Object.prototype.contain = function(needle){
    for(var name in this){
        if(this[name] === needle){
            return true;
        }
    }
    return false;
}

var o = {name: 'sla', 'city':'seoul'};
//console.log(o.contain('sla'));

for(var name in o){
    if(o.hasOwnProperty(name)){
    	console.log(name);    
    }
} 
```

자신의 property인지 체크해준다. 부모로 부터 상속받은 것은 제외된다. 