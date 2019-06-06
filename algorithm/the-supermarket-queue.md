# The Supermarket Queue

[CodeWars Link](https://www.codewars.com/kata/the-supermarket-queue/train/javascript)

재밌는 실생활 느낌나는 문제

## 문제

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

* Input

  - customers: an array of positive integers representing the queue.  Each integer represents a customer, and its value is the amount of time  they require to check out.
  - n: a positive integer, the number of checkout tills.

* Output

  * The function should return an integer, the total time required.

* Examples

  ```js
  queueTime([5,3,4], 1)
  // should return 12
  // because when there is 1 till, the total time is just the sum of the times
  
  queueTime([10,2,3,3], 2)
  // should return 10
  // because here n=2 and the 2nd, 3rd, and 4th people in the 
  // queue finish before the 1st person has finished.
  
  queueTime([2,3,10], 2)
  // should return 12
  ```

* ### Clarifications

  * There is only ONE queue serving many tills, and
  * The order of the queue NEVER changes, and
  * The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

## 문제 이해

customers []는 인자 하나하나가 손님이 계산하는데 걸리는 시간이다.
n은 셀프 계산대의 수 
만약 customers는 [10,2,3,3] 이고 n이 2라면,

| 계산대1 | 계산대2 |
| ------- | ------- |
| 10      | 2       |
|         | 3       |
|         | 3       |

  총 10시간이 된다.

## 해결 방법

* 매개변수 customers: 고객별 셀프 체크아웃 처리 시간
* n: 셀프계산대의 수
* customers === []는 0을 return한다.
* n === 1 일 때는 customers의 요소를 더 한다.  
* customers.length === n || customers.length < n 일 때 customers  요소중 가장 작은 수를 구한다.
* customers.length > n 일 때는 새로운 배열을 통해 새로운 배열엔 length = n과 같고 요소에는 가장 작은 수에 customers 의 요소를 한개씩 추가 할 것이다.
	
## 코드 구현

```js
function queueTime(customers, n) {
  let maxNumber = 0;
  let lowNumber = 0;
  let lowNumberIndex = 0;
  let selfCheckout = [];

  // 손님이 0일 때
  if (!customers.length) return 0;
  // 계산대가 1개 일 때
  if (n === 1) return customers.reduce( (prev, curr) => prev + curr );
  
  // 손님보다 계산대가 더 많을 때
  if (customers.length === n || customers < n) {
    findMaxNumber(customers);
    return maxNumber;
  }

  // 계산대보다 손님이 더 많을 때 
  customers.forEach((peple, index) => {
    // 빈 계산대가 없도록 한다.
    if (index < n) {
      selfCheckout.push(peple);
      console.log(selfCheckout);
    } else {
      //최소 시간을 가진 자리 찾기
      selfCheckout.forEach((selfCheckOut, num) => {
        if (!lowNumber || lowNumber > selfCheckOut) {
          lowNumber = selfCheckOut;
          lowNumberIndex = num;
        }
      });
      selfCheckout[lowNumberIndex] = selfCheckout[lowNumberIndex] + peple;
      lowNumber = 0;
      lowNumberIndex = 0;
    }
  });

  findMaxNumber(selfCheckout);

  function findMaxNumber (arr) {
    for (const val of arr) {
      if (val > maxNumber) maxNumber = val;
    }
  }
  return maxNumber;
}
```

## 결과 분석

랜덤 테스트 통과

**[@Hacker Sakana](https://www.codewars.com/users/Hacker Sakana), [@chris_steenekamp](https://www.codewars.com/users/chris_steenekamp), [@VadymBoguslavsky](https://www.codewars.com/users/VadymBoguslavsky), [@cristhian.mesta](https://www.codewars.com/users/cristhian.mesta)'s Solution**

```js
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
```

솔루션이 너무 짧아서 당황스러울 지경이다.
한줄 한줄 해석해 보자. 

```js
var w = new Array(n).fill(0);
```

new Array(n)을 하게 되면 [empty x n]이 된다.
fill(0)을 통해 empty자리에 0이 채워진다.

w의 역할은 계산대가 된다.

```js
for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
}
```

체크해보자.

```js
Math.min(...w);
```

배열이였던 w를 spread operator로 배열을 벗겨버렸다. :open_mouth:
왜냐면 Math.min은 숫자형밖에 못받기 때문에 spread operator가 아주 적절하다.

```js
let idx = w.indexOf(Math.min(...w));
```

**indexOf()**는 주어진 조건과 일치하는 첫번째 index를 반환한다.

```js
for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
}
```

customers의 요소 하나하나를 가장 작은 수를 가진 w배열에 넣을 수 있다! 

```js
return Math.max(...w);
```

그리고 리턴값은 Math.max() + spread operator와 합쳐 배열에서 가장 큰수를 찾아낸다!
대단해 ! 
재밌다 :astonished:

