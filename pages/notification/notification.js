// pages/notification/notification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: [{
      label: '学校公告',
      icon: 'https://img.js.design/assets/img/669f7b6ef7b4dc16d879e24d.png#dc7e8c563bac6ef5fa7878baa797e2c5',
      width: 90,
      height: 84
    }, {
      label: '班级公告',
      icon: 'https://img.js.design/assets/img/669f7388a4202cb4cc4e683e.png#a00fe790de3b6f4c28faabab2c2b09e0', width: 90,
      height: 84
    }, {
      label: '课程公告',
      icon: 'https://img.js.design/assets/img/669f7bd1a6d27f945b49d540.png#0fdf345fd64827875b76764c084e5292',
      width: 93,
      height: 84
    }],
    nots: [
      {
        title: "关于我校2024年春季运动会通知",
        des: "为了丰富学生的课余生活，增强体质，我校将于下周五(4月20日）举行春季运动会。运动会将包括田径、跳远、拔河等多项比赛，欢迎...",
        view: '265',
        time: '04月15日 10:00',
        dep: '金凤小学'
      },
      {
        title: "关于开学家长会的通知",
        des: "为了促进家校沟通，共同关注孩子的成长与发展，我校定于下周三（3月10日）召开家长会。家长会将包括学期总结、班主任发言以...",
        view: '560',
        time: '03月05日 10:00',
        dep: '金凤小学'
      },
      {
        title: "关于寒假放假的通知",
        des: "根据教育局的安排，我校将于1月6日正式放寒假。暑假期间，请家长们注意孩子的安全教育，合理安排孩子的作息时间，鼓励孩子阅读...",
        view: '736',
        time: '12月30日 10:00',
        dep: '金凤小学'
      },
      {
        title: "关于校内安全演习的通知",
        des: "为了提高全校师生的安全意识和应急能力，我校定于下周二（12月18日）进行一次全校范围内的安全演习。本次演习将模拟火灾、地震等...",
        view: '540',
        time: '04月15日 10:00',
        dep: '金凤小学'
      }
    ]
  },

  godetail() {
    wx.navigateTo({
      url: '../notidetail/notidetail',
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