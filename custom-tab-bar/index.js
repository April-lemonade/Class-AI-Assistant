const app = getApp()
Component({
  data: {
    value: 0,
    list: [
      { label: '对话', icon: 'chat-bubble-1', url: '/pages/index/index' },
      { label: '班级', icon: 'home', url: '/pages/dialog/dialog' },
      { label: '公告', icon: 'notification', url: '/pages/notification/notification' },
      { label: '我的', icon: 'user', "url": "/pages/me/me", },
    ],
  },
  methods: {
    init() {
      const page = getCurrentPages().pop();
      let that = this
      this.setData({
        value: that.data.list.findIndex(item => item.url === `/${page.route}`)
      });
      // console.log(this.data.value)
    },
    onChange(e) {
      // console.log(e)
      this.setData({
        value: e.detail.value,
      });
      let that = this
      app.globalData.value = e.detail.value
      // console.log("组件内修改", app.globalData.value)
      // console.log(that.data.list[e.detail.value - 1].url)
      wx.switchTab({
        url: that.data.list[e.detail.value].url,
      })
      // wx.navigateTo({
      //   url: that.data.list[e.detail.value - 1].url,
      // })

    },
  },
});
