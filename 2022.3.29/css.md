 # css知识补充；
1，box-sizing;border-box 怪异盒模型
作用：编写css样式时，加上box-sizing;border-box，使你在设置CSS宽高和内外边距时，它的值会自动运算，不会有多出来的宽度和高度，不会被外边距及内边距所撑大
2，rgba ---- 颜色透明标识  --- 取值范围为：0~1之间，0是完全透明，1是完全不透明
作用：在设置颜色透明度时使用它会更加方便，它和opacity区别于，opacity设置透明度时会连带着字体变透明，而rgba针对于背景颜色和图片的透明度。
3，max-width/height --- 最大宽/高度   min-width/height  ---- 最小宽/高度
作用：设置宽/高度时内容区会随着屏幕的大小自动缩放

# 作业知识总结：
   1、 html总结：label标签:关联作用，作用于把文字和单选框关联在一起，点击文字时可以选择
   2、 input type="reset" ，这里使用reset，译为把form表单里面的所有标签都设为初始状态
   
   css总结：
   1、outline: none;边框轮廓属性   把所有聚焦上去边框的样式去掉 
   注：outline:外边框，和border不同，outline只是用来显示，不占元素的实际宽度 */
   2、text-indent: 10px;  首行缩进
   3、 :focus ---伪元素 ，聚焦的样式，当鼠标聚焦发生改变
   4、 resize: none;  设置多行文本是否被用户改变尺寸
   5、 cursor: pointer;  鼠标移入提示
   6、 vertical-align: -1px;  使元素上下对齐方式
   7、z-index: 5px; 设置元素的堆叠顺序，仅设置定位图像时有用 
   8、::before 伪元素
   9、 background-position；  调整图片尺寸
   定位：
   1、position: fixed;可视区窗口定位
   1、position: absolute;绝对定位