# 웹 브라우저에 URL을 입력했을 때 어떻게 웹 페이지가 보여질까? 

이 질문은 면접질문으로도 매우 유명하고 흔흔한 질문이다. 이 질문을 답하기 위해서 면접용으로 잠깐 외웠을 뿐 자세히는 몰랐다. 하지만 최근 HTTP에 대해 공부욕구가 뿜뿜하게 되었다. 💪

최근 CORS에러 이슈가 있었다. 
이게 내탓인가? 아님 서버에서 CORS 설정을 안했나? 정확한 파악을 하기가 어려웠다.

이 문제에대해 파악방법에 대해 배우게 되었고, `Back-End 를 깊게 공부하는 것 보다는, Front-End 랑 Back-End 사이에 있는 Protocol에 대해서 깊게 아는게 더 도움` 이 될거라는 피드백을 받아! 이전에 읽다 포기한 [그림으로 배우는 HTTP & Network Basic](http://www.kyobobook.co.kr/product/detailViewKor.laf?ejkGb=KOR&mallGb=KOR&barcode=9788931447897&orderClick=LEa&Kc=) 구매하였다. 

예전에 퍼블리셔로 일 했을땐 알면 좋고 몰라도 일 할 수 있던 환경이라(내기준) 도서관에서 빌려보았을땐 한 챕터도 넘기기 어려웠다. 근데 지금은 왜이렇게 재밌지? 뭔가 조각모음하는 느낌이다. CORS에 대해 간략하게 공부한 경험, REST API 발표 준비했던 일, 서버단을 구축했던 경험, 도메인을 구입했던 일 등이 덕분에 재미를 업시켜준거같다.

(길다.. 말이 많다..)

일단 이 질문에 답하기 위핸 HTTP와 Network 개념들을 이해할 필요가 있다.



## HTTP 프로토콜

> HTTP는 [클라이언트](https://ko.wikipedia.org/wiki/클라이언트)와 [서버](https://ko.wikipedia.org/wiki/서버) 사이에 이루어지는 요청/응답(request/response) 프로토콜이다. 예를 들면, 클라이언트인 [웹 브라우저](https://ko.wikipedia.org/wiki/웹_브라우저)가 HTTP를 통하여 서버로부터 웹페이지나 그림 정보를 요청하면, 서버는 이 요청에 응답하여 필요한 정보를 해당 사용자에게 전달하게 된다. 이 정보가 모니터와 같은 출력 장치를 통해 사용자에게 나타나는 것이다.
>
> https://ko.wikipedia.org/wiki/HTTP

HTTP 프로토콜이란 클라이언트와 서버 사이에 일련의 흐름을 결정하는 것을 말하며, 프로토콜 의미는 약속이다. HTTP라는 약속을 사용한 통신을 말할 수 있다.

그럼 약속이라고 하는 프로토콜에는 무엇이 있을까? 

컴퓨터와 네트워크 기기는 서로 같은 방법으로 통신해야 한다. 그렇기 때문에 규칙이 필요하다. 여러가지를 들 수 있는데, 케이블 규격, IP 주소 지정 방법, 웹을 표시하기 위한 순서 등을 예시로 들 수 있다.



### HTTP/2 그래도 계속 진보중?

HTTP/0.9는 1990년에 등장
HTTP/1.0 1996년 5월
HTTP/1.1 1997년 1월

https://en.wikipedia.org/wiki/HTTP/2 위키피디아를 참고로 보면 HTTP/2 사양은 2015년 5월 [RFC 7540](https://tools.ietf.org/html/rfc7540) 발행되었다.
대부분의 주요 브라우저는 2015년 말에 HTTP/2를 지원하였다.

2019년 9월 Chrome에 HTTP/3에 대한 지원이 추가되었지만 아직 브라우저에서는 기본적으로 지원하지는 않지만 활성화 할 수 있다.



 ## TCP/IP는 프로토콜의 집합

[Internet Protocol Suite](https://ko.wikipedia.org/wiki/인터넷_프로토콜_스위트)

> [인터넷](https://ko.wikipedia.org/wiki/인터넷)에서 [컴퓨터](https://ko.wikipedia.org/wiki/컴퓨터)들이 서로 정보를 주고받는 데 쓰이는 통신규약([프로토콜](https://ko.wikipedia.org/wiki/통신_프로토콜))의 모음이다. 인터넷 프로토콜 슈트 중 [TCP](https://ko.wikipedia.org/wiki/전송_제어_프로토콜)와 [IP](https://ko.wikipedia.org/wiki/인터넷_프로토콜)가 가장 많이 쓰이기 때문에 **TCP/IP 프로토콜** 슈트라고도 불린다.
>
> TCP는 IP 위에서 동작하는 프로토콜로, 데이터의 전달을 보증하고 보낸 순서대로 받게 해준다. [HTTP](https://ko.wikipedia.org/wiki/HTTP), [FTP](https://ko.wikipedia.org/wiki/파일_전송_프로토콜), [SMTP](https://ko.wikipedia.org/wiki/SMTP) 등 TCP를 기반으로 한 많은 수의 애플리케이션 프로토콜들이 IP 위에서 동작하기 때문에, 묶어서 TCP/IP로 부르기도 한다.

인터넷에서 컴퓨터들이 서로 정보를 주고받는 데 쓰이는 프로토콜들의 집합이다. HTTP는 그 중에 하나이다.



aㄴ



