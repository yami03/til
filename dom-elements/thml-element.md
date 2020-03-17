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

* **HTMLElementOrForeignElement.dataset**
  blahblah

* 

* 

