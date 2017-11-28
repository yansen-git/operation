#em
---
- font-size大小是相对于父元素来说;

#rem
---
- element元素的font-size是相对于根元素来说;
- 如：
-	```style
		html{
			font-Size:20px;
		}
	```
- html的font-size等价于1rem;
- 所以当设计师给的图片大小为749*234时，定一个屏幕基准，宽度为375px，所以
-	```javascript
		宽/高(设计图) = 宽/高(基准)
		749/234 = 375/X(基准高度);
		X = 117.1562px;
	```
- 此时实际宽高为
- 	```javascript
		width = 375/20 = 18.75rem;
		height = 117.1562/20 = 5.8578rem;
	```
- 这次在分辨率375下图片已撑满全屏，但是手机的分辨率大小有很多，这样又出现了新的问题，其他分辨率没有占满或者多余;
- 所以解决方案是在不同分辨率下给予根元素不同的大小
- 	```javascript
		基准屏幕宽/基准屏幕fontSize = clientWidth/htmlFontSize;
		let w = document.documentElement.clientWidth;
		let htmlFontSize = document.documentElement.style.fontSize = 20*w/375+'px';
	```
