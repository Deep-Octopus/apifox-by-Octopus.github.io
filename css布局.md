元素一旦浮动，display属性将完全失效均可设置宽高，并且不会独占一行

父元素不设置宽高，会根据子元素来适应

相对定位的元素会占用原有物理位置

绝对定位的元素不会占用原有物理位置

以其他的元素为参考物移动指定距离的定位方式

关于绝对定位参考点：

1  如果元素 的外层元素有非static定位属性，则这个外层元素就成为该元素的定位参考点

2  如果元素的外层没有设置任何的position属性，那么该元素将寻找距离自己最近的其他的设置了position的外层元素座位参照物，必须为嵌套层    如果没有任何外层元素定位，则以body或者该页面

3  z-index 属性只支持定位元素

4  div元素默认display属性为block--》块元素

 	span元素默认为inline--》行内元素

​	none 隐藏对象     

​	inline  指定对象为内联元素   

​	inline-block  指定对象为内联块元素 有宽高												属性并且不会独占一行                

​	table-cell  指定对象为表格单元格    

​	flex  弹性盒子

5 div 有宽高属性并且独占一行

​    span 没有宽高属性不会独占一行

6  visibility 设置元素是否隐藏--》

​	visible 显示     hidden  隐藏

​	visibility 和display 的区别：前者值隐藏内容，但所占空间仍然占据，后者隐藏内容和占有空间

 7  外间距合并：（块级元素的垂直相邻上下边距）margin-top   margin-buttom 同级会合并（重叠）

​	父元素和子元素也会外间距合并，子元素写margin-top，父元素也会跟着动

​	 行内元素不会合并，包括浮动元素

​	解决方法——》加边框 border：color solid px

8  border-style  ——》

​	点状 dotted     实线   solid     双线   double

​	虚线（最起码3px   不然显示不下）dashed    	       无边框   none

9  padding和border 会记录在盒子模型的宽高之内，margin不会，元素实际大小=宽高+padding+border

10  设置怪异盒：box-sizing: border-box  

​	元素定义大小为多少就是多少，padding 和border 被包含进去了



1  flexbox：

首先指定那个是父容器（指定为按弹性布局display：flex），父容器包含多个“项目”，（每个div），项目是可以在父容器里面弹性布局的

​	其次还可以规定父容器中要怎么来显示里面的项目，如：是否换行、项目排列等



2  css3 新弹性盒：设置父元素是一个弹性盒，子元素会自动水平排列

​	（父容器）常用属性：

​	**justfy-content**：元素在横轴上的对齐方式		（flex-start 默认 开头

​						flex-end  结尾

​						center 中心

​						space-between 项目位于各行之间留有空白的容器内，zid排列留间距

​						space-around 项目位于各行之前、之间、之后都留有空白的容器内）

​		**align-items:**纵轴对齐方式

（stretch 默认，项目被拉伸以适应容器

​	center  项目位于容器中央

​	flex-start 项目位于容器开头

​	flex-end 项目位于容器结尾）

​	**flex-wrap：**让弹性盒在必要时拆行

​		nowrap  默认 不拆行

​		wrap ：规定灵活的项目在必要的时候拆行     wrap-reverse：同上，但是相反顺序

​		inherit    initial

​		子元素常用属性：

​		**flex-grow**：number；——规定该子元素占有的等分（其实就是将父元素的空间按照里面的子元素所占的比例分配一下）

​	**flex-dirction**：设置子元素垂直布局 取值（column）