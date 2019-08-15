# Hooks과  useEffect 사용해 보기

react과제에서 useEffect와 Hooks사용해 보기

## Hooks

Hooks는 react에서 새로 업데이트 된 내용이다.
`함수형 컴포넌트에서도 state와 setState`를 할 수 있다.

이런 기능이 추가된 이유는 점점 누구나 개발을 가능하게 하기 위해서다. `easy!`
class기반에서 react를 사용하게 되면 this와 constructor 개념이 필요하다.

하지만 함수형 컴포넌트에서는 class보다는 좀더 적은(?) 개념에서 쉽게 react를 사용할 수 있다.

**사용법**

---

```js
const [dataOfArticles, setDataOfArticles] = useState({});
const [totalCountOfPage, setTotalCountOfPage] = useState(0);
const [currentPageCount, setCurrentPageCount] = useState(0);
const [isDeleteArticle, setIsDeleteArticle] = useState(false);
```

`useState(0)`의 인자값으로 들어간 것은 초깃값이다.

state의 이름과 setstate명을 같이 지정한다.

**setState**

```js
setTotalCountOfPage(1);
```

setState하는 방법은 setState로 지정한 함수를 호출하고 인자로 변경하고 싶은값을 넣어준다.

## useEffect

함수형 컴포넌트에서 사용할 수 없는 라이프사이클이다.

```js
useEffect(() => {
  if(!listDataOfArticles.length) return;

  const findArticleData = listDataOfArticles.find(data => data.title === match.params.title);
  let articleId;
  try {
    articleId = findArticleData.id;
  }
  catch(err) {
    return onError(true);
  }
  const getPostData = async () => {
    console.log('b');
    const postData =
          fetch(`/api/v1/articles/${articleId}`)
    .then(res => res.json())
    .then(data => data);

    const commentsData =
          fetch(`/api/v1/articles/${articleId}/comments`)
    .then(res => res.json())
    .then(data => data);

    const postDataResult = await postData;
    const commentsDataResult = await commentsData;

    return [postDataResult, commentsDataResult];
  }

  getPostData().then(results => {
    const [ post, comment ] = results;
    setDataOfPost(post);
    setDataOfComments(comment);
  });
  return () => {
    onError(false);
  }
}, [listDataOfArticles]);
```

```js
useEffect(() => {
  ...
  getPostData().then(results => {
    const [ post, comment ] = results;
    setDataOfPost(post);
    setDataOfComments(comment);
  });
  return () => {
    onError(false);
  }
}, [listDataOfArticles]);
```

이렇게 사용할 수 있다. 두번째 인자에 넣어준건 `listDataOfArticles`무한루프에 걸리기 때문에 비교할 데이터를 넣어준다.