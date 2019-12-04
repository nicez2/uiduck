# uiduck
### 前端表格插件，功能强大，支持前后端分页，模板语法，可接入三方UI库。<br>
![](https://ftp.bmp.ovh/imgs/2019/12/7ae8cdfa99340008.png)
![](https://ftp.bmp.ovh/imgs/2019/12/b44e473a1c2ebb74.png)
![](https://ftp.bmp.ovh/imgs/2019/12/ceebedf81ad1ec32.png)

### [uiduck demo](http://118.24.149.105/demo.html)<br>

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
### 配置示例
````javascript
uiduck.setOptions({
		templateId: "table",
		url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
		loading: { icon: "uiduck-loading-1" },
		page: true,
		fieldOptions: [
			{
				index: true,
				title: "序号"
			},
			{
				key: "cid",
				title: "ID"
			}, {
				key: "cname",
				title: "类型"
			}, {
				key: "collectionId",
				title: "测试",
				type: "map",
				computed: {
					"0": "李白",
					"1": "杜甫",
					"2": "白居易",
					"3": "王安石"
				}
			}, {
				key: "icon",
				title: "图标",
				type: "image",
				width: "30px",
				height: "30px",
			}]
	});
````

 * Author:nicezz
 * E-mail:hzdz163@163.com
 * 本程序的版权遵循创作共用原则，你可以免费使用、修改、发布本程序，请注明原作者
 * The copyright of this program follows the principle of creative Commons, you can use,
 * modify and distribute this program for free, please indicate the original author.
 * github https://github.com/nicez2/uiduck 
 * uiduck MIT License By nicezz
