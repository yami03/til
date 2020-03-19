# HTML Element

devdocs: https://devdocs.io/dom/htmlelement

MDN: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement

예시 따라하기: https://codesandbox.io/s/staging-feather-jthzn / https://jthzn.csb.app/

HTML Element 인터페이스는 모든 종류의 HTML element를 나타낸다.(?)
어떤 elements 직접적으로 이 인터페이스를 구현하는 반면,
다른 element들은 그것을 상속하는 인터페이스를 통해 구현한다.

## Properties

부모인 Element의 속성을 상속한다.
DocumentAndElementEventHandlers, ElementCssInlineStyle, GlobalEventHandlers, HTMLOrForeignElement, TouchEventHandlers의 속성을 구현한다.

* **HTMLElement.accessKey**

  요소에 할당된 accessKey를 나타내는 DOMString 이다. 

  accessKey가 뭔가 했더니 단축키? 

  accessKey: https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey
  Mac에서는 control + option + key를 했을 때 속성이 먹힌다.

* **HTMLElement.accessKeyLabel (Read only)**

  요소에 할당된 accessKey를 포함하는 DOMString을 반환한다. 존재하지 않는 경우 빈문자열을 반환한다.

  **Syntax**

  ```js
  label = element.accessKeyLabel
  ```

  **Example**

  ```html
  <body>
      <div id="app">
        <button accesskey="h" title="Caption" id="btn1">Hover me</button>
      </div>
  
      <script>
        const node = document.querySelector("#btn1");
        if (node.accessKeyLabel) {
          console.log("1");
          node.title += " [" + node.accessKeyLabel + "]";
        } else {
          console.log("2");
          node.title += " [" + node.accessKey + "]";
        }
  
        node.onclick = function() {
          const p = document.createElement("p");
          p.textContent = "Clicked!";
          node.parentNode.appendChild(p);
        };
      </script>
    </body>
  ```
  웃기다. 예제라고 따라하는데 무조건 `if (node.accessKeyLabel)` 이 조건문에서 false를 타고 코드를 칠때 accessKeyLabel이 자동완성으로 안뜬다.
  https://codesandbox.io/s/staging-feather-jthzn

* **HTMLElement.contentEditable**
  
  이것은 DOMString이고 element는 수정가능 하다면 true, 그렇지않다면 false 근데 DOMString
  inherit는 부모의 수정가능한 상태를 상속한다.
  
* **HTMLElement.isContentEditable**

  요소의 수정여부를 boolean으로 return 해준다.
  flag는 진짜 is로 시작.. 

  **syntax**

  ```js
  editable = element.isContentEditable
  ```

  **Example**

  ```html
  <body>
      <p class="p1">p1</p>
      <p class="p2" contenteditable="true">p2</p>
  
      <script>
        const p1 = document.querySelector(".p1");
        const p2 = document.querySelector(".p2");
  
        console.log("p1.isContentEditable", p1.isContentEditable); // false
        console.log("p1.isContentEditable", p2.isContentEditable); // true
  
        console.log("typeof", typeof p2.isContentEditable); // 'boolean'
      </script>
    </body>
  ```

  

* **HTMLElement.contextMenu**

  더이상 사용되면 안되지만 아마 사용되고 있을 것이다.
  element와 관련된 contextual menu를  나타내는 HTMMenuElement이다. 아마도 null.. 

* **HTMLElementOrForeignElement.dataset** (READ ONLY)

  [custom data attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes) (`data-*`) element를 script에서 읽고 쓸 수 있는 DomStringMap으로 return 해준다.
이 Access는 DOM과 HTML 에서 가능하다. 읽기만 가능하고 직접 쓸 수 없다.
  **data-**
  data- 시작해야한다. 
  
  html: 문자, 숫자 대시(-), 점(.), 콜론(:), 언더스코어(_) 는 사용가능하지만 대문자는 사용할 수 없다.
  
  javascript: 카멜케이스로 쓰고 대시 점등을 모두 제거 
  **네임 컨벤션**
  dash-style -> camelCase 로 변환, 이 규칙대로 DOMStringMap의 Key로 변환된다. 
  
  * 접두어 data-는 삭제된다.
  * a-z까지 소문자 앞에 오는 모든 대시는 삭제, 소문자는 -> 대문자로
  
  camelCase -> dash-style로 변환 
  
  * 변환전 a-z 소문자로 쓸 수 없다.
  
  * dash-가 추가된다.
  * 대문자는 소문자로 변환된다.
  * 다른 문자는 변환되지 않는다. 
  
  **value에 접근하기**
  
  * element.dataset.keyname 과 같이 camelCase key를 사용해서 설정하거나 읽을 수 있다.
  * element.dataset[keyname] 도 가능
  * in operator를 이용하여 attribute의 존재여부를 알 수 있다.
  
  **value를 설정하기**
  
  * value가 설정되면 항상 문자열이다. 
  * delete operator를 여기서도 사용할 수 있다.
  
  **syntax**
  
  ```js
  const dataAttrMap = element.dataset
  ```
  
  **return value**
  
  A DOMStringMap.
  
  ```thml
  <div id="user" data-id="1234567890" data-user="sla" data-data-of-birth>sla</div>
  ```
  
  ```js
  const el = document.querySelector('#user');
  
  console.log('user' in el.dataset); // true
  
  el.dataset.dataOfBirth = '04-27';
  
  delete el.dataset.id;
  
  console.log('id', 'id' in el.dataset); // false
  
  el.dataset.someDataAttr = 'mydata'
  
  console.log('someDataAttr', 'someDataAttr' in el.dataset); // ture
  ```
  
  헐.. 저런 네임 컨벤션이 있는 줄 몰랐넹.
  
* **HTMLElement.dir**

  방향을 나타내눈 global attribute를 DOMString으로 반환한다. 가능한 값은 "ltr", "rtl", "auto"이다. 
  텍스트를 쓰는 방향을 설정하거나 가져올 때 유용하다.
  아랍어와 히브리어는 RTL 방향성을 사용하는 대표적인 언어이다.
  이미지에 속성으로도 사용할 수 있다.
  title과 alt가 rtl 포맷으로 정의된다. 🙀
  테이블에서 정의될 경우 열의 순서가 오른쪽에서 왼쪽으로 배열된다.

  auto로 설정되어 있는경우 첫번째 문자나 부모요소의 방향성을 기준으로 한다.

  **Syntax**

  ```js
  let currentWritingDirection = elementNodeReference.dir;
  elementNodeReference.dir = newWritingDirection;
  ```

  * `currentWritingDirection` 는 현재 element의 텍스트 쓰기 방향을 나타내는 문자열 변수이다.
  * `newWritingDirection` 은 텍스트 쓰기 방향의 값을 나타내는 문자열 값이다.

  'ltr' -> left to right

  'rtl' -> right to left

  'auto' -> element의 content에 따라 결정되어야 한다. 

  ```html
  <div class="name">my name is sla</div>
  ```

  ```js
  const el = document.querySelector(".name");
  el.dir = "rtl";
  ```

  일단 오른쪽 끝에 붙은 정렬이 됐음.. 🤔

  암튼 이런게 있었다니.. 🤭

* **HTMLElement.draggable**
   요소가 drag가 가능한지 Boolean으로 반환한다.

* **HTMLElement.dropzone**
  dropzone이 더이상 쓰이지 않는다. 모든 브라우저가 지원하지 않음.

* **HTMLElement.hidden**
  element가 hidden인지 아닌지를 Boolean 값으로 나타낸다.
엄청기네.. 내일..'ㅁ'
  
* 
  
* 
  
* 
  
* 

* 

