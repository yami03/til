# 우아한 타입스크립트

* 타입시스템 올바르게 사용하는 법
* 실전 타입스크립트 코드 작성하기

## 목표

* 타입스크립트로 타이핑을 잘하면, 런타임 전에 미리 알 수 있는 오류도 있다.

## 타입시스템 올바르게 사용하는 법

1. 작성자와 사용자
2. interface와 type alias
3. 서브 타입과 슈퍼 타입
4. 타입 추론 이해하기
5. Type Guard로 안전함을 파악하기
6. Class를 안전하게 만들기

### 1. 작성자와 사용자

#### 타입시스템

* 컴파일러에게 사용하는 타입을 명시적으로 지정하는 시스템
* 컴파일러가 자동으로 타입을 추론하는 시스템

#### 타입스크립트의 타입 시스템

* 타입을 명시적으로 저정할 수 있다.
* 타입을 명시적으로 지정하지 않으면, 타입스크립트 컴파일러가 자동으로 타입을 **추론**

#### 타입추론에 의지하는 경우

```js
function f3(a) {
  return a * 38;
}

f3(10);
```

a의 타입은 any가 되고 return값은 number가 된다.

**nolmplicitAny 옵션을 키면**

타입을 명시적으로 지정하지 않은 경우, 타입스크립트가 추론 중 'any'라고 판단하게 되면, 
컴파일 에러를 발생시켜 명시적으로 지정하도록 유도한다.

위 예시의 a를 any라고 판단되어 에러를 뿜뿜

#### number 타입으로 추론된 리턴 타입

```js
function f4(a: number) {
  if(a > 0) return a * 38;
}

console.log(f(5)) // 190
console.log(f4(-5) + 5) // NaN 
```

런타임과 컴파일타임의 타입이 달라진다. 
런타임때는 return 타입이 number로 추론되어 문제가 없는데,  `f4(-5) + 5` 컴파일타임인 경우 undefined가 될 수 있다.

**strictNullChecks 옵션을 켜면**

모든 타입에 자동으로 포함되어 있는 `null` 과 `undefined` 를 제거해줍니다.
키지 않는다면 모든 타입에 null과 undefined가 들어가게 된다. 그래서 런타임과 컴파일타임의 타입이 달라진다.

```js
console.log(f4(-5) + 5) // error TS2532: Object is possibly 'undefined'.
```

undefined와 연산할 수 있다는 에러를 알려준다.

**명시적으로 리턴 타입을 지정해라** 

시그니처를 명확하게 명시하면 좋다. (작성자를 위해서)

**noImplicitRetrurns 옵션을 키면**

바디내용 리턴이 정확하게 되지 않는다면 에러뿜뿜  

###2. interface와 type alias

#### 이름기반으로 역할 분리 nominal type system

구조가 같아도 이름이 다르면 다르다.

```ts
type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-a'));
getPersonById('id-a'); // string은 맞지만 이름기반에 맞지않아서 에러뿜뿜
```

```ts
// function
type EatType = (food: string) => void;
interface IEat {
  (food: string): void;
}

// array
type PersonList = string[];
interface IPersonList {
  [index: number]: string;
}

// intersection
interface ErrorHanding {
  success: boolean;
  error?: {message: string};
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtistsResponseType = ArtistsData & ErrorHandling;
interface IArtistsResponseType extends ArtistsData, ErrorHandling {}

// union types
// union types는 interface가 상속받거나 class가  구현하는 행위는 제공되지 않는다.
type PetType = Bird | Fish; 

// Declaration Merging - interface
// 유틸관련 라이브러리를 사용할 때 유용하다. :) 
// a: string과 b: string 모두 사용 가능 
// type alias는 지원하지 않는다.
interface MergingInterface {
  a: string;
}

interface MergingInterface {
  b: string
}
```

### 3. 서브 타입과 슈퍼 타입

서브타입이란 집합의 관계에서 포함되는 것 슈퍼타입은 그 상위

```ts
let sub1: 1 = 1;
let sup1: number = sub1;
sub1 = sup1; // error

class SubAnumal {}
class SubDog extends SubAnimal {
  eat() {}
}

// 자식 class가 부모 class의 서브 타입니다.
// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6: SubDog = new SubDog();
let sup6: SubAnimal = sub6;
sub6 = sup6;
```

#### 공변성: 같거나 서브 타입인 경우 할당이 가능하다.

```ts
let sub7: string = '';
let sup7: string | number = sub7;
```

#### 반병: 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다.

 ```ts
class Person {}
class Developer extends Person {
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

function tellme(f: (d:Developer) => Developer) {}

// tellme를 실행시킬 수 있는가? 
tellme(function dToD(d: Developer): Developer {
	return new Developer ();
});

tellme(function dToD(d: Person): Developer {
	return new Developer ();
});

// strinctFunctionTypes 옵션을 켜면
// 함수의 매개변수 타입만 같거나 슈퍼타입인 경우가 아닌 경우,
// 에러를 통해 경고한다.
tellme(function dToD(d: StartupDeveloper): Developer {
	return new Developer ();
});
 ```

#### unknown은 any 대신

제안을 만들어 가면서 한다.

```ts
function fUnknown(a: unknown): number | string | void {
  a.toString(); // error! Object is of type 'unknown'.
  
  // unknown 을 사용하면서 제안을 만들어 간다.
  if(typeof a === 'number') {
    return a * 38;
  } else if (typeof a === 'string') {
    return `Hellow ${a}`;
  }
}
```



### 4. 타입 추론 이해하기

#### let과 const의 타입 추론 (+as const)

