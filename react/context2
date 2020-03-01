# context

context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다.
context는 React 컴포넌트 트리 안에서 global이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법이다.

context로 적절한 데이터
로그인한 유저, 테마, 언어 설정

context를 사용하면 중간에 있는 엘리먼트들에게 props를 넘겨주지 않아도 된다.
원하는 값을 컴포넌트 트리 깊숙한 곳까지 보낼 수 있다.

**context 만들기**

```js
const ThemeContext = React.createContext('light');
```

context를 사용하면 모든 컴포넌트를 일일이 통하지 않고도 원하는 값을 컴포넌트 트리 깊숙한 곳까지 보낼 수 있다.

light를 기본값으로 하는 테마 context를 만듬

**사용**

```jsx
class App extends React.component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}
```

Provider를 이용해 하위 트리에 테마 값을 보내준다.
아무리 깊숙히 있어도, 모든 컴포넌트가 이 값을 읽을 수 있다.

```jsx
const Tool = (props) => (
	<div>
  	<ThemedButton />
  </div>
)
```

App의 중간에 있는 컴포넌트 `Toolbar`는 일일이 테마를 넘겨줄 필요가 없다.

```js
class ThemedButton extends React.Component {
  static contextType = ThemContext;
  render() {
    return <Button theme={this.context} />
  }
}
```

현재 선택된 테마를 읽기 위해 contextType 지정
React는 가장 가까이 있는 테마 Provider를 찾아 그 값을 사용한다.

**Context를 사용하기 전에 고려할 것**
context를 사용하면 컴포넌트를 재사용하기가 어려워진다.

여러 level을 걸쳐 props를 넘기는 걸 대체하는 데에 context보다 컴포넌트 합성이 더 간단한 해결책이다.

