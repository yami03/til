# Database Schema Design

## SQL (Structured Query Language)

* 데이터베이스자체를 말하는게 아니라 데이터베이스와 상호 작용하는 데 사용 하는 쿼리 언어를 말한다.
* 테이블 형식
* CPU, RAM 또는 SSD를 늘려 단일 서버의로드를 늘릴 수 있습니다.
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
*  구조화되지 않은 데이터에 대한 동적 스키마

