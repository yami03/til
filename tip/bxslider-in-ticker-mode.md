# BxSlider로 텍스트 흐르는 효과 만들기

![예시 이미지](C:\Users\Administrator\Desktop\study\til\tip\images\ezgif.com-crop.gif)

[예시 사이트 보러가기](<https://www.ssfshop.com/special/45059/view?brndShopId=8SBSS&brandShopNo=BDMA07A01&leftBrandNM=8SECONDS_8SBSS&&utag=ref_tpl:11108$ref_cnr:10771$ref_br:8SBSS$set:1$dpos:1>)

ssfshop 사이트의 이벤트 페이지 예시이다. 
이전에 직장동료가 이런효과에 대해 물어봤는데 경험이 없다보니 대답해 주지 못했던게 떠올랐다. 
우연히 본 사이트에 발견하여 소스를 파보았다. 

## 소스 살펴 보기

**html**

```html
<div class="slideBox02">
    	<ul class="slide02">
            <li>
                <img src="http://img.ssfshop.com/display/html/DSP_CTGRY/20190531/ES_190529_SuperSale_Main_ticker_1.jpg" alt="" class="img" border="0" />
            </li>
    </ul>
</div>
```

**css**

```css
.slideBox02{position:relative; width:1009px; z-index:5;}
```

이미지의 크기는 width:1010px; 이고
감싸고 있는 slideBox02는 width:1009px; 로 1px이 작게 만들어져 있다.

**js**

```js
$(document).ready(function(){
    $('.slide02').bxSlider({
        speed: 20000,
        ticker: true
    });   
});
```

힌트는 BxSlider의 옵션인 `ticker` 였다.



## BxSlider Options 살펴보기

**General**

| Name                           | Default | Description                                                  |
| ------------------------------ | ------- | ------------------------------------------------------------ |
| **ticker**<br />*boolean*      | false   | Use slider in ticker mode (similar to a news ticker)         |
| **tickerHover**<br />*boolean* | false   | Ticker will pause when mouse hovers over slider. Note: this functionality does NOT work if using CSS transitions! |

ticker모드의 두가지 기능을 살펴 볼 수 있다.

1. ticker - 뉴스처럼 흐르는 ticker mode를 설정할 수 있다.
2. ticker - mouse를 올렸을 때 멈출 수 있다. 그러나 ccs 효과를 이용해 전환하는 경우 멈출 수 없다.

## codepen 작업

[codepen에서 확인하기](<https://codepen.io/yami03/pen/qzOMxd>)

[다른 codepen 예시](<https://codepen.io/krisha23/pen/JEgNGr>)

흠 직접 만들어 봤을 때와 다른 예시를 보면 첫번째로 돌아오면서 튕김이 있는데 
정확한 컨텐츠 사이즈를 잡고 1px를 작게 잡으면 효과가 있지 않을까 한다. 