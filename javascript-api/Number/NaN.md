# Number.NaN

`Number.NaN` 속성은 Not-A-Number(숫자가 아님)를 나타낸다. `NaN` 과 같다.

```js
function clean(x) {
  if (x === Number.NaN) return null; // can never be true
  if (isNaN(x)) return 0;
}

clean(Number.NaN); // 0

```

정적 속성이므로 접근하기 위해 `Number` 객체를 생성할 필요는 없다.

왜냐면!! `NaN === NaN` 절대 true 가 나오지 않는다. 그래서 `can never be true` 이다.

