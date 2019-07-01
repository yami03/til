# Spread Operator

예시로 확인하쟈 'ㅁ'/

## containing array

 ```js
const featured = ['Deep dish', 'Peperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Nama', 'Margherita'];
const pizas = featured.concat(specialty);

console.log(pizas); // ["Deep dish", "Peperoni", "Hawaiian", "Meatzza", "Spicy Nama", "Margherita"]
 ```

<br>

만약 중간에 또 다른 추가가 필요하다면?

```js
const featured = ['Deep dish', 'Peperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Nama', 'Margherita'];

let pizzas = [];
pizzas = pizzas.concat(featured);
pizzas.push('veg');
pizzas = pizzas.concat(specialty);
console.log(pizzas); // ["Deep dish", "Peperoni", "Hawaiian", "veg", "Meatzza", "Spicy Nama", "Margherita"]
```

<br>

하지만 **spread operator**를 쓴다면!

```js
const featured = ['Deep dish', 'Peperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Nama', 'Margherita'];

let pizzas = [...featured, 'veg', ...specialty];
console.log(pizzas); //["Deep dish", "Peperoni", "Hawaiian", "veg", "Meatzza", "Spicy Nama", "Margherita"]
```

:open_mouth: 엄청나게 깔끔해졌다! :open_mouth:

<br>

**Array copy**

```js
const featured = ['Deep dish', 'Peperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Nama', 'Margherita'];

let pizzas = [...featured, 'veg', ...specialty];
let fridayPizzas = pizzas; 

fridayPizzas[0] = 'Canada Pie';

console.log(pizzas); // ["Canada Pie", "Peperoni", "Hawaiian", "veg", "Meatzza", "Spicy Nama", "Margherita"]

console.log(fridayPizzas); //["Canada Pie", "Peperoni", "Hawaiian", "veg", "Meatzza", "Spicy Nama", "Margherita"] 
```

Array는 참조값이 복사하기 때문에 새롭게 복사한 `fridayPizzas 를 수정하면 pizzas도 같이 수정된다.`

<br>

## true copy 4가지 방법

```js
const featured = ['Deep dish', 'Peperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Nama', 'Margherita'];

let pizzas = [...featured, 'veg', ...specialty];

// 방법 1 
const copyPizzas1 = pizzas.slice(); 

// 방법 2 
const copyPizzas2 = [].concat(pizzas); 

// 방법 3
const copyPizzas3 = [...pizzas];

// 방법 4
const copyPizzas4 = Array.from(pizzas);

copyPizzas1.push('cheeze1');
copyPizzas2.push('cheeze2');
copyPizzas3.push('cheeze3');
copyPizzas4.push('cheeze4');

console.log(pizzas); // ["Deep dish", "Peperoni", "Hawaiian", "veg", "Meatzza", "Spicy Nama", "Margherita"]

console.log(copyPizzas1); //["Deep dish", "Peperoni", "Hawaiian", "veg", "Meatzza", "Spicy Nama", "Margherita", "cheeze1"]

console.log(copyPizzas2); // ["Deep dish", "Peperoni", "Hawaiian", "veg", "Meatzza", "Spicy Nama", "Margherita", "cheeze2"]

console.log(copyPizzas3); // ["Deep dish", "Peperoni", "Hawaiian", "veg", "Meatzza", "Spicy Nama", "Margherita", "cheeze3"]

console.log(copyPizzas4); // ["Deep dish", "Peperoni", "Hawaiian", "veg", "Meatzza", "Spicy Nama", "Margherita", "cheeze4"]
```

이 4가지 방법을 사용한다면, reference 한게 아니라 원소들을 복사 했기 때문에 추가, 수정하여도 pizzas가 수정되지 않는다. 

<br>

## __ proto __ : NodeList  => Array

```js
const people = document.querySelectorAll('.people p'); // NodeList

const people1 = Array.from(document.querySelectorAll('.people p')); // Array

const people2 = [...document.querySelectorAll('.people p')]; // Array
```

spread operator를 통해 NodeList 도 Array로 변경할 수 있다.

<br>

## spread operator + string

```js
console.log([...'wes']) // ['w', 'e', 's'];
```

<br>

## 제외 시키기

```js
const comments = [
    { id: 209384, text: 'I love your dog!' },
    { id: 523423, text: 'Cuuute!' },
    { id: 632429, text: 'You are so dumb' },
    { id: 192834, text: 'Nice work on this wes!' },
]

// id가 632429인것을 제외시키자
const id = 632429;
const commentIndex = comments.findIndex(comment => comment.id === id);

// 전개연산자를 사용하지 않는다면 

const newComments1 = [comments.slice(0, commentIndex), comments.slice(commentIndex + 1)];

// 결과는 [ [ { id: 209384, text: 'I love your dog!' }, { id: 523423, text: 'Cuuute!' } ] , [ { id: 192834, text: 'Nice work on this wes!' } ]]

// 원소가 2개인 배열과 + 원소가 1개인 배열이 합쳐진 배열이 된다.

// 전개 연산자 spread operator를 사용하자

const newComments2 = [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];

// 이렇게 하면 원하는 값도 얻을 수 있고 react에도 자주 사용된다.
this.setState({ comments: newComments });
```

<br>

## call, apply 대신 사용하기

```js
const inventors = ['Einstein', 'Newton', 'Galileo'];
const newInventors = ['Musk', 'Jobs'];

// 기존 배열에 추가하기
inventors.push.apply(inventors, newInventors);
console.log(inventors);
```
apply의 두번째 인자가 이해가 안되어 더 찾아 보았다.

<br>

**apply는 argsArray 파라미터를 위한 arguments를 사용할 수 있다.**

---

> ```
> fun.apply(thisArg, [argsArray])
> ```

apply의 두번째 인자로는 array가 올 수 있다. 이 점을 이용해 두번째 인자에 배열을 보내고 push가 실행될 때에는 배열이 풀린다. 이점을 사용하여 여기저기에 쓰인다.

**MDN 예시 - 내장함수 사용**

```js
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7
```

<br>

다시 보자

```js
inventors.push.apply(inventors, newInventors);
```

this부분에 null라고 작성하면 안된다. 생성자함수가 아니라 직접적인 네임을 가진 inventors에 추가해야 해서 아닐까? 그 다음은 인자를 배열로 받기 때문에 array를 사용하였다.

하지만 이를 간단하게 정리할 수 있다.

```js
inventors.push(...newInventors);
```

끝!

위의 MDN예시도 쉽게 정리 할 수 있다.

```js
var numbers = [5, 6, 2, 3, 7];
var max = Math.max(...numbers);
```

정말 대단하다.. :open_mouth:

<br>

## Spreading into a function

```js
const name = ['pikachu', 'spinda'];

function sayHi(first, second) {
    console.log(`Hey ${first} ${second}`);
}

sayHi(...name);
```

<br>

# Rest Param

 ```js
function convertCurrency(rate, tax, tip, ...amounts) {
    console.log(rate, tax, tip, amounts);
    return amounts.map(amount => amount * rate);
}

const amounts = convertCurrency(1.45, 10, 23, 52, 1, 56);
console.log(amounts); // 1.45 10 23 [52, 1, 56]
 ```

매개변수 자리에 쓴다. 나머지 매개변수를 뜻한다.

## + spread operator

```js
const runner = ['pikachu', 123, 5.5, 5, 3, 6, 35];
const [name, id, ...runs] = runner;

console.log(name, id, runs); //pikachu 123 [5.5, 5, 3, 6, 35
```





