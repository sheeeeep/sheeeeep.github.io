---
layout: post
title:  "【css】css布局简单总结"
categories: css
---

## 基础概念解释

### display

 每个元素都有一个默认的display属性，最常见的三个属性：
 
 - display:块级元素，会开始新的一行，并尽可能撑满容器
 - inline: 行内元素，
 - none: 隐藏元素，不保留空间（hidden会保留）
 

### 居中

```
#main {
  max-width: 600px;
  margin: 0 auto; 
}
```
元素会占据你所指定的宽度，然后剩余的宽度会一分为二成为左右外边距。

 - 使用max-width而不是width可以避免浏览器窗口过小产生的水平滚动条。

### 盒模型

盒模型包括：content , padding , border, margin

在计算盒子的尺寸时：

 - IE盒模型中，width = content + padding + border
 - W3C盒模型中，width = content
 
 为了使排版更加直观，解决方法：
 
 - 通过在文档头增加doctype可以指定使用W3C盒模型
 - 通过设置box-sizing（IE8+）可以指定盒子计算范围：
    - box-sizing : border-box , width = content + padding + border
    - box-sizing : padding-box , width = content + padding
    - box-sizing : content-box , width = content
    
 盒子3D模型，从上到下依次为：
 border, content+padding, bgi, bgc, margin

### css的定位机制

- 标准文档流
- 浮动
- 绝对定位

    
## position 布局

position的属性有static,relative,absolute,fix

 - 优点：
 - 缺点：
  
## 浮动布局

### 清除浮动的方法：

 - clear: ， 指明哪些边不应该挨着浮动框。
    使用场景：同层级元素，非浮动块给之前的浮动块留出垂直空间。这时候可以给非浮动块设置clear
 - overflow : auto 
    使用场景：父子元素，浮动子元素比非浮动父元素高，非浮动父元素无法被浮动子元素撑开，造成溢出。这时候可以给父元素设置overflow:auto；（为了支持IE6，加入zoom: 1;）

### 优劣：

 - 优点：
 - 缺点：

## 百分比布局：

 - 优点：
 - 缺点：当屏幕过小的时候，占百分比小的元素可能会变得过于狭窄难以阅读。

## 响应式布局：

### 概念

响应式布局是为了满足不同分辨率，不同尺寸设备屏幕的需求而诞生的。在过去，所有设备都展示相同的网页，这种体验非常差。
 
 - 优点： 各个设备都能得到最佳体验
 - 缺点： 兼容代码过多，工作量和加载速度都受到影响；判断未必精准
 
### 设计原则

 - 移动优先：初期就要考虑页面的多终端展示
 - 渐进增强：充分发挥硬件设备最大功能

### 实现方法：

 1. CSS3 - Media Query (最简单)
 2. 不支持MQ的时候，借助原生JS(成本高)
 3. 开源框架
 
#### Media Query

 - device-width, device-height ：屏幕宽高
 - width, heigth ：渲染宽高
 - orientation ：设备方向
 - resolution ： 设备分辨率
 
 通过以下代码，能够实现屏幕宽度在480以上和480以下时，渲染不同的css代码。
 
 ```
 <link type="text/css" rel="stylesheet" href="link.css" media="only screen and (max-width:480px)>
 <style>
 @media screen and (min-width:480px){
  //css style
 }
 </style>
 ```


在css中，通过@media控制不同宽度下，实现不同的css样式

### inline-block布局

使用inline-block可以比较简单的实现一些需要浮动来复杂实现的功能。

需要额外的代码让IE6和IE7支持 inline-block。
 
使用inline-block来布局，一般需要设置vertical-align : top和每列的宽度
 
### 多列布局

column-count 和 column-gap 可以非常简单的实现多列布局。

IE10+支持

### flex布局

IE9以下和safari不支持该属性。