// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const app = getApp()
Page({
  data: {
    statusBarHeight: app.globalData.statusBarHeight,
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    value: 'label_1',
    list: [
      { label: '作业管理', icon: 'https://img.js.design/assets/img/669f71ab1be0ad3ed8134d1a.png#078e381d952b7fb97e36bc2d230cbdfe', width: 74, height: 74 },
      { label: '通知公告', icon: 'https://img.js.design/assets/img/669f7388a4202cb4cc4e683e.png#a00fe790de3b6f4c28faabab2c2b09e0', width: 77, height: 78 },
      { label: '学生成绩', icon: 'https://img.js.design/assets/img/669f73a9a6d27f945b48afab.png#02ae91e4b470f0d1963790d8fc810b76', width: 74, height: 76 },
      { label: '班级相册', icon: 'https://img.js.design/assets/img/669f73c4b5d713817fc16810.png#6081f993bf457c172e9a642e6d16c922', width: 76, height: 77 },
      { label: '任务打卡', icon: 'https://img.js.design/assets/img/669f73da3a0b1318be60ae8f.png#b07b4ac53b619c579f00d76ef59bb74d', width: 74, height: 71 },
      { label: '填表接龙', icon: 'https://img.js.design/assets/img/669f73edee4367d95177199b.png#37e8fd6aa78b4c1c916d902d1fa49dd2', width: 76, height: 71 },
      { label: '上课记录', icon: 'https://img.js.design/assets/img/669f74071be0ad3ed813b2c8.png#0d2b352563eb48832a5b24a49c9e5044', width: 71, height: 70.9 },
      { label: '评价学生', icon: 'https://img.js.design/assets/img/669f74263a0b1318be60b9f3.png#72f4ef3fc577e610b3926040a1eb8aa2', width: 89, height: 67 },
      { label: '奖励奖状', icon: 'https://img.js.design/assets/img/669f743ca4202cb4cc4e817e.png#ccf0e78456ce0c304252521e0b9cd4e7', width: 66, height: 81 },
      { label: '班级收款', icon: 'https://img.js.design/assets/img/669f71991fc558ec993ba741.png#7f10ce92b1addbc0f504bfa372a2c55b', width: 80, height: 74 },
      { label: '信息收集', icon: 'https://img.js.design/assets/img/669f71a11be0ad3ed8134a5a.png#c3b5c3970eedd5d0a1aa2cb1895de02f', width: 71, height: 75 },
      { label: '更多功能', icon: 'https://img.js.design/assets/img/669f7490dd0e890502a6c5bc.png#6f4a75705ceac23182de815488e0e049', width: 84, height:74 },
    ],
    functions: [{
      title: "AI模板",
      src: 'https://tdesign.gtimg.com/mobile/demos/image1.jpeg'
    }, {
      title: "我的课表",
      src: 'https://tdesign.gtimg.com/mobile/demos/image1.jpeg'
    }, {
      title: "待办事项",
      src: 'https://tdesign.gtimg.com/mobile/demos/image1.jpeg'
    }]
  },
  onShow: function () {
    this.getTabBar().init()
  },
  godetail(e) {
    // console.log(e.currentTarget.dataset.value)
    if (e.currentTarget.dataset.value == 3) {
      wx.navigateTo({
        url: '/pages/gallery/gallery',
      })
    }
  },
  gotemplet(e) {
    if (e.currentTarget.dataset.value == 0) {
      wx.navigateTo({
        url: '/pages/templet/templet',
      })
    }
  },
  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },

  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },

})
