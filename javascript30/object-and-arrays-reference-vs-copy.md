# Object and Arrays - Reference VS Copy

* [Array copy 4가지 - slice, concat, spread, Array.from](#Array-copy)
* [Object copy](#Object-copy)

### Start with strings, numbers and booleans

---

```js
let age = 100;
let age2 = age;
console.log(age, age2); //100, 100

age = 200;
console.log(age, age2); //200, 100
```

age2에 age를 할당하고 age를 바꿔지만 `age2의 값은 변하지 않는다.`
이것은 `primitive`이기 때문이다.

### Reference - array

---

```js
 // Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;

console.log(players, team); // ['Wes', 'Sarah', 'Ryan', 'Poppy'] x2
// You might think we can just do something like this:
team[3] = 'Lux';

console.log(players, team); // ['Wes', 'Sarah', 'Ryan', 'Lux'] x2
```

나는 team을 변경했지만, players도 영향을 받는다. 내가 오리지널이나 다른 array를 변경하면 그것은 reference로 되돌아 가려고 한다.

### Array copy

---

```js
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// copy 방법 1
const team1 = players.slice();

// copy 방법 2
const team2 = [].concat(players);
team2[2] = 'Lux';

// copy 방법 3 - es6 spread
const team3 = [...players];

// copy 방법 4 
const team4 = Array.from(players);

console.log(team2) // ['Wes', 'Sarah', 'Ryan', 'Lux'];
console.log(players) // ['Wes', 'Sarah', 'Ryan', 'Poppy'];
```

reference하고 싶지않고 copy가 목표라면  slice, concat, spread, Array.from 이 4가지를 이용하자.

### With Objects

---

```js
const person = {
    name: 'Wes Bos',
    age: 80
};

const captain = person;
captain.number = 99;

console.log(person) // {name: 'Wes Bos',age: 80, number: 99}
```

## Object copy

```js
const person = {
    name: 'Wes Bos',
    age: 80
};

// copy 방법 1 - 3번째 인자는 새로 추가, 수정할 key, value이다. 
const cap1 = Object.assign({}, person, { number: 99, age: 12 });

// copy 방법 2 
const cap2 = {...person};
```

### Object - one level deep

```js
const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}

 const dev = {...wes};
dev.social.twitter = '@coolman';

console.log(dev.social); // {twitter: "@coolman", facebook: "wesbos.developer"}

console.log(wes.social); // {twitter: "@coolman", facebook: "wesbos.developer"}
```

one level deep에 있는 내용은 reference라 wes.social를 참조한다. 
*wes는 이 내용을 shit이라 표현했다.*

이런식의copy는 오직 one level deep만 가능하다. 

> 모든 level deep을 하고자 할 경우 먼저 스스로에게 물어야 한다. 
> 이게 정말 필요한가?

#### 하지만 정말 every level deep이 필요하다면? (추천x)

```js
const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}

const dev2 = JSON.parse(JSON.stringify(wes));

dev2.social.twitter = '@coolman';

// 오리지널 객체에는 터치가 없다.
console.log(wes.social);// {twitter: "@wesbos", facebook: "wesbos.developer"}

/*
* JSON은 string을 반환한다.
* JSON.stringify(wes)
* 하지만  JSON.parse을 사용하여 객체를 반환하였다.
*/
```

이를 .. `poor man's deep clone` 이라 불린다.'ㅁ'... 헉