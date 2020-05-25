# 머지 후 branch 삭제하기 

## Delete Local Branch

```shell
git branch -d <branch_name>
```

### Delete Remote Branch

```shell
$ git push <remote_name> :<branch_name>
```

### remote 브랜치 clean up 하기
```shell
git remote prune origin
```

### 참고
https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-locally-and-remotely
https://memoming.com/37
https://mobicon.tistory.com/163
