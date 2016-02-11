---
layout: post_page
title: DeLorean
---

# position

position有五个属性：

 - static
 - relative
 - absolute
 - fix
 - float
 
## static

默认属性，一般用于样式重置

## relative
 相对定位。相对于元素的原始位置偏移，偏移位置通过TRBL设置。
 
 占据原始位置，可能覆盖其它元素，通过z-index控制层叠次序
 
## absolute
 绝对定位。相对于距离最近的relative方式定位的父元素偏移，若无，则根据浏览器窗口位置偏移，偏移位置通过TRBL设置
 
 不占据原始位置，可能覆盖其它元素，通过z-index控制层叠次序
 
## fix
 
 固定定位，属性如其名。IE6不支持该定位，IE7有BUG
 
## float

 浮动定位。脱离文档流，并直到边缘碰到包含框的边缘或者浮动框