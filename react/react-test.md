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

### promise return하는지 확인하기
CRA로 프로젝트를 시작하면, jest가 따로 있다.

**toBeInstanceOf(class)**

```
expect(getTitle()).toBeInstanceOf(Promise);
```

### resolve확인하기

**toEqual - deep equality === **

**toBe - ==**

**test에는 done 이라는 인자가 항상 넘어온다.**

```js
test('', (done) => {
  
});
```

**비동기 테스트할때 done을 사용한다.**

```js
test('should resolve to new title asynchronously', (done) => {
  jest.setTimeout(6000); // 기본 시간을 바꾼다.
  
  getTitle().then(title => {
    expect(title).toBe('new title');
    done(); // 비동기를 기다려준다.
  });
});
```

**once**

```js
export function once(fn) {
  var returnValue;
  var called = false;
  
  return function () {
    if(!called) { // 함수를 한번만 실행하기 위한 조건문.
      called = true;
      returnValue = fn.apply(this, arguments);
    }
    return returnValue;
  }
}
```

**가짜함수 mock**

The Jest Object -> Mock Functions -> jest.fn

 ```js
const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled(); // 함수가 실행됐는지 확인
 ```

```js
const returnsTrue = jest.fn(() => true);
console.log(returnsTrue()); // true;
```

테스트해보기

```js
const mockFn = jest.fn();

const newFoo = once(mockFn);

test('first', () => {
  newFoo(1, 2);
  expect(mockFn).toHaveBeenCalled();
});


newFoo(1, 2);


```

.toHaveBeenCalledTimes(number) // 몇번 호출됐는지 알 수 있다.

.toHaveBeenCalledWith(arg1, arg2) arg1~ 2가 들어가서 호출 됐는지 확인한다.

**toHaveBeenCalledWith**

인자까지 체크해 준다.

```js
const mockFn = jest.fn();

const newFoo = once(mockFn);

test('first', () => {
  newFoo(1, 2);
  expect(mockFn).toHaveBeenCalledWith(1, 2);
});


newFoo(1, 2);
```



호출하는 내용을 추가한다.

```js
const mockFn = jest.fn();

const newFoo = once(mockFn);

test('second', () => {
  newFoo(1, 2);
  expect(mockFn).toHaveBeenCalledWith(1, 2);
});


newFoo(1, 2);
```

**beforeEach**

describe에서 쓸 수 있다.

```js
describe('', () => {
  beforeEach(() => {
    
  });
  
  describe('', () => {
    // 이때도 beforeEach가 실행된다.
  });
  test('', () => {}); 
})
```

test코드가 실행되기 전에 beforeEach안에 있는것들이 실행된다. 

const는 스코프가 {} 한정이기 때문에 한단계 더 위에서 정의해준다.

```js
describe('', () => {
  let mockFn;
  let newFoo;
  
  beforeEach(() => {
    mockFn = jest.fn();
    newFoo = once(mockFn);
  });
  
  describe('', () => {
    // 이때도 beforeEach가 실행된다.
  });
  test('', () => {}); 
})
```

**toHaveBeenCalledTimes()**

몇번 실행하는지 확인 할 수 있다.

**react component test**



**exists**

존재하는지 확인한다.

