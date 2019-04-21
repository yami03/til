#마크다운 사용법 


##The tooling
vscode 에서 [__Code Runner__](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) 와 [__Markdown Preview Enhanced__](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) 를 설치 

##Paragraphs and Text Decoration
cat is *cute*.  * 텍스트 *: 이탤릭체
cat is real **cute**.  ** 텍스트 ** - 볼드체
cat is real ***cute***.  *** 텍스트 *** - 이탤릭&볼드체

cat is _cute_. _ 텍스트 _ - 이탤릭체
cat is real __cute__. __ 텍스트 __ - 볼드체
cat is real ___cute___. ___ 텍스트 ___ - 이탤릭&볼드체

cat is ~~cute~~. ~~ 텍스트 ~~ - 취소선

one
two
three
four

##Headings in Markdown
"#"
"##"
으로 표현할 수 있으며 이외에 텍스트 다음줄의 ==== 이나 ----으로 heading 1 / heading 2를 나타낼 수 있지만 비추!

##Links in Markdown
https://github.com/yami03 < https://github.com/yami03 >로 표현
텍스트에 링크를 삽입할 경우

[My GitHub Account](https://github.com/yami03 "sla")
[ My GitHub Account ] ( https://github.com/yami03 "sla")
""에 쓴 글은 title attribute 처럼 사용할 수 있다.

[마크다운사용법][1] key value 값처럼 링크를 달 수 있다. 
[1]: https://guides.github.com/features/mastering-markdown/

[ 마크다운사용법 ][ 1 ] key와value처럼 링크를 달 수 있다.
key에 들어갈 단어는 마음대로 지정 가능하다. 
[ 1 ]: https://guides.github.com/features/mastering-markdown/


##Markdown Images

![yami03](https://avatars3.githubusercontent.com/u/36615680?s=460&v=4 "profile")
! [ alt ] ( 이미지 url "title" )
!표는 이미지를 뜻한다.

![yami03][profile]
[profile]: https://avatars3.githubusercontent.com/u/36615680?s=460&v=4

! [ yami03 ][ profile ] 링크와 동일하게 key value로 쓸 수 있다.
[ profile ] : https://avatars3.githubusercontent.com/u/36615680?s=460&v=4

링크도 같이 달 경우
[![yami03](https://avatars3.githubusercontent.com/u/36615680?s=460&v=4)](https://github.com/yami03)
[ ! [yami03] ( https://avatars3.githubusercontent.com/u/36615680?s=460&v=4 ) ] ( https://github.com/yami03 )

이미지태그 사용
[<img src="https://avatars3.githubusercontent.com/u/36615680?s=460&v=4">](https://github.com/yami03)

[ < img src =" https://avatars3.githubusercontent.com/u/36615680?s=460&v=4 " > ] ( https://github.com/yami03 )

< img src= "https://avatars3.githubusercontent.com/u/36615680?s=460&v=4" >
< style > < / style >
도 사용가능 하며

figure태그 figcaption도 사용가능하다.


##Lists — Ordered, Unorderd, Bullets and Nesting

* text
" * / + "를 text 앞에 붙이면 Bullet list를 만들 수 있다.

1. text
    * 들여쓰기도 가능 " * / + / 숫자* 다 가능 
        * css없이 가능 
2. text
"1. " 을 계속 연달아 붙이면 순서에 맞추어 자동적으로 바뀐다.

##Line Breaks, Horizontal Rules and BlockQuotes


