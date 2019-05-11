# 데이터 타입	

데이터 타입은 두종류로 나뉜다.
**primitive type** vs **reference type**

## primitive type

* string
* number
* boolean
* undefined
* null



## 레퍼 객체(wrapper object)

```js
var str = 'coding';
console.log(str.length);
```

str이 담고 있는건 string인데 .(object access operator)  점을 사용하여 객체처럼 사용한다. 문자열을 제어하기 위해선 문자열이 객체인거처럼 동작해야 이러한 작업이 가능하기 때문이다. 그런이유로 임시로 그것을 객체로 만들어 준다. 

```js
str = new String('coding');
```

과 같다. 하지만 결과값이 도출되면 다시 primitive type으로 돌려준다.

```js
var str = 'coding';
str.prop = 'everybody';
console.log(str.prop); //undefined
```

error가 나지않고 undefined 가 뜬다. 객체처럼 쓰면 자바스크립트가 객체로 만들어 버린다.  객체가 되었지만 `str.prop = 'everybody';` 이 순간엔 객체가 되었지만 실행이 끝난 후엔 다시 primitive type으로 돌려주기 때문에 undefined가 뜬다.

> 원시데이터 타입이 있을때 객체로 감싼걸 -> wrapper object라 한다.

* number
* string
* boolean

은 wrapper object가 존재하고, null과 undefined는 존재하지 않는다.