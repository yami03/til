# init

> 프로젝트 폴더를 버전관리 하겠다. 

```shell
git
```

이라고 입력하면

```shell
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           <command> [<args>]

These are common Git commands used in various situations:

start a working area (see also: git help tutorial)
   clone      Clone a repository into a new directory
   init       Create an empty Git repository or reinitialize an existing one

work on the current change (see also: git help everyday)
   add        Add file contents to the index
   mv         Move or rename a file, a directory, or a symlink
   reset      Reset current HEAD to the specified state
   rm         Remove files from the working tree and from the index

examine the history and state (see also: git help revisions)
   bisect     Use binary search to find the commit that introduced a bug
   grep       Print lines matching a pattern
   log        Show commit logs
   show       Show various types of objects
   status     Show the working tree status

grow, mark and tweak your common history
   branch     List, create, or delete branches
   checkout   Switch branches or restore working tree files
   commit     Record changes to the repository
   diff       Show changes between commits, commit and working tree, etc
   merge      Join two or more development histories together
   rebase     Reapply commits on top of another base tip
   tag        Create, list, delete or verify a tag object signed with GPG

collaborate (see also: git help workflows)
   fetch      Download objects and refs from another repository
   pull       Fetch from and integrate with another repository or a local branch
   push       Update remote refs along with associated objects

'git help -a' and 'git help -g' list available subcommands and some
concept guides. See 'git help <command>' or 'git help <concept>'
to read about a specific subcommand or concept.
```

이라고 떠서 명력어들을 다 확인 할 수 있다. 

```shell
git init 
# Initialized empty Git repository in dr/.git/
```

```sh
ls -al
```

.git 이라는게 생겼다는 걸 확인 할 수 있다. 

# status

```sh
# vim을 이용해 fi.txt를 수정하겠다.
vim f1.txt

# 입력상태로 만들 수 있다.
i

# esc를 누르면 입력상태를 빠져나갈 수 있다.

# 작성내용을 저장하고 vim을 종료하고 싶다.
:wp

# 파일이 있는지 확인하자
ls -al

# 파일 내용을 확인한다.
cat f1.txt
```

txt파일을 만들고 안에 내용도 넣어줬다. 

```sh
git status
```

를 입력하면

```sh
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        f1.txt

nothing added to commit but untracked files present (use "git add" to track)
```

untracked - 추적되고 있지 않음을 말한다.
 폴더에 상태를 알 수 있다.

# add (stage area)

> 이 파일을 관리해~ commit 대기상태 - stage area

여러개의 파일을 commit 할 때 / 
선택적으로 commit 할 때 유용하기 때문에 add 는 꼭 필요하다.

```sh
git add f1.txt
```

# commit

버전으로 만들어 저장하기

> 이전으로 돌아갈 수 있고 변경사항을 확인 할 수 있다.

버전 - 의미있는 변화 

 ```sh
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
 ```

현재상태가 add로 트레킹 된 상황이라는 걸 알 수 있다.

**이름 셋팅**

```sh
git config --global user.name sla 
git config --global user.email seula00027@gmail.com
```

딱 한번만 하면 된다.

commit 하기

```sh
git commit 
```

을 하면 vim이 실행이 된다.

```sh
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
#
# Initial commit
#
# Changes to be committed:
#       new file:   f1.txt
```

현재 버전의 메시지를 쓰자.
왜 변경이 되었는지 'ㅁ'/ 

```sh
# 입력상태로 바꾼다.
i

# 커밋 메시지를 입력한다. 

#esc를 누른다

#쓴 내용을 저장하고 vim종료하기
:wq
```

# log

```sh
git log
```

```sh
commit 8617324471f8df5dc36e62c20e82609841745c8f (HEAD -> master)
Author: sla <blabla>
Date:   Wed May 22 18:40:05 2019 +0900

    1
```

커밋메시지와 함께 확인 할 수 있다.

### 복습

```sh
# f2.txt를 만들고 커밋하자
# vim 파일을 만들고 쓰는 걸 동시에 할 수 있다. 
cp f1.txt f2.txt

# 입력상태로 만든다
i
# 쓰고자 하는 내용을 입력한 뒤
# Esc를 누른다.
# 저장후 vim 상태 벗어 나기
:wq
# 잘 만들어졌는지 확인하기
ls -al
# 내용 확인
cat f1.txt
# git 버전관리 상태 확인하기 Untracked 확인
git status

# git add하기
git add
# 확인
git status 

# commit
git commit 
# 메시지 입력
i 
# 메시지 작성후 Esc
# 저장후 vim 상태 빠져 나오기
:wq

# commit 후 확인하기
git log
```

# stage, repository  

 **stage**: add를 완료하고 commit 하기전 파일들이 가는 곳

**repository**: commit한 파일들이 가는 곳