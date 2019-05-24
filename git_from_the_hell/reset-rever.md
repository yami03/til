# reset

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

나는 1 commit 메시지를 썼을때로 돌리고 싶다. 

```sh
git reset 8617324471f8df5dc36e62c20e82609841745c8f --hard

git log
```

```sh
Author: sla <uouo33@naver.com>
Date:   Wed May 22 18:40:05 2019 +0900

    1
```

원하던 상태로 돌아갔다.

**git 에서는 어떠한 정보도 삭제하지 않는다. **

버린거 같지만 실제로 남아 있고, 우리눈에 보이지 않는거다.

원격저장소에서 협업을 하게 되면, 공유한 이후 절대로 **reset을 하면 안된다.**

# revert

```sh
git revert
```

커밋을 휙 날리는게 아니라, 커밋을 취소하면서 새로운 버전을 생성하는거다.

### git 사용은 

> 버전을 생성한다, 버전과 버전 사이의 차이점을 확인하는게 중요한거다..  

