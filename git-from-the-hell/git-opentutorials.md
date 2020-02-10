# git

git이 존재하는 이유

* version
* backup
* collaborate

**개념**

* Working Tree - 파일을 만들고 수정했지만 저장소엔 X
* Staging Area - 버전으로 만들고 싶은 파일들을 넣어두는 곳
* Repository - 저장소

## 버전관리 명령어

### 초기 설정

```shell
## Initialized empty Git repository in /Users/...  
git init .

## 파일 만들기
nano hello1.txt
touch hello2.txt

## 파일 내용확인하기
cat hello1.txt
```

### log별 파일을 보는 방법

```shell
## For full path names of changed files:
git log --name-only

## For full path names and status of changed files:
git log --name-status

## For abbreviated pathnames and a diffstat of changed files:
git log --stat
```

### diff 차이점 확인

```shell
## 차이점을 파악할 수 있다.
git diff
```

### checkout 시간여행

```shell
## 사라지는게 아니다. 이전파일로 되돌려서 확인하기
git checkout <id>

## 최신버전으로 되돌리기
git checkout master
```

### commit -am

```shell
## add와 commit을 한번에 하기
## 최초로 한번은 add를 한 후 트래킹 상태일때만 된다.
git commit -am "Message"
```

### git commit 수정하기

```shell
git commit --amend
```

### reset 버전으로 reset하기 

```shell
## 현재 작업한 내용을 stage에 올리지 않고 Repository 버전으로 되돌리기
git reset --hard

## 이전 버전으로 되돌리고 싶다면
git reset --hard <id>

## 수정하고 있는 부분을 살리고 되돌리고 싶다면 soft mixed
git reset --soft <id>
```

### revert commit의 변화를 취소하기

```shell
## 취소하고 싶은 commit의 id
## 이렇게 하면 이전에 커밋 히스토리가 남아있다.
## 한단계씩 밖에 못내려간다.
## 무조건 역순이다.
git revert <id>
```

## Branch & Conflict

### log 옵션으로 확인하기

 ```shell
## --all 모든 브랜치보기
## --graph 시각적으로 표현된다.
## --oneline 버전이 장확하게 나오지 않도록 해준다.
log --all --graph --oneline
 ```

### branch

```shell
## 목록을 보여준다.
git branc h

## branch 만들기
git branch <이름>

## checkout
## master와 동일하지 않을 수 있다. 만들어진 그 시점이 최초의 시점
git checkout <브랜치이름>
```

### 다른 브랜치의 내용을 master에 합치기

```shell
## 다른 브랜치의 내용을 commit까지 했다면 master로 checkout
git checkout master

git merge <다른 브랜치>
```

### ### 충돌이 났을 때

```shell
## 충돌을 해결한 후 
git add <파일>

## 메세지를 쓰지 않아도 자동으로 생성
git commit
```

### p4Merge

Merge를 도와준다.

참고 https://gist.github.com/tony4d/3454372

```shell
git config --global merge.tool p4mergetool

git config --global mergetool.p4mergetool.cmd \
"/Applications/p4merge.app/Contents/Resources/launchp4merge \$PWD/\$BASE \$PWD/\$REMOTE \$PWD/\$LOCAL \$PWD/\$MERGED"

## 자동으로 add까지 해준다.
git mergetool

## 이전 충돌상황 체크
cat work.txt.orig
```

 #### git workflow (git flow) 와 cherry-pick와 rebase

git workflow 규칙을 적용하기

cherry-pick을 이용하여 필요한 부분만 병합하기

rebase 공간을 넣어두고 병합하기

**추후 공부가 더 필요**

### HEAD와 Branch와 commit

### Detached

Head가 더이상 branch를 가리키지 않고 저장소를 가리킬때 

```shell
git checkout <id>
```



### checkout vs reset

* checkout (change)

  HEAD를 제어한다.

* reset (delete 느낌..)

  브랜치 / 저장소를 가르키는 저장소를 가리킨다.

## backup

* HTTP 

  보안이슈가 있다.

* SSH

  보안 문제는 없지만 사용하기에 공부가 필요

### 원격 저장소 연결하기

```shell
git remote add origin <주소>

## 연결 확인
git remote

## push하기, 어떤 원격저장소와 연결할지 셋팅한다.
git push --set-upstram origin master
```

### clone

```shell
git clone <주소> <변경하고싶은 디렉토리명>
```

### pull

```shell
## 원격저장소로부터 다운받을 수 있다.
git pull
```

## 협업

```shell
## 원격저장소 내용을 복사한다.
git clone <주소>
```

### rejected

push후 rejected가 뜬다면 다른사람이 작업한 것을 pull받지 않아 생긴일 

```shell
git mergetool 

## 수정후 다시 add를 해야한다. 
```

### git fetch -> git merge FETCH_HEAD -> commit -> push

를 통해 `pull -> commit -> push`와 똑같은 일을 할 수 있다.

(HEAD -> master, origin/master)

HEAD는 로컬저장소인 master를 가리키고 원격저장소는 origin/master라는 뜻이다.

```shell
## 확인해보면 원격저장소는 업데이트 되어있지만 로컬저장소는 업데이트 되어있지 않다.
git fetch

## 따로 merge가 필요하다.
git merge origin/master
```

### 반복적인 origin/master 피하기 FETCH_HEAD

```shell
cat .git/FETCH_HEAD

## 이전에 merge한 HEAD를 기억한다. 파일을 만듬으로
git fetch; git merge FETCH_HEAD
```

### patch

권한이 없는데 전달해주고 싶은경우

```shell
## 보내기
git format-patch <작업직전의 id>

## 받기
git am -3 -i *.patch
```

### pull request

포크후 오리진 레파지토리에 요청할 수 있다.