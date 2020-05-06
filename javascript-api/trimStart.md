# string.trimStart

`trimStart()` 메서드는 문자열 시작부분의 공백을 제거한다. `trimLeft()` 는 이 메서드의 별칭이다.

```js
const greeting = '   Hello world!   ';
greeting; // "   Hello world!   "
greeting.trimStart(); // "Hello world!   "
```

## Syntax

```js
str.trimStart();
str.trimLeft();
```

### Return value

호출된 문자열의 시작부분(왼쪽) 공백이 제거된 새로운 문자열이다.

## Description

`trimStart()`, `trimLeft()` 메서드는 왼쪽의 공백을 제거한 새로운 문자열을 반환한다. `trimLeft()` 또는 `trimStart()` 는 문자열 자체의 값에 영향을 끼치지 않는다. 

### Aliasing

`String.prototype.padStart` 처럼 함수의 일관성을 유지하기 위해 표준 메서드 이름은 `trimStart` 로 설정되었다.

그러나 웹의 호환성 측면에서 `trimLeft` 는 `trimStart` 의 별칭으로 남아 있다. 일부 엔진은 다음과 같이 해석한다.

```js
Strimg.prototype.trimLeft.name === 'trimStart';
```

## Examples 

### `trimStart()` 사용하기

```js
let str = '   foo   ';
str.length; // 9 

str = str.trimStart(); 
str.length; // 6
str; // 'foo   '
```

## Browser compatibility

IE 는 호환안됨

## Polyfill

```js
// https://github.com/FabioVergani/js-Polyfill_String-trimStart

(function(w){
  var STring=w.String, Proto=String.prototype;
  
  (function(o,p){
  	if(p in o?o[p]?false:true:true){
      var r=/^\s+/;
      o[p]=o.trimLeft||function(){
        return this.replace(r,'')
      }
    }
  })(Proto,'trimStart');
})(window);

/*
(w=>{
	const String=w.String, Proto=String.prototype;
	
	((o,p)=>{
		if(p in o?o[p]?false:true:true){
			const r=/^\s+/;
			o[p]=o.trimLeft||function(){
				return this.replace(r, '')
			}
		}
	})(Proto, 'trimStart');
})(window);
*/
```

