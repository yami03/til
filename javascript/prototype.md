# prototype

원형 (원래의 형태)
prototype을 이용하여 자바스크립트는 상속개념을 제공

(prototype chain)

```js
function Ultra(){};
Ultra.prototype.ultraProp = true;

function Super(){};
Super.prototype = new Ultra();

function Sub(){};
Sub.prototype = new Super();

var o = new Sub();
console.log(o.ultraProp); //true
```

먼저 생성자 부터 시작하면,
생성자는 기본적으로 함수이다.  호출할 때 함수앞에 new를 붙이면서 함수는 일반 함수가 아닌 생성자라는 함수가 되고 그렇게 해서 실행한 결과는 새로운 객체를 만들어서 그 객체를 return하고 o라는 변수에 담긴다.

o라는 변수안에는 생성자로 만들어진 객체가 o 안에 들어있다.

```js
var o = {} 
```

이렇게 하지 않고 생성자로 객체를 만드는 이유는.. ? 
우리가 어떠한 객체를 만들 때, 그 객체가 가지고 있어야 하는 어떤 메소드나 프로퍼티가 기본적으로 가지고 있기를 바라기 때문이다.
그 객체가 가지고 있는 로직이 필요한거지, {} 비어있는 객체가 필요한게 아니기 때문이다. 

```js
function Sub(){};
Sub.prototype = new Super();
```

그럼, 우리가 얻고자 하는 객체의 원형, 객체가 어떤메소드와 프로퍼티를 가지고 있는지에 대한 정보는 `prototype` 이라는 프로퍼티에  이 곳에 담긴다. 
Sub는 객체이기 때문에 프로퍼티를 가질 수 있고 그 프로퍼티로 자바스크립트에 약속된 prototype를 쓰는데 이 안엔 객체를 담고 있다.

```js
var o = new Sub();
```

그럼 new를 이용해서 생성자를 호출하게 되면, 
생성자 함수 Sub의 prototype 이라는 프로퍼티에 저장되어 있는 객체를 꺼내서 그것을 return해준다.

```js
function func(){};

console.log(func.prototype); //func {}

func.pototype.name = 'egoing';

var o = new func();

console.log(o); //func {name: 'sla'};
```

생성자를 통해 객체를 만들면 prototype에 있는 프로퍼티와 메서드가 리턴이 된다.

## prototype chain

```js
function Ultra(){};
Ultra.prototype.ultraProp = true;

function Super(){};
Super.prototype = new Ultra();

function Sub(){};
Sub.prototype = new Super();

var o = new Sub();
o.ultraProp = 1;
console.log(o.ultraProp); // 1 
```

제일 처음 o라는 객체에 프로퍼티로 ultraProp가 있는지 찾는다. 

```js
function Ultra(){};
Ultra.prototype.ultraProp = true;

function Super(){};
Super.prototype = new Ultra();

function Sub(){};
Sub.prototype = new Super();
Sub.prototype.ultraProp = 2;

var o = new Sub();
console.log(o.ultraProp); // 2
```

o에 property로 ultraProp가 없으므로 Sub로 올라가 2가 값이 된다. 

```js
function Ultra(){};
Ultra.prototype.ultraProp = true;

function Super(){};
Super.prototype = new Ultra();

function Sub(){};
var s = new Super();
s.ultraProp = 3;
Sub.prototype = s;

var o = new Sub();
console.log(o.ultraProp); // 3
```

o에도 없고 그럼 Sub의 prototype을 뒤지는데 Sub의 prototype으로 new Super() 생성자를 가지고 있고 그 객체의 ultraProp = 3을 가지고 있어서 3이 도출된다. 

```js
function Ultra(){};
Ultra.prototype.ultraProp = true;

function Super(){};
var t = new Ultra();
t.ultraProp = 4;
Super.prototype = t;

function Sub(){};
var s = new Super();
Sub.prototype = s;

var o = new Sub();

console.log(o.ultraProp); //4 
```

```js
function Ultra(){};
Ultra.prototype.ultraProp = true;

function Super(){};
var t = new Ultra();
Super.prototype = t;

function Sub(){};
var s = new Super();
Sub.prototype = s;

var o = new Sub();

console.log(o.ultraProp); // true
```

ultraProp를 찾기위해 계속 체인처럼 올라간다.

```js
function Sub(){}
//Sub.prototype = new Super(); 상속받고자 하는 객체를 넣어야하는데 

  // 상속받고자하는 property를 넣는다면 부모 객체까지 영향을 끼친다.
Sub.prototype = Super.prototype
```

Sub에만 프로퍼티가 추가 되는것이 아니라. Super에 까지 추가되어서 영향을 끼친다.

> 어떠한 객체를 상속받고자 한다면 생성자를 사용하자

