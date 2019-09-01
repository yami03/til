# Tip

helper.js를 연결한건 app.js에서 일어난 일이다.

---

```js
app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.flashes = req.flash();
  res.locals.user = req.user || null;
  res.locals.currentPath = req.path;
  next();
});
```

처음에 router 연습해보기

---

```js
router.get('/', (req, res) => {
  const wes = { name: 'wes', age: 100, cool: true};
  // res.send('Hey! It works!');
  // res.json(wes);
  // res.send(req.query.name);
  // app의 26번째 27번째 줄과 관련있다.
  // res.json(req.query);

  // 1. it needs a name of a template to render out.
  // App의 20번째 21번째 줄 때문에 가능하다.
  res.render('hello', {
    name: 'wes',
    dog: req.query.dog,
    title: 'I love food',
  });
});
```

```js
router.get('/reverse/:name', (req, res) => {
  // res.send('it works!');
  // res.send(req.params.name);

  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});
```

set cookie

---

```js
app.use(cookieParser());
```

```js
exports.myMiddleware = (req, res, next) => {
  req.name = 'Wes';
  res.cookie('name', 'Wes is cool', { maxAge: 9000000 });
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};
```

mixin

---

views/editStore.pug

```pug
extends layout

include mixins/_storeForm

block content
  .innder
    h2= title
    +storeForm({name: 'Tim Hortons'})

```

mixin/_storeForm.pug

```pug
mixin storeForm(store = {})
  p It works! #{store.name}
```

