# Hooks API Reference

API를 보며 정리한 내용, API 그대로의 내용

Hook은 React 16.8에 새로 추가된 기능이다.
class를 작성하지 않고도 state와 다른 react기능을 쓸 수 있다.

* 기본 Hook
  * useState
  * useEffect
  * useContext
* 추가 Hooks
  * useCallback
  * useMemo
  * useRef
  * useImperativeHandle
  * useLayoutEffect
  * useDebugValue

## useConetxt

```jsx
const value = useContext(MyContext);
```

context의 현재 값을 반환한다.
context의 현재 값은 트리 안에서 Hook을 호출하는 컴포넌트 가장 가까이에 있는

<MyContext.Provider>의 value prop에 의해 결정된다.

상위 컴포넌트에서 React.memo를 사용하더라도 useContext를 사용하고 있는 컴포넌트 자체에서부터 다시 렌더링된다.

useContext 전달 인자는 context 객체 그 자체여야 한다.

* useContext(MyContext) -> 맞음
* useContext(MyContext.Consumer) -> 틀림

useContext를 호출할 컴포넌트는 context 값이 변경되면 항상 리렌더링 될것이다.
만약 컴포넌트를 리렌더링하는 비용이 많이 든다면, 메모제이션을 사용하여 최적화할 수 있다.

클래스에서 쓸 때는 `static contextType = context` 또는 `<MyContext.Consumer>` 와 유사하다. 

## useReducer

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

useState의 대체 함수이다. (state, action) => newState의 형태로 reducer를 받고, dispatch 메서드와 짝의 형태로 현재 state를 반환

다음 state가 이전 state에 의존적인 경우 useState보다 useReducer가 낫다.
useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 성능을 최적할 수 있는데 콜백 대신 dispatch를 전달 할 수 있다.

**useState를 사용할 경우**

```jsx
function Counter({initialState} {
	const [count, setCount] = useState(initialCount);
  return (
  	<>
    	Count: {count}
      <button onClick={() => setCount(intialCount)}>Reset</button>
  		<button onClick={() => setCount(prevCount => prevCount - 1)}>+</button>
  		<button onClick={() => setCount(prevCount => prevCount + 1)}></button>
    </>
  )
})
```
setState의 첫번째인자가 prevState 였다.. 😅

***useReducer로 바꿨을 떄***

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment': 
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);
  return (
  	<>
    	Count: {state.count}
			<button onClick={() => dispatch({type: 'increment'})}>+</button>
			<buttton onClick={() => dispatch({type: 'decrement'})}>-</buttton>
    </>
  )
}
```

dispatch는 리렌더링 시에도 변경되지 않음을 보장한다. 

reducer가 순수함수인거와 관련이 있지 않을까?
그래서 useEffect나 useCallback 의존성 목록에 이 함수를 포함하지 않아도 괜찮다.

 초기화하는법 
useReducer(reducer, 두번째 인자로 들어온다);



