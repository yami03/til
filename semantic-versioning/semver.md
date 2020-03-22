# Semantic Versioning 2.0.0

![Semver](./assets/semver01.png)

소프트웨어 릴리즈 버전 넘버에 대한 네이밍 시스템이다. 그라바타(Gravatars)의 창시자이자 깃헙(GitHub)의 공동창업자인 톰 프레스턴-베르너(Tom Preston-Werner)가 작성했으며, 오픈소스 프로젝트에 일반적으로 사용된다. 
npm 등 api 개발 스케쥴을 이해하기 위해선 알아둬야 하며, 버전은 사용자가 이 package (api)가 어떤식으로 변경되었는가를 이해할 수 있게 해준다.



## Versions

* **MAJOR Version**: 기존 api가 변경 / 삭제 되었기 때문에 update 하면 동작하지 않을 수 있다는 경고의 의미
* **MINOR Version**: 이전 버전과 호환되는 방식으로 API가 추가되었으니 살펴보라는 의미
* **PATCH Version**: 이전 버전과 호환되는 버그 수정을 했을 경우



## Semantic Versioning Specification (SemVer)

명세에 관해서는 페이지에서 확인하고 여기선 간략하게만 정리 https://semver.org/lang/ko/ / https://semver.org/ 
영어로 보면 강조표시가 더 잘보인다.

* SemVer(유의적버전)을 쓰는 소프트웨어는 반드시 공개 API를 선언한다. 코드자체로 선언하거나, 문서로 엄격하게 명시해야 한다. (책임감 있는 개발자..)
* Normal Version은 반드시 X.Y.Z 형태이며 음수가 아닌 정수여야 하며 절대 앞에 0이 붙으면 안되고 각 수는 증가하는 수여야 한다.
* 배포하면 그 버전의 내용은 절대 변경해서는 안된다. 😱
* 0(0.y.z)은 초기 개발을 위해서 쓴다. 아무 때나 마음대로 바꿀 수 있다.
* 1.0.0 버전은 공개 API를 정의한다. 이후 버전은 배포한 공개 API에서 어떻게 바뀌었는지에 따라 올린다.
* MAJOR Version이 올라가면 MINOR Version과 PATCH Version은 0이 되야하고 
  MINOR Version이 올라가면 PATCH Version이 0이 반드시 되어야 한다.
* 정식 배포를 앞둔 pre-release version은 MINOR Version 바로 뒤에 붙임표(-)와 마침표(.)로 구분된 식별자를 더해서 표시할 수 있다. 식별자는 반드시 아스키(ASCII) 문자, 숫자, 붙임표로만 구성한다[0-9A-Za-z-].  식별자는 반드시 한 글자 이상으로 한다. 숫자 식별자의 경우 절대 앞에 0을 붙인 숫자로 표기하지 않는다.
  예) 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.
  우선순위는 1.0.0-alpha < 1.0.0.
* Build metadata는 수버전이나 정식배포 전 식별자 뒤에 더하기(+) 기호를 붙인 뒤에 마침표로 구분된 식별자를 덧붙여서 표현할 수 있다. 
  Build metadata.. Build metadata.. ??🧐
  예) 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.



## Version Range

설치된 패키지 정보를 기록하는 package.json에서 패키지의 버전 표시를 많이 봤을 것이다.

```json
"devDependencies": {
  "@lunit/cornerstone-declarations": "^0.4.0",
  "react-test-renderer": "^16.13.0",
  "react-zeroconfig": "^3.27.2-alpha.2"
}
```

`^` 와 `-alpha.2` 을 확인할 수 있는데,  Node에서는 특히 이같은 Version Range를 권장한다고 한다.
엄격한 제약조건은 오직 한 버전과 매칭하여 특정 patch release에 의존하는 것이기 때문에 버그가 수정되지 않는 문제가 있다. (https://jubianchi.github.io/semver-check/#/) 막번역..

> Strict constraint (or fully qualified constraint) are those constraints matching only one version. In most case it is a bad idea to use them.
>
> Why? Because with them you are locking your dependency to a specific patch release which means you won't ever get bug fixes when updating your dependencies.

**comparator**

연산자와 버전으로 표시

| 표기법     | 설명                                                         |
| ---------- | ------------------------------------------------------------ |
| version    | 명시된 version과 일치                                        |
| \>version  | 명시된 version보다 높은 버전                                 |
| \>=version | 명시된 version과 같거나 높은 버전<br />예시) `>=1.2.7` 는 1.2.7과 1.2.8과 1.3.9는 포함될 수 있지만<br />1.2.6이나 1.0.0 버전은 매치되지 않는다. |
| <version   | 명시된 version보다 낮은 버전                                 |
| <=version  | 명시된 version과 같거나 낮은 버전                            |

