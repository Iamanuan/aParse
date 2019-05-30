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
