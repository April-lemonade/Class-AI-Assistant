// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: [
      {
        title: "通知模板",
        img: 'https://img.js.design/assets/img/641131ecfef3db8409cdbc1f.png#1c6a841ee6c550459e8b7d8c8ed7c71d',
        width: 200,
        desc: '轻松选择模板进行各类通知文案编辑发送...',
        color1:'rgba(65, 137, 245, 1)',
        color2:'rgba(0, 36, 56, 0.4)'
      }, {
        title: "祝福模板",
        img: 'https://img.js.design/assets/img/6566d91f02c8568682954f4e.png#185ff2c073c8eda2c1d5917c8d95e361',
        width: 200,
        desc: '各大节日祝福可选择，轻松选择并编辑发送...',
        color1:'rgba(224, 99, 118, 1)',
        color2:'rgba(56, 0, 13, 0.4)'
      }, {
        title: "任务模板",
        img: 'https://img.js.design/assets/img/669eb573063a03fa874e4f06.png#1591524b7ec9e1248ba55791b052c228',
        width: 210,
        desc: '各类任务模板可选择，轻松选择并编辑发送...',
        color1:'rgba(214, 163, 75, 1)',
        color2:'rgba(71, 63, 39, 0.4)'
      }, {
        title: "调查模板",
        img: 'https://img.js.design/assets/img/641132b6fef3db8409ce58c0.png#c9f0c19609e92a00554454dba0ac3668',
        width: 195,
        desc: '轻松选择模板进行各类调查文案编辑发送...',
        color1:'rgba(144, 94, 219, 1)',
        color2:'rgba(61, 19, 125, 0.4)'
      },{
        title: "打卡模板",
        img: 'https://img.js.design/assets/img/66975b74b335ca902d6f7eae.png#ea104bdee77676e9c7ea96febebde722',
        width: 190,
        desc: '轻松选择各类打卡模板进行编辑与发送...',
        color1:'rgba(36, 181, 135, 1)',
        color2:'rgba(0, 56, 5, 0.4)'
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
  godetail(){
    wx.navigateTo({
      url: '../../pages/templet/templet',
    })
  }
})