//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: app.globalData.userInfo,
    hasUserInfo: app.globalData.hasUserInfo,
    imgUrls: [
      'http://img.zcool.cn/community/011d455af2e4c7a80121604526b480.jpg@1280w_1l_2o_100sh.jpg',
      'http://img.zcool.cn/community/01e1285acc8650a8012138675ab2a2.jpg@1280w_1l_2o_100sh.jpg',
      'http://img.zcool.cn/community/01756b5add7e92a80120927b3af0d8.jpg@1280w_1l_2o_100sh.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 800
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(this.userInfo)
    console.log(this.hasUserInfo)
    console.log(wx.getStorageSync(USERINFOKEY))
  },
})

