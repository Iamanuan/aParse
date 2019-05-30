﻿# ddParse

#### 项目介绍
钉钉小程序富文本解析解决方案，能在应用中解析html，markdown代码。使用方式如下，基本使用样例见aParse/index。

#### 实现样例：

![Sample_1](https://images.gitee.com/uploads/images/2019/0530/182507_ce094ee9_1670794.jpeg "sample_1.jpg")

![Sample_2](https://images.gitee.com/uploads/images/2019/0530/182534_8e62ae11_1670794.png "sample_2.png")

#### 基本使用方法
（1）复制文件夹：

> 复制文件夹aParse至项目中

(2)引入必要文件:

> 在需要使用的页面中引入aParse组件

    <import src="../../component/aParse/aParse.axml"/>

> 在使用的acss中引入aParse.acss,也可以在app.acss中全局引入

    @import "../../component/aParse/aParse.acss";

(3)数据绑定

> index.js

    var AParse = require('../../component/aParse/aParse.js');
    
    Page({
      onLoad(query) {
    
      let article = `
          <h3>
          <span style="color:red">钉钉小程序</span>
          <span style="color:green">富文本解析</span>
          <span style="color:blue">解决方案</span>
          </h3>
      `
        /**
         * 使用说明：
        * AParse.AParse(bindName , type, data, target,imagePadding)
        * 1.bindName绑定的数据名(必填)
        * 2.type可以为html或者md(必填)
        * 3.data为传入的具体数据(必填)
        * 4.target为Page对象,一般为this(必填)
        * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
        */
    
        let that = this;
        AParse.aParse('article', 'html', article, that, 5);
      }
    });



（4）模板引用：

> 在相应的axml中引入模板，这里的article为bindName

    <import src="../../component/aParse/aParse.axml"/>
    
    <template is="aParse" data="{{aParseData:article.nodes}}"/>


