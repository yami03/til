# Design Patterns

**원리를 알면 비슷한 도구를 만들 수 있다.**
도구를 사용하는 사람이 될것인가 도구를 이해하는 사람이 될것인가.

## What is a Pattern?

1. Proven - 패턴이라는 것은 검증이 됐다는 것이다.
2. Reusable - 재사용이 가능하다.
3. Expressive - 표현적이다. 명칭이나 이름을 보고 유추가 가능하다. 계획(방향성)이지 솔루션을 주는것은 아니다.

## Object Creation Pattern

1. Modules - 객체, 합쳐져서 뭔가를 이루는걸 말한다. 작은거냐 큰거는 상황에 따라서 다르다. 
   * 객체 리터럴
   * Privacy Concerns - 코드를 숨기는건 어렵다. 그래서 접근하기 어렵게 만들어야 한다.  
     * 꼭 써야한다면 네임스페이스 나만의 공간을 뚫어놓는다. window.VANILLA_CODING = {} 해서 공간을 만든다.
     * 팩토리 함수
2. SingleTons
   * 객체가 하나만 만들어 지도록 한다. 제한을 걸어준다.
3. Factory Pattern
   * Mixin - 공유한다. 코드를 재활용하는 패턴이다. 
4. Chaining
5. publish - subscribe (고릴라 업무에 들어 있다.)

