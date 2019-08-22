## Action

**reducer에서 절대 하지 말아야 할 일**

- 인수들을 변경(mutate)하기;
- API 호출이나 라우팅 전환같은 사이드이펙트를 일으키기;
- `Date.now()`나 `Math.random()` 같이 순수하지 않은 함수를 호출하기.

## Container

**mapStateToProps**

```js
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}
```

`mapStateToProps`라 불리는 특별한 함수를 정의해야 합니다. 
이 함수에는 현재 Redux 스토어의 상태를 어떻게 변형할지, 그리고 어떤 속성을 통해 presentational 컴포넌트로 넘겨줄 지를 서술하면 됩니다.

**mapDispatchToProps**

```js
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}
```

`mapDispatchToProps()` 함수를 정의하면 되는데, 이 함수는 [`dispatch()`](https://deminoth.github.io/redux/api/Store.html#dispatch) 메소드를 인자로 받습니다. 이 함수가 콜백으로 이루어진 속성들을 반환하도록 만들어주면, presentational 컴포넌트에 이 속성들이 주입됩니다.

**connect**

```js
import { connect } from 'react-redux';

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
```

```js
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
```

App컴포넌트를 connect를 감싼것이다.
리덕스 세상과 연결해 주는것이다. App은 또다른 컴포넌트가 된것이다.

json파일은 

reject 는 프로미스를 실패하도록 

상태를 결정하는게 리졸브 리젝트

캐치는 안쪽구문.. 

connect 해놓은 애들은 리덕스의 state가 업데이트 되면 (리듀서에서 리턴을 해준것이다.) 리덕스라는 애가 자동으로 스토어를 업데이트 한다. 스토어가 업데이트 되면 커넥트 해놓은 애들은 다시 렌더링이 된다.
하위에 있는 모든애들도 다시 렌더링 된다.

connect는 hight oder compopnenet 



```js
mapStateToProps,
mapDispatchToProps
```

리덕스세상에 state가 업데이트 되었을 때 업데이트 되도록 

props 로 내려가도록 한다.

Dispatch 하도록 한다. 

 



### Provider

redux에서 reducer가 호출이 된다. reducer는 기존의 state자 데이터 상태 / 현재 발생한 action을 받는다.  그 두개를 받아서 새롭게 state가 어떻게 수정되면 되는지 return을 해준다. 컴포넌트로 가서 props로 뿌려진다.

reducer에서 return해주는 state가 컴포넌트로 넘어가야 하는데 그것을 자동으로 해주는게 provider이다.

**combineReducers**
는 reducer를 합친다. 

state의 모양을 알 수 있다/

### reducer

순수함수이다.

```const todos = (state = [], action)```

reducer를 따로 호출해 주진 않는다.

**dispatch**

connect를 함으로 자동으로 인자로 받을 수 있다.
지금 뭔가 액션이 발생했다고 말해준다.-> 리덕스 세상에 알려주고 사이클을 돌린다.

이 객체가 어떤 정보를 저장해야하는지 생각을 해서 dispatch에 객체를 리턴한다. -> 리듀서를 호출한다.(알아서 호출함 )

action type 



reducer에서 초기스테이트를 정의해준다.