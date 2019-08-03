# Promise

지금으로부터 시간이 끝날 사이에 일어날 어떤 일이라 할 수 있다. 
미래에 어떤일이 생길 수 있지만 지금 바로 일어나진 않는다.

## Promise가 없었던 '나 때는 말야..' 시절

**ES5 with jQuery**

```js
console.log(1);

$.get({
  url: SOME_URL,
  success: function (data) { // 서버로 갔다가 오는 비동기로 작업된다.
    console.log(3);
    console.log(data.items.length);
    // success하고 난 후 다양한 일을 하고 싶으면
    // 여기에 내용을 줄줄줄 많이 쓸 수 밖에 없는 불편함이 있다.
  },
  error: function (error) {
    console.error(error);
  }
});

console.log(2);
```

이전에는 es5와 jquery를 이용해 get이라는 메소드를 사용하여 success와 error를 받음
get이라는 method는 setTimeout과 유사하다고 볼 수 있다.

**continuation passing style (함수를 지속적으로 넘겨준다.) - async.js 메소드 안에는**

---

```js
function foo (a, b, c, callback) {
  // ...비동기가 이루어지고
  // 비동기가 완료 됐을 때 callback() 호출해주는 패턴이 많았다.
  // compete : callback();
}

// foo -> bar -> baz
// 지속적으로 콜백을 넘겨주는 것이다.엮어 들어간다.
// 이렇게 보장 받아서 콜백을 전달하는데 이러할 경우 callbackhell에 빠질 수 있다. 
// 참고 사이트: callbackhell.com
```



## Promise - 객체가 만들어졌다. (능동적)

```js
var youtubePromise = new Promise(function (resolve, reject) { //new Promise 오브젝트다.
  $.get({ 
    url: SOME_URL,
    success: function (data) {
      resolve(data);
    },
    error: function (error) {
      reject(error);
    }
  });
});

youtubePromise.then(function (data) {
  console.log('Success:', data.items.length);
}).catch(function (error) {
  console.error('Error:', error);
});
```

### 가장 크게 달라진 부분

---

```js
var youtubePromise = new Promise(function (resolve, reject) { //new Promise 오브젝트다.
```

new라고 글자와 함께 Promise가 쓰였다. new가 하는 일이 무엇인가.
인스턴스, 객체를 만들어 준다.

이전(Promise가 없었을 때엔)까지는 **수동적인 태도**였다.
기존에는 손에 쥘 수 있는 물건이 없었기 때문에, 호출이 완료 될때까지 마냥 기다리다가 호출되면 '감사합니다' 하고 다음것을 하고 또 호출하면 `감사합니다` 하고 다음 것을 하였다. 다 끝나면 이거 해주세요~ 하고 수동적인 태도였다.

**하지만 지금은**

**new Promise  => 객체를 만들어준다. 비동기 처리를 도와준다.**

> **객체라는게 만들어 졌다. 손에 쥘 수 있는 물건이 만들어 졌다.  부탁을 하고 실물로 갖게 되었다. 
> 비동기 처리를 객체지향과 접목하여 비동기를 다를 수 있게 하였다.**

원래는 함수로 만들고 기다리기만 했는데 자유도가 늘어나고 능동적으로 할 수 있게 되었다.

**활용성이 훨씬 커졌다.**

peomise를 써도 callbackhell이 나타날 수 있다. 그렇기 때문에 `promise가 callbackhell를 해결해 준다. 하는건 잘못된거다.`

**비동기 처리 로직을 new Promise를 사용하여 객체로 받는다는 의미 - 활용성(자유도, 능동성)이 다양해 졌다.**

* 변수에 담을 수도 있다.

* 변수를 넘겨줄 수 있다.
* return 할 수 있다.

**차근차근 살펴보자**

---

```js
var youtubePromise = new Promise(function (resolve, reject) { //new Promise 오브젝트다.
  $.get({ 
    url: SOME_URL,
    success: function (data) {
      resolve(data);
    },
    error: function (error) {
      reject(error);
    }
  });
});
```

* new Promise는 인자로 함수를 하나 받는다.
* 그 함수에는 `resolve`와 `reject`라는 인자를 받는다.
* 이 두개는 Promise측에서 자동으로 넘겨주는 것이다.
* new Promise의 인자로 받은 함수 내부에서 **비동기 작업**을 한다.
* 코드를 보면 resolve와 reject를 실행했다. 이는 `함수`라는 것이다.
* 성공하면은 resolve를 실행하고 실패하면 reject를 실행한다.
* `var youtubePromise ` 이 변수에는 비동기 작업에 대한 정보를 담고 있는 객체이다. (Promise의 instance이다)

**Promise Instance에는 then과 catch메소드가 있다.**

---
```js
youtubePromise.then(function (data) {
  console.log('Success:', data.items.length);
}).catch(function (error) {
  console.error('Error:', error);
});
```

* new Promise의 인스턴스이다.
* 인스턴스에는 then이라는 메소드와 catch라는 메소드가 있다.
* then과 catch는 인자로 function을 받는다.
* then의 인자로 받은 콜백함수는 resolve됐을 때 실행된다.
* catch라는 메소드는 reject됐을 때 실행된다.
* then의 인자의 콜백함수안에 data라는 인자를 받는데 그 인자는 success안에서 resolve로 넘겨준 것이다.
* reject했을 때 받는 error인자는 catch의 콜백함수 인자로 전달 된다.
* then과 catch의 인자로 받은 callback함수는 비동기로 이루어지는 것이다.

 ### all

```js
 Promise.all(allItemsPromises).then(function (result) {
    console.log(`${result.length}개의 아이템 정보 수집 완료`);
    console.log(4);
  }).catch(function () {
    console.log('error');
  });
});
```

promise는 all이라는 메소드가 있다. 인자로는 배열을 받는다. 배열안에는 promise의 instance들이 들어있다.
배열에 있는 promise들이 resolve되고 나면은 then이 호출된다.
이 의미는 배열의 원소들이 전부 resolve가 됐다는 보장을 받고 쓸 수 있는 것이다.

