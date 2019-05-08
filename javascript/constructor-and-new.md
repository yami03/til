# 객체

> Prototype-based programming
> 프로토타입기반 프로그래밍

객체지향프로그래밍이란 연관된 것들(변수와 메소드)을 그룹핑한다. 카테고라이징 한다. 하나하나가 독립성을 가지게 된다. -> 부품으로 사용

비어있는 상자라하자. 
그 비어있는 상자엔 프로퍼티(속성)와 메소드를 담을 수 있다.

```js
var person = {};
person.name = 'sla';
person.introduce = function(){
    return 'My name is '+this.name;
}
console.log(person.introduce());
```

 이렇게 써놓는건 중간에 다른 코드가 들어 갈 수도 있고 객체가 분산되어 있다. 이를 합치자

```js
var person = {
    'name': 'sla',
    'introduce': function(){
        return `My name is `+this.name;
    }
}
console.log(person.introduce());
```

훨씬 가독성이 좋다.

person을 여러명 만든다면 

```js
var person1 = {
    'name': 'sla',
    'introduce': function(){
        return `My name is `+this.name;
    }
}
var person2 = {
    'name': 'sla',
    'introduce': function(){
        return `My name is `+this.name;
    }
}
```

 `중복`되는 부분이 많다. 

## 생성자(constructor)

객체를 만드는 역할을 하는 함수다.  객체를 만드는 창조자

```js
function Person(){} //함수를 정의한다.
var p0 = Person();
console.log(p0); //undefined가뜬다.
```

new를 추가해 정의한다면,

```js
function Person(){} //함수를 정의한다.
//new를 붙이고 함수를 호출하면 호출한 함수를 생성자 라고 한다.
var p = new Person(); 
console.log(p); // Person {} 비어있는 객체 
```

new를 붙이고 호출한 함수 Person()은 **생성자** 라고 한다. 
그럼 뭐를 생성하는가. 객체의 생성자!
 Person은 new로 인해서 비여있는 {}객체를 만들고 그 객체를 반환하기 때문에 p에는 비어있는 객체가 만들어 진다. 

var p = {} 이와 비슷하다고 할  수 있다. 

> 이렇게 함수는 객체를 창조할 수 있는 창조자가 된다.



### 객체 리터럴 

```js
function Person(){} //함수를 정의한다.
var p = new Person(); 
p.name = 'sla';
p.introduce = function(){
    return 'My name is '+this.name;
};
console.log(p.introduce());
```

만약 person을 1..2..3...늘린다면.. 

```js
function Person(){} //함수를 정의한다.
var p1 = new Person(); 
p1.name = 'sla';
p1.introduce = function(){
    return 'My name is '+this.name;
};
console.log(p1.introduce());

var p2 = new Person(); 
p2.name = 'sla2';
p2.introduce = function(){
    return 'My name is '+this.name;
};
console.log(p2.introduce());
```

중복되는 코드가 많다. 개선되는게 없다.



### 생성자의 역할  - 초기화(init, initialize)

```js
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name;
    }
}
var p1 = new Person('sla');
var p2 = new Person('sla2');
console.log(p1.introduce()); 
console.log(p2.introduce());
```

1. person이라는 함수를 정의하였다.

2. p1에 Person 앞에 new를 붙여 더이상 함수가 아닌 객체의 생성자가 된다.

3. 인자로 'sla'를 넣었다

4. this.name = 'sla' 가 되어 name이라는 프로퍼티는 'sla'가 된다.

5. 모든작업이 다 끝난 다음에 최종으로 p1에 이 모든게 담긴다.

초기화란 객체에 대해 초기화한다. 
Person이라는 생성자를 만든 이 빈 객체가 {} 어떠한 프로퍼티를 가져야하고 어떠한 메서드를 가져야하는지 생성자함수안에다 기술을 하는것을 통해서 객체가 가진 정보, 객체가 할 수 있는 일을 세팅을 해준다. -> 초기화

> 덕분에 코드의 재사용성이 대폭 높아졌다. 