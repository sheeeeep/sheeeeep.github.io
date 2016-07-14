---
layout: post
title:  "客户端存储"
categories: JavaScript
---

>只应用来提高用户体验，不应用于存取敏感信息

## localStorage 和 sessionStorage

相同点：

- 都代表Storage对象
	- 用```.```读取设置
	- 用```delete```移除(IE8不支持)
- 相同的存取API
	- ```setItem(key, value)```
	- ```removeItem(key)```
	- ```clear()```
	- ```length```
	- ```key(number)```，遍历读取名值对
- 存储数据发生改变的时候会产生存储事件，可以用```addEventListner```捕获

不同点：

- 有效期：```localStorage```永久性，```sessionStorage```随着标签页或窗口的关闭消失
- 作用域：```localStorage```同协议同主机名同端口，```sessionStorage```同协议同主机名同端口同标签页

## cookie

cookie数据会自动的在浏览器和客户端中传输

- 有效期：会话期间，关闭浏览器丢失。可以通过```max-age```增加
- 作用域：同协议同主机同端口同文档路径。可以通过```domain```和```path```配置
- 安全：```secure```属性被设置为true时，只有HTTPS或其它安全协议连接时才传递它
- 存取：使用```encodeURIComponent```编码，```decodeURIComponent```解码
	- 保存：```document.cookie```设为一个键值对
	- 删除：```document.cookie```指定键设为一个任意值，```max-age```设为0
	- 读取：```document.cookie```用split分离出键值对，再分离键值

