---
layout: post
title:  "XSS和CSRF解读"
categories: 网络
---
## XSS跨站脚本(Cross-site scripting)

### XSS是什么
Html的注入、攻击者的输入没有经过严格的控制
攻击者的Html输入—>web程序—>进入数据库—>web程序—>用户浏览器

### 攻击手段和目的

**攻击手段**：被攻击者在浏览器中执行脚本—>收集来自被攻击者的数据—>作为参数提交—>记录在攻击者自己的服务器

**攻击目的**：

- 盗用 cookie
- 利用植入 Flash ，通过 crossdomain 权限设置进一步获取更高权限
- 以(被攻击)用户的身份执行一些管理动作，或执行一些一般的如发微博、加好友、发私信等
- 以受信任来源的身份请求一些平时不允许的操作，如进行不当的投票活动
- DDoS攻击

###漏洞的防御和利用

 - 将用户所提供的内容进行过滤：Node.js的node-validator
 - 使用HTTP头指定类型：输出的内容避免被作为HTML解析

## CSRF

###CSRF是什么
伪造请求，冒充用户在站内的正常操作。大多数网站是通过 cookie 等方式辨识用户身份，再予以授权，用户在本机(即拥有身份 cookie 的浏览器端)发起用户所不知道的请求

##攻击手段

 1. 登录受信任网站A，并在本地生成Cookie
 2. 在不登出A的情况下，访问危险网站B

示例1：

银行转账url：```http://www.mybank.com/Transfer.php?toBankId=11&money=1000```
危险网站：```<img src=http://www.mybank.com/Transfer.php?toBankId=11&money=1000> ```

示例2：

银行：使用post请求

```
function steal(){
	iframe = document.frames["steal"];
	//iframe.document.Submit("transfer");
}
<form method="POST" name="transfer"　action="http://www.myBank.com/Transfer.php">
	//<input type="hidden" name="toBankId" value="11" />
	//<input type="hidden" name="money" value="1000" />
</form>
```

##如何防御

###请求令牌
服务器端要以某种策略生成随机字符串，作为令牌(token)，保存在 Session；
页面把该令牌以隐藏域一类的形式，与其他信息一并发出；
接收到令牌与Session 中的令牌比较一致的时候才处理请求，完成后清理session中的值；
请求令牌的方法在理论上是可破解的，破解方式是解析来源页面的文本，获取令牌内容；
每个页面的请求令牌都应该放在独立的 Session Key 中；

###使用验证码
一定记得销毁；

###尽量提高破解难度
目前防御 CSRF 的诸多方法还没几个能彻底无解的；