# uiduck
### 前端表格插件，功能强大，支持前后端分页，模板语法，可接入三方UI库。<br>
![Image text](https://github.com/duzhen-cn/wini-os/blob/master/img/QQ%E6%88%AA%E5%9B%BE20181011143040.jpg)
![Image text](https://github.com/duzhen-cn/wini-os/blob/master/img/QQ%E6%88%AA%E5%9B%BE20181011143446.jpg)

### [uiduck demo](http://118.24.149.105//demo/index.html)<br>

* 1.Author：nicezz email:hzdz163@163.com<br>

### 准备工作
- uiduck依赖于JQuery
- 在代码中引用上述文件
````
<link href="css/uiduck.css" type="text/css" rel="stylesheet">
<link href="css/uiduck-extend-theme.css" type="text/css" rel="stylesheet">
<script language="Javascript" src="js/uiduck.js"></script">
````
- 在代码中创建表格的DIV容器，并设置ID属性
````
<div id="table"></div">
````
### 使用配置说明
- 通过调用uiduck.setOptions()完成初始化
