const app = getApp()

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
    scrollTop: 0,
    chatRecords: '今天的语文作业是：（1）背诵第一课古诗三首中的《绝句》和《惠崇春江晚景》两首诗；请家长回家后检查孩子的课堂笔记；（2）预习第一课古诗三首中的《三衢道中》，做好生词查阅。'
  },

  godetail(e) {
    if (e.currentTarget.dataset.value == 1) {
      wx.navigateTo({
        url: '/pages/templet/templet',
      })
    }
  },
  chat(e) {
    let chatRecords = this.data.chatRecords;
    console.log(e.detail.value);
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes(); 
    var second = date.getSeconds(); 
    if (minute < 10) {
      minute = "0" + minute;
    }

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
      scrollTop: (this.data.dialogs.length) * 185
    })
    let that = this
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token',
      method: 'POST',
      data: {
        grant_type: 'client_credentials',
        client_id: 'client_id',
        client_secret: 'client_secret'
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
            url: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/ernie-3.5-128k?access_token=' + accessToken,
            method: 'POST',
            data: {
              messages: [
                {
                  role: "user",
                  content: "提出的问题是：" + e.detail.value,
                }
              ],
              temperature: 0.8,
              top_p: 0.8,
              penalty_score: 1,
              disable_search: true, 
              enable_citation: false,
              collapsed: true,
              system: "你是一个ai助教，你的名字叫小诗，我是王老师。以下的内容是班级群里的作业布置和通知记录。你需要根据这些内容回复问题。对于与内容无关的问题就直接礼貌回答不知道，不要说太多，委婉一点。如果直接问某一天的作业，则分别回答语文作业、数学作业和英文作业。" + chatRecords
            },
            header: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + accessToken
            },
            success: (res) => {
              console.log('Response:', res.data);
              let reply = {
                type: "text",
                from: "ai",
                content: res.data.result,
                time: time
              };
              that.setData({
                thinking: false,
                dialogs: that.data.dialogs.concat(reply),
                scrollTop: that.data.dialogs.length * 200
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

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'https://636c-cloud1-5grlqqzee599543a-1316694133.tcb.qcloud.la/records.txt?sign=1d2523078c315eff705cb1e66addf74b&t=1726720116',
      method: 'GET',
      success: (res) => {
        if (res.statusCode === 200) {
          this.setData({
            chatRecords: res.data
          });
        } else {
          console.log('文件读取失败', res.statusCode);
        }
      },
      fail: (err) => {
        console.error('请求失败', err);
      }
    });
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
      scrollTop: this.data.dialogs.length * 185
    })
  }
})