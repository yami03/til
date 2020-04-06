# GitHub Actions

https://www.youtube.com/watch?v=uBOdEEzjxzE&t=649s 생활코딩 영상을 보며 tutorial 진행

개발 블로그들을 보면 Github Actions에 대한 언급들을 확인할 수 있다. [최근 - 하루에 1000번 배포하는 조직 되기](https://blog.banksalad.com/tech/become-an-organization-that-deploys-1000-times-a-day/) 
그래서?? Github Actions가 무엇일까? 왜 쓰는 것일까? travis CI 대신 GitHub Actions로 바꾼 이유는?? 

글에서 잠깐 설명한 이유는
`배포에 대한 성공/실패 여부, 요청 시각, 커밋, 배포 환경, 누가 배포를 수행했는지 등의 모든 정보가 GitHub에 기록` 이 되는 장점
단점 
`GitHub에 너무 강하게 의존하고 있다.`

## 그래서 무엇?

GitHub에 있는 repository에 build, test, package, release, or deploy 하기 위해 setup 할 수 있는 custom automated processes이다.

Action을 취하면 github에서 컴퓨터 한 대를 빌려준다.
그 컴퓨터를 `runner`라고 부른다.
code를 이용해서 runner에서 구동시킨다. 추가적으로 Data도 입력할 수 있다.

-> code가 runner위에서 동작해서 여러가지 자동화된 처리를 할 수 있다.(e.g CI, 배포가 끝났을 때 이메일 보내기)
-> 가상머신을 빌려주는 기능

커밋메시지에 따른 자동으로 업무일지 작성.. 



## 어떻게?

`Set up a workflow yourself` click

 action-tutorials/.github/workflows/main.yml 생성할 수 있게 된다.

**전체 코드**

주석이 매우 친절하다.

```yaml
# This is a basic workflow to help you get started with Actions

name: Hello world

# Controls when the action will run. Triggers the workflow on push or pull request
# events but only for the master branch
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
    # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
    - uses: actions/checkout@v2

    # Runs a single command using the runners shell
    - name: Run a one-line script
      run: echo Hello, world!

    # Runs a set of commands using the runners shell
    - name: Run a multi-line script
      run: |
        echo Add other actions to build,
        echo test, and deploy your project.

```



## 톺아보기
코드 한줄한줄 보쟈


### on

```yaml
# This is a basic workflow to help you get started with Actions

name: Hello world

# 이벤트 기반의 테크닉이 들어간다.
# https://help.github.com/en/actions/reference/events-that-trigger-workflows#about-workflow-events 참고
# Controls when the action will run. Triggers the workflow on push or pull request
# events but only for the master branch
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

```

누군가가 repository에 commit, push하거나 issue, pull 요청이 생성될 때 GitHub event가 발생된다.(외부, 예정된 이벤트)

Events that trigger workflows: https://help.github.com/en/actions/reference/events-that-trigger-workflows#webhook-events 



### runs-on

```yaml
# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    # The type of runner that the job will run on
    # 액션이 실행될 때 구동되는 컴퓨터가 ubuntu이길 바란다.
    runs-on: ubuntu-latest
```

runs-on을 통해 운영체제를 선택할 수 있다.



### Steps

```yaml
    # Steps represent a sequence of tasks that will be executed as part of the job
    # 실제로 해야할 일 / 벌어지는 일들은 steps에 적는다.
    # 구동되지 않길 바라면 주석처리한다.
    steps:
    # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
    # - uses: actions/checkout@v2

    # Runs a single command using the runners shell
    #- name: Run a one-line script
    # Run pwd: ubuntu 운영체제내에서 현재 사용자가 어떤 디렉토리에 위치하고 있는지
    # name은 그저 이름일 뿐 실행은 run에서
    - name: Run pwd
    # 명령에 대한 내용
      # run: echo Hello, world!
      run: pwd

    # Runs a set of commands using the runners shell
    - name: Run ls -al
      run: ls -al
```

실제로 해야할 일 / 벌어지는 일들은 steps에 적는다.
name과 run으로 구성되서 실행할 수 있는데 name은 그저 이름일 뿐이고 실행 동작 내용은 실제 run에 작성한다.

`Commit new file` 을 한다.



저장소에 소스코드를 가지고 어떤 작업을 한다. -> 현재 yaml 설정은 아쉽

깃허브가 runner를 빌려줄 때 이 컴퓨터 안에 
액션을 실행한 깃허브의 소스코드가 checkout이 되어 있도록 한다. 

## github-checkout.yml

```yaml
    - uses: actions/checkout@v2
```

처음부터 끝까지 액션을 다 만들기엔 힘들다.

다른 사람이 만든 액션을 실행하고 싶을때 uses 라는 키워드를 사용한다.

https://github.com/actions/checkout

marketplace에서 actions를 볼 수 있다.

현재 내 저장소를 clone하고 checkout 할 수 있다.
그 액션이 `uses: actions/checkout@v2` 이것!



## Runner에서 상태정보알기 Context

Runner가 구동된 시점에서 여러가지 상태정보를 알 수 있다면 여러가지 일을 할 수 있다! -> Runner가 어떤 맥락에서 실행 되었는지를 알려준다. -> Context

https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions

Runner가 실행되는 시점에서 주변 정황들을 알려주는 환경변수

ex)  푸쉬가 이루어졌을 때 그 푸쉬가 어떤버전으로 이루어졌는지 

