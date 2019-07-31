# Promise

비동기처리 할 때 사용한다. 

continuation passing style - 함수를 지속적으로 넘겨준다.

```js
function foo (a, b, c, callback) {
  // ...
  // compete : callback();
}

// foo -> bar -> baz
// 지속적으로 콜백을 넘겨주는 것이다.
// callbackhell.com
```

new Promise  => 객체를 만들어준다. 비동기 처리를 도와준다.

> **객체라는게 만들어 졌다. 손에 쥘 수 있는 물건이 만들어 졌다.  부탁을 하고 실물로 갖게 되었다. 
> 비동기 처리를 객체지향과 접목하여 비동기를 다를 수 있게 하였다.**

원래는 함수로 만들고 기다리기만 했는데 자유도가 늘어나고 능동적으로 할 수 있게 되었다.

**활용성이 훨씬 커졌다.**

peomise를 써도 callbackhell이 나타날 수 있다. 그렇기 때문에 promise가 해결해 준다. 하는건 잘못된거다.

결과값을 모아서 공통잠는..

매핑하는 함수를 하나 만듬.. 

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

* new Promise는 인자로 함수를 받는다.
* 그 함수에는 `resolve`와 `reject`라는 인자를 받는다.
* 이 두개는 Promise측에서 자동으로 넘겨주는 것이다.
* new Promise의 인자로 받은 함수 내부에서 비동기 작업을 한다.
* 코드를 보면 resolve와 reject를 실행했다. 이는 `함수`라는 것이다.
* 성공하면은 resolve를 실행하고 실패하면 reject를 실행한다.
* `var youtubePromise `그래서 이 변수에는 비동기 작업에 대한 정보를 담고 있는 객체이다.

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
* then의 인자로 받은 함수는 resolve됐을 때 실행된다.
* catch라는 메소드는 reject됐을 때 실행된다.
* then의 인자인 함수안에 data라는 인자를 받는데 그 인자는 success했을 때 받는다.
* reject했을 때 받는 error인자는 catch로 전달 된다.

