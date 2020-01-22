# Database Schema Design

## SQL (Structured Query Language)

* 데이터베이스자체를 말하는게 아니라 데이터베이스와 상호 작용하는 데 사용 하는 쿼리 언어를 말한다.
* 테이블 형식
* 대부분의 경우, SQL 데이터베이스는 수직확장이 가능하기때문에 CPU, RAM, SSD와같은 것을 증가시킴
* 사전 정의 된 스키마
* 중복되는 데이터가 없다.



## NoSQL (Not only SQL)

* 비관계 데이터베이스
* 키 value, 문서, 컬럼바 및 그래프 형식을 포함한 다양한 데이터 모델을 수용할 수 있는 데이터베이스 설계에 대한 접근방식이다.
  * key - value : 에어로스파이크(Aerospike), Riak
  * Column Family: Cassandra
  * Document: MongoDB
  * Graph: Neo4j, InfiniteGraph
  * Column Family: HBase
* 반면에 NoSQL 데이터베이스는 수평 적으로 확장 가능합니다. 즉, 데이터베이스에 서버를 추가하기 만하면 더 많은 트래픽을 처리 할 수 있습니다.
* 이러한 차이는 같은 건물에 층을 늘리는 것과, 건물 옆에 건물을 새로 추가하는 차이와 같습니다.
*  구조화되지 않은 데이터에 대한 동적 스키마

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