**comparator set**

whitespace를 사용하며 &&와 같다고 볼 수 있다. 또한 `||` 도 같이 쓰일 수 있다.

**예시로 확인하쟈**

* **\>=1.2.7 <1.3.0**
  patch 업데이트 허용
  
* **1.2.7 || >=1.2.9 <2.0.0**
1.2.7 이거나  1.2.9포함 minor과 patch 업데이트 허용



### Prerelease Tags

prerelease tag(예로, `1.2.3-alpha.3`)가 있는 경우

**> 1.2.3-alpha.3** 
[major, minor, patch] 전부 일치할 경우 1.2.3일 경우 prerelease tag도 함께 포함된다. 1.2.3-alpha.4는 포함, 1.2.4도 포함 되지만 1.2.4-alpha.3은 포함되지 않는다.

이렇게 되어있는 건 2가지 이유가 있다.

1. prerelease version은 매우 빠르게 업데이트 되기 때문에,  public  consumption에는 적합하지 않고 많은 변경사항이 포함되어 있기 때문에 range matching에는 제외된다.
2. user가 prerelease version을 사용하기로 했다면 위험을 인식하고 있다고 볼 수 있기 때문에 [major, minor, patch]가 일치 하는 경우에는 포함하지만, 다음 prelease version까지는 감수하기로 했다고 할 수 없기 때문에 포함하지 않는다.

🤭와우



### Advanced Range Syntax

**Hyphen Ranges `X.Y.Z - A.B.C`**

* **1.2.3 - 2.3.4**
  \>=1.2.3 <=2.3.4

* **1.2 - 2.3.4**
   첫번째 버전에 생략이 있다면 0을 포함시킨다. >=1.2.0 <=2.3.4

* 1.2.3 - 2.3

  두번째 버전에 생략이 있다면 [major, minor] 가 일치하는 경우만 포함

  \>=1.2.3 <2.4

* 1.2.3 - 2

  두번째 버전에 생략이 있다면 2로 시작하는 [major] 가 일치하는 경우만 포함

  \>=1.2.3 <3



**X-Ranges `1.2.x` `1.X` `1.2.*`**

* *
  \>0.0.0 모든 버전에 충족

* **1.x**

  marjor와 minor level의 업데이트 허용 \>=1.0.0 <2.0.0

* **1.2.x**

  patch level의 업데이트 허용 \>=1.2.0 <1.3.0



**Tilde Ranges `~1.2.3` `~1.2` `~1`**

minor version이 지정되어 있다면 patch level 변경을 허용한다. 
그렇지 않은 경우 minor-level 변경을 허용한다.

* **~1.2.3**
  minor version이 지정되어 있으니 patch level 변경 허용
  \>=1.2.0 <1.(2+1).0 
  \>=1.2.0 <1.3.9
  
* **~1.2**
  minor version이 지정되어 있으니 patch level 변경 허용 (1.2.x와 같다)
  \>=1.2.0 <1.(2+1).0
  \>=1.2.0 <1.3.0

* **~1**
  minor version이 지정되어 있지 않기 때문에 minor-level 변경을 허용
  \>=1.0.0 <(1+1).0.0
  \>=1.0.0 <2.0.0

* **~3.10.0-alpha.1**

  minor version이 지정되어 있으니 patch level 변경 허용
  3.10.0 이 일치하는 prerelease tag도 함께 포함된다.

  \>=3.10.0-alpha.1 <3.(10+1).0

  \>=3.10.0-alpha.1 <3.11.0 
  3.10.0-alpha.2는 포함이 되지만, 3.11.0-alpha.2는 포함되지 않는다.



**Caret Ranges `^1.2.3` `^0.2.5` `^0.0.4`**

[major, minor, patch]에서 가장 왼쪽에 있는 0이 아닌 요소를 수정하지 않는 변경 허용
1.0.0 버전이라면 minor와 patch 버전을 업데이트를 허용
0.X 버전이라면 patch 업데이트 허용
0.X.X 버전이라면 업데이트를 허용하지 않는다.

오픈소스를 만든 많은 저자들은  0.x version의 x를 호환성이 손상되는 변경(breaking-change) 지표로 여긴다.(?)
-> 이 말에서 생각이 많았는데 1.0.0 배포를 하지 않았을 때를 말하는거였다. 위의 Semantic Versioning Specification를 확인해보면 `0(0.y.z)은 초기 개발을 위해서 쓴다. 아무 때나 마음대로 바꿀 수 있다.` 라고 쓰여있다.

Caret ranges는 저자들은 0.2.4 에서 0.3.0 릴리즈 버전 사이를 호환성이 손상되는 변경일 때 이상적이다.(?)
단 0.24와 0.25는 호환성을 손상되는 변경이 아닌것으로 간주한다.(?)

