# uiduck
### The front-end table plug-in is powerful, supports front-end and back-end pagination, template syntax, and can access the three-party UI library. <br>
[![r8GglF.png](https://s3.ax1x.com/2020/12/17/r8GglF.png)](https://imgchr.com/i/r8GglF)
### [Demo](https://nicez2.github.io/uiduck/index.html)
### [中文文档](https://github.com/nicez2/uiduck/blob/master/readme-cn.md)<br>
 Author：nicezz  email:hzdz163@163.com <br>
### Preparatory work
- Uiduck relies on jQuery
- Reference the above documents in the code
````
<link href="css/uiduck.css " type="text/css" rel="stylesheet">
<link href="css/table.css " type="text/css" rel="stylesheet">
<script language="Javascript" src="js/uiduck.js "></script">
````
- Create a div container for the table in the code and set the ID attribute
````
<div id="table"></div">
````
### Instructions for use
````javascript
var hello = new uiduck('hello', {
		templateId: "table",
		url: {
			url: "http://rap2api.taobao.org/app/mock/251329/order/passList",
			type: "get",
			dataType: "json",
			limit: "pageSize",
			page: "pageNum",
			key: "data",
			total: "total"
		},
		page: true,
		pageOptions: {
			layout: ["total", , "prev", "next", "last"],
			dataType: "back"
		},
		fieldOptions: [{
			index: true,
			title: "index"
		}, {
			key: "name",
			title: "name"
		}, {
			key: "firstLetter",
			title: "firstLetter"
		}, {
			key: "showStatus",
			title: "showStatus",
			type: "map",
			computed: {
				1: "show",
				2: "hidden",
			}
		}, {
			key: "productCount",
			title: "productCount"
		}, {
			key: "productCommentCount",
			title: "productCommentCount"
		}, {
			key: "logo",
			title: "logo",
			type: "image",
			width: "20px",
			height: "20px"
		}]
	});
````
* The copyright of this program follows the principle of creative sharing. You can use, modify and release this program free of charge. Please indicate the original author
