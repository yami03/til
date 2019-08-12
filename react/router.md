# Route



## Switch

일치하는 내용들이 실행된다.

## exact

정확하다. 

path='/about' 이면 about뒤에 이것저것 붙어도 실행된다.



componet render children 화면을 보여주는  props



## render (함수) - 추가적으로 props를 전달 하고 싶을 때

`컴포넌트를 return`을 해줘야 한다. 

`props => `

location history match 가 props로 전달 

<About {...props} extra={} />

추가로 props로 주고 싶을 때 설정한다. 

> component props엔 component만 넣어줘야 한다.



## Link

url도 바뀌고 page도 바뀐다

page가 새로고침 되지 않는다.





`import { Route, Switch, Link } from 'react-router-dom';`



<Redirect to='/' >

## Redirect

to='/' 로 보낸다. 컴포넌트식으로..



## PrivateRoute (HOC)

hight order component

인자를 컴포넌트로 받고 return을 컴포넌트로 한다.



## params(:userId)

)파라미터 뒤에 붙이고 싶을 때



Route설정은 어디에서든 할 수 있다.

몰아서 하는게 깔끔하긴 하다. 'ㅁ'

## 중첩을 시킬 수 있다.



