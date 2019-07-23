# Git

### Snapshots

---

명령어에 대해 실제로 어딘가에 저장을 한다. (commit까지 해야한다)
주어진 시점에 파일들이 어떻게 생겼는지를 기록한다.

### Commit

---

Snapshots을 만들어서 앨범에 꽂아놓는다 라고 생각해라

commit이 하는 정보관리

* 파일 변경사항
* parent commit을 기억한다. (linked list와 유사하다)
* Commit Hash(아이디 같은것이다.)

### Repository

---

파일의 히스토리가 모여있는 곳이다.
개인 컴퓨터나 클라우드 서버(Github)에 있다.

다운받는 걸 clone이라고 하고 clone으로 인하여 협업이 가능하다.

### Pull

---

내 컴퓨터에 없는 내용ㅇ을 클라우드로부터 추가적으로 다운로드 받는 행위
통합까지 함께 해준다.

### Fetch

---

나와 다른 사항을 다운받는거고 내 브런치와 통합하는거는 다른거다.

### Branch 브랜치

---

모든 커밋은 브랜치내에 존재한다.
**master** 브랜치는 메인 브랜치 'ㅁ'/

### Head

---

**현재브런치의 마지막 커밋** (시나리오에 따라 다르다)

git 튜토리얼 

### git log

---

히스토리를 볼 수 있다.

### github

---

* 보관
* 협업
* 백업

```shell
git remote -v
//git remote add REMOTE_NAME REMOTE_URL
git remote add origin "저장소"

//git push REMOTE_NAME BRANCH_NAME
git push origin master
```

