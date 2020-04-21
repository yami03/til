# String.fromCharCode

`String.fromCharCode()` 는 정적 메소드이다.

UTF-16 코드 단위의 시퀀스에서 stirng으로 만들어 반환한다.

```js
String.fromCharCode(189, 43, 190, 61); // "½+¾="
```

**정적 메서드**

클래스안에 `static` 키워드를 붙여 만든다.

dot notation으로 호출하고, this는 .(점)앞에가 된다.

여기선 `String`

클래스의 인스턴스 없이 호출이 가능하다. 클래스가 인스턴스화되면 호출할 수 없다.

어플리케이션의 유틸리티 함수를 만드는데 사용된다.

## Syntax

```js
String.fromCharCode(num1, [,... [, numN ]])
```

### Parameters

num1, ..., numN

UTF-16 코드 단위인 숫자 시퀀스, 그 범위는 0에서 65535 (0xFFFF)까지이다. 0xFFFF보다 큰 수는 자른다. 유효성 검사는 없다.

### Return value

UTF-16 코드 단위로 구성된 N 길이의 문자열

## Descripttion

이 메소드는 String object가 아닌 string을 반환한다.

왜냐하면 `String` 의 정적 메소드이다. 직접 생성한 String object의 메소드가 아니라, 항상 String.fromCharCode() 사용해야한다.

생각해보니.. String object를 만들 일이 없음.. 

