# GitHub Actions

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



```yaml
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



### 참고

* yaml..무엇인가? markup 언어가 아니다..: https://www.codeproject.com/Articles/1214409/Learn-YAML-in-five-minutes
* Configuring a workflow: https://help.github.com/en/actions/configuring-and-managing-workflows/configuring-a-workflow
* Events that trigger workflows: https://help.github.com/en/actions/reference/events-that-trigger-workflows#webhook-events