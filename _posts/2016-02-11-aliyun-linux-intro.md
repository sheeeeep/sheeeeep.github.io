---
layout: post
title:  "【教程】阿里云linux服务器搭建教程：java+maven+meteor+git+es"
categories: Tutorial
---

#### 1. 安装xshell,登陆
#### 2. 安装jdk  

1. 下载jdk:http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html
2. 通过rz上传到服务器
3. 解压：【tar -zxvf jdk-8u40-linux-x64.tar.gz  -C /usr/local/src/】
4. 设置环境变量：
  【vim /root/.bash_profile】
  输入以下内容（i:进入编辑模式，esc退出编辑模式，:wq保存退出）
  JAVA_HOME=/usr/local/src/jdk1.8.0_40
  export JAVA_HOME
  PATH=$PATH:$JAVA_HOME/bin
  export PATH
  CLASSPATH=.:$JAVA_HOME/lib
  export CLASSPATH
5. 使环境变量生效。
  【source /root/.bash_profile】
6. 验证环境
  【java -version】
  
#### 3. 安装maven

1. 下载：【wget http://mirrors.cnnic.cn/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.tar.gz】
2. 解压：【tar -zxvf apache-maven-3.3.9-bin.tar.gz  -C /usr/local/src/】
3. 配置：
  【vim /etc/profile】
  在文件最后添加：
    \#set maven environment
    M2_HOME=/usr/local/apache-maven-3.3.9
    export MAVEN_OPTS="-Xms256m -Xmx512m"
    export PATH=$M2_HOME/bin:$PATH
4. 验证：【 mvn --version】

#### 4. 安装meteor
  【curl https://install.meteor.com/ | sh】
  
#### 5.  安装git

1. 【apt-get install git】
2. pull 代码： 【git clone xxxxxxxxxx】
    
#### 6. 安装es

1. 安装npm:【apt-get install npm】
进入meteor工程所在文件夹
2. 安装elasticsearch:【npm install --save elasticsearch】
3. 安装elastic.js:【npm install --save elastic.js】
4. 安装fiber:【npm install fibers】
    
#### 7. 运行meteor java es

使用如下指令使得退出XShell后仍然保持进程运行:

+ meteor:
  【nohup  meteor &】
+ java:
    1. 进入java工程所在文件夹:【mvn install】
    2. 进入target：【nohup  java -jar writeCool.jar &】
+ es:
  【nohup  ./bin/elasticsearch &】
