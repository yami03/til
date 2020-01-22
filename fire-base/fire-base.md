# Firebase [.gitignore](../../../vanillacoding/frontend-test/.gitignore) 

1. Add project를 한다.
2.  [.gitignore](../../../vanillacoding/frontend-test/.gitignore) project 네임은 자유롭게 한다.
3. 구글 애널리스트 - Not right now

```
yarn add firebase
```

```js
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAG-clZlCxXW2CzCEgABkbPAUeuJxkkkzE",
  authDomain: "chats-simulator.firebaseapp.com",
  databaseURL: "https://chats-simulator.firebaseio.com",
  projectId: "chats-simulator",
  storageBucket: "",
  messagingSenderId: "372235716860",
  appId: "1:372235716860:web:9a6552b7cf2109ac"
};

const base = firebase.initializeApp(firebaseConfig);
```



1. 데이터베이스 만들기 클릭
2. start in test mode로 실행한다.
3. Cloud Firestore 위치

| 리전이름            | 리전설명 | 거리     |
| ------------------- | -------- | -------- |
| asia-south1         | 뭄바이   | 5,594 km |
| asia-east2          | 홍콩     | 2,088 km |
| asia-northeast1     | 도쿄     | 1,155 km |
| **asia-northeast2** | 오사카   | 829 km   |

가장 가까운 asia-northeast2(오사카)로 선택한다.

[docs 링크](https://firebase.google.com/docs/database/web/start?authuser=0)





const





 