> Many authors treat a 0.x version as if the x were the major "breaking-change" indicator.
>
> Caret ranges are ideal when an author may make breaking changes between 0.2.4 and 0.3.0 releases, which is a common practice. However, it presumes that there will not be breaking changes between 0.2.4 and 0.2.5. It allows for changes that are presumed to be additive (but non-breaking), according to commonly observed practices.
>
> (https://github.com/npm/node-semver#caret-ranges-123-025-004)

breaking-change.. 🙄.. 

* **^1.2.3**
  왼쪽에서 맨 처음 0이 아닌 요소는 major 이기 때문에 minor, patch 업데이트를 허용
  \>=1.2.3 < 2.0.0
* **^0.2.3**
  왼쪽에서 맨 처음 0이 아닌 요소가 minor 이기 때문에 patch 업데이트를 허용
  \>=0.2.3 <0.3.0
* **^0.0.3**
  왼쪽에서 맨 처음 0이 아닌 요소가 patch이기 때문에 업데이트를 허용하지 않음
* **^1.2.3-beta.2**
   왼쪽에서 맨 처음 0이 아닌 요소가 major 이기 때문에 minor, patch 업데이트를 허용하고 
  1.2.3 version 일치하는 경우 prerelease tag도 함께 포함된다.
  \>=1.2.3-beta.2 <2.0.0
* **^0.0.3-beta**
  0.0.3의 prerelease만 허용된다. 0.0.3-pr.2는 허용이 된다.



**patch 값이 누락되어 있는 경우**

0으로 표기하지만, major와 minor version 둘 다 0인 경우 해당 값 내에서 유연성이 허용된다.

* **^1.2.x** 
  0이 아닌 맨 처음 요소가 major이고 0으로 채워진다.
  \>=1.2.0 <2.0.0   
* **^0.0.x**
  major와 minor 둘 다 0 이기 때문에 해당값 내에서 유연성 허용
  \>=0.0.0 <0.1.0
* **^0.0**
  major와 minor 둘 다 0 이기 때문에 해당값 내에서 유연성 허용
  \>=0.0.0 <0.1.0



**minor과 patch 값 모두 누락되어 있는 경우**

0으로 표기하지만 major도 0인 경우 해당 값 내에서 유연성이 허용된다.

* **^1.x**

  0이 아닌 맨 처음 요소가 major이고 minor과 patch를 0으로 표기

  \>=1.0.0 <2.0.0

* **^0.x**
  0.0.0이 되어 업데이트를 하지 말자는 뜻이 되어야 하는데 major도 0인 경우는 minor와 patch값 내에서 유연성이 허용된다.
  \>=0.0.0 <1.0.0



## 결론

이제 pakage.json의 파일을 이해할 수 있게 되었다.

```json
"devDependencies": {
  "@lunit/cornerstone-declarations": "^0.4.0",
  "react-test-renderer": "^16.13.0",
  "react-zeroconfig": "^3.27.2-alpha.2"
}
```

하나씩 톺아보면

```json
"@lunit/cornerstone-declarations": "^0.4.0",
```

`^(Caret Ranges)` 를 사용하였고 0이 아닌 첫번째 version은 수정하지 않기 때문에 patch만 변경된다.
또한 아직 1.0.0이 릴리즈 된게 아니기 때문에 0.4와 0.5가 호환성이 손상되는 변경(breaking-change) 일 수 있다. 
 `0(0.y.z)은 초기 개발을 위해서 쓴다. 아무 때나 마음대로 바꿀 수 있 수도 있다.` 는것을 명심하쟈

```json
"react-test-renderer": "^16.13.0",
```

0이 아닌 첫번째 자리가 major 이기 때문에 \>=16.13.0 <17.0.0 까지 업데이트 될 수 있다.

```json
"react-zeroconfig": "^3.27.2-alpha.2"
```

0이 아닌 첫번째 자리가 major 이기 때문에 major는 업데이트 하지 않는다.
prerelease tag가 붙어있기 때문에 [3.27.2] 버전은 prerelease version도 함께 업데이트 된다. (3.27.2-alpha.3은 업데이트에 포함되지만 3.27.3-alpha.2은 업데이트에 포함될 수 없다.)

\>=3.27.2-alpha.2 <4.0.0



## TIP

읽어도 헷갈릴 때는 npm semver calculator https://semver.npmjs.com/ 추천한다. 
한 눈에 확인 할 수 있으며 prerelease version이 있는 react-zeroconfig로 확인하는걸 추천

![page](./assets/semver02.png)






**참고**

* https://github.com/semver/semver/blob/master/semver.md / https://semver.org/ 
* https://github.com/npm/node-semver#versions
* https://blog.outsider.ne.kr/1041

