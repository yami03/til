# Redux Toolkit

https://redux-toolkit.js.org/tutorials/basic-tutorial 참고

## configureStore

```ts
// Before:
const store = createStore(rootReducer)

// After:
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)]
});
```

configureStore는 creatStore를 감싸고 있고,  이전엔 creatStore() 사용하여 다수의 함수 인자를 받다가 현재는

## createAction

```ts
// 나때는 말야.. Before:
const INCREMENT = 'INCREMENT'

function incrementOriginal() {
  return { type: INCREMENT }
}


// After: 상수를 만들필요도 없고 action type을 바로 만들어준다.
const increment = createAction('INCREMENT')

// action string을 참조하는 2가지 방법
// toString()을 무시하고? "[object Object]" 값이 아니고
// type 값 stirng을 반환한다.
console.log(increment.toString())
// "INCREMENT"

console.log(increment.type)
// "INCREMENT"
```

action type을 string 받고 type string을 사용 `action creator function` 를 return 한다. (이것은 약간 의미가 틀렸다 - action object가 아니라 action creator function라고 하였다. 그러나 createActionCreator보다 짧고 기억하기 쉽다.)

## createReducer

```ts
const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')

// Before
function counter(state = 0, action) {
  switch (action.type) {
    case increment.type:
      return state + 1
    case decrement.type:
      return state - 1
    default:
      return state
  }
}

// After: 타입값에 접근하는 방법은 2가지 
// 1번 toString()
// computed properties syntax를 사용하면 toString()이 자동 호출
const counter = createReducer(0, {
  [increment]: state => state + 1,
  [decrement]: state => state - 1
})

// 2번 dotnotation .type
const counter = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1
})
```

이전엔 reducer를 만들때는 switch문을 사용하였다. 중요한건 action.type 이다. 그래서 createReducer를 사용 + [ES6 object "computed property" syntax](https://javascript.info/object#computed-properties) 사용한다면 switch문 없이도 가능하다.

## createSlice

```ts
const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

const { actions, reducer } = counterSlice
const { updateList, updateCurrent } = actions
```

CT Annotation Tool에 쓰인 것 (+ configureStore와 같이)

의문과 변경할 수 있는 부분

1. action creator를 왜 따로 만들어야하는지
2. action type에 string을 써야할 이유가 있을까?

→ createSlice가 reducer의 이름을 기준으로 action type string과 action cretor function을 자동적으로 만들어 준다.

reducer라는 key를 가진 reducer function을 포함한 "slice" object를 return 한다.

actions라고 부르는 객체안에 action creator도 같이

→ 왜 createSlice()만 쓰였을까? 했는데 다기능수준이다. 다있다 IIF