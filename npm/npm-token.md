# NPM TOKEN 설정하기

token을 설정해야했던 이유는 private packages를 다운받기 위하여 필요했다. 

[npm docs 바로가기](https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow)

**1. ~/.npmrc 파일이 없다면 생성후 추가**

```
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
registry=https://registry.npmjs.org/
```

**2. ~/.profile와 ~/.zshrc(catalina)에 추가**

```js
export NPM_TOKEN="00000000-0000-0000-0000-000000000000"
```

`""`를 빼먹지 말자

`~/`나 `.env.local` 를 커밋하지 않도록 주의