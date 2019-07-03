# Object Literal Upgrades

```js
const first = 'snickers';
const last = 'bos';
const age = 2;
const breed = 'King Charles Cav';
const dog = {
    first: first,
    last: last,
    age: age,
    breed: breed,
}

console.log(dog);
```

**key 와 value에 설정된 name이 같다면!**

```js
const first = 'snickers';
const last = 'bos';
const age = 2;
const breed = 'King Charles Cav';
const dog = {
    first,
    last,
    age,
    breed,
}

console.log(dog);
```

하나의 이름만 남겨놓아도 된다.

**메소드에서 **

```js
const modal = {
    create: function() {
        
    },
    open: function() {
        
    },
    close: function() {
        
    },
}
```

이렇게 변경할 수 있다.

```js
const modal = {
    create(selector) {
        
    },
    open(content) {
        
    },
    close(goodbye) {
        
    },
}
```

arrow function을 쓰면 안된다. 'o'

### example 1

---

```js
const key = 'pocketColor';
const value = '#ffc600';

const tShirt = {
    [key]: value
};

console.log(tShirt); // {pocketColor: "#ffc600"}
```

함수를 하나 추가해 본다.

```js
function invertColor(color) {
      return '#' + ("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(-6);
}

const key = 'pocketColor';
const value = '#ffc600';

const tShirt = {
    [key]: value,
    [`${key}Opposite`]: invertColor(value);
};

console.log(tShirt); // {pocketColor: "#ffc600"}
```

### example 2

---

```js
const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 100];

const shirt = {
    [key.shift()]: key.shift(),
    [key.shift()]: key.shift(),
    [key.shift()]: key.shift(),
}

console.log(shirt);
```

