# HTML Element

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
  모든 presentation mode에서 적용된다. 사용자가 접근 할 수 있도록 되어 있는 콘텐츠를 숨기기 위해 사용해서는 안된다.  css의 display를 사용해서 제어하는것과 다르다.
  hidden을 적절한 사용 사례
  
    * 현재는 관련이 있지만 나중에 필요할 수 있는 콘텐츠
    * 이전엔 필요했지만 더 이상 필요하지 않은 콘텐츠
    * 페이지 다른 부분에서 템플릿처럼 재사용되는 콘텐츠 (?)
    * [drawing buffer](https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_draw_buffers) [offscreen canvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) 만들때?? drawing buffer은 진짜 모르겠다 offscreen canvas: off screen 렌더 할 수 있는 canvas를 제공한다. window와 worker context에서 사용할 수 있다. web workers 단일 쓰레드에서 실행하고 싶지 않을때.. 별도의 background thread에서 사용하고 싶을때
  
    부적절한 사용 사례
  
    * tab이 있는 dialog box 에서  pannel 숨기기
    * 한 content에서 한 presentation을 숨기면서 다른 presentation을 볼 수 있게 함
  
    ⇒ 아마 접근성 관련된게 아닐까 생각이 듬.. 눈에 보이진 않지만 리더기론 읽을 수 있는 그런것들.. 그래서 눈에만 안보이는게 hidden을 사용하는 곳은 지금은 사용하진 않지만 나중에 사용될, 혹은 이젠 더이상 필요없는것들 한정인거 같다. 이럴땐 css요소를 이용하라는 뜻 같음
  
    Elements that are not hidden must not link to elements which are.
  
    ‘Hidden’ 해주지 않은 요소는 ‘Hidden’한 요소와 연결 시키지 않아야 한다.
  
    **Syntax**

    ```js
    isHidden = HTMLElement.hidden;

    HTMLElement.hidden = true | false;
    ```

  **Value**

  view에서 숨겨져 있다면 true, 아니면 false

  ```html
  <div id="welcome" class="panel">
  	<h1>welcome</h1>
  	<button class="button" id="okButton">OK</button>
  </div>
  
  <div id="awesome" class="panel" hidden>
  	<h1>Thanks!</h1>
  	<p>Thank you!</p>
  </div>
  
  document.querySelector("#okButton").addEventListener("click", function() {
    document.querySelector("#welcome").hidden = true;
    document.querySelector("#awesome").hidden = false;
  }, false);
  ```

  addEventListener의 3번째 인자는 options

  - options
    - capture: DOM 트리의 하단에 있는 EventTarget 으로 전송하기 전에, 등록된 listener 로 이 타입의 이벤트의 전송여부를 나타내는 Boolean ? 헐 EventTarget과 CurrentTarget 얘기인가.. EventTarget도 제어가 가능하구나..
    - once: 리스너가 추가한 후 한번만 호출
    - passive: 이건 처음보네.. true일 때 listener에서 지정한 함수가 preventDefault()를 호출하지 않음을 나타내는 Boolean으로 나타낸다.. 헐? 이런게..
  - useCapture 위에서 아래로 흐르는 capture과정 
    modern browsers는 capture라고 불리는 것을 한다.
    element를 클릭하면 그것은 위에서 아래로 흘러내린다.
    브라우저는 "너 body도 클릭하고, one도 클릭하고 two도 클릭하고 three도 클릭했네" 하고 인식한다. 
    실제로 위에서 아래로 내려가다가, 모든 이벤트를 내가 클릭한 곳에 "captures" 를 하고 보관한다. 
    하지만 이벤트는 실행되지 않는다. 그럼 이제 클릭한 곳에서 "bubble Up"이 일어난다.

* **[HTMLElement.inert](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert)**

  **User agent** - 사용자를 대신하여 일을 수행하는 소프트웨어 에이전트이다. 예를 들어, 이메일 리더에서는 메일 사용자 에이전트이고, 사용자 에이전트를 뜻하는 용어인 세션 개시 프로토콜에서는 통신 세션 양 쪽 끝을 말한다.(wikipedia)

  유저 에이전트가 사용자 인터렉션 이벤트, 페이지 내 텍스트 검색("페이지에서 찾기"), 텍스트 선택의 목적으로 주어진 노드가 없는 것처럼 동작해야하는지 여부를 나타내는 Boolean 을 반환합니다.

  `inert="true"` element가 가지고 있다면 browser는 `ignore`  한다.

  키보드로 이동하는 사용자가 있다고 하쟈

  햄버거 메뉴가 있고 → 컨텐츠로 이동하는데 햄버거 메뉴 안에 있는 anchor tag 다 이동해야 컨텐츠로 이동한다.

  이를 제어하고자 할때 `inert` 를 사용하게 된다.

  https://youtu.be/fGLp_gfMMGU 참고

