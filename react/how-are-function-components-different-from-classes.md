# 함수형 컴포넌트와 클래스, 어떤 차이가 존재할까?

[댄 아브라모프(Dan Abramov)의 글](https://overreacted.io/ko/how-are-function-components-different-from-classes/)

> 클래스 컴포넌트에서  `this.props.user`로부터 값을 불러온다. Props는 리액트에서 불변(immutable) 값이다. **하지만, `this`는 *변경 가능하며(mutable)*, 조작할 수 있다.**

> 그것이 `this`가 클래스에서 존재하는 목적이다. 리액트가 시간이 지남에 따라 이를 변경하기 때문에 `render`나 라이프사이클 메서드를 호출할 때 업데이트된 값들을 읽어 올 수 있는 것이다.
>
> 따라서 요청이 진행되고 있는 상황에서 클래스 컴포넌트가 다시 렌더링 된다면 `this.props` 또한 바뀐다.

클래스는 비동기로 진행하게 된다면 이전의 값을 기억 못한다. 왜냐면 this는 변경 가능한 mutable이기 때문이다.

> 방법은 `this.props`를 조금 더 일찍 부르고 timeout 함수에게는 미리 저장해놓은 값을 전달하는 것이다.

해결 방법은 props를 변수로 저장하여 인자로 전달한다.

> 우리는 `this.props`와 `this.state`를 `showMessage`가 부르는 모든 메서드에게 일일이 전달 해줘야 한다.

