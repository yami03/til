# Default parameter 

parameter가 `undefined`일 때 들어갈 default parameter를 사용한다. 
함수도 가능하다.

**example - default parameter로 함수사용**

```js
function getNumber () {
    console.log('getting number..');
    return 666;
}

function logNumber (num = getNumber()) {
    console.log(num);
}

logNumber(1000); //1000
```

함수도 사용가능 하다.
**example - 인자(argument)가 false,  null , undefined 일 때**

```js
function logNumber (num = 3) {
    console.log(num);
}

logNumber(false); // false
logNumber(null) // null
logNumber(undefined) // 3
```

# Template Literals

``을 사용하고 함수도 가능하다.'ㅁ'/ 

```js
function getName () {
    return 'sla';
}

console.log(`my name is ${getName() + getName()}`);
```

# Arrow Functions

* `함수표현식`으로만 써야한다.
* hoisting이 안된다. (더 엄격해졌다.)
* this가 없다. 가장가까운 영역에 있는 객체를 this로 쓴다.
* arguments 키워드가 존재하지 않는다.(rest parameter로 대체한다)

```js
const multiply = a => console.log(a);
console.log(multiply);
```

함수 표현식을 사용했으며, 매개변수가 1개일때는 `()`가 없어도 되며
return이 한줄로 표현가능 할 경우 `{}`도 없어도 된다.

**arguments 키워드는 없지만 외부함수는 함수선언식, 내부함수는 arrow function을 쓸 경우**

```js
function foo () {
    console.log(arguments);
    
    const fn = () => {
      console.log(arguments);  
    };
    
    fn();
}

foo(1, 2, 3);
```

**this**

```js
function foo () {
    console.log(this);
    
    const fn = () => {
      console.log(this);  
    };
    
    fn();
}

foo(1, 2, 3);
```

scope chain을 타서 가장 가까운 this를 받았다.

```js
const name = 'ni';

const obj = {
    name: 'sla',
    logName: () => {
        console.log(this.name);
    }
}

obj.logName(1, 2, 3);
```

const가 window에 붙지 않아서 console.log가 찍히지 않는다.

```js
var name = 'ni';

const obj = {
    name: 'sla',
    logName: () => {
        console.log(this.name);
    }
}

obj.logName(1, 2, 3);
```

var로 했을 때는 this가 window.name이 되어서 'ni'가 콘솔에 찍힌다.

