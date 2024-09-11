// pages/message/message.js
const app = getApp()
// const axios = require('axios');
const apiKey = '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';
// const openaiEndpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
// import OpenAI from "openai";
// const openai = new OpenAI();
Page({
  thinking: false,
  data: {
    inputValue: "",
    statusBarHeight: app.globalData.statusBarHeight,
    btns: ["布置作业", "发送通知", "发布打卡", "信息收集"],
    btns1: ["上传成绩", "班级相册", "填表接龙", "公告转发"],
    dialogs: [{
      type: "text",
      content: "<p>你好小诗，请将今天的语文作业上传到作业管理中，并将作业消息转发到班级群里。</p><p>（1）背诵第一课古诗三首中的《绝句》和《惠崇春江晚景》两首诗；请家长回家后检查孩子的课堂笔记；</p><p>（2）预习第一课古诗三首中的《三衢道中》，做好生词查阅。</p>",
      from: "user",
      time: "6月15日 10:30"
    }, {
      type: "text",
      content: "<p>已帮您将今日语文作业上传至作业管理系统，并成功转发至班级群，您可前往工作台中查看详情。</p>",
      from: "ai",
      time: "6月15日 10:30"
    }, {
      type: "text",
      content: "你好小诗，将这些大合照照片上传到班级相册当中。",
      from: "user",
      time: "6月15日 16:30"
    }, {
      type: "file",
      content: "大合照",
      size: "99.6MB",
      from: "user",
      time: "6月15日 16:30"
    }, {
      type: "text",
      content: "已帮您将照片上传至班级相册中，您可前往班级群查看。",
      from: "ai",
      time: "6月15日 16:30"
    }],
    scrollTop: 0
  },

  godetail(e) {
    if (e.currentTarget.dataset.value == 1) {
      wx.navigateTo({
        url: '/pages/templet/templet',
      })
    }
  },
  chat(e) {
    console.log(e.detail.value);
    var date = new Date(); //获取当前时间
    var year = date.getFullYear(); //获取当前年份
    var month = date.getMonth() + 1; //获取当前月份
    var day = date.getDate(); //获取当前日期
    var hour = date.getHours(); //获取当前小时
    var minute = date.getMinutes(); //获取当前分钟
    var second = date.getSeconds(); //获取当前秒钟

    let time = month + '月' + day + '日 ' + hour + ':' + minute;
    let newData = {
      type: "text",
      from: "user",
      content: e.detail.value,
      time: time
    };
    this.setData({
      dialogs: this.data.dialogs.concat(newData),
      inputValue: '',
      thinking: true,
      scrollTop: this.data.dialogs.length * 90
    })
    let that = this
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token',
      method: 'POST',
      data: {
        grant_type: 'client_credentials',
        client_id: 'Jro22JhBWD4zPVv3IGoRAEU6',
        client_secret: 'K1ned6Hf8zapuoOHkGNktUnhP2DcuJlv'
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        if (res.data && res.data.access_token) {
          const accessToken = res.data.access_token;
          console.log('Access Token:', accessToken);

          // 调用 ERNIE-Speed-128K 模型 API
          wx.request({
            url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie-speed-128k?access_token=' + accessToken,
            method: 'POST',
            data: {
              messages: [
                {
                  role: "user",
                  content: "你是一个ai助教，你的名字叫小诗，我是王老师。你需要根据以下内容回复我的问题，如果问题的答案不在以下内容中，你就回复不知道，要有礼貌：你好小诗，请将今天的语文作业上传到作业管理中，并将作业消息转发到班级群里。（1）背诵第一课古诗三首中的《绝句》和《惠崇春江晚景》两首诗；请家长回家后检查孩子的课堂笔记；（2）预习第一课古诗三首中的《三衢道中》，做好生词查阅。我的问题是：" + e.detail.value,
                }
              ],
              temperature: 1.0  // 设置生成文本的随机性
            },
            header: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + accessToken
            },
            success: (res) => {
              console.log('Response:', res.data.result);
              let reply = {
                type: "text",
                from: "ai",
                content: res.data.result,
                time: time
              };
              that.setData({
                thinking: false,
                dialogs: that.data.dialogs.concat(reply),
                scrollTop: that.data.dialogs.length * 80
              })
            },
            fail: (err) => {
              console.error('Request Error:', err);
            }
          });
        } else {
          console.error('Failed to get Access Token:', res.data);
        }
      },
      fail: (err) => {
        console.error('Error fetching Access Token:', err);
      }
    });


    // wx.request({
    //   url: 'https://api.gptsapi.net/v1/chat/completions',
    //   method: 'POST',
    //   header: {
    //     'Authorization': 'sk-pSha8f9b3bf58fd2ad22dfe3c03dabc8923068affa2zJpzu',
    //     'Content-Type': 'application/json',
    //   },
    //   data: {
    //     model: 'gpt-4',
    //     messages: [
    //       { role: "system", content: "你是一个ai助教，你的名字叫小诗。你需要根据以下内容回复王老师的问题，如果问题的答案不在以下内容中，你就回复不知道，要有礼貌：你好小诗，请将今天的语文作业上传到作业管理中，并将作业消息转发到班级群里。（1）背诵第一课古诗三首中的《绝句》和《惠崇春江晚景》两首诗；请家长回家后检查孩子的课堂笔记；（2）预习第一课古诗三首中的《三衢道中》，做好生词查阅。" },
    //       {
    //         role: "user",
    //         content: e.detail.value,
    //       },
    //     ],
    //   },
    //   success(res) {
    //     console.log(res.data);
    //     let reply = {
    //       type: "text",
    //       from: "ai",
    //       content: res.data.choices[0].message.content,
    //       time: time
    //     };
    //     that.setData({
    //       dialogs: that.data.dialogs.concat(reply),
    //       scrollTop: that.data.dialogs.length * 90
    //     })
    //   },
    //   fail(err) {
    //     console.error('API request failed: ', err);
    //   }
    // });
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
    this.setData({
      scrollTop: this.data.dialogs.length * 80
    })
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