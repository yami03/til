# Generics
재사용 가능한 컴포넌트를 구축할 수 있다.
유연한 기능
단일 타입이 아닌 다양한 타입을 처리 할 수 있는 컴포넌트를 만든다.

```ts
function indentity(arg: any): any {
  return arg;
}
```

any를 쓰는 경우 타입스크립트를 안쓰겠다는 뜻이랑 같다.

**타입 변수(type variable)**

```ts
function idntity<T>(arg: T): T {
  ruturn arg;
}
```

identity 함수는 다양한 타입을 처리할 수 있다.

**함수호출 2가지 방법**

```ts
let output = identity<string>("myString"); 
```

```ts
let output = identity("myString");
```

꺽쇠 괄호(<>)안에 명시적으로 타입을 전달할 필요가 없다.
인자 `myString` 을 보고 T를 그 타입으로 설정한다.



## Generic Type Variables

**함수가 T대신에 T배열을 처리한다면**

```ts
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length); // 오류: T는 .length 메소드를 가지고 있지 않다.
  return arg;
}
```
**오류 없이 작성하기: 2가지 방법**

```ts
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // 오류없음 Array는 .length 멤버가 있습니다.
  return arg;
}
```

```ts
function loggingIdenty<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}
```

## Generic Types

타입 매개변수가 먼저 나열된 비 제네릭 함수의 타입

```ts
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <T>(arg: T) => T = identity;
```

**타입 변수의 수와 타입 변수의 사용이 일치하면 제네릭 타입 매개변수를 다른이름 사용 가능**

```ts
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <U>(arg: U) => U = identity;
```

**객체 리터럴 방식의 호출 형식**

```ts 
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;
```

**객체 리터럴 방식 + interface**

```ts
interface GenericIdentityFn {
  <T>(arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn = identity;
```

**제네릭 인터페이스를 매개변수로 이동할 수 있다.**

```ts
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

## Generic Classes

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y };
```

## Generic Constraints
.length 프로퍼티를 가진 모든 타입에서 작동하도록 제한을 두고 싶다.
T가 무엇이 될 수 있는지에 대한 제약으로서 요구 사항을 작성해야 한다.

**interface 와 extends**
```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengtwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

## Using Type Parameters in Generic Constraints

```ts
function getProperty<T, K extends keyof T>(obj: T, key:K) {
  return obj[key];
}

let x = {a:1, b:2, c:3, d: 4};

getProperty(x, "a");
getProperty(x, "m"); // 오류: keyof T에 해당되지 않는다.
```

## Using Class Types in Generics

생성자 함수를 사용하여 클래스 타입을 참조한다.