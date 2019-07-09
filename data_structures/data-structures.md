# Data Structures

자료를 다룰때 사용하는 특정형태 
언어에 국한되지 않고 보장되어 있다.  

Big O를 항상 생각하고 코드에서 구분한다. 

* [stack](Stack-(Last-In First-Out))
* [Queue](Queue (First-In First-Out))
* [Linked List](Linked List 연결 리스트)
* [Tree](Tree)

## Stack (Last-In First-Out)

자료를 추가했다가~ 뺐다가~~
맨 마지막으로 들어간게 첫번째로 나온다. 

* **Push**: 자료를 추가를 한다.
* **Pop**: 자료를 뺀다.

### Big O

표기법 () 는 시간,공간의 복잡도를 설명해준다. 

| Time Complexity | Big O    | 설명                                                         |
| --------------- | -------- | ------------------------------------------------------------ |
| **Insertion**   | **O(1)** | 가로의 1은 상수를 말한다. 항상 1이다. <br/>시간적인 소요가 항상 같다. 올리면 끝, 그 외에 고려할 사항이 전혀없다. <br/>연산을 한 후 올리는게 아니다. <br/>올리는게 항상 동일한 시간이 소요된다. |
| **Deletion**    | **O(1)** |                                                              |
| **Search**      | **O(n)** | n은 상황에 따라 다르다. stack의 사이즈.                      |

### Real Life Use Cases

* Undo/Rodo Mechanism
* Backwards/Forwards Mechanism of Browsers
* Call Stack
* matching Brackets 알고리즘

<br>

## Queue (First-In First-Out)

사람들이 줄서는거랑 비슷하다.

* **Enqueue**: ㅁ(1) ㅁ ㅁ ㅁ ㅁ(5)
* **Dequeue**: 앞에 1부터 차례대로 빠진다. 

### Big O

변수가 없다.

| Time Complexity | Big O    | 설명                                                         |
| --------------- | -------- | ------------------------------------------------------------ |
| **Insertion**   | **O(1)** |                                                              |
| **Deletion**    | **O(1)** | 중간에 있는걸 삭제한다 해도.. 찾는거랑 제거하는거랑 같이한다. 하지만 제거만 생각한다. |
| **Search**      | **O(n)** | n은 상황에 따라 다르다. stack의 사이즈.                      |

 ### Real Life Use Case

* Life of people standing for food
* Callback queue

<br>

## Linked List 연결 리스트

꼬리가 있다. 꼬리에 따른놈이 붙어있고 꼬리에 따른놈이 붙어있는..
**오직 내 뒤에 누가 있는지 인지 한다.**
스택큐는 인지하지 않는다.

맨 첫번째는 head고 맨 마지막은 tail이라 부른다.

배열X과 다르다. 

### Big O
| Time Complexity | Big O    | 설명                   |
| --------------- | -------- | ---------------------- |
| **Insertion**   | **O(1)** |                        |
| **Deletion**    | **O(1)** | 꼬리를 찾아 **연결한다 |
| **Search**      | **O(n)** |                        |

### Real Life Use Case

* The history section of web browers
* Line of people standing for food 

### Linked List vs Array
[참고 링크](https://www.geeksforgeeks.org/linked-list-vs-array/)

| 차이             | Array                                        | Linked List                                              |
| ---------------- | -------------------------------------------- | -------------------------------------------------------- |
| 접근             | 색인을 통해 빠르게 접근                      | Array보다 느리다.                                        |
| 삽입 삭제        | 느리다                                       | 빠름                                                     |
| 크기             | 고정                                         | 유동적                                                   |
| 메모리 요구 사항 | 인덱스에 실제 데이터가 저장되기 때문에 적다. | 이전과 다음을 참조하기 때문에 더 많은 메모리가 필요하다. |

**장점**

* 동적 크기
* 간편한 삽입/삭제 (배열은 새로운 요소를 삽입하는 것은 cost가 많이 든다.)

**단점**

* 순차적으로 엑세스 해야한다. 
* 메모리가 요구된다. 

<br>

## Tree

* 부모 자식 관계를 가진다. 
* 계층이고 그룹을 가진다. 
* node는 하나 이상의 child를 가진다. 
* 부모를 아는 경우도 있고 자식만 아는 경우도 있다. 
* 특정한 순서가 있을 수도 없을 수도 있다. 
* 더이상 자식이 없는 경우 leap 잎사귀라 부른다. 

트리 종류

* **Binary Tree(이진트리)**: 자식을 두개까지 갖는다.
* **Ternary Tree**: 세개 
* **Binary Search Tree**(이진검색트리): 
  * 왼쪽자식노드는 부모노드보다 작아야 하고 오른쪽자식노드는 커야한다.
  * 왼쪽부터 채워나간다.
* Perfect Binary Tree: 완벽쓰 

### Real Life Use Case

* 회사나 정부의 조직 구조
* 나라, 지방, 시•군별, 계층적인 데이터의 저장
* 컴퓨터 파일 시스템과 같이 계층을 형성하는 정보를 저장하기 위해 사용

