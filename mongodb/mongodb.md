# MongoDB

## shell

직접 mongodb와 명령어날려서 작업하는것.
확인하거나, 

```shell
show dbs
```

내 컴퓨터에 있는 db종류들을 보여준다.

```shell
use test
```

```shell
show collections
```

```shell
db.articles.find()
```

```shell
db.articles.insert()
```

```shell
db.articles.find().pretty()
```

```shell
db.articles.remove({})
```

```shell
db.createCollection(name)
```

```shell
mongoimport --db dbName --collection collectionName --file fileName.json --jsonArray
```

```shell
db.collection.insertMany()
```

### ODM 과 ORM 차이

mongoose는 MongoDB 기반의 ODM이고
mysql ORM

## index

`mongodb performance`

```shell
db.collection.explain('executionStats')
```

디테일한 정보가 있다.
몇초 걸렸는지.

totalDocsExamined
시험된 총 문서 : 14개가 들어있다.

훑어봤다 전부.. 

```shell
db.students.createIndex({name: 1})
```

어떤 필드에 index를 걸고 싶은지 정한다.
1 
-1

내림차순 오름차순이라 말한다.

totalDocsExamined이 1이 된다.

뽷!

자료가 많으면

executionTimeMillisecond도 변경된다.
db가 기억해야하는게 많아진다.

자료를 추가할때마다 db가 인덱스를 정리해야한다.

내가 기능적으로 
찾을때 이름기준으로 **자주 찾는 경우**.


