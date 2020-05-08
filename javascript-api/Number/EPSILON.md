# Number.EPSILON

`Number.EPSILON` 은 JavaScript에서 표현할 수 있는 가장 작은 수 이다. `Number` 형으로 표현될 수 있는 1과 1보다 큰 값 중에서 가장 작은 값의 차이다.

이 정적 속성에 접근하기 위하여 Number 객체를 생성할 필요가 없다 -> 왜냐하면 원시 타입으로 프로퍼티나 메서드를 호출 할 때 원시 타입과 연관된 wrapper 객체로 일시적으로 변환되어 프로토타입 객체를 공유하게 되기 때문이다. 

```js
const result = Math.abs(0.2 - 0.3 + 0.1);

result; // 2.7755575615628914e-17

result < Number.EPSILON; 
// 2.7755575615628914e-17 < 2.2204460492503130808472633361816E-16 true
```

**부동소수점 또는 떠돌이 소수점**

실수를 컴퓨터상에서 근사하여 표현할 때 소수점의 위치를 고정하지 않고 그 위치를 나타내는 수를 따로 적은 것

부동소수점 산술 연산 비교는 정확한 값을 기대하기 어렵다. 

https://perfectacle.github.io/2017/08/04/ES6-EPSILON/ 😭

## Description

`EPSILON` 속성은 `2.2204460492503130808472633361816E-16`, or 2-52 가까운 값이다.

## Examples

```js
// Math.abs는 절댓값을 반환한다.
// 즉 a와 b의 차이가 JavaScript에서 표현할 수 있는 가장 작은 수인 Number.EPSILON보다 작으면 같은 수로 인정할 수 있다.
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON;
// 5.551115123125783e-17 < 2.2204460492503130808472633361816E-16 true
```

> 부동소수점 산술 연산 비교는 정확한 값을 기대하기 어렵다.
>
> 정수는 2진법으로 오차없이 저장이 가능하지만 부동소수점을 표현하는 가장 널리 쓰이는 표준인 IEEE 754은 2진법으로 변환시 무한소수가 되어 미세한 오차가 발생할 수 밖에 없는 구조적 한계를 갖는다.
>
> 따라서 부동소수점의 비교는 Number.EPSILON을 사용하여 비교 기능을 갖는 함수를 작성하여야 한다.
>
> https://poiemaweb.com/js-number#21-numberepsilon-es6

https://stackoverflow.com/questions/51019475/what-are-the-possible-usage-scenarios-for-number-epsilon