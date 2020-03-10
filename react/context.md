# Context API

전역으로 사용할 데이터가 있을 때 유용한 기능

예시) 사용자 로그인 정보, 애플리케이션 환경 설정, 테마
React 16.3부터 사용가능 

Redux, React Roter, styled-componrnts 라이브러리에서 Context API 기반으로 구현되어 있다.

Redux나 MobX 같은 상태 관리 라이브러리를 사용하여 전역 상태 관리 작업을 더 편리하게 하기도 하지만, React v16.3 업데이트 이후에는 별도의 라이브러리를 사용하지 않아도 전역 상태를 손쉽게 관리 할 수 있다.

constexts/color.js

## createContext

**새 Context를 만들땐 createContext를 사용한다.**

```js
import { createContext } from 'react';

const ColorContext = createContext({ color: 'black' });

export default ColorContext;
```



## Consumer

ColorBox Component: ColorContext 안에 들어 있는 색상을 보여줌
props로 받아 오는 것이 아니라 `ColorContext 안에 들어 있는 Consumer라는 컴포넌트를 통해 색을 조회`

src/components/ColorBox.js

```jsx
import React from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {value => (
      	<div
          style={{
            width: '64px',
            height: '64px',
            background: value.color
          }}
        />
      )}
    </ColorContext.Consumer>
  )
}

export default ColorBox;
```

<ColorContext.Consumer> 안에 함수를 넣어주는 패턴을 `Function as a child` 혹은  `Render Props` 라고 한다.
컴포넌트의 children이 있어야 할 자리에 함수를 전달한다. 

**Function as a child or Render Props**

```jsx
import React from 'react';

const RenderPropsSample = ({ children }) => {
  return <div>결과: {childern(5)}</div>;
};

// 만약 위와 같은 컴포넌트가 있다면 추후 사용할 때 다음과 같이 사용할 수 있다. 
<RenderPropsSample>{value => 2 * value}</RenderPropsSample>
```

children을 함수로  보낼 수 있구, 인자값을 통해 원하는 결과를 받을 수 있구나. 헐?! 

children을 함수라 생각하니 이해하기 쉬워졌댜.



## Provider

Context의 value값을 변경할 수 있다.

```jsx
function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}
```

`const ColorContext = createContext({ color: "black" });` Provider를 사용하지 않을 때 기본값

Provider를 사용할 때는 value를 꼭 명시해줘야 한다.

## 동적 Context 사용

contexts/color.js 수정

```jsx
import React, { createContext, useState } from "react";

// 새 Context를 만들땐 createContext를 사용한다.
const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subColor, setSubColor] = useState("red");

  const value = {
    state: { color, subColor },
    actions: { setColor, setSubColor }
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
```

ColorProvider 컴포넌트를 만들고, 그 컴포넌트는 ColorContext.Provider를 렌더링한다.

App.js에 **ColorProvider**사용

```jsx
import { ColorProvider } from "./contexts/color";

function App() {
  return (
    <ColorProvider>
      <div>
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;

```

ColorBox 컴포넌트에 **ColorConsumer** 사용

프레젠테이션 컴포넌트이니 Consumer사용

```jsx
import ColorConsumer from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {({ state }) => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color
            }}
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};
```

객체 비구조화 활당 문법을 사용하여 value에서 state만 조회

**selectBox 추가**

```jsx
import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
      {({ actions }) => (
      <div style={{ display: "flex" }}>
        {colors.map(color => (
          <div
            key={color}
            style={{
              background: color,
              width: "24px",
              height: "24px",
              cursor: "pointer"
            }}
            onClick={() => actions.setColor(color)}
            onContextMenu={e => {
              e.preventDefault(); // 마우스 오른쪽 클릭시 메뉴가 뜨는 것을 무시한다.
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColors;

```

```jsx
  actions: {
    setColor: () => {},
    setSubcolor: () => {}
  }
```

처음에 이 부분이 이해가 안갔는데, 그냥 이 자리에 함수가 올 거라는 뜻이였다. 

onContextMenu()는 마우스 오른쪽 클릭했을때 사용

## useContext Hook 사용하기

context를 사용하는 코드에서

```jsx
<ColorConsumer>
  {({ state }) => (
    // code
  )}
</ColorConsumer>
```

ColorConsumer 컴포넌트들 지우고

```tsx
const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor
        }}
      />
    </>
  );
};
```

아주 가볍고 간단하게 사용가능

## Class Component에서 static contextType 사용하기

```jsx
class SelectColors extends Component {
  static contextType = ColorContext;

  handleSetColor = color => {
    this.context.actions.setColor(color);
  };

  handleSetSubcolor = subcolor => {
    this.context.actions.setSubColor(subcolor);
  };

  render() {
    return (
      <div>
        <h2>색상을 선택하세요.</h2>
        <div style={{ display: "flex" }}>
          {colors.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: "24px",
                height: "24px",
                cursor: "pointer"
              }}
              onClick={() => this.handleSetColor(color)}
              onContextMenu={e => {
                e.preventDefault(); // 마우스 오른쪽 클릭시 메뉴가 뜨는 것을 무시한다.
                this.handleSetSubcolor(color);
              }}
            />
          ))}
        </div>
        <hr />
      </div>
    );
  }
}
```

```jsx
 static contextType = ColorContext;
```

Class Component에서도 static contextType을 이용하여 Context를 사용할 수 있지만 단점은 한 class 컴포넌트당 하나의 Context밖에 사용못한다.. 😕

### 정리

단순한 전역 상태 관리는 리덕스 대신에 Context API로 대체 할 수 있다.
하지만 리덕스는 더욱 향상된 성능과 미들웨어 기능, 강력한 개발자 도구, 코드의 높은 유지 보수성을 제공..

