# **The Basic Cheatsheet**

## 전제 조건

전제 조건을 보면서 알게 된 사실 정리

**TypeScript의 장점** 

1. TypeScript를 쓴다면 JavaScript에서 unit test를 쓸 필요가 없다. TypeScript가 자동적으로 체크해 준다.

2. This is especially useful when you’re using a UI library and need to transform data.
   For example, if you’re using React, you’ll need to transform data in state updates. 

**we can use mapped types like `Readonly` to convert one type to another type.**

   ```tsx
   // Readonly<...> makes each property readonly
   type Todo = Readonly<{
     id: number
     text: string
     done: boolean
   }>
   
   // 위 <...>은 아래와 같다.
   type Todo = {
     readonly id: number
     readonly text: string
     readonly done: boolean
   }
   ```

`readonly`는 array의 push와도 같이 쓰일 수 있다.

**Type assertions**

```tsx
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
```

```tsx
// as Type을 더 추천한다.
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

출처 https://ts.chibicode.com/todo/



## Function Components

### Hooks

---

https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a05cc538a42243c632f054e42eab483ebf1560ab/types/react/index.d.ts#L800-L1031

**useState**

---

```tsx
const [user, setUser] = React.useState<IUser | null>(null);
```

default value인 null과 함께 `|`를 사용하는 `union type`을 많은 hook들은 사용한다.

**useRef**

---

initial value가 없는 ref container 생성할 때

```tsx
const ref1 = useRef<HTMLElement>(null!);
const ref2 = useRef<HTMLElement | null>(null);
```

* **ref1**는 readonly용 react가 관리할  built-in ref attributes에 전달하기 위한 것? (Response handles for your current value setting)
* **ref2**는 `ref2.current`를 mutable하게 해주고 사용자가 직접관리하는 `instance variables` 를 위한 것이다.

네? 뭐라구여??? 

* [ ] 다시 공부할 필요 있음

**useEffect**

---

함수 또는 undefined 이외에 다른 것이 return 되지 않도록 주의한다.

`setTimeout`을 사용하는 경우 number가 return되기 때문에 curly brace로 꼭 감싸자.

**useRef**

---

```tsx
function TextInputWithFocusButton() {
  // 초기값은 null, HTMLInputElement를 찾고 있다고 TypeScript에 말함
  const inputEl = React.useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    // strict null 체크는 inputEl와 current가 존재하는지 확인해야한다.
    // 존재하면 HTMLInputElement type이므로 따라서 method focus를 가진다. 🙂 Yay
    if (inputEl && inputEl.current) {
      inputEl.current.focus();
    }
  };
  return (
    <>
      {/* 또한 inputEl는 input요소만 사용할 수 있다? focus 때문인가 */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}
```

**useReducer**

---

reducer action을 [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions) 사용한다. return type을 정의하는 것을 절대 잊지말자.

```tsx
type AppState = {};
type Action =
  | { type: "SET_ONE"; payload: string }
  | { type: "SET_TWO"; payload: number };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_ONE":
      return {
        ...state,
        one: action.payload, // `payload` is string
      };
    case "SET_TWO":
      return {
        ...state,
        two: action.payload, // `payload` is number
      };
    default:
      return state;
  }
}
```

**Discriminated Unions(유니온 식별)**은 singleton types, union types, type guards, 및 type aliases을 결합하여 discriminated unions,  tagged unions,  또는 algebraic(대수의) data type으로 불리는 고급 패턴을 빌드할 수 있다.

```ts
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
```

결합할 interface를 선언한다.

공통적으로 `kind`라는 프로퍼티를 가지고 있는데 이를 `discriminant` 혹은 `tag`라고 부른다.

```ts
type Shape = Square | Rectangle | Circle;
```

결합쓰

```ts
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
}
```

discriminated union을 사용하자!

useReducer에서는 `type`이  `discriminant` 혹은 `tag`가 되는 것이고

이전에 봤던 코드들을 생각하면 App component에서 `status` 를 예시로 들 수 있을 거 같다.🤭

```tsx
export interface VerifyingAuth {
  status: 'verifying';
}

export interface UnsignedAuth {
  status: 'unsigned';
  inProgress?: 'signing';
  error?: Error;
}

export interface SignedAuth {
  status: 'signed';
  inProgress?: 'passwordChanging' | 'unsigning';
  error?: Error;
  token: string;
  user: UserInfo;
}
```

```tsx
export type Auth = VerifyingAuth | UnsignedAuth | SignedAuth;
```

```tsx
<AuthProvider api={api}>
  {(auth: Auth) => {
    switch (auth.status) {
      case 'verifying':
        return <div>...verifying</div>;
      case 'unsigned':
        return (
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Redirect to="/" />
          </Switch>
        );
      case 'signed':
        return (
          <MissionProvider>
            <Switch>
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/missions/:missionId" component={MissionPage} />
              <Redirect to="/dashboard" />
            </Switch>
          </MissionProvider>
        );
      default:
        return <div>Unknown auth status...</div>;
    }
  }}
</AuthProvider>
```

**Custom Hooks**