github.sha -> commit id

### context.yml

```yaml
    steps:
    - name: context
      # 환경변수 지정하기 COMMIT_ID = ${{ github.sha }} 이다라고 지정한거
      # name을 쓰기 위해서는 echo "id is $COMMIT_Id"를 하면 id 값을 출력할 수 있다.
      env: 
        COMMIT_ID: ${{ github.sha }}
      run: echo "commit id => $COMMIT_ID"
```

https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#env-context

```shell
Run echo "commit id => $COMMIT_ID"
commit id => be0137577c3b5727bdecf3a77fde07991f244d19
```

build창을 통해 확인 할 수 있다.

페이지내에 있는 예시 적용해보기

### context2.yml

```yml
    steps:
      - name: Dump GitHub context
        env:
          GITHUB_CONTEXT: ${{ toJson(github) }}
        run: echo "$GITHUB_CONTEXT"
      - name: Dump job context
        env:
          JOB_CONTEXT: ${{ toJson(job) }}
        run: echo "$JOB_CONTEXT"
      - name: Dump steps context
        env:
          STEPS_CONTEXT: ${{ toJson(steps) }}
        run: echo "$STEPS_CONTEXT"
      - name: Dump runner context
        env:
          RUNNER_CONTEXT: ${{ toJson(runner) }}
        run: echo "$RUNNER_CONTEXT"
      - name: Dump strategy context
        env:
          STRATEGY_CONTEXT: ${{ toJson(strategy) }}
        run: echo "$STRATEGY_CONTEXT"
      - name: Dump matrix context
        env:
          MATRIX_CONTEXT: ${{ toJson(matrix) }}
        run: echo "$MATRIX_CONTEXT"
```

간단하게 살펴보면

```yaml
    steps:
      - name: Dump GitHub context
        env:
          # github 객체를 보기 좋은 형태로 풀어낸다. toJson()
          # 그 값을 GITHUB_CONTEXT에 저장하였다.
          # echo를 통해 출력하였다.
          # context전체를 출력한다.
          GITHUB_CONTEXT: ${{ toJson(github) }}
        run: echo "$GITHUB_CONTEXT"
```



## Secret

.github 파일안에 들어있기 때문에 패스워드같은 걸 넣으면 큰일 난다.ㅠ

settings에 Secrets를 통해 넣는다. wow

> Secrets are environment variables that are **encrypted** and only exposed to selected actions. Anyone with **collaborator** access to this repository can use these secrets in a workflow.

대박 이런건 몰랐다.

```yaml
    steps:
    - name: Print Password
      env:
        MY_PASSWORD: ${{ secrets.PASSWORD }}
      run: echo My password is $MY_PASSWORD
```

이렇게 추가한 후에 build를 확인하면

```shell
Run echo My password is $MY_PASSWORD
  echo My password is $MY_PASSWORD
  shell: /bin/bash -e {0}
  env:
    MY_PASSWORD: ***
My password is ***
```

🤭 출력화면을 볼 수 있다. 노출되지 않는다 'ㅁ'ㅋㅋㅋㅋ

보안이슈를 방지할 수 있다. 👏👏👏

## TODO

* [ ] 액션에 어떤 `event`들이 있는지
* [ ] 어떤 `variable` 들이 제공되는지
* [ ] 액션이 시작되었을 때 node.js 같은 `익숙한 언어를 구동시켜서 복잡한 일을 처리할 수 있는지` 
* [ ] 나만이 아닌 보편적인 `action`만들기

 

### 참고

* yaml..무엇인가? markup 언어가 아니다..: https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes
* Configuring a workflow: https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow
* Events that trigger workflows: https://help.github.com/en/actions/reference/events-that-trigger-workflows#webhook-events
* 생활코딩 github action: https://www.youtube.com/watch?v=uBOdEEzjxzE&t=649s