# 알고리즘 코드리뷰 

* () 쓸데없는 가로 추가
* for문 if문에 붙여쓰기 주의
* 파라미터(매개변수) 정보
* return값 한번에 정리하기
* 명확한 숫자는 변수로 안만들고 써도 괜찮다.
* 배열을 for...in문으로 돌리지 말자 
* flag 역할을 하는 boolean변수는 is~ has~ 등의 이름으로 시작한다.
* if(remainder === 0) 을 if (!remainder) 로 쓸 수 있다.
* 상수는 변수이름을 대문자로 쓴다. const 사용
* 세미콜론 빼먹지 말자 'ㅁ'/

###  () 쓸데없는 가로 추가
**countApplesAndOranges.js**
```js
return ([applesCount, orangesCount]);
```
쓸데없는 가로가 들어감. console.log를 찍던 () -> 꼼꼼히 확인할 것

### for문 if문에 붙여쓰기
**divisibleSumPairs.js** 
```js
ar.forEach((num,idx) => {
  for (let j = (idx+1); j < ar.length; j++) {
```
붙여쓰기 주의 'ㅁ'/

`let j = (idx + 1); j < ar.length; j++`

**divisibleSumPairs.js**

```js
ar.forEach((num,idx) => {
  for (let j = (idx + 1); j < ar.length; j++) {
    if ((num+ar[j])%k === 0) {
```

붙여쓰기 주의하자

`if ((num + ar[j]) % k === 0)`

### 파라미터(매개변수) 정보
**findOddInt.js**

```js
// @param { Array } n
```
함수의 파라미터 정보를 미리 function 위에 쓰기 

### return에 한번에 정리하기
**countApplesAndOranges**

```js
const applesCount = fruitLoop(apples, a);
const orangesCount = fruitLoop(oranges, b);
return [applesCount, orangesCount];
```

변수를 만들지 않고 한번에 정리할 수 있다.

`return [ fruitLoop(apples, a), fruitLoop(oranges, b) ];`

### 명확한 숫자는 변수로 만들지 않고 쓰기 

**findkey.js**

```js
let position = start;
const startIdx = 0;
const endIdx = 1;
```

startInx와 endIdx의 역할은 인덱스0번자리와 1번자리를 체크하는게 명확하기 때문에 굳이 변수로 만들 필요 없다.

### for...in문을 배열에 쓴 죄.. 

**islandCount.js**

```js
for (const key in mapArr) {
```

for...in문 사용은 배열에 알맞으며, for문외에 다른것을 쓰고 싶다면 for...of문이 알맞다. 배열에 쓸 경우 위험한 경우가 많다. 

> [stack overflow - why is using "for...in" with array iteration a bad idea 참고](<https://stackoverflow.com/questions/500504/why-is-using-for-in-with-array-iteration-a-bad-idea>)
>
> [for...in mdn](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...in>)
>
> [for of mdn](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of>)

### flag 역할을 하는 boolean 변수는 is~ has~ 등의 이름을 사용한다.

**maximumSubarrarySum.js**

```js
// 원소 모두가 양수로만, 음수로만 구성되어 있는지 판별
const negative = arr.every(elem => elem <= 0);
const positive = arr.every(elem => elem >= 0);

if (negative) {
  return 0;
}
  
if (positive) {
  return arr.reduce((prev, curr) => prev + curr);
}
```

flag 역할을 하는 negative와 positive는 is~ has~ 등의 이름을 사용한다.

`isNegative`

### if(remainder === 0)을 if(!remainder)로 쓸 수 있다.

**paginationHelper.js**

```js
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  const totalPage = this.pageCount() - 1;
  const remainder = this.itemCount() % this.itemsPerPage;

  if (pageIndex >= 0 && totalPage > pageIndex) {
    return this.itemsPerPage;

  } else if (totalPage === pageIndex) {

    if (remainder === 0) {
```

0은 falsy 이기 때문에 `if (!remainder)`이렇게 표현할 수 있다.

### 상수는 변수이름을 대문자로 쓴다. const 사용

```js
export default function trailingZeros (n) {
  // Complete the trailingZeros function.
  let divisor = 5;
```

`const DIVISOR`

### 세미콜론 빼먹지 말자

```js
for (let l = i; l < groupMiddle; l++) {

    if (l !== i) {

        match = openings.findIndex(opening => {
            return opening === braces[l];
        });

        if (match === -1) {
            return false;
        }

    } else if (braces[groupCloseloop] === closings[match]) {
        groupCloseloop--
```

`groupCloseloop--;`

```js
let groupMiddle = 0;
let groupCloseloop = 0;

for (let i = 0; i < braces.length; i++) {

    match = openings.findIndex(opening => {
        return opening === braces[i];
    });

    //여는 괄호를 못찾은 경우 
    if (match === -1) {
        return false;

        //바로 다음 숫자에 닫는 괄호가 있을 경우 
    } else if (braces[i + 1] === closings[match]) {
        i++
```

`i++`;

