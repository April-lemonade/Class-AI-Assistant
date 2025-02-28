// pages/task/task.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homework: [{
      img: 'https://img.js.design/assets/img/669e04ddf7b4dc16d85eafaf.png#ced05ab96d19839c0eab01f7cefae682',
      title: '[阅读] 10月31-10月31日',
      person: '助教小诗',
      date: '2024.10.31 10:30',
      content: '阅读《一只想飞的猫》2-66页，说一说：猫为什么想飞，它成功了吗？ '
    }, {
      img: 'https://img.js.design/assets/img/669e04ddf7b4dc16d85eafaf.png#ced05ab96d19839c0eab01f7cefae682',
      title: '[阅读] 10月31-11月03日',
      person: '助教小诗',
      date: '2024.10.31  12:30',
      content: '阅读《稻草人》，说一说你印象深刻的一个人物，它有什么性格特征？'
    }],
    btns: [{
      name: 'share', text: '分享'
    }, {
      name: 'edit',
      text: '编辑'
    }, {
      name: 'delete',
      text: '删除'
    }],
    tasks: [{
      name: '10月22日-10月22日',
      value1: 40,
      value2: 100
    }, {
      name: '10月18日-10月18日',
      value1: 30,
      value2: 75
    }, {
      name: '10月17日-10月17日',
      value1: 20,
      value2: 55
    }, {
      name: '10月10日-10月10日',
      value1: 40,
      value2: 100
    }],
    current: 0
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

  },
  onTabsClick(e) {
    console.log(e.detail.value)
    this.setData({
      current: e.detail.value
    })
  },
  onTabsChange(e){
    console.log(e.detail.value)
    this.setData({
      current: e.detail.value
    })
  }
})