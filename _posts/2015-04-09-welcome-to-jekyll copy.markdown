---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-04-09 11:23:32
categories: jekyll update
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

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
