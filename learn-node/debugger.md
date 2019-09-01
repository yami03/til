# debugger

wesbos의 learn node를 따라하면서 했던 debugger내용

## env파일

---

### error: Password contains an illegal unescaped character

---

```env
DATABASE=mongodb+srv://seula:<password>@dang-thats-delicious-a74lj.mongodb.net/test?retryWrites=true&w=majority
```

### <, > 이 부호를 그대로 둔 죄

```env
DATABASE=mongodb+srv://seula:password@dang-thats-delicious-a74lj.mongodb.net/test?retryWrites=true&w=majority
```

<, > 빼니 에러가 사라짐

### error: mongodb.net closed

---

**Network Access**에서 새로운 ip를 추가하였다.

### error: cyclic dependency detected

---

```env
DATABASE=mongodb+srv://seula:password@dang-thats-delicious-a74lj.mongodb.net/test
```

물음표 이후의 내용은 지웠다.