*	**[HTMLElement.innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText)**

  node와 하위 자식의  **rendered text** 내용을 나타낸다.

  innerText와 textContent의 차이가 있는데

  innerText는 rendered appearance를 알고 있다.

  `<br>`태그를 같은걸 인식하고, hidden elements를 무시한다.
  
* **[HTMLElement.lang](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang)**

   `DOMString` 을 반환
   property element의 요소와 text content의 기본언어를 get, get 가능하다.
    [*Tags for Identifying Languages*](https://www.ietf.org/rfc/bcp/bcp47.txt) 정의된 language code를 return 한다.
   default value는 `unknown` 이다.
   **Syntax**

   ```js
   let languageUsed = elementNodeReference.lang; // get 
   elmentNodeReference.lang = NewLangyage; // set
   ```

   **Example**

   ```js
   document.documentElement.lang // get
   ```

   

* **HTMLElement.noModule**
   module scripts를 지원하는 유저 에이전트에서 import한 script를 실행할 수 있는지 여부를 나타내는 Boolean이다.

* **[HTMLElement.nonce](https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/nonce)**
  
   [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) 에 사용하는 한번만 사용할 수 있는 암호화된 숫자를 리턴하여 주어진 fetch의 진행을 허용할지 말지 여부를 결정한다. script에서만 nonce 속성이 노출된다.
  **Examples**
  
  ```js
  let nonce = script['nonce'] || script.getAttribute('nonce');
  ```
  
  getAttribute을 쓴건 과거 브라우저들 용, `script['nonce']` 최신 브라우저 용이다.
  최근 부라우저에서 accsess하는 방법은 `script['nonce']` 이렇게 밖에 없다. nonce 데이터를 유출하는 것을 방지하는 데 도움이 된다.
  https://stackoverflow.com/questions/42922784/what-s-the-purpose-of-the-html-nonce-attribute-for-script-and-style-elements
  더 읽을 거리: https://developers.google.com/web/fundamentals/security/csp/#if_you_absolutely_must_use_it
  
* **HTMLElement.spellcheck**
   [spell-checking](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck) 을 control하는 Boolean이다.. 네? 이런게 있었다고요? 🙄

* **htmlelement.style**
   [`CSSStyleDeclaration`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration) 이다. 요소의 인라인 스타일을 설정하기 위해 사용된다. get할 때에는 요소의 인라인 스타일 속성에 정의된 모든 스타일 속성을 포함하는  css선언을 담은 CSSTyleDeclation 객체를 반환한다.

   **Setting**
   읽기전용의 CSStyleDeclation 객체를 반환하기 때문에 문자열을 직접 할당하면 안된다.(elt.style = "color: red" 같은 / elt.style.cssText = "color: blue; border: 1px solid black"; 이렇게 해야한다. )
   만약 스타일 정의가 여러개 있을 때 특정 스타일만 변경하고자 한다면 특정 스타일에 접근해서 변경하는게 바람직하다. (elt.style.color = "..." 같이) 또는 ( ele.setAttribute('style', '...')) 사용하여 요소 전체를 재정의한다.
    kebab-case가 아닌 calmel-case로 되어있다.
   reset은 null이나 ''빈문자열 하지만 IE는 ''빈문자열만 먹힌다.

   ```js
   // 여러 스타일을 정의 할 때.
   elt.style.cssText = "color: blue; border: 1px solid black";
   // Or
   elt.setAttrubute("style", "color:red; border: 1px solid black");
   
   // 특정 스타일만 바꿀 때
   elt.style.color = "blue";
   ```

   **Getting**
   오직 인라인 스타일만 가져온다. <head> section 스타일 규칙이나 외부 스타일 sheet와 같은 다른 규칙 스타일을 가져오지 않는다. 요소의 모든 스타일 요소를 가져오고 싶다면 `window.getComputedStyle()`를 대신 사용하라!

   

* 

* 

* 