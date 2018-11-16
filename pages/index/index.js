var AParse = require('../../component/aParse/aParse.js');

Page({
  onLoad(query) {
    var article = '<p><span style="color:rgb(153,153,152);font-family:微软雅黑;font-size:medium;background-color:rgb(244,244,244);"><div>1.绘制命令和修改</div><div>1.绘制命令和修改</div><div>1.绘制命令和修改</div></span></p>';
    /**
    * WxParse.wxParse(bindName , type, data, target,imagePadding)
    * 1.bindName绑定的数据名(必填)
    * 2.type可以为html或者md(必填)
    * 3.data为传入的具体数据(必填)
    * 4.target为Page对象,一般为this(必填)
    * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    */
    var that = this;
    AParse.aParse('article', 'html', article, that, 5);
  }
});
