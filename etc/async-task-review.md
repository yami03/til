# async 과제 후기 - 비동기, 동기, 클로저, 배열과 객체

async 메소드를 만드는 과제

과제는 2가지로 나눌 수 있다.

* 병렬형
* 직렬형

### 병렬형

---

for문을 이용한다.
한꺼번에 실행하기 때문에 for문이 적절하다.

메소드 - each, every, filter, some, groupBy, parallel, detect, times

<br>

### 직렬형

---

순차적으로 하기 때문에 재귀함수를 사용한다.

메소드 - reduce, series, memoize, waterfall, whilst, forever

<br>

### 클로저

---

**each.js**

```js
for(let i = 0; i < collection.length; i++) {
  iteratee(collection[i], function (error) {
    if(error) return callback(error);
    count += 1;
    if(count === collection.length) callback(null);
  });
}
```

병렬이라 for로 돌렸다.
하지만 var로 할경우엔 오직 collection.length만 찍히지만, let으로 할경우 클로저가 발생되어 iteratee가 블록스코프인 let을 계속 지켜보고 또 let또한 for를 돌때마다 계속 블록이 생성되어 그 스코프정보가 저장된다. 그래서 비동기로 호출하여도 원하는 i값을 가질 수 있다.

이 방법외에

**함수로 감싸서 외부함수 내부함수 구조로 만들어 클로저 만들기**

```js
for(var i = 0; i < collection.length; i++) {
  iterator(i);
}

function iterator(i) {
  iteratee(collection[i], function (error) {
    if(error) return callback(error);
    count += 1;
    if(count === collection.length) callback(null);
  });  
}
```

이렇게 실행할 수 있다. 또는..

**즉시실행 함수를 사용하기**

```js
for(var i = 0; i < collection.length; i++) {
  function(i){
    iteratee(collection[i], function (error) {
      if(error) return callback(error);
      count += 1;
      if(count === collection.length) callback(null);
  	});
  })(i);
}
```

<br>

### Array와 Object를 구분해서 짜기

---

**length**를 구할때는

```js
const lengthOfCollection = collection.length || Object.keys(collection).length;
```

로 length값을 구한다.

**Object.values() 를 사용하자**

```js
const values = Object.values(collection);
const item = Array.isArray(collection) ? collection[i] : values[i];
```

`const keys = Object.keys(collection)`을 사용했었는데 이러면 `collection[keys[num]]`으로 복잡해진다.
또한 `Array.isArray()`를 사용해야하는 이유는, 객체의 key값이 `숫자`일 경우 collection[숫자]를 피해갈 수 없기 때문에 꼭 써줘야 한다.

