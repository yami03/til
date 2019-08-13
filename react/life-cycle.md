# LifeCycle

어떤 컴포넌트에서도 쓸 수 있다.

```js
class Articles extends Component {
}
```

바로 extends 뒤에 쓴 Component 때문에
오직 App 컴포넌트가 아닌 하위컴포넌트에도 쓸 수 있다.

## Event

페이지별 이벤트를 제어하기에 유용하다.

```js
componentDidMount() {
  window.addEventListener('scroll',  debounce(this.handlelistLoadScroll));
}
```

```js
componentWillUnmount() {
  window.removeEventListener('scroll', debounce(this.handlelistLoadScroll));
}
```

이렇게 사용할 수 있는데 여기서 문제는 

```debounce(this.handlelistLoadScroll)```

이 부분이다. remove가 되지 않는 이유는 debounce 영향으로 참조가 되지 않는다

그렇기 때문에 프로퍼티에 저장을 한 후 참조를 해야한다!