```ts
let a = 'Mark'; // string
const b = 'Nark'; // 'Mark' => literal type

let c = 38; // number
const d = 38; // 38 => literal type

let e = false; // boolean
const f = false; // false => literal type

let g = ['Mark', 'Haeun']; // string[]
const h = ['Mark', 'Haeun'] // string[]

const i = ['Mark', 'Haeun', 'Bokdang'] as const; // readonly ['Mark', 'Haeun', 'Bokdang']
```

#### Best common type

가장 공통적인 타입을 찾아낸다. 

```ts
let j = [0, 1, null]; // (number | null)[]
const k = [0, 1, null]; // (number | null)[]

class Animal {}
class Rhino extends Animal {}
class Elephant extends Animal {}
class Snake extends Animal {}

let i = [new Rhino(), new Elephant(), new Snake()]; // (Rhino | Elephant | Snake)[]
const m = [new Rhino(), new Elephant(), new Snake()]; // (Rhino | Elephant | Snake)[]
const n = [new Animal(), new Rhino(), new Elephant(), new Snake()]; // Animal[] 부모가 존재하면 부모가 타입으로 지정된다.
const o: Animal[] =  [new Rhino(), new Elephant(), new Snake()]; // Animal[]
```

### Contextual Typing - 위치에 따라 추론이 다름

```ts
const click = (e) => {
  e; // 여기선 any
};

document.addEventListener('click', click);
document.addEventListener('click', (e) => {
  e; // 여기선 MouseEvent로 추론된댜
})
```



## 5. Type Guard 로 안전함을 파악하기

### 1. typeof Type Guard - 보통 Primitive 타입일 경우

```ts
function getNumber(value: number | string): number {
  value; // number | string
  if (typeof value === 'number') {
    value; // number로 추론
    return value;
  }
}
```

### 2. instanceof Type Cuard

```ts
interface IMachine {
  name: string;
}

class Car implements IMachine {
  name: string;
  wheel: number;
}

class Boat implements IMachine {
  name: string;
  motor: number;
}

function getWhellOrMotor(machine: Car | Boat): number {
  if(machine instanceof Car) {
    return machine.wheel; // Car
  } else {
    return machine.motor; // Boat
  }
}
```

### instanceof Type Guard를 많이 사용하는 경우 Error 처리

```ts
class NegativeNumberError extends Error {}

function getNumber (value: number): number | NegativeNumberError {
  if (value < 0) return new NegativeNumberError();
  
  return value;
}

function main() {
  const num = getNumber(-10);
  
  if(num instanceof NegativeNumberError) {
    return;
  }
  
  num; // number 타입
}
```

### in operator Type Guard - object의 프로퍼티 유무로 처리하는 경우

```ts
interface Admin {
  id: string;
  role: string;
}

interface User {
  id: string;
  email: string;
}

function redirect(user: Admin | user) {
  if('role' in user) { // user is admin인지 쉽게 체크할 수 있다.
     routeToAdminPage(user.role);
  } else {
    routerToHomePage(user.email);
  }
}


```

### literal Type Guard - object의 프로퍼티가 같고, 타입이 다른 경우

```ts
interface IMachine {
  type: string
}

class Car implements IMachine {
  type: 'CAR';
  wheel: number;
}

class Boat implements IMachine {
  type: 'BOAT';
  motor: number;
}

function getWhellOrMotor(machine: Car | Boat): number {
  if(machine.type === 'CAR') { // reducer의 action.type으로 조건문 사용가능?
    return machine.wheel;
  } else {
    return machine.motor;
  }
}
```

### custom Type Guard

```ts
function getWhellOrMotor(machine: any): number {
  if(isCar(machine)) {
    return machine.wheel;
  } else if(isBoat(machine)) {
    return machine.motor;
  } else {
    return -1;
  }
}

function isCar(arg: any): arg is Car {
  return arg.type === 'CAR';
}

function isBoat(arg: any): arg is Boat {
  return arg.type === 'BOAT';
}
```

## Class Property의 타입을 명시적으로 지정해야한다.

```ts
// v3.9.7 
class Square1 {
  area; // error! implicit any
  sideLength; // error! implicit any
}
```

```ts
// v3.9.7 
class Square1 {
  area: number;
  sideLength: number;
}

const square2 = new Square2();
console.log(square2.area);
consele.log(square2.sideLength); // compile time - number but runtime undefined
```

> **stirctPropertyInitialization** 옵션을 켜면
> class의 property가 생성자 혹은 선언에서 값이 지정되지 않으면,
> 컴파일 에러를 발생시켜 주의를 준다.

초기값을 설정하던가

```ts
class Square1 {
  area: number = 0;
  sideLength: number = 0;
}
```

생성자에서 초기화를 한다.

```ts
// v3.9.7 
class Square1 {
  area: number;
  sideLength: number;
  
  constructor(sideLength: number) {
    this.sideLength = sideLength;
    this.area = sideLength ** 2;
  }
}
```

**v4.0.2 부터는 생성자에 의해 추론된다.**

```ts
class Square5 {
  area;
  sideLength;
  
  constructor (sideLength: number) {
    this.sideLength = sideLength;
    this.area = sideLength ** 2;
  }
}
```

```ts
class Square6 {
  sideLength; // number 혹은 undefined로 추론이 된다.
  
  constructor (sideLength: number) {
    if(Math.random()) {
      this.sideLength = sideLength;
    }
  }
  
  get area() {
    return this.sideLength ** 2; // error! Object is possibly 'undefined'
  }
}
```

### 그러나 여전히 생성자를 벗어나지 못하면 추론되지 않는다.

```ts
class Square7 {
  sideLength!: number; // 어디선가 number로 초기화 할것이라는 것을 알려준다.

  constructor(sideLength: number) {
    this.initialize(sideLength);
  }

  initialize(sideLength: number) {
    this.sideLength = sideLength;
  }

  get area() {
    return this.sideLength **2;
  }
}
```


