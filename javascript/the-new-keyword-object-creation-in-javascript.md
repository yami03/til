# The 'new' keyword - Object Creation in JavaScript

[youtube](https://www.youtube.com/watch?v=Y3zzCY62NYc) - new 키워드를 직접 구현하는 영상이다.

```js
function Person(saying) {
  this.saying = saying,
  /* return {
    dumbObject: true;
  } */
}
  
Person.prototype.talk = function() {
  cosole.log('I say:', this.saying);
};

function spawn(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  return consturctor.apply(obj, argsArray.slice(1)) : obj;
}
  
var crockford = new Person('SEMICOLAMS!!!1one1');
crokford.talk();
```

**key point**

```js
Object.setPrototypeOf(obj, constructor.prototype);
```

obj안에 인자로 받은 객체의 prototype을 할당 하였다.

```js
return consturctor.apply(obj, argsArray.slice(1)) : obj;
```

`return`이 두가지인 이유는 Person안에 return 이 있는 경우와 없는 경우 때문이다.

만약 return이 있는경우면  `crokford.talk();` 는 실행되지 않는다.
obj를 리턴한게 아니기 때문이다. new키워드를 사용해도 실제 동일하다.