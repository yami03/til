# 자료구조 new keyword

linked list에 있던 

```js
var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

// __proto__: Object
```

여기서는 new를 쓸 이유가 없다. 왜냐면 {} 를 리턴하고 this를 node로 지정해줬기 때문이다.

```js
var Node = function(value) {
  this.value = value;
  this.next = null;
};
```

new키워드를 써야하는 경우는 이런경우다.