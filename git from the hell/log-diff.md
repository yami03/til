# log

차이점을 알 수 있다. 과거의 어느 시점을 알 수 있다.

| 명령어     | 설명                                            |
| ---------- | ----------------------------------------------- |
| git log    | commit 내용 확인하기                            |
| git log -p | commit과 commit사이의 소스상 차이를 알 수 있다. |
| git log ID | ID commit전의 log만 보여준다.                   |

### log -p

```sh
commit 497b2e3eb874b83d2bea558736ffdadff6a806ef (HEAD -> master)
Author: sla <uouo33@naver.com>
Date:   Wed May 22 19:04:25 2019 +0900

    1

diff --git a/f2.txt b/f2.txt
new file mode 100644
index 0000000..d00491f
--- /dev/null
+++ b/f2.txt
@@ -0,0 +1 @@
+1

commit c24ee9acd0b3cff54c9b443288c4fca6af4a9c55
Author: sla <uouo33@naver.com>
Date:   Wed May 22 18:55:34 2019 +0900

    2

diff --git a/f1.txt b/f1.txt
index 472669b..91d3ec8 100644
--- a/f1.txt
+++ b/f1.txt
@@ -1,2 +1,2 @@
-souce : 1
+souce : 2


commit 8617324471f8df5dc36e62c20e82609841745c8f
Author: sla <uouo33@naver.com>
Date:   Wed May 22 18:40:05 2019 +0900

    1

diff --git a/f1.txt b/f1.txt
new file mode 100644
index 0000000..472669b
--- /dev/null
+++ b/f1.txt
@@ -0,0 +1,2 @@
+souce : 1
+
```

자세히 보자면 

```sh
    2

diff --git a/f1.txt b/f1.txt
index 472669b..91d3ec8 100644
--- a/f1.txt
+++ b/f1.txt
@@ -1,2 +1,2 @@
-souce : 1
+souce : 2
```

2번째 커밋한 내용이다
--- 로 표시된건 이전 파일이고
+++는 커밋파일이다

-는 이전 내용이며
+는 커밋한 내용이다.

```sh
diff --git a/f2.txt b/f2.txt
new file mode 100644
index 0000000..d00491f
--- /dev/null
+++ b/f2.txt
@@ -0,0 +1 @@
+1
```

파일이 추가된 +++ 파일과 -내용을 확인 할 수 있다.

### git  log ID

```sh
commit 497b2e3eb874b83d2bea558736ffdadff6a806ef (HEAD -> master)
Author: sla <uouo33@naver.com>
Date:   Wed May 22 19:04:25 2019 +0900

    1

commit c24ee9acd0b3cff54c9b443288c4fca6af4a9c55
Author: sla <uouo33@naver.com>
Date:   Wed May 22 18:55:34 2019 +0900

    2

commit 8617324471f8df5dc36e62c20e82609841745c8f
Author: sla <uouo33@naver.com>
Date:   Wed May 22 18:40:05 2019 +0900

    1
```

commit 마다 각자의 고유ID를 가지고 있다.

```sh
commit 497b2e3eb874b83d2bea558736ffdadff6a806ef
```

```sh
git log 497b2e3eb874b83d2bea558736ffdadff6a806ef
```

할 경우 이 ID의 commit 전의 log만 보여준다

 # diff

| 명령어              | 설명                                                   |
| ------------------- | ------------------------------------------------------ |
| git diff A-id..A-id | commit한 A와 B의 정확한 차이를 알고 싶을 때            |
| git diff            | add하기 전 로컬파일과 commit파일의 차이를 알고 싶을 때 |



### git diff A-id..B-id

commit id A와 B 사이의 차이점을 알고 싶을 때

```sh
# git diff A-id..B-id
git diff 497b2e3eb874b83d2bea558736ffdadff6a806ef..8617324471f8df5dc36e62c20e82609841745c8f

```

```sh
diff --git a/f1.txt b/f1.txt
index 472669b..91d3ec8 100644
--- a/f1.txt
+++ b/f1.txt
@@ -1,2 +1,2 @@
-souce : 1
+souce : 2

diff --git a/f2.txt b/f2.txt
new file mode 100644
index 0000000..d00491f
--- /dev/null
+++ b/f2.txt
@@ -0,0 +1 @@
+1
```

--- /-는 A-id 이고 
+++/+는 B-id의 내용이다.

fl.txt의 내용이 달라졌으며 f2.txt 파일이 추가 됐다는 걸 확인 할 수 있다.

### git diff

```sh
git diff
```

commit한 파일과 로컬에서 작업한 파일의 차이를 확인 할 수 있다.

```sh
diff --git a/f1.txt b/f1.txt
index 91d3ec8..ae93f8d 100644
--- a/f1.txt
+++ b/f1.txt
@@ -1,2 +1,2 @@
-souce : 2
+f1.txt : 4
```

>  **commit하기전 마지막으로 다시 볼 수 있는 기회를 얻는다.**

```sh
git add f1.txt
git diff
```

하면 아무것도 확인 할 수 없다.