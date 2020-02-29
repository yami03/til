# Context API

전역으로 사용할 데이터가 있을 때 유용한 기능

예시) 사용자 로그인 정보, 애플리케이션 환경 설정, 테마
React 16.3부터 사용가능 

Redux, React Roter, styled-componrnts 라이브러리에서 Context API 기반으로 구현되어 있다.

Redux나 MobX 같은 상태 관리 라이브러리를 사용하여 전역 상태 관리 작업을 더 편리하게 하기도 하지만, React v16.3 업데이트 이후에는 별도의 라이브러리를 사용하지 않아도 전역 상태를 손쉽게 관리 할 수 있다.

constexts/color.js

```js
import { createContext } from 'react';

const ColorContext = createContext({ color: 'black' });

export default ColorContext;
```

**Consumer**

ColorBox Component: ColorContext 안에 들어 있는 색상을 보여줌
props로 받아 오는 것이 아니라 ColorContext 안에 들어 있는 Consumer라는 컴포넌트를 통해 색을 조회

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

<ColorContext.Consumer> 안에 함수를 넣어주는 패턴을 `Function as a child` 혹은  `Remder Props` 라고 한다.
컴포넌트의 children이 있어야 할 자리에 함수를 전달한다. 



