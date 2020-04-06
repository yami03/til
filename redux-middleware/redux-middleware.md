# redux middleware

웹 브라우저 -> 서버로 요청을 보냈을 때 응답할 때까지 로딩상태 설정

요청이 성공 실패 업데이트 결정을 리덕스와 리덕스 미들웨어로 하면 편리

액션 -> 리듀서 사이를 미들웨어가!!
전달받은 액션을 기록, 절달받은 액션 정보를 기반으로 액션을 취소 
다른종류의 액션을 추가

```js
const loggerMiddleware = store => next => action => {
  // 현재 스토어 상태 값 기록
 	console.log('현재 상태', store.getState());
  
  // 액션 기록
  console.log('액션', action);
  
  // 액션을 다음 미들웨어 또는 리듀서로 넘깁니다.
  const result = next(action);
  
  // 액션 처리 후의 스토어 상태를 기록합니다.
  console.log('다음 상태', store.getState());
  
  return result; // store.dispatch(ACTION_TYPE)했을 때 결과
}
```

이런식의 middlewrare 역할로 생각 

액션이 일어나면 중간에 미들웨어가 이전데이터도 알 수 있고 액션도 알 수 있고 할 수 있는 일들이 많다.

미들웨어는 스토어를 생성할 때마다 적용할 수 있다.

**네트워크 비동기 작업에 유용하다**

## Redux-thunk

함수도 디스패치할 수 있다.
일반 액션 객체로는 특정 액션을 디스패치한 후 -> 몇 초 뒤에 반영하거나 현재 상태에 따라 아예 무시하게 만들 수 없음.
함수를 디스패치할 수 있게 함으로써 일반 액션객체로는 할 수 없는 일들을 할 수 있게 해준다.

```js
function increment() {
  return {
    type: INCREMENT_COUNTER
  }
}

function incrementAsync() {
  return dispatch => { // dispatch를 파라미터로 가지는 함수를 리턴
    setTimeout(() => {
      dispatch(increment());
    }, 1000)
  }
}

store.dispatch(incrementAsync())
```

1초후 실행하기

```js
funciotn incrementIfOdd() {
  return (dispatch, getState) => {
    const { counter } = getState();
    
    if(counter % 2) return;
    
    dispatch(increment())
  }
}
```

조건에 따라 실행을 종료시키기

* 함수를 반환한다. -> thunk 생성 함수
* dispatch와 getState를 파라미터로 가지는 새로운 함수를 만든다.
* createAction
* handleActions으로 리듀서 함수를 구현한다. 

