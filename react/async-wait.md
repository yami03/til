# async wait 사용하기

```js
  componentDidMount() {
    const getPostListAndTags = async () => {
      const postsData =
        fetch(getListUrl(this.state.numberOfLists, this.state.sortingBy, 0))
        .then(res => res.json())
        .then(listsData => listsData);

      const tagsPata =
        fetch('/api/v1/tags')
        .then(res => res.json())
        .then(tagsData => tagsData);

      const postsDataResult = await postsData;
      const tagsPataResult = await tagsPata;

      return [postsDataResult, tagsPataResult];
    }

    getPostListAndTags().then(results => {
      const [listsData, tagsData] = results;

      this.setState({
        listDataOfArticles: listsData.posts,
        dataOfTags: tagsData,
        nextPageIndex: 1,
      });
    });
  }
```

전체 소스는 이러하다.
병렬로 비동기 작업을 2개를 사용하기 위해 async wait 을 사용하였다.

```js
 componentDidMount() {
   const getPostListAndTags = async () => {
      const postsData = '비동기';

      const tagsPata = '비동기';

      const postsDataResult = await postsData;
      const tagsPataResult = await tagsPata;

      return [postsDataResult, tagsPataResult];
    }
 }
```

```js
const postsDataResult = await postsData;
const tagsPataResult = await tagsPata;
```

사용하였다.

```js
getPostListAndTags().then(results => {
  //do something
});
```

최종 원하는 작업은 함수 다음 then을 사용하여 작업하였다.

## 참고 예시

```js
async function parallel() {
  const wait1 = wait(500);
  const wait2 = wait(500);
  await wait1;
  await wait2;
  return "done!";
}
```

[참고 출처](https://developers.google.com/web/fundamentals/primers/async-functions?hl=ko)

