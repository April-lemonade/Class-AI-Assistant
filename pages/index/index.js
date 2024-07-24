// pages/dialog/dialog.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    value: app.globalData.value,
    list: [{
      name: 'AI助教小诗',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      text: '已帮您将学校最新通知转发到三年级二班的班级群，您可在班级群 ...',
      count: 0
    }, {
      name: '三年级二班',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      text: '通知：尊敬的家长:关注安全，关注孩子的健康成长，是我们共同 ...',
      count: 0
    }, {
      name: '李老师',
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      text: '你好，王老师！',
      count: 2
    }, {
      name: "林老师",
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      text: '你好，王老师！',
      count: 2
    }, {
      name: "班主任李老师",
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      text: '你好，王老师！这是下学期的课表，请核对是否有误。',
      count: 3
    }, {
      name: "卢老师",
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      text: '王老师，你看看需要换一下吗？',
      count: 2
    }, {
      name: "老师",
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      text: '好的，谢谢王老师。',
      count: 0
    }, {
      name: "老师",
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      text: '好的，谢谢王老师。',
      count: 0
    }, {
      name: "老师",
      img: 'https://tdesign.gtimg.com/mobile/demos/avatar1.png',
      text: '好的，谢谢王老师。',
      count: 0
    }]
  },
  goChat() {
    wx.navigateTo({
      url: '../../pages/message/message',
    })
  },

  goTemplet() {
    wx.navigateTo({
      url: '../../pages/templet/templet',
    })
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