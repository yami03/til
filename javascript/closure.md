# closure

내부함수가 외부함수의 맥락(context)에 접근할 수 있는 것 
어떤 데이터(어휘적 환경)과 그 데이터를 조작하는 함수를 연관시켜주기 때문에 유용하다.
이것은 객체가 어떤 데이터와 (그 객체의 속성) 하나 혹은 그 이상의 메소드들을 연관시킨다는 점에서 객체지향 프로그래밍과 분명히 같은 맥락에 있다.([MDN참조](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures>))



## 내부함수와 외부함수
```js
function outter(){
	function inner(){
		var title = 'coding everybody';
		console.log(title);
	}
	inner();
}
outter();
```
이렇게 쓰는 경우는 주로 outter이라는 함수가 있는데 이 안에서 inner라는 함수를 쓴다. 만약 이 함수를 outter 바깥에 정의한다면 응집성이 떨어지기 때문에 outter 안에 정의한다. 

여기서 `주목`할점
`title` 이라는 변수는 외부함수에 정의되어 있는 지역변수이다.
inner이라는 함수는 `title`이라는 변수를 사용했을 때 inner안에 title이라는 지역변수가 존재하지 않는다면,  자바스크립트는 inner라는 함수를 포함하고 있는 바깥쪽 함수에서 title이라는 변수를 찾는다! 

>내부함수에서 외부함수에 있는 지역변수에 접근 할 수 있다. 

## 외부함수의 실행이 끝나도 내부함수가 외부함수 변수에 접근할 수 있다.
```js
function outter(){
	var title = 'coding everybody';
	return function(){
		console.log(title);
	}
}
inner = outter();
inner();
```

inner라는 변수에 outter()를 담는것은 return다음 값을 담는 거와 마찬가지.
여기서 이상하게 생각할 점은 outter()라는걸 실행 후(return한 후) `외부함수가 종료` inner에 넣어줬는데.. `inner()를 또 실행 할 수 있다`는 점이 특이점이다.

> inner()만 실행해도 외부함수는 죽었지만 외부변수인 title에 접근이 가능하다.

## Private variable

소프트웨어가 커지는 과정에서 어떠한 정보가 있을 때,  그 정보를 아무나 수정하는 것을 방지하기 위한 것.

```js
function factory_movie(title){
	return {
		get_title: function(){
			return title;
		},
		set_title: function(_title){
			title = _title;
		}
	}
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
console.log(ghost.get_title());
console.log(matrix.get_title());
```

객체를 리턴하는 함수에 그 객체엔 2개의 메소드가 있다.
get_title과 set_title은 내부 함수다. 

> 내부함수가 소속된 외부함수의 지역변수에 접근 할 수 있다.

title이라는 외부변수의 함수에 담긴값은 서로 다르다.

```js
function factory_movie(title){
	return {
		get_title: function(){
			return title;
		},
		set_title: function(_title){
			title = _title;
		}
	}
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
console.log(ghost.get_title());
console.log(matrix.get_title());

ghost.set_title('공각기동대');
console.log(ghost.get_title());
console.log(matrix.get_title());
```

2개의 객체를 만들었고, 그것들이 실행되는 맥락(context)
그 시점에 외부함수의 지역변수에 접근 할 수 있었고, 그 지역변수는 유지가 되고 있다.
ghost.set_title('공각기동대')를 한다는건 ghost의 title만 바꾸는 것이지 matrix에는 어떠한 영향도 미치지 않는다.  

이 코드에서 확인 할 수 있는 `private variable`은 무엇인가?
get_title과 set_title은 언제든지 접근가능한 메소드다. 오픈되어 있다. 
그러나, get_title과 set_title이 내부적으로 사용하는 변수는 외부함수의 지역변수인 title을 사용하고 있다. 

> 하지만 외부함수의 지역변수는 외부함수가 리턴했을 때 함수자체는 생이 마감되었기 때문에 지역변수는 내부함수를 통해서만 접근할 수 있다.

### 자주있는 실수 코드

```js
var arr = [];
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
```

for문을 이용해 배열에 for문을 담고 싶다! 하지만,

출력결과 5만 5번 찍힌다. i의 값이 function의 외부변수의 값이 아니기 때문이다??
근데 왜? 5는 담길까..? 

### 수정 코드

```js
var arr = [];
for(var i = 0; i < 5; i++){
    arr[i] = function(id){
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}
```

이전 return i를 함수를 내부함수로 정의되도록 외부함수를 만들고 외부함수의 지역변수의 값을 내부함수가 참조하도록 한다.

외부함수는 즉시 실행하도록 코드를 짜고 그 인자값으로 i를 준다. 매개변수는 지역변수와 똑같은 효과를 낸다.