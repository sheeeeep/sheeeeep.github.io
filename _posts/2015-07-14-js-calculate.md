---
layout: post
title:  "运算原则"
categories: JavaScript
---

## 数据类型

### 简单数据类型（5）

```
boolean
number
string
undefined
null
```

### 复杂数据类型Object

常见的有Array，String等


### 类型的判断

```typeof``` 返回值是一个字符串来说明运算数的类型, number,boolean,string,function,object,undefined

``` instanceof``` 用于判断一个变量是否某个对象的实例

```
if(!Array.isArray){
  Array.isArray =function(arg){
	  returnObject.prototype.toString.call(arg)==='[object Array]';
  }
}
```

## Number(...)

```
Number('a') = NaN
Number('5') = 5
Number(Boolean) = 1/0
Number(null) = 0
Number(undefined) = 0

```

## 乘法隐性转换原则

```
number * number 
[] * NaN = NaN
Infinity * 0 = NaN
```

## 除法隐性转换原则

```
number / number 
[] / NaN = NaN
Infinity / 0 = NaN
0/0 = NaN
```

## 取余

## 无bug四则运算 

### 简陋版做法
将计算结果：

```
result.toFixed(3) * 1000 / 1000;
```

### 普通版做法
```
function numAdd(num1/*:String*/, num2/*:String*/) {
    var baseNum, baseNum1, baseNum2;
    try {
        baseNum1 = num1.split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
};
```

