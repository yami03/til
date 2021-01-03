# 우아한 타입스크립트 2부 

## 실전 타입스크립트 코드 작성하기

1. Conditional Type을 활용하기
2. Overloading을 활용하기
3. readonly, as const를 남발하기
4. optional type보단 Union type을 사용하기
5. never 활용하기

## 1. Conditional Type을 활용하기

### Item`<T>` - T에 따라 달라지는 contatiner

```ts
interface StringContainer {
  value: string;
  format(): string;
  split(): string[];
}

interface NumberContainer {
  value: number;
  nearestPrime: number;
  round(): number;
}

type Item1<T> = {
  id: T,
  container: any;
}

const item1: Item1<string> = {
  id: 'aaaaaa',
  container: null,
}
```

조건부로 할 수 있다.

### T가 string이면 StringContainer, 아니면 NumberContainer

```ts
type Item2<T> = {
  id: T; 
  // T가 string이면? 
  container: T extends string ? StringContainer : NumberContainer;
}

const item2: Item2<string> = {
  id: 'aaaaaa',
  container: null, // Type 'null' is not assignable to type 'StringContainer'.
}
```

### Item`<T>` T가 string 이면 StringContainer, T가 number 면 NumberContainer 아니면 사용 불가

```ts
type Item3<T> = {
  id: T extends string | number ? T : never;
  container: T extends string ? StringContainer : T extends number ? Number Conainer : never;
}

const item3: Item3<boolean> = {
  id: true, // Type 'boolean' is not assignable to type 'never'.
  container: null, // Type 'null' is not assignable to type 'neber'.
}
```

어떤 값도 넣을 수 없는게 never라고 볼 수 있다. 

### ArrayFilter`<T>`

```ts
// T가 Array 형태면 T를 반환 아니면 never를 반환
type ArrayF ilter<T> = T extends any[] ? T : never;
type StringsOrNumbers = ArrayFilter<string | number | string[] | number ]\>;  
```

### Table or Dino

```ts
interface Table {
  id: string;
  chairs: string[];
}

interface Dino {
  id: number;
  legs: number;
}

interface World {
  // string과 number를 제약하는 방법
  getItem<T extends string | number>(id: T): T extends string ? Table : Dino;
}

let world: World = null as any;

const dino = world.getItem(10);
const what = world.getItem(true); // Error! Argument of type 'boolean' is not assignable parameter of type 'string | number'
```

### Flatten`<T>`

```ts
type Flatten<T> = T extends any [] ? T[number] : T extends object ? T[keyof T] : T;

const numbers = [1, 2, 3];
type NumbersArrayFlattened = Flatten<typeof numbers>;
// 1. numer[]
// 2. number

const person = {
  name: 'Mark',
  age: 38
}

type SomeObjectFlattened = Flatten<typeof person>;
// 1. keyof T -> 'name' | 'age' 
// 2. T['name' | 'age']  -> T['name'] | T['age'] -> string | number

const isMale = true;
type SomeBooleanFlattened =  Flatten<typeof isMale>;
```

 ### infer

```ts
// infer k -> k를 추론한다.
type UnpackPromise<T> = T extends Promise<infer k>[] ? K : any;
const promise = [Promise.resolve('Mark'), Promise.resolve(38)];

type Expected = UnpackPromise<typeof promises>; // string | number;
```

### 함수의  리턴 타입 알아내기 - MyReturnType

```ts
function plus1(seed: number): number {
  return seed + 1;
}

// <T extends (...args: any) => any> -> 함수여야 한다는 제약사항이다. 
// 함수이면 리턴타입을 R로 추론해서 사용하겠다. 
type MyReturnType<T extends (...args: any) => any> => T extends (
	...args: any) => inter R ? R : any;
)

// <typeof plus1> 는 함수를 넣은 것
// 제약사항이 함수인데 함수니까 통과가 됐다.
// inter R 리턴타입을 추론하겠다. -> number
type Id = MyReturnType<typeof plus1>;

lookupEntity(plus1(10));

// 직접 number인지 string인지 추론하는게 아니라 직접 타입으로 추론해서 넣는 방식
function lookupEntity(id: Id) {
  // query DB for entity by ID
}
```

소스코드를 보고 타입을 알아낸 다음 타입이 맞는지를 확인하는 과정을 거친다. 
와우

### 내장 conditional types (1)

```ts
// type Exclude<T, U> = T extends U ? never : T;
// string을 제외한 것을 얻고 싶을 때
type Excluded = Excluded<string | number, string>; // number - diff

// type Extract<T, U> = T extends U ? T : never;
type Extracted = Extract<string | number, string>; // string - filter

// Pick<T, Exclude<keyof T, K>>; (Mapped Type)
type Picked = Pick<{name: string, age: number}, 'name'>;

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type Omited = Omit<{name: string, age: number}, 'name'>;

// type NonNullable<T> = T extends null | nudefined ? never : T;
// <string | number | null | undefined> -> string | number | never | never
type NonNullabled = NonNullable<string | number | null | undefined>;
```

### 내장 conditinal types (2)

```ts
/*
함수라는 제약 사항 <T extends (...args: any) => any> 
type Parameters<T extends (...args: any) => any> = T extends (
 ...args: infer P
) => any ? P : never;
*/
// parameters의 타입만 뽑아낼 수 있다.
type MyParameters = Parameters<(name: string, age: number) => void>; // [name: string, age: number]
```

### 내장 conditional types (3)

```ts
interface Constructor {
  new (name: string, age: number): string;
}

/*
type Parameters<T extends (...args: any) => any> = T extends (
 ...args: infer P
) => any ? P : never;
*/

type MyConstructorParameters = ConstructorParameters<Constructor>; // [name: string, age: number]

/*
type instanceType<T extends new (...args: any) => any> = T extends new (
...args: any) => infer R ? R : any; 
*/

// T의 제약사항이 <T extends new (...args: any) => any> 생성자인데 생성자에서
// 반환값 즉 인스턴스 타입 new (name: string, age: number): string; 
type MyInstanceType = InstanceType<Constructor>; // string
```

### Function 인 프로퍼티 찾기

```ts
type FunctionPropertyNames<T> = {
  // never는 지운다. 
  [K in keyof T]: T[K] extends Function? K : never;
}[keyof T];
type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;

type NonFunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? never : K;
}
type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;

interface Person {
  id: number;
  name: string;
  hello(message: string): void;
}

type T1 = FunctionPropertyNames<Person>;
type T2 = NonFunctionPropertyNames<Person>;
type T3 = FunctionProperties<Person>;
type T4 = NonFunctionProperties<Person>;
```

## 2. Overloading을 활용하기

### 오버로딩이 불가능한 자바스크립트에 타입을 붙이는 경우

```ts
function shuffle(value: string | any[]) : string | any[] {
  if(typeof value === 'string') {
    return value.split('').sort(() => Math.random() - 0.5).join('');
  }
  return value.sort(() => Math.random() - 0.5);
}

console.log(shuffle('Hello, Mark!')); // string | any[]
console.log(shuffle(['Hello', 'Mark', 'long', 'time', 'no', 'see'])); // string | any[]
console.log(shuffle([1, 2, 3, 4, 5])); // string | any[]
```




