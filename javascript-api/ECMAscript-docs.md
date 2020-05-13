# ECMAScript 명세를 이해하는 방법

**Object.prototype.hasOwnProperty**

```js
const o = { foo: 1 };
o.hasOwnProperty('foo'); // true
o.hasOwnProperty('bar'); // false
```

이 예시에서 o는 `hasOwnProperty` 라는 속성이 없다. o의 부모라고 할 수 있는 Object가 가진 `hasOwnProperty` 를 위임받아 protochain으로 `hasOwnProperty` 를 실행한다.






## [[]]

내부 슬롯과 내부 메소드은 [[]] 안에 이름을 사용한다.

예를들어 모든 Javascript object는 내부 슬롯 [[Prototype]]과 내부 메소드 [[GetOwnProperty]]를 가지고 있다.

내부 슬롯과 메소드는 자바스크립트에서 엑세스 할 수 없다. (예를 들어 o.[[Prototype]] 하거나 o.[[GetOwnProperty]]() 호출)

때때로 내부 메소드는 일반 object와 같이 유사한 네임의 abstract operation 위임한다.😓

