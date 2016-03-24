---
layout: post
title:  "WebSocket简介"
categories: 网络
---
# 目录

- 1 是什么
    - 1.1 协议规范
    - 1.2 补丁
        - 1.2.1 http连接
        - 1.2.2 websocket连接
    - 1.3 双向通信
        - 1.3.1 http实现双向通信
        - 1.3.2 websocket实现双向通信
- 2 怎么用
- 3 怎么样

# 1 是什么
	
WebSocket protocol 是HTML5提出的一种<b>协议规范</b>，也可以说是HTTP协议的一个<b>补丁</b>。它能实现浏览器与服务器之间的<b>双向通信</b>。

## 1.1 协议规范

websocket是一种全新的协议，协议名为"ws"。

一个http连接地址：http://**

一个websocket连接地址：ws://**。

## 1.2 补丁

### 1.2.1 http连接

http连接的特征是短连接，无状态。

一次http连接的生命周期是：一次 Request 对应一次 Response 。

HTTP1.1中有了keep-alive：在一个HTTP连接中，可以发送多个Request，接收多个Response。

但是，HTTP中永远一个request只能有一个response，且response只能被动发出。

### 1.2.2 websocket连接

相对http而言，websocket连接是持久化的协议。

要建立websocket连接，客户端首先向服务器发起一条特殊的http请求，服务器解析后生成应答到浏览器，这样子一个websocket连接就建立了，直到某一方关闭连接。

## 1.3 双向通信

双向通信是指客户端能够对服务器发起请求，服务器也能够主动向客户端推送信息。



### 1.3.1 http实现双向通信

- http轮询：浏览器隔个几秒就发送一次请求，询问服务器是否有新信息。
- long poll: 阻塞轮询。客户端发起连接后，直到有消息服务器才返回response。返回完之后，客户端再次建立连接，周而复始。

显然，ajax轮询需要服务器<b>速度快</b>，long poll需要服务器<b>并发能力强</b>。并且，HTTP还是一个<b>无状态</b>协议。

服务端通过dispatcher接受请求，交给不同的handler处理请求。通常dispatcher的速度是足够快的，但是handler的速度很慢。

轮询意味着dispatcher会经常打扰handler，影响handler的速度。

无状态意味着每次请求客户端都要发送身份信息，dispatcher每次都要识别客户。影响dispatcher的速度。

总结：http实现双向通信，有延迟，十分消耗资源

### 1.3.2 websocket实现双向通信

通过一次特殊的http请求建立起websocket连接后，服务端可以主动推送信息给客户端。

当websocket连接建立后，handler处理完信息通知dispatcher把数据返回，能够最大化的提高两者的工作效率。

# 2 怎么用

- 判断浏览器是否支持websocket : 支持WebSocket协议的客户端才能使用。
  - Chrome：version 4+
  - Firefox： version 4+
  - Internet Explorer：version 10+
  - Opera： version 10+
  - Safari：version 5+
  
 ```
 if ("WebSocket" in window){}
 ```
- 获取websocket接口

 ```
 var ws = new WebSocket(url);
 ```

- 建立连接，发送信息

 ```
  ws.onopen = function() { // 连接已经建立，通过send发送请求
    ws.send(message);
  };
 ```

- 获取信息

 ```
 ws.onmessage = function(evt) { // 获取服务端发送来的信息
    var message = evt.data;
 };
 ```
 
- 关闭连接 

 ```
  ws.onclose = function() { };
 ```

# 3 怎么样