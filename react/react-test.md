# test 만들기

[Create React App 참고 페이지](https://facebook.github.io/create-react-app/docs/running-tests)

**npm 설치**

* Jest 기본으로 설치 되어 있었음
* `npm install --save enzyme enzyme-adapter-react-16 react-test-renderer`
  * Testing Components를 위해 필요하다.
* `npm install --save jest-enzyme`
  * 코드를 더 간단하게 작성 할 수 있도록 도와준다.
* `yarn add enzyme-to-json`
  * 스냅샷 테스팅을 도와준다.



**파일 경로**

* src바로 아래에 __ tests __ 라는 폴더를 만들었다.
* Utility 함수를 모아둔 helpers.test.js라는 파일이 있기 때문에 __ test __ 폴더안에 helpers.test.js라는 파일을 만듬

## Utility 함수 test

**helpers.test.js 파일**

```js
import { arrangeViewCount, arrangeTime, arrangeDay } from "../helpers";

it('arrange view count', () => {
  expect(arrangeViewCount()).toEqual(0);
  expect(arrangeViewCount(0)).toEqual(0);
  expect(arrangeViewCount(5)).toEqual('5');
  expect(arrangeViewCount(50000)).toEqual('5만');
  expect(arrangeViewCount(500000000)).toEqual('5억');
});

it('arrange time', () => {
  expect(arrangeTime()).toEqual(0);
  expect(arrangeTime(0)).toEqual(0);
  expect(arrangeTime('5')).toEqual('5');
  expect(arrangeTime('5h3m')).toEqual('5:3');
  expect(arrangeTime('5h3m1s')).toEqual('5:3:1');
});

it('arrange time', () => {
  expect(arrangeTime()).toEqual(0);
  expect(arrangeTime(0)).toEqual(0);
  expect(arrangeTime('5')).toEqual('5');
  expect(arrangeTime('5h3m')).toEqual('5:3');
  expect(arrangeTime('5h3m1s')).toEqual('5:3:1');
});

it('arrange day', () => {
  expect(arrangeDay()).toEqual('');
  expect(arrangeDay('2018-03-02T20:53:41Z')).toEqual('2018-03-02');
});

```

 `npm test`로 실행 할 수 있다.

## Shallow Rendering

**참조 url**

* [reactjs 페이지](https://ko.reactjs.org/docs/shallow-renderer.html)
* [enzyme](https://airbnb.io/enzyme/docs/api/shallow.html)
* [ceate-react-app](https://facebook.github.io/create-react-app/docs/running-tests)
* [velopert님의 블로그 글](https://velog.io/@velopert/react-testing-with-enzyme)



**스냅샷 테스팅**

렌더링된 결과가 이전과 동일한지 확인해주는 것이다.
props 값을 변경하여 변경한 내용을 업데이트 하고 싶다면 터미널에서 u를 눌러준다.'ㅁ'/





