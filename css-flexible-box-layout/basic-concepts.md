# flex 해버렸지 뭐야

공부하게된 이유. 

1. 이전에 flex를 그냥 즉석에서 필요한 부분을 찾아서 맨날 구현하니 헤맨다.
2. overflow-x: scroll을 하는데 flex의 flex-grow, flex-shrink, flex-basis 설정을 막 바꿔보니까 되긴 되는데 잘 모르겠다.

[flexbox의 기본개념](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox의_기본_개념)

**Flexible Box module**

flexbox 인터페이스 내의 아이템 간 `공간 분배`와 `정렬` 기능 제공~

1차원이라고 하는 이유는 한번에 하나의 행 / 혹은 열만 다루기때문이다~~

## flex-direction

`주축`과 `교차축` 개념을 이해해야함.

flex-direction을 이용하여 주축을 정한다. 이에 수직축을 결정 -> 이는 교차축

* row -> 인라인 방향, 교차축은 열 방향 (2차원에서 남은 방향이라 할 수 있을거 같다), default 값
* row-reverse -> 인라인 방향, 교차축은 열 방향
* column -> 블록 방향, 교차축은 행 방향
* column-reverse -> 블록 방향, 교차축은 행 방향

>  현대의 레이아웃은 다양한 쓰기 방법을 포괄해야 하므로, 더이상 텍스트가 문서의 왼쪽 상단에서 시작해서 오른쪽으로 향한다고 가정하지 않습니다.



## flexbox가 놓여있는 영역 -> flex 컨테이너

생성방법 -> `display: flex` or `display: inline-flex` 
flex 컨네이터의 direct children들이 바로 flex 항목이 된다. 

* flex-basis: auto
* flex-wrap: nowrap



## flex-wrap

여러행이 나열 될 수 있기 도와준다.
각 행이 새로운 flex 컨테이너, 공간 배분은 해당 행에서만 이루어지고 다른 행은 영향을 받지 않는다.



## flex-flow

flex-direction 속성과 flex-wrap 속성을 flex-flow에 합쳐서 쓸 수 있다.



## flex-basis

item의 크기를 결정한다. 

default `flex-basis: auto`

지정되어 있지 않다면 item의 내용물 크기가 flex-basis 값으로 사용된다. 



## flex-grow

flex item별로 주축 방향 크기를 설정 할 수 있다. `남는 공간을 항목들에게 분배하는 방법`을 결정한다.

3개의 item이 있고 `flex-grow: 2` , `flex-grow: 1`, `flex-grow: 1`   로 지정한다면 2:1:1의 비율이 된다.



## flex-shrink

`공간이 부족할 때 각 항목의 사이즈를 줄이는 방법`을 정의한다.

flex-basis에 지정된 크기보다 작아진다.



## flex

flex-basis, flex-grow, flex-shrink를 한꺼번에 쓰는 축약형

순서는

`flex-grow, flex-shrink, flex-basis` 순이다.

**미리 정의된 축약 값들**

* initial -> 0(grow) 1(shrink) auto(basis)

  grow가 0, flex-basis 값보다 커지지 않고,
  shrink  1,  공간이 부족하면 크기가 줄어든다.
  basis가 auto이기 때문에 지정된 크기 또는 

* auto -> 1(grow) 1(shrink) auto(basis)
  여유 공간이 있을 때 채운다.

* none -> 0(grow) 0(shrink) auto(basis)
  컨테이너의 크기변화에도 flex의 item의 크기가 변하지 않는다. 

* 2,  더 축약한 값

## align-items

flex 컨테이너에 지정하는 속성, `item들의 열을 정렬하는 방식`

* stretch -> default값, flex items의 최대 높이로 지정된다.
* flex-start -> 열의 시작선
* flex-end -> 교차축 방향의 끝선에서 정렬
* center -> 가운데 라인으로 정렬

## justify-content

행을 정렬하는 방식

* stretch
* flex-start ->  `default값` 
* flex-end -> 마지막 항목이 end flex 컨테이너의 끝선에 정렬된다.
* center -> 행의 가운데 정렬
* space-around -> 사이의 공간 분배를 
* space-between -> item과 container 경계면 사이에는 빈 공간을 만들지 않는다.
* space-evenly -> 여유공간이 균등하게 만들어지며 container과 item에도 빈 공간이 생긴다.