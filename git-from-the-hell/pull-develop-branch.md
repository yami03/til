# develop branch 를 pull 하고 싶을때

상황 develop branch에서 새로운 test branch를 만들었다.
그러고 push하기전에 develop 브랜치가 push된걸 확인 
아무리 pull을 받아도 안받아진다.. 왜때문에.. 

​	

**--set-upstream-to=origin/<**branch**>**

```shell
git branch --set-upstream-to=origin/<develop> <test>
```

하고 pull 하니 드디어 develop branch에 있는 내용을 받을 수 있었다.
하지만 이대로 push하면 위험할거 같다.. 
자꾸 push를 origin/develop 으로 하라는 문구가 나오는데.. (안돼..)

**git branch --unset-upstream**

```shell
git branch --unset-upstream
```

휴.. 드디어 끊어낼 수 있었다.

**git push --set-upstream origin test**

```shell
git push --set-upstream origin <test>
```

push 끝

상황에 대한 파악은 git GUI를 통해 확인 하면서 git cli를 입력하여 실수를 방지할 수 있었다.

