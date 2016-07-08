---
layout: post
title:  "WebSocket详解"
categories: 网络
---

> 本文根据RFC6455总结而成

## 0 概述 What & Why

### 什么是WebSocket？

WebSocket是一个基于TCP Socket的通信协议，它能够实现从客户端和服务器的双向通信。

### 为什么要用WebSocket

1. 我们需要双向通信

众所周知，HTTP协议是一种一问一答的模式，双向通信是指，学生（客户端）没有发出问题（发送请求）的时候，老师（服务端）能够主动的向他传授知识（发送信息）。

在即时通信和游戏应用中常常有需要双向通信的场景。

2.  当前的双向通信机制不完善

实现双向通信的方案中，除了WebSocket，还有Commet，能够让信息近乎实时的推送到页面上，通过长轮询和流实现，在《JavaScript高级程序设计》21.5.3节有介绍。

这样的做的缺点是：

- 服务器为每个客户端使用多个TCP连接，一个用于向客户端发送响应，一个用于接收请求。
- 开销较大，因为每次传递的消息都有一个HTTP头信息
- 客户端要维护一个传入连接和传出连接的映射跟踪服务端的响应。

而WebSocket协议使用单个TCP连接提供双向传输，它的出现是为了替代当前的HTTP轮询技术。

出于兼容性的考虑，WebSocket在现有的HTTP设施的基础上解决双向通信的问题。

## 1 WebSocket的通信过程

客户端和服务端首先进行握手，握手成功后开始传送数据。

握手的过程通过发送一个升级版的HTTP请求-响应进行。

数据由多个帧组成。数据传送的通道是单独的、双向的。

### 握手

握手的目标是为了兼容基于HTTP的服务器软件和中间件，以便单个端口既可以用于HTTP客户端也可以用于WebSocket客户端与服务端通信。

客户端握手：
```
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Origin: http://example.com
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
```
可以看做是HTTP请求的升级版。

字段```Upgrade: websocket```和```Connection: Upgrade```表明要服务器使用WebSocket进行通信
字段```Sec-WebSocket-Key```提供一个key向服务端证明这是一个WebSocket请求
字段```Sec-WebSocket-Protocol```表示客户端接受的子协议
字段```|Sec-WebSocket-Extensions```表示客户端支持的扩展列表

服务端握手：
```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Protocol: chat
```
可以看做是HTTP响应的升级版。

101 以外的任何状态码表示 WebSocket 握手没有完成
字段```Upgrade: websocket```和```Connection: Upgrade```表明服务器已经将HTTP协议升级为WebSocket协议。
字段```Sec-WebSocket-Accept```是对客户端握手中字段```Sec-WebSocket-Key```的回应，是该值和预定义的GUID的散列。

客户端对服务端握手进行检查，如果```Sec-WebSocket-Accept```不是期望值、头字段缺失、 HTTP 状态码不是 101，则连接将不能建立。

### 挥手

服务端和客户端都能发送一个控制帧来进行挥手。

发送一个控制帧之后，表示连接将被关闭，一个节点不会发送任何更多的数据。

接收到一个控制帧之后，表示连接将被关闭，一个节点会丢弃收到的任何更多的数据。

挥手的目的是为了完成TCP四次挥手。

### 数据传送
数据由多个帧组成，帧有不同的类型：控制帧、文本数据帧、二进制数据帧。

>一次面试的时候，面试官问我WebSocket协议的原理，让我陷入了一个死胡同，不停地思考是怎样实现双向通信的。其实这不是一个问题啊。通信，就是发送数据，不管是HTTP还是WebSocket，都是数据交给TCP协议处理，TCP交给IP协议处理，一步步到达目的地。双向，只是一种约定。以前我们约定客户端和服务器一问一答来进行通信，现在我们约定可以自由通话了，支持WebSocket协议的客户端和服务端就是实现了这样的规范，仅此而已，没有更高深的东西了。

## WebSocket的安全简介

HTML5限制了Web Socket可以使用的端口

僵尸网络（一到多的连接）

