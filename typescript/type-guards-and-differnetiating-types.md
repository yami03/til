# Type Guards and Differnetiating Types

[TypeScript HandBook Links](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types)
[DEV](https://dev.to/daveturissini/aha-understanding-typescript-s-type-predicates-40ha)

A type guard is some expression that performs a runtime check that guarantees the type in some scope.
타입이 문자여도 숫자를 써도 되는 보장을 해준다.(?)

**four main ways to use type guards**
* `in` keyword
* `typeof` keyword
* `instanceof` keyword
* predicate


## Using type predicates (parameterName is Type)

```ts
interface Cat {
  numberOfLives: number;
}

interface Dog {
  isAGoodBoy: boolean;
}

// Boolean 값을 return하는데 좀더 정확하게 animal is Cat 으로 해줄 수 있다!
function isCat(animal: Cat | Dog): animal is Cat {
  return typeof animal.numberOfLives === 'number';
}
```

`parameterName`은 현재 함수 시그니처의 매개 변수 이름이어야 한다.

이 개념은 or(|)일때 많이 쓰이는데 이 or이 복잡하다. 이럴때 타입을 설정해 줄 수 있는게 타입가드이다.

