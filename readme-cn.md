# uiduck
### 前端表格插件，功能强大，支持前后端分页，模板语法，可接入三方UI库。<br>
[![r8GglF.png](https://s3.ax1x.com/2020/12/17/r8GglF.png)](https://imgchr.com/i/r8GglF)

### [Demo](https://nicez2.github.io/uiduck/index.html)
### [English documents](https://github.com/nicez2/uiduck/blob/master/readme.md)<br>
### 准备工作
- uiduck依赖于JQuery
- 在代码中引用上述文件
````
<link href="css/uiduck.css" type="text/css" rel="stylesheet">
<link href="css/table.css" type="text/css" rel="stylesheet">
<script language="Javascript" src="js/uiduck.js"></script">
````
- 在代码中创建表格的DIV容器，并设置ID属性
````
<div id="table"></div">
````
### 使用说明
````javascript
var hello = new uiduck('hello', {
		templateId: "table",
		url: {
			url: "http://data.live.126.net/livechannel/sub/3.json",
			type: "POST",
			key: "sublives"
		},
		page: true,
		pageOptions: {
			limit: 5,
			limits: ['5', '10', '15', '20', '25']
		},
		fieldOptions: [{
				index: true,
				title: "序号"
			},
			{
				key: "cid",
				title: "ID"
			}, {
				key: "cname",
				title: "类型"
			},
			{
				key: "tid",
				title: "TID"
			}, {
				key: "tname",
				title: "节目名称"
			}
		]
	});
````
 * 本程序的版权遵循创作共用原则，你可以免费使用、修改、发布本程序，请注明原作者
