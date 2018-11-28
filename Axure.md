# Axure入门(本次入门基于axure8.0版本)
## Axure下载与安装
[下载axure安装包](https://www.axure.com.cn/3510/)

![下载axure](https://github.com/yansen-git/operation/blob/master/axure_imgs/1.png)

[下载axure汉化包](https://www.axure.com.cn/2616/)

  下载axure汉化包，解压后，复制lang文件夹，然后找到axure软件的安装目录，粘贴进去即可

![下载axure汉化包](https://github.com/yansen-git/operation/blob/master/axure_imgs/2.png)

## Axure页面的使用

打开axure软件，会发现软件已汉化成功，8.0可以免费使用30天，所以可以购买授权码用以激活，授权码授权如下图

![授权码](https://github.com/yansen-git/operation/blob/master/axure_imgs/3.png)

![授权码](https://github.com/yansen-git/operation/blob/master/axure_imgs/4.png)

- 页面上面为软件的一些属性设置，比如字体大小，背景颜色，居中，居左，居右等等
- 页面左侧分为三个部分，分别为页面，元件库和母板，顾名思义，页面就是我们新建页面，删除页面，新建子页面，上移下移，重命名等等，
其中有一个生成页面结构的流程图，选中当前最上层级页面点击生成流程图，会生成整个页面结构的流程图；
元件库就是axure的核心，自带的很多现成的组件，原型可以理解为这些元件的组合，就像堆积木一个，不同的堆法会形成不同的样式，同理，不同元件的组合就是不同的页面效果；；
母版这块可以理解为类似于代码里面的公共代码，例如，我也写画一个页面的header和footer，可能好多个页面都是这个相同的header和footer，我们就可以把header和footer在母版
里面拿元件画出来
- 页面右侧分为两个部分，分别为检视和概要，检视这里的功能对应着我们队元件的操作，比如设置属性，添加事件以及添加对应元件的文件说明等等，
可以作用于当前页面，可以作用于某一个单独的元件；
概要说白了就是我们当前页面原型的所有元件的名称目录

![页面的操作](https://github.com/yansen-git/operation/blob/master/axure_imgs/5.png)

## 熟悉axure的元件库

先登录慕课网，点击登录，截图登录图，粘贴到本地，然后本地复制在粘贴进入axure软件里面

![慕课登录](https://github.com/yansen-git/operation/blob/master/axure_imgs/6.png)

我们看截取的慕课登录的图，根据图可以选取对应的元件，比如，最外边的框和里面的框就是两个矩形元件，点击左键拖动到content区域，
点击当前元件，会出现好多个小圆点，我们可以拖动元件的位置，可以放大缩小元件，如果不想拖动，可以在右上角靠左的位置，通过设置固定的w,h,x,y来设置，
分别代表元件的宽，高，x轴坐标，y轴坐标，图下所示可以设置文字的大小，字体，字体属性，字体颜色等等

![字体设置](https://github.com/yansen-git/operation/blob/master/axure_imgs/7.png)

在这里设置填充色(也就是背景色)

![字体设置](https://github.com/yansen-git/operation/blob/master/axure_imgs/8.png)

在这里设置线段的颜色

![字体设置](https://github.com/yansen-git/operation/blob/master/axure_imgs/9.png)

## Axure元件交互样式设置和页面属性的修改

首先从左侧拖拽一个按钮，点击按钮，看右侧的检视，分别有属性，说明和样式，点击样式，可以设置初始的样式，例如阴影度，透明度，字体等等，在然后点击属性，可以在
交互样式里面设置鼠标悬停，鼠标按下，选中，禁用后的页面效果，可以设置元件提示(等同于html的title属性)

![样式](https://github.com/yansen-git/operation/blob/master/axure_imgs/10.png)

![交互样式](https://github.com/yansen-git/operation/blob/master/axure_imgs/11.png)

## Axure钢笔工具
### 绘制路径
- 封闭路径：结束锚点与开始锚点重合
- 开放路径：双击左键或点击esc
- 绘制中按alt：暂停或继续绘制
- 直线转曲线：按住左键拖动
- 拖动曲线杆，调整曲线弯度
### 编辑路径
- 编辑路径：点击图形激活，拖动锚点编辑
- 选择更多锚点：按住shift选
- 直曲切换：双击锚点，右键选择直或曲
- 按住shift：拖动曲线杆，单变调整
### 锚点增删
- 点击路径：建立新锚点
- 删除锚点： 选择锚点，del删除或右键选择删除

![钢笔工具](https://github.com/yansen-git/operation/blob/master/axure_imgs/12.png)

## Axure布尔运算的使用
从左侧拖拽两个圆，分别填充不同的颜色，鼠标选中两个圆，在右侧可以进行布尔运算(注 ：每次选择最少两个元件)

![布尔运算](https://github.com/yansen-git/operation/blob/master/axure_imgs/13.png)

## Axure的发布与设置
软件顶部选择发布可以发布到axshare可以供别人在网上下载，页面发布生成html到本地

![axshare](https://github.com/yansen-git/operation/blob/master/axure_imgs/14.png)

![html](https://github.com/yansen-git/operation/blob/master/axure_imgs/15.png)

## Axure流程图与连接点
元件里面选择flow，里面都是流程图的元件，拖拽元件全部完成之后，顶部选择连接，把每个流程图连接起来

![流程图](https://github.com/yansen-git/operation/blob/master/axure_imgs/16.png)

## Axure交互
axure画出来的原型最终的目的不仅仅是静态页面还有交互的效果，具体事件的触发设置如下

![交互](https://github.com/yansen-git/operation/blob/master/axure_imgs/17.png)

![交互](https://github.com/yansen-git/operation/blob/master/axure_imgs/18.png)

![交互](https://github.com/yansen-git/operation/blob/master/axure_imgs/19.png)

















