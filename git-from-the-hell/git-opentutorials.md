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

### 