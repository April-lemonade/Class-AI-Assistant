// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btns: [{
      label: "扫一扫",
      icon: "scan"
    }, {
      label: "名片",
      icon: "card"
    }, {
      label: "认证",
      icon: "certificate"
    }],
    AIOps: ["形象", "声音", "设定"],
    tabs: [{
      label: '我的班级',
      icon: 'https://img.js.design/assets/img/669f97ef6e8e19d665c91ceb.png#a536ae269e7fc634878708016ffe5b87',
      width: 70,
      height: 60
    }, {
      label: '我的收藏',
      icon: 'https://img.js.design/assets/img/669f98e2d664ced7d9165282.png#5e263658e8c0798c3af4532b418be686',
      width: 87,
      height: 79
    }, {
      label: '我的课表',
      icon: 'https://img.js.design/assets/img/669f9907506661dae62be64d.png#467dbd29493d264f99b596a0274c137a',
      width: 67,
      height: 75
    }, {
      label: '我的会议',
      icon: 'https://img.js.design/assets/img/669f9926f7a96fb05dcac965.png#12ecc4da980b1c44d40c1e5666044734',
      width: 71,
      height: 62
    }
    ],
    ops: [{
      lable: '推荐给其他老师',
      icon: 'https://img.js.design/assets/img/669f9a616ab2b7c3ff575f29.png#f327e6f2a8a0a20378267d9843d38c98'
    }, {
      lable: '帮助与客服',
      icon: 'https://img.js.design/assets/img/669f9ad8f628c5f97579fc19.png#c291e0298d02aea88648d0fd723e8cb2'
    }, {
      lable: '常见问题',
      icon: 'https://img.js.design/assets/img/669f9b016e8e19d665c9541a.png#62008792f2cbab0745dbd9e3dafc36a2'
    }, {
      lable: '意见反馈',
      icon: 'https://img.js.design/assets/img/669f9b27f7a96fb05dcaeb6d.png#3dd51f00d9db242c571f56ec410987fc'
    }, {
      lable: '关于我们',
      icon: 'https://img.js.design/assets/img/669f9b3e350a037d60809104.png#2d4e8f23eeac08d0a43f8d0dc10c2f8e'
    }, {
      lable: '退出登录',
      icon: 'https://img.js.design/assets/img/669f9b5274158c977672f90c.png#31f2aeaff48680b0789fe3ef0e92afbd'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getTabBar().init()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})