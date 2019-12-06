
/***
 * Author:nicezz
 * E-mail:hzdz163@163.com
 * Version:1.0.1
 * 本程序的版权遵循创作共用原则，你可以免费使用、修改、发布本程序，但此注释不可删除并请注明原作者
 * The copyright of this program follows the principle of creative Commons, you can use,
 * modify and distribute this program for free, but this annotation cannot be deleted,
 * please indicate the original author.
 * github https://github.com/nicez2/uiduck 
 * uiduck MIT License By https://www.uiduck.com 
 */
uiduck = {
    templateId: "",
    url: { url: "", type: "", data: {} },
    data: [],
    autoNext: { time: 2000, showPage: true },
    style: { size: "mini", stripe: false, tbClass: "", trClass: "", thClass: "", tdClass: "" },
    topBar: { templateId: "search", kwLight: true, kwSplite: false, kwSpliteList: [] },
    rightTool: { templateId: "", title: "", width: "" },
    loading: { icon: "loading", shade: false, shadeColor: "white" },
    language: { tag: "Chinese", options: [] },
    page: true,
    pageOptions: { style: "", limit: "", dataType: "back", limits: ['5', '10', '15', '20', '25', '30'], layout: ["total", "home", "prev", "next", "last", "set", "jump"], index: 0, count: 0 },
    fieldOptions: [],
    udKey: 'uiduck_' + (new Date()).valueOf(),
    setOptions: function (b) {
        console.clear();
        var refresh;
        if (b.templateId == undefined) {
            console.error("error! table's templateId is undefined")
        } else {
            uiduck.templateId = b.templateId
            $("#" + uiduck.templateId).html();
        }
        if (b.url == undefined) {
            uiduck.url = false;
            refresh = false;
        } else {
            uiduck.url = b.url;
            refresh = true;
        }
        if (b.dragbal == undefined) {
            uiduck.dragbal = false
        } else {
            uiduck.dragbal = b.dragbal
        }
        if (b.language == undefined) {
            var lan = (navigator.language || navigator.browserLanguage).toLowerCase();
            if (lan.indexOf('zh') >= 0) {
                uiduck.language.tag = 'Chinese'
            }
            else if (lan.indexOf('en') >= 0) {
                uiduck.language.tag = 'English'
            }
            else {
                uiduck.language.tag = 'English'
            }
        } else if (b.language.tag == 'Chinese') {
            uiduck.language.tag = 'Chinese'
        } else if (b.language.tag == 'English') {
            uiduck.language.tag = 'English'
        } else if (b.language.tag == 'Japanese') {
            uiduck.language.tag = 'Japanese'
        } else if (b.language.tag == 'French') {
            uiduck.language.tag = 'French'
        } else if (b.language.tag == 'Korean') {
            uiduck.language.tag = 'Korean'
        } else if (b.language.tag == 'Spanish') {
            uiduck.language.tag = 'Spanish'
        } else {
            uiduck.language.tag = 'English'
        }
        uiduck.language.options = uiduck.language(uiduck);
        if (b.style == undefined) {
            uiduck.style = { tbClass: "uiduck-table", trClass: "", thClass: "", tdClass: "" }
        } else {
            if (b.style.tbClass == undefined) {
                b.style.tbClass = 'uiduck-table';
            }
            if (b.style.trClass == undefined) {
                b.style.trClass = '';
            }
            if (b.style.thClass == undefined) {
                b.style.thClass = '';
            }
            if (b.style.tdClass == undefined) {
                b.style.tdClass = '';
            }
            uiduck.style = b.style
        }
        if (b.page == undefined) {
            uiduck.page = false
            uiduck.pageOptions = null
        } else if (b.page == false) {
            uiduck.page = false;
        } else if (b.page == true) {
            uiduck.page = true;
            if (b.pageOptions == undefined) {
                b.pageOptions = {}
            }
            uiduck.pageOptions = b.pageOptions
        }
        if (b.pageOptions.layout == undefined) {
            uiduck.pageOptions.layout = ["total", "home", "prev", "next", "last", "set", "jump"];
        } else {
            uiduck.pageOptions.layout = b.pageOptions.layout;
        }
        if (b.pageOptions.limits == undefined) {
            uiduck.pageOptions.limits = ['5', '10', '15', '20', '25', '30'];
        } else {
            uiduck.pageOptions.limits = b.pageOptions.limits;
        }
        if (b.pageOptions.pageClass == undefined) {
            uiduck.pageOptions.pageClass = "uiduck-page-its";
        } else {
            uiduck.pageOptions.pageClass = b.pageOptions.pageClass;
        }
        if (b.pageOptions.emClass == undefined) {
            uiduck.pageOptions.emClass = 'uiduck-page-em';
        } else {
            uiduck.pageOptions.emClass = b.pageOptions.emClass;
        }
        if (b.pageOptions.dataType == undefined) {
            uiduck.pageOptions.dataType = 'front';
        } else {
            uiduck.pageOptions.dataType = b.pageOptions.dataType;
        }
        if (b.pageOptions.limit == undefined) {
            uiduck.pageOptions.limit = 5;
        } else {
            uiduck.pageOptions.limit = b.pageOptions.limit;
        }
        if (b.editable == undefined) {
            uiduck.editable = false
        } else {
            uiduck.editable = b.editable
        }
        if (b.topBar == undefined) {
            uiduck.topBar = undefined
        } else {
            uiduck.topBar = b.topBar
            if (uiduck.topBar.templateId == undefined) {
                console.error("error! topBar's templateId is undefined")
            } else {
                if (b.topBar.kwLight == undefined) {
                    uiduck.topBar.kwLight = false;
                } else if (!b.topBar.kwLight) {
                    uiduck.topBar.kwLight = false;
                } else if (b.topBar.kwLight) {
                    uiduck.topBar.kwLight = true;
                }
            }
        }
        if (b.rightTool == undefined) {
            uiduck.rightTool = false;
        } else {
            uiduck.rightTool = b.rightTool
        }
        if (b.loading == undefined) {
            uiduck.loading = false
        } else {
            if (b.loading.time == undefined) {
                b.loading.time = 500;
            }
            if (b.loading.shadeColor == undefined) {
                if (b.loading.shade == undefined) {
                    b.loading.shadeColor = "transparent";
                } else {
                    b.loading.shadeColor = "white";
                }
            }
            if (b.loading.blur == undefined) {
                b.loading.blur = false;
            }
            uiduck.loading = b.loading
        }
        if (b.fieldOptions == undefined) {
            console.error("error! table's fieldOptions is undefined")
        } else {
            uiduck.fieldOptions = b.fieldOptions
        }
        if (b.autoNext == undefined) {
            uiduck.autoNext = false;
        } else if (b.autoNext) {
            uiduck.autoNext = b.autoNext;
            var interval = setInterval(function () {
                if (uiduck.autoNext == false) {
                    clearInterval(interval);
                } else {
                    uiduck.nextPage();
                }
            }, uiduck.autoNext.time)
        }
        console.log('%cHi uiduck', "color:black;font-weight:bold;");
        console.log('%c官网 http://uiduck.com', "color:blue;");
        console.log('%cGithub https://github.com/nicez2/uiduck', "color:blue;");
        //可删除
        console.log('%c本程序的版权遵循创作共用原则，你可以免费使用、修改、发布本程序，但顶部注释不可删除并请注明原作者', "color:gray;");
        uiduck.pageOptions.index = 0;
        uiduck.render(uiduck, refresh);
    },
    getAjaxData: function (e, check) {
        $.ajax({
            //请求方式
            type: e.url.type,
            data: e.url.data,
            async: false,
            dataType: "jsonp", // 返回的数据类型，设置为JSONP方式
            //请求地址
            url: e.url.url,
            //数据，json字符串
            //请求成功
            success: function (result) {
                if (e.url.key) {
                    var key = e.url.key
                    e.setData(result[key], check);
                } else {
                    e.setData(result, check);
                }
            },
            //请求失败，包含具体的错误信息
            error: function (e) {
                e.setData([], check)
            }
        });
    },
    setAjaxCount: function (e) {
        uiduck.pageOptions.count = parseInt(e);
        uiduck.render(uiduck, true);
    },
    dataFilter: function (e) {
        if (uiduck.url == false) {
            uiduck.render(uiduck, false);
        } else {
            for (var k in e) {
                uiduck.url.data.k = e[k]
            }
            if (uiduck.pageOptions.dataType == 'back') {
                uiduck.render(uiduck, true);
            } else if (uiduck.pageOptions.dataType == 'front') {
                uiduck.render(uiduck, false);
            }
        }
    },
    setData: function (e, f) {
        uiduck.data = e;
        if (f) {
            uiduck.pageOptions.index = 0;
            uiduck.pageOptions.count = 0;
            uiduck.render(uiduck, true);
        } else {
            uiduck.render(uiduck, false);
        }
    },
    render: function (uiduck, refresh) {
        $("#" + uiduck.templateId).empty();
        var c = '';
        if (uiduck.style.tbClass) {
            c += '<table id=' + uiduck.udKey + ' class="' + uiduck.style.tbClass + '">';
        } else {
            c += '<table id=' + uiduck.udKey + ' class="uiduck-table">';
        }
        c += (uiduck.setHead(uiduck));
        if (refresh) {
            c += (uiduck.setTableBody(uiduck, true));
        } else {
            c += (uiduck.setTableBody(uiduck, false));
        }

        c += "</table></br>";
        if (uiduck.page) {
            if (uiduck.data != undefined && uiduck.data.length > 0) {
                c += (uiduck.setPage(uiduck));
            }
        }
        $("#" + uiduck.templateId).append(c);
        if (uiduck.loading && uiduck.data.length > 0) {
            uiduck.showLoading(uiduck);
        }
        if (uiduck.pageOptions.layout.indexOf('set') != -1) {
            $("#ud-page-select").trigger("change");
        }
        if (uiduck.loading) {
            uiduck.hideLoading();
        }
    },
    setHead: function (uiduck) {
        var g = "<tr>";
        for (var i = 0; i < uiduck.fieldOptions.length; i++) {
            if (uiduck.fieldOptions[i].index) {
                uiduck.index = true
            }
            if (uiduck.fieldOptions[i].width != undefined) {
                if (uiduck.fieldOptions[i].width.indexOf("%") != -1) {
                    g += "<th class='" + uiduck.style.thClass + "' style='width:" + uiduck.fieldOptions[i].width + ";font-weight:blod'>" + uiduck.fieldOptions[i].title + "</th>"
                } else if (uiduck.fieldOptions[i].width.indexOf("px") != -1) {
                    g += "<th class='" + uiduck.style.thClass + "' style='width:" + uiduck.fieldOptions[i].width + ";font-weight:blod'>" + uiduck.fieldOptions[i].title + "</th>"
                } else if (uiduck.fieldOptions[i].width.indexOf("px") == -1 && uiduck.fieldOptions[i].width.indexOf("%") == -1) {
                    g += "<th class='" + uiduck.style.thClass + "' style='width:" + uiduck.fieldOptions[i].width + "px;font-weight:blod'>" + uiduck.fieldOptions[i].title + "</th>"
                }
            } else {
                g += "<th class='" + uiduck.style.thClass + "' style='font-weight:blod'>" + uiduck.fieldOptions[i].title + "</th>"
            }
        }
        if (uiduck.rightTool) {
            if (uiduck.rightTool.width != undefined) {
                if (uiduck.rightTool.width.indexOf("%") != -1) {
                    g += "<th class='" + uiduck.style.thClass + "' style='width:" + uiduck.rightTool.width + "%'>" + uiduck.rightTool.title + "</th>"
                } else if (uiduck.rightTool.width.indexOf("px") != -1) {
                    g += "<th class='" + uiduck.style.thClass + "' style='width:" + uiduck.rightTool.width + "'>" + uiduck.rightTool.title + "</th>"
                } else if (uiduck.rightTool.width.indexOf("px") == -1 && uiduck.fieldOptions[i].width.indexOf("%") == -1) {
                    g += "<th class='" + uiduck.style.thClass + "' style='width:" + uiduck.rightTool.width + "px'>" + uiduck.rightTool.title + "</th>"
                }
            } else {
                g += "<th class='" + uiduck.style.thClass + "' >" + uiduck.rightTool.title + "</th>"
            }
        }
        g += "</tr>";
        return g
    },
    setTableBody: function (e, f) {
        var h = '';
        var uiduckJL;
        var uiduckFO = e.fieldOptions;
        if (!e.page) {
            if (e.url == false) {
                uiduckJL = e.data;
            } else {
                if (f) {
                    uiduck.getAjaxData(e, false);
                }
                uiduckJL = uiduck.data;
            }
        } else {
            if (e.pageOptions.dataType == 'back') {
                if (e.url == false) {
                    uiduckJL = e.data;
                } else {
                    if (f) {
                        uiduck.url.data = { "limit": parseInt(e.pageOptions.limit), "page": parseInt(e.pageOptions.index + 1) };
                        uiduck.getAjaxData(e, false);
                    }
                    uiduckJL = uiduck.data;
                }
                if (uiduckJL == undefined) {
                    h += "<tr  id=ud-tr-" + i + " ud-tr-num=" + i + " class='uiduck_tr " + e.style.trClass + "' style='visibility:hidden'>";
                    if (e.rightTool) {
                        h += "<td  class='" + e.style.tdClass + "' colspan='" + parseInt(e.fieldOptions.length + 1) + "' style='text-align:center'>" + e.language.options.udNodata + "</td>";
                    } else {
                        h += "<td  class='" + e.style.tdClass + "' colspan='" + e.fieldOptions.length + "' style='text-align:center'>" + e.language.options.udNodata + "</td>";
                    }
                }
            } else if (e.pageOptions.dataType == 'front') {
                if (e.url == false) {
                    uiduckJL = e.data;
                } else {
                    if (f) {
                        uiduck.getAjaxData(e, null, null, false);
                    }
                    uiduckJL = uiduck.data;
                }
                if (uiduckJL == undefined || uiduckJL.length == 0) {
                    h += "<tr  id=ud-tr-" + i + " ud-tr-num=" + i + " class='uiduck_tr " + e.style.trClass + "' style='visibility:hidden'>";
                    if (e.rightTool) {
                        h += "<td  class='" + e.style.tdClass + "' colspan='" + parseInt(e.fieldOptions.length + 1) + "'>" + e.language.options.udNodata + "</td>";
                    } else {
                        h += "<td  class='" + e.style.tdClass + "' colspan='" + e.fieldOptions.length + "'>" + e.language.options.udNodata + "</td>";
                    }
                } else {
                    var start = e.pageOptions.index * e.pageOptions.limit;
                    var end = parseInt(e.pageOptions.index + 1) * e.pageOptions.limit;
                    uiduckJL = uiduckJL.slice(start, end);
                }
            }
        }
        if (e.topBar == undefined && uiduckJL != undefined) {
            for (var i = 0; i < uiduckJL.length; i++) {
                h += "<tr  id=ud-tr-" + i + " ud-tr-num=" + i + " class='uiduck_tr " + e.style.trClass + "' style='visibility:hidden'>";
                if (e.index) {
                    h += "<td class=" + e.style.tdClass + ">" + parseInt(uiduck.pageOptions.limit * uiduck.pageOptions.index + 1 + i) + "</td>";
                }
                for (var k = 0; k < uiduckFO.length; k++) {
                    for (var keys in uiduckJL[i]) {
                        if (keys === uiduckFO[k].key) {
                            if (uiduckFO[k].type == 'map') {
                                h += "<td  class=" + e.style.tdClass + ">" + uiduckFO[k].computed[uiduckJL[i][keys]] + "</td>";
                            } else if (uiduckFO[k].type == 'image') {
                                h += "<td  class=" + e.style.tdClass + "><img style='width:" + uiduckFO[k].width + ";height:" + uiduckFO[k].height + "' src=" + uiduckJL[i][keys] + "></td>";
                            } else {
                                h += "<td  class=" + e.style.tdClass + ">" + uiduckJL[i][keys] + "</td>";
                            }

                        }
                    }
                }
                if (e.rightTool) {
                    h += "<td  class=" + e.style.tdClass + " style='width:" + e.rightTool.width + "'><div ud-index=" + parseInt(uiduck.pageOptions.limit * uiduck.pageOptions.index + i) + ">" + $("#" + e.rightTool.templateId).html() + "</div></td>"
                }
            }
        } else {
            if (e.topBar.kwSplite != undefined && uiduckJL != undefined) {
                for (var i = 0; i < uiduckJL.length; i++) {
                    h += "<tr id=ud-tr-" + i + " ud-tr-num=" + i + " class='uiduck_tr " + e.style.trClass + "' style='visibility:hidden'>";
                    if (e.index) {
                        h += "<td  class=" + e.style.tdClass + ">" + parseInt(limit * index + i + 1) + "</td>";
                    }
                    for (var k = 0; k < uiduckFO.length; k++) {
                        for (var keys in uiduckJL[i]) {
                            if (keys === uiduckFO[k].key) {
                                if (uiduckFO[k].type == 'map') {
                                    h += "<td  class=" + e.style.tdClass + ">" + uiduckFO[k].computed[uiduckJL[i][keys]] + "</td>";
                                } else if (uiduckFO[k].type == 'image') {
                                    h += "<td  class=" + e.style.tdClass + "><img style='width:" + uiduckFO[k].width + ";height:" + uiduckFO[k].height + "' src=" + uiduckJL[i][keys] + "></td>";
                                } else {
                                    h += "<td  class=" + e.style.tdClass + ">" + uiduckJL[i][keys] + "</td>";
                                }
                            }
                        }
                    }
                    if (e.rightTool) {
                        h += "<td  class=" + e.style.tdClass + " style='width:" + e.rightTool.width + "'><div ud-index=" + parseInt(uiduck.pageOptions.limit * uiduck.pageOptions.index + i) + ">" + $("#" + e.rightTool.templateId).html() + "</div></td>"
                    }
                }
            } else {
                if ($("#" + e.topBar.templateId).attr("ud-keyWord") == undefined && uiduckJL != undefined) {
                    for (var i = 0; i < uiduckJL.length; i++) {
                        h += "<tr id=ud-tr-" + i + " ud-tr-num=" + i + " class='uiduck_tr " + e.style.trClass + "' style='visibility:hidden'>";
                        if (e.index) {
                            h += "<td  class=" + e.style.tdClass + ">" + parseInt(i + 1) + "</td>";
                        }
                        for (var k = 0; k < uiduckFO.length; k++) {
                            for (var keys in uiduckJL[i]) {
                                if (keys === uiduckFO[k].key) {
                                    h += "<td  class=" + e.style.tdClass + ">" + e.setKwLight($("#" + e.topBar.templateId).val(), uiduckJL[i][keys]) + "</td>";
                                }
                            }
                        }
                    }
                    if (e.rightTool) {
                        h += "<td  class=" + e.style.tdClass + " style='width:" + e.rightTool.width + "'><div ud-index=" + i + ">" + $("#" + e.rightTool.templateId).html() + "</div></td>"
                    }
                } else if (uiduckJL != undefined) {
                    for (var i = 0; i < uiduckJL.length; i++) {
                        h += "<tr id=ud-tr-" + i + " ud-tr-num=" + i + " class='uiduck_tr " + e.style.trClass + "' style='visibility:hidden'>";
                        if (e.index) {
                            h += "<td  class=" + e.style.tdClass + ">" + parseInt(e.pageOptions.limit * e.pageOptions.index + i + 1) + "</td>";
                        }
                        for (var k = 0; k < uiduckFO.length; k++) {
                            for (var keys in uiduckJL[i]) {
                                if (keys === uiduckFO[k].key) {
                                    if ($("#" + e.topBar.templateId).attr("ud-keyWord") == keys) {
                                        h += "<td  class=" + e.style.tdClass + ">" + e.setKwLight($("#" + e.topBar.templateId).val(), uiduckJL[i][keys]) + "</td>";
                                    } else {
                                        if (uiduckFO[k].type == 'map') {
                                            h += "<td  class=" + e.style.tdClass + ">" + uiduckFO[k].computed[uiduckJL[i][keys]] + "</td>";
                                        } else if (uiduckFO[k].type == 'image') {
                                            h += "<td  class=" + e.style.tdClass + "><img style='width:" + uiduckFO[k].width + ";height:" + uiduckFO[k].height + "' src=" + uiduckJL[i][keys] + "></td>";
                                        } else {
                                            h += "<td  class=" + e.style.tdClass + ">" + uiduckJL[i][keys] + "</td>";
                                        }
                                    }
                                }
                            }
                        }
                        if (e.rightTool) {
                            h += "<td  class=" + e.style.tdClass + " style='width:" + e.rightTool.width + "'><div ud-index=" + i + ">" + $("#" + e.rightTool.templateId).html() + "</div></td>"
                        }
                    }
                }
            }
        }
        return h
    },
    showLoading: function (e) {
        var Width = $("#" + uiduck.udKey).width() / 50 + 'px';
        var rect = document.getElementById(uiduck.udKey).getBoundingClientRect();
        var center = {
            left: rect.left + (rect.right - rect.left) / 2,
            top: rect.top + (rect.bottom - rect.top) / 2
        }
        var scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        center.left = scrollLeft + center.left;
        center.top = scrollTop + center.top;
        var shade = 'left:' + rect.left + 'px;' + 'top:' + (scrollTop + rect.top) + 'px;';
        var position = 'left:' + center.left + 'px;' + 'top:' + center.top + 'px;';
        if (e.loading.shade) {
            var shadeHtml = '<div id="ud-shade" style="position: absolute;' + shade + ';width: ' + rect.width + 'px; height: ' + rect.height + 'px; z-index: 1002;background-color:' + e.loading.shadeColor + ';opacity:' + e.loading.shade + ';transition:opacity .5s;" /></div>';
            $("#" + uiduck.templateId).append(shadeHtml);
        }
        if (e.loading.blur) {
            $("#" + uiduck.udKey).css('filter', 'blur(' + e.loading.blur + 'px)');
            $("#" + uiduck.udKey).css('-webkit-filter', 'blur(' + e.loading.blur + 'px)');
            $("#" + uiduck.udKey).css('-ms-filter', 'blur(' + e.loading.blur + 'px)');
            $("#" + uiduck.udKey).css(' -moz-filter', 'blur(' + e.loading.blur + 'px)');
            $("#" + uiduck.udKey).css('transition', 'filter .5s');
        }
        var loadingHtml = '<img id="ud-loading" style="position: absolute;' + position + ';width: ' + Width + '; height: ' + Width + '; z-index: 1003" src="uiduck/assets/' + uiduck.loading.icon + '.gif" />';
        $("#" + uiduck.templateId).append(loadingHtml);
        $("#ud-loading").css('display', 'block');
        $(".uiduck_tr").css('visibility', 'visible');
    },
    hideLoading: function (e) {
        setTimeout(function () {
            $("#ud-loading").css('display', 'none');
            if (uiduck.loading.shade) {
                $("#ud-shade").remove();
            }
            if (uiduck.loading.blur) {
                $("#" + uiduck.udKey).css('filter', 'blur(0px)');
                $("#" + uiduck.udKey).css('-webkit-filter', 'blur(0px)');
                $("#" + uiduck.udKey).css('-ms-filter', 'blur(0px)');
                $("#" + uiduck.udKey).css(' -moz-filter', 'blur(0px)');
                $("#" + uiduck.udKey).css('transition', 'filter .5s');
            }
        }, uiduck.loading.time)
    },
    getRow: function (e) {
        var index = $(e).parent().attr("ud-index");
        return uiduck.data[index];
    },
    setPage: function (e) {
        var options = e.pageOptions;
        var g = '<div   class="uiduck-page noselect" >';
        if (options.limit != undefined) {
            var count = parseInt(e.data.length / options.limit);
            if (e.data.length % options.limit > 0) {
                count += 1;
            }
            uiduck.pageOptions.count = count;
            if (e.pageOptions.index > 0) {
                if (e.pageOptions.layout.indexOf('home') != -1) {
                    g += '<a onclick="uiduck.firstPage();" >' + e.language.options.udHome + '</a>';
                }
                if (e.pageOptions.layout.indexOf('prev') != -1) {
                    g += '<a onclick="uiduck.prevPage();" >' + e.language.options.udPrev + '</a>';
                }
            } else {
                if (e.pageOptions.layout.indexOf('home') != -1) {
                    g += '<a class="uiduck-page-disable" >' + e.language.options.udHome + '</a>';
                }
                if (e.pageOptions.layout.indexOf('prev') != -1) {
                    g += '<a class="uiduck-page-disable">' + e.language.options.udPrev + '</a>';
                }
            }
            for (var i = 0; i < count; i++) {
                if (count > 8) {
                    if (i == 1) {
                        if (parseInt(e.pageOptions.index) > 4) {
                            g += '<a  onclick="uiduck.expandPage(' + parseInt(parseInt(e.pageOptions.index) - 4) + ',0)">...</a>';
                        } else {
                            if (parseInt(e.pageOptions.index) == i) {
                                g += ' <span class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                            } else {
                                g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                            }
                        }
                    } else if (i == 7) {
                        if (i > parseInt(parseInt(e.pageOptions.index) + 2)) {
                            g += '<a  onclick="uiduck.expandPage(' + i + ',1)">...</a>';
                        } else {
                            if (parseInt(parseInt(e.pageOptions.index) - 2) >= i && parseInt(e.pageOptions.index) > 9) {

                            } else {
                                if (parseInt(e.pageOptions.index) == i) {

                                    g += ' <span class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                                } else {
                                    g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                                }
                            }

                        }
                    } else if (i == 0) {
                        if (parseInt(e.pageOptions.index) == i) {
                            g += ' <span class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                        } else {
                            g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                        }
                    } else if (7 < i && i < count - 1) {
                        var increment = count - parseInt(e.pageOptions.index) - 1;
                        if (increment < 4) {
                            if (parseInt(e.pageOptions.index) + increment - 6 < parseInt(e.pageOptions.index) - increment < i) {
                                if (parseInt(e.pageOptions.index) + increment - 5 > i) {
                                } else {
                                    if (i > parseInt(parseInt(e.pageOptions.index) + 2)) {
                                        g += '<a  onclick="uiduck.expandPage(' + i + ',1)">...</a>';
                                    } else {
                                        if (parseInt(e.pageOptions.index) == i) {
                                            g += ' <span class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                                        } else {
                                            g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                                        }
                                    }
                                }
                            }
                        } else {
                            if (parseInt(e.pageOptions.index) == parseInt(i - 3)) {
                                if (parseInt(e.pageOptions.index) >= parseInt(count - 5)) {
                                    g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                                } else {
                                    g += '<a  onclick="uiduck.expandPage(' + i + ',1)">...</a>';
                                }
                            } else if (parseInt(parseInt(e.pageOptions.index) - 3) < i && i < parseInt(parseInt(e.pageOptions.index) + 3)) {
                                if (parseInt(e.pageOptions.index) == i) {
                                    g += ' <span class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                                } else {
                                    g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                                }
                            }
                        }

                    } else if (i == count) {
                        if (parseInt(e.pageOptions.index) == i) {
                            g += ' <span class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                        } else {
                            g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                        }
                    } else if (1 < i < 7) {
                        if (parseInt(e.pageOptions.index) <= 4) {
                            if (parseInt(e.pageOptions.index) == i) {
                                g += ' <span class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                            } else {
                                g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                            }
                        } else if (parseInt(e.pageOptions.index) > 4) {
                            if (i > parseInt(parseInt(e.pageOptions.index) - 3)) {
                                if (parseInt(e.pageOptions.index) == i) {
                                    g += ' <span class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                                } else {
                                    g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                                }
                            } else {
                            }
                        }
                    }
                } else {
                    if (parseInt(e.pageOptions.index) == i) {
                        g += ' <span class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                    } else {
                        g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                    }
                }
            }
            if (count > 1) {
                if (e.pageOptions.index <= parseInt(e.pageOptions.count - 2)) {
                    if (e.pageOptions.layout.indexOf('next') != -1) {
                        g += '<a class="layui-laypage-next" onclick="uiduck.nextPage();" >' + e.language.options.udNext + '</a>';
                    }
                    if (e.pageOptions.layout.indexOf('last') != -1) {
                        g += '<a onclick="uiduck.lastPage();" >' + e.language.options.udLast + '</a>';
                    }
                } else {
                    if (e.pageOptions.layout.indexOf('next') != -1) {
                        g += '<a class="uiduck-page-disable">' + e.language.options.udNext + '</a>';
                    }
                    if (e.pageOptions.layout.indexOf('last') != -1) {
                        g += '<a class="uiduck-page-disable" >' + e.language.options.udLast + '</a>';
                    }
                }
            }
            if (e.pageOptions.layout.indexOf('total') != -1) {
                g += '<span>' + e.language.options.udTotal + ' ' + e.data.length + ' ' + e.language.options.udList + '</span>';
            }
            if (e.pageOptions.layout.indexOf('set') != -1) {
                g += '<span class="uiduck-page-limits"><select id="ud-page-select" onchange="uiduck.changeLimit(this.value)">';
                for (var j = 0; j < e.pageOptions.limits.length; j++) {
                    if (e.pageOptions.limit == e.pageOptions.limits[j]) {
                        g += '<option value="' + e.pageOptions.limits[j] + '" selected="">' + e.pageOptions.limits[j] + ' ' + e.language.options.udList + '/' + e.language.options.udPage + '</option>';
                    } else {
                        g += '<option  value="' + e.pageOptions.limits[j] + '">' + e.pageOptions.limits[j] + ' ' + e.language.options.udList + '/' + e.language.options.udPage + '</option>';
                    }
                }
                g += '</select></span>';
            }
            if (e.pageOptions.layout.indexOf('jump') != -1) {
                g += '<span class="uiduck-page-skip">' + e.language.options.udGo + '<input id="ud-page-skip-text" type="text" min="1" value="1" class="uiduck-page-input">' + e.language.options.udPage + '<button type="button" class="uiduck-page-btn" onclick="uiduck.skipPage()">' + e.language.options.udSub + '</button></span>'
            }
        } else {
            uiduck.pageOptions.limit = 10;
            var count = e.data.length / options.limit;
            if (e.data.length % options.limit != 0) {
                count += 1;
            }
            uiduck.pageOptions.count = count;
            if (e.pageOptions.index > 0) {
                if (e.pageOptions.layout.indexOf('home') != -1) {
                    g += '<a onclick="uiduck.firstPage();" >' + e.language.options.udHome + '</a>';
                }
                if (e.pageOptions.layout.indexOf('prev') != -1) {
                    g += '<a onclick="uiduck.prevPage();" >' + e.language.options.udPrev + '</a>';
                }
            } else {
                if (e.pageOptions.layout.indexOf('home') != -1) {
                    g += '<a class="uiduck-page-disable" >' + e.language.options.udHome + '</a>';
                }
                if (e.pageOptions.layout.indexOf('prev') != -1) {
                    g += '<a class="uiduck-page-disable">' + e.language.options.udPrev + '</a>';
                }
            }
            for (var i = 0; i < count; i++) {
                if (parseInt(e.pageOptions.index) == i) {
                    g += ' <span  class="' + e.pageOptions.pageClass + '"><em class="' + e.pageOptions.emClass + '"></em><em>' + parseInt(i + 1) + '</em></span>';
                } else {
                    g += '<a  onclick="uiduck.skipPage(' + i + ')">' + parseInt(i + 1) + '</a>';
                }
            }
            if (count > 1) {
                if (e.pageOptions.index <= parseInt(e.pageOptions.count - 2)) {
                    if (e.pageOptions.layout.indexOf('next') != -1) {
                        g += '<a class="layui-laypage-next" onclick="uiduck.nextPage();" >' + e.language.options.udNext + '</a>';
                    } if (e.pageOptions.layout.indexOf('last') != -1) {
                        g += '<a onclick="uiduck.lastPage();" >' + e.language.options.udLast + '</a>';
                    }
                } else {
                    if (e.pageOptions.layout.indexOf('next') != -1) {
                        g += '<a class="uiduck-page-disable">' + e.language.options.udNext + '</a>';
                    }
                    if (e.pageOptions.layout.indexOf('last') != -1) {
                        g += '<a class="uiduck-page-disable" >' + e.language.options.udLast + '</a>';
                    }
                }
            }
            if (e.pageOptions.layout.indexOf('set') != -1) {
                g += '<span class="uiduck-page-limits"><select  id="ud-page-select"  onchange="uiduck.changeLimit(this.value)">';
                for (var j = 0; j < e.pageOptions.limits.length; j++) {
                    if (e.pageOptions.limit == e.pageOptions.limits[j]) {
                        g += '<option value="' + e.pageOptions.limits[j] + '" selected="">' + e.pageOptions.limits[j] + ' ' + e.language.options.udList + '/' + e.language.options.udPage + '</option>';
                    } else {
                        g += '<option value="' + e.pageOptions.limits[j] + '">' + e.pageOptions.limits[j] + ' ' + e.language.options.udList + '/' + e.language.options.udPage + '</option>';
                    }
                }
                g += '</select></span>';
            }
            if (e.pageOptions.layout.indexOf('jump') != -1) {
                g += '<span class="layui-laypage-skip">' + e.language.options.udGo + '<input id="ud-page-skip-text" type="text" min="1" value="1" class="layui-input">' + e.language.options.udPrev + '<button type="button" class="layui-laypage-btn" onclick="uiduck.skipPage()">' + e.language.options.udSub + '</button></span>'
            }
        }
        if (e.autoNext.showPage == false) {
            g = '';
        }
        return g;
    },
    nextPage: function () {
        if (!uiduck.autoNext) {
            uiduck.pageOptions.index++;
            if (uiduck.url == false) {
                uiduck.render(uiduck, false);
            } else {
                if (uiduck.pageOptions.dataType == 'back') {
                    uiduck.render(uiduck, true);
                } else if (uiduck.pageOptions.dataType == 'front') {
                    uiduck.render(uiduck, false);
                }
            }
        } else {
            if (uiduck.pageOptions.index == parseInt(uiduck.pageOptions.count - 1)) {
                uiduck.pageOptions.index = 0;
                if (uiduck.url == false) {
                    uiduck.render(uiduck, false);
                } else {
                    if (uiduck.pageOptions.dataType == 'back') {
                        uiduck.render(uiduck, true);
                    } else if (uiduck.pageOptions.dataType == 'front') {
                        uiduck.render(uiduck, true);
                    }
                }
            } else {
                uiduck.pageOptions.index++;
                if (uiduck.url == false) {
                    uiduck.render(uiduck, false);
                } else {
                    if (uiduck.pageOptions.dataType == 'back') {
                        uiduck.render(uiduck, true);
                    } else if (uiduck.pageOptions.dataType == 'front') {
                        uiduck.render(uiduck, false);
                    }
                }
            }
        }
    },
    prevPage: function () {
        uiduck.pageOptions.index--;
        if (uiduck.url == false) {
            uiduck.render(uiduck, false);
        } else {
            if (uiduck.pageOptions.dataType == 'back') {
                uiduck.render(uiduck, true);
            } else if (uiduck.pageOptions.dataType == 'front') {
                uiduck.render(uiduck, false);
            }
        }
    },
    firstPage: function (e) {
        uiduck.pageOptions.index = 0;
        if (uiduck.url == false) {
            uiduck.render(uiduck, false);
        } else {
            if (uiduck.pageOptions.dataType == 'back') {
                uiduck.render(uiduck, true);
            } else if (uiduck.pageOptions.dataType == 'front') {
                uiduck.render(uiduck, false);
            }
        }
    },
    lastPage: function (e) {
        uiduck.pageOptions.index = parseInt(uiduck.pageOptions.count - 1);
        if (uiduck.url == false) {
            uiduck.render(uiduck, false);
        } else {
            if (uiduck.pageOptions.dataType == 'back') {
                uiduck.render(uiduck, true);
            } else if (uiduck.pageOptions.dataType == 'front') {
                uiduck.render(uiduck, false);
            }
        }
    },
    skipPage: function (e) {
        if (e == undefined) {
            var index = parseInt($("#ud-page-skip-text").val());
            var reg = new RegExp("[0-9]+");
            if (reg.test(index)) {
                if (index <= parseInt(uiduck.pageOptions.count - 1)) {
                    uiduck.pageOptions.index = parseInt(index - 1);
                    if (uiduck.url == false) {
                        uiduck.render(uiduck, false);
                    } else {
                        if (uiduck.pageOptions.dataType == 'back') {
                            uiduck.render(uiduck, true);
                        } else if (uiduck.pageOptions.dataType == 'front') {
                            uiduck.render(uiduck, false);
                        }
                    }
                } else {
                    uiduck.pageOptions.index = parseInt(uiduck.pageOptions.count - 1);
                    if (uiduck.url == false) {
                        uiduck.render(uiduck, false);
                    } else {
                        if (uiduck.pageOptions.dataType == 'back') {
                            uiduck.render(uiduck, true);
                        } else if (uiduck.pageOptions.dataType == 'front') {
                            uiduck.render(uiduck, false);
                        }
                    }
                    $("#ud-page-skip-text").val(parseInt(uiduck.pageOptions.count));
                }
            } else {
                uiduck.pageOptions.index = parseInt(uiduck.pageOptions.count - 1);
                if (uiduck.url == false) {
                    uiduck.render(uiduck, false);
                } else {
                    if (uiduck.pageOptions.dataType == 'back') {
                        uiduck.render(uiduck, true);
                    } else if (uiduck.pageOptions.dataType == 'front') {
                        uiduck.render(uiduck, false);
                    }
                }
                $("#ud-page-skip-text").val(parseInt(uiduck.pageOptions.count));
            }
        } else {
            uiduck.pageOptions.index = e;
            if (uiduck.url == false) {
                uiduck.render(uiduck, false);
            } else {
                if (uiduck.pageOptions.dataType == 'back') {
                    uiduck.render(uiduck, true);
                } else if (uiduck.pageOptions.dataType == 'front') {
                    uiduck.render(uiduck, false);
                }
            }
        }
    },
    expandPage: function (e) {
        uiduck.skipPage(e)
    },
    setKwLight: function (searchKeyWords, fullKeyWords) {
        var reg = new RegExp("[0-9]+");
        if (reg.test(searchKeyWords)) {
            fullKeyWords = searchKeyWords.replace(
                parseInt(searchKeyWords),
                '<a style="font-weight:900;color:#E6A23C;">' + searchKeyWords + "</a>"
            );
        } else {
            if (fullKeyWords.indexOf(searchKeyWords.replace(/\s*/g, "")) !== -1) {
                fullKeyWords = fullKeyWords.replace(
                    searchKeyWords.replace(/\s*/g, ""),
                    '<a  style="font-weight:1000;color:#E6A23C;">' +
                    searchKeyWords.replace(/\s*/g, "") +
                    "</a>"
                );
            }
        }
        return fullKeyWords;
    },
    setKwLightWithSplite: function (resultsList, keywords) {
        var arry = resultsList.substring(1, resultsList.length - 1).split(",");
        for (var i = 0; i < arry.length; i++) {
            var reg = new RegExp("[0-9]+");
            if (reg.test(arry[i])) {
                keywords = keywords.replace(
                    parseInt(arry[i]),
                    '<a style="font-weight:800;color:#E6A23C;">' + arry[i] + "</a>"
                );
            } else {
                if (keywords.indexOf(arry[i].replace(/\s*/g, "")) !== -1) {
                    keywords = keywords.replace(
                        arry[i].replace(/\s*/g, ""),
                        '<a  style="font-weight:800;color:#E6A23C;">' +
                        arry[i].replace(/\s*/g, "") +
                        "</a>"
                    );
                }
            }
        }
        return keywords;
    },
    changeLimit: function (b) {
        if (uiduck.pageOptions.limit != b) {
            uiduck.pageOptions.limit = b;
            uiduck.pageOptions.index = 0;
            uiduck.render(uiduck);
        }
    },
    language: function (b) {
        var options = {};
        if (b.language.tag == 'Chinese') {
            options = { "udHome": "首页", "udTotal": "共", "udList": "条", "udPrev": "上一页", "udNext": "下一页", "udLast": "尾页", "udGo": "前往", "udPage": "页", "udSub": "确定", "udNodata": "暂无数据" };
        } else if (b.language.tag == 'English') {
            options = { "udHome": "Home", "udTotal": "Total item", "udList": "item", "udPrev": "Prev", "udNext": "Next", "udLast": "Last", "udGo": "Jump to ", "udPage": "page", "udSub": "Ok", "udNodata": "Sorry no data" };
        } else if (b.language.tag == 'Japanese') {
            options = { "udHome": "トップページ", "udTotal": "トータル", "udList": "くだり", "udPrev": "前のページ", "udNext": "次のページ", "udLast": "最終ページ", "udGo": "ジャンプして", "udPage": "ページ", "udSub": "さだま·る", "udNodata": "データなし" };
        } else if (b.language.tag == 'French') {
            options = { "udHome": "Accueil", "udTotal": "Total d'entrées", "udList": "item", "udPrev": "Page précédente", "udNext": "Page suivante", "udLast": "Dernière page", "udGo": "Aller à", "udPage": "Page", "udSub": "Déterminer", "udNodata": "Aucune donnée" };
        } else if (b.language.tag == 'Korean') {
            options = { "udHome": "홈", "udTotal": "합계", "udList": "조", "udPrev": "이전 페이지", "udNext": "다음 페이지", "udLast": "마지막 페이지", "udGo": "로 이동", "udPage": "페이지", "udSub": "결정", "udNodata": "데이터가 없습니다" };
        } else if (b.language.tag == 'Spanish') {
            options = { "udHome": "Inicio", "udTotal": "Total", "udList": "item", "udPrev": "Página anterior", "udNext": "Página siguiente", "udLast": "Ultima pagina", "udGo": "Saltar a", "udPage": "Pagina", "udSub": "Determinar", "udNodata": "Sin datos" };
        }
        return options;
    }
};
if (!Array.indexOf) {
    Array.prototype.indexOf = function (obj) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
        return -1;
    }
}