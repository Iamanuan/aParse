# ddParse

#### 项目介绍
钉钉小程序富文本解析解决方案

#### 基本使用方法
（1）复制文件夹：
- aParse/
  -aParse.js(必须存在)
  -html2json.js(必须存在)
  -htmlparser.js(必须存在)
  -showdown.js(必须存在)
  -aDiscode.js(必须存在)
  -aParse.wxml(必须存在)
  -aParse.wxss(必须存在)
  -emojis(可选)
    
(2)引入必要文件:
//在使用的View中引入AParse模块
var AParse = require('../../aParse/aParse.js');

//在使用的acss中引入AParse.css,可以在app.acss
@import "/aParse/aParse.acss";

(3)数据绑定
var article = '<div>我是HTML代码</div>';
/**
* AParse.wxParse(bindName , type, data, target,imagePadding)
* 1.bindName绑定的数据名(必填)
* 2.type可以为html或者md(必填)
* 3.data为传入的具体数据(必填)
* 4.target为Page对象,一般为this(必填)
* 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
*/
var that = this;
AParse.aParse('article', 'html', article, that, 5);

（4）模板引用：
// 引入模板
<import src="你的路径/aParse/aParse.wxml"/>
//这里data中article为bindName
<template is="aParse" data="{{aParseData:article.nodes}}"/>
