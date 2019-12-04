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
### 配置示例
````javascript
uiduck.setOptions({
		templateId: "table",
		url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
		style: { size: "mini", stripe: false, highlight: true, tbClass: "uiduck-table" },
		topBar: { templateId: "search", kwLight: true },
		rightTool: { templateId: "barDemo", title: "操作", width: "100px" },
		//autoNext: { time: 3000, showPage: true },
		loading: { icon: "uiduck-loading-6" },
		page: true,
		pageOptions: { style: "", limit: 10, limits: ['5', '10', '15', '20', '25'], dataType: "front" },
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
			}, {
				key: "ename",
				title: "名称"
			},
			{
				key: "tid",
				title: "TID"
			}, {
				key: "tname",
				title: "节目名称"
			}]
	});
````
