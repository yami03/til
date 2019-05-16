# trackClicksEx function error

case: trackClicksEx라는 더이상 사용하지 않는 함수가 없는 변수를 호출해 error를 뿜고 있었다.
운영하던 사이트의 히스토리가 없어서 trackClicksEx를 삭제하진 않고 빈 function(){} 으로 return

## solution

```js
// 빈 객체의 타입 가드(TypeError 방지 스크립트)
// @대상:  s, trackClicksEx
(function(window) {
    var REQUIRED_GLOBAL_VARS = {
        s: 'object',
        trackClicksEx: 'function'
    };

    var k, v;

    for (k in REQUIRED_GLOBAL_VARS) {
        v = REQUIRED_GLOBAL_VARS[k];

        fillBlankObject(k, v);
    }

    // window 네임스페이스에서 주어진 `key`에 대한 값이 정의되지 않았을 경우
    // `type`에 맞게 빈 객체 또는 함수를 생성합니다.
    // @param {string} key -- 해당 전역 변수의 이름
    // @param {string} type -- 해당 전역 변수의 타입 (기본값: 'object')
    function fillBlankObject(key, type) {
        type = type || 'object';

        // key가 주어지지 않을 경우 스킵
        if (!key) {
            return;
        }

        // 필요한 전역 변수가 정의되어 있지 않으면
        if (typeof window[key] === 'undefined') {
			window[key] = createEmptyTemp(type);
        }
    }

    function createEmptyTemp(type) {
		type = type.toLowerCase();

        switch (type) {
            case 'function': 
            	return function() {};
            break;

            case 'array':
                return [];
            break;

            case 'object':
                return {};
            break;

            case 'string':
                return '';
            break;

            case 'number':
        		return 0;
            break;

            default:
            	return {};
            break;
        }
    }
})(window);
```



### type of는 왜?

```js
// 필요한 전역 변수가 정의되어 있지 않으면
if (typeof window[key] === 'undefined') {
    window[key] = createEmptyTemp(type);
}
```

typeof를 쓴 이유는.. 

```js
var foo;

if (foo === undefined) alert();
```

이렇게 쓸 경우 별다른 문제는 없다. 하지만

```js
var foo;

if (bar === undefined) alert();

// 삐빅 에러
// ReferenceError: bar is not defined
```

**이런 에러를 방지하고자 type of를 쓰자**

