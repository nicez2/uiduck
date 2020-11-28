# uiduck
### The front-end table plug-in is powerful, supports front-end and back-end pagination, template syntax, and can access the three-party UI library. <br>
![]( https://ftp.bmp.ovh/imgs/2019/12/7ae8cdfa99340008.png )
* 1.Author：nicezz  email:hzdz163@163.com <br>
### Preparatory work
- Uiduck relies on jQuery
- Reference the above documents in the code
````
<link href="css/ uiduck.css " type="text/css" rel="stylesheet">
<link href="css/ table.css " type="text/css" rel="stylesheet">
<script language="Javascript" src="js/ uiduck.js "></script">
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
			url: "http://data.live.126.net/livechannel/sub/3.json",
			type: "POST",
			key: "sublives"
		},
		loading: {
			icon: "uiduck-loading-6"
		},
		page: true,
		pageOptions: {
			limit: 5,
			limits: ['5', '10', '15', '20', '25']
		},
		fieldOptions: [{
				index: true,
				title: "number"
			},
			{
				key: "cid",
				title: "ID"
			}, {
				key: "cname",
				title: "cname"
			},
			{
				key: "tid",
				title: "TID"
			}, {
				key: "tname",
				title: "				key: "tname",
"
			}
		]
	});
````
* The copyright of this program follows the principle of creative sharing. You can use, modify and release this program free of charge. Please indicate the original author