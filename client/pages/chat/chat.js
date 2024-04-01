// 引入用于发起网络请求的 API
// const request = require('../../utils/request.js');

Page({
  data: {
    inputValue: '', // 输入框的值
    messages: [], // 聊天消息列表
    toView: '', // 滚动视图的位置
  },

  // 页面加载时发送请求获取聊天消息
  onLoad: function () {
    this.getRobotMessage('你好');
  },

  // 输入框内容改变时触发
  handleInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  // 发送消息按钮点击事件处理
  sendMessage: function () {
    let inputText = this.data.inputValue;
    if (!inputText.trim()) return;

    this.addMessage('user', inputText, '../../static/images/user-avatar.png');
    this.getRobotMessage(inputText);

    // 清空输入框
    this.setData({
      inputValue: '',
      toView: 'message-' + (this.data.messages.length - 1) // 更新 scrollIntoView 的值为最新消息的 id
    });
  },

  // 添加消息到列表中
  addMessage: function (type, content, avatar) {
    let messages = this.data.messages;
    messages.push({
      type: type,
      content: content,
      avatar: avatar
    });
    this.setData({
      messages: messages,
      toView: 'message-' + (messages.length - 1)
    });
  },

  //模拟聊天机器人回复消息
  getRobotMessage: function (question) {
    let that = this;
    if (question === '你好') {
      that.addMessage('robot', '你好，我是小助手，请问有什么可以帮助你的吗？', '../../static/images/robot-avatar.png');
    } else if (question === '在吗') {
      that.addMessage('robot', '在的，有什么可以帮助你的吗？', '../../static/images/robot-avatar.png');
    } else if (question === '再见') {
      that.addMessage('robot', '再见，欢迎下次再来', '../../static/images/robot-avatar.png');
    } else {
      that.addMessage('robot', '抱歉，没有找到答案', '../../static/images/robot-avatar.png');
    }
  }
  // 调用后端接口获取聊天机器人的回复消息
  // getRobotMessage: function (question) {
  //   let that = this;
  //   request.post('/api/chat', { question: question })
  //     .then(res => {
  //       if (res.data.success) {
  //         that.addMessage('robot', res.data.answer, '../../images/robot-avatar.png');
  //       } else {
  //         that.addMessage('robot', '抱歉，没有找到答案', '../../images/robot-avatar.png');
  //       }
  //     })
  //     .catch(err => {
  //       console.error('请求失败：', err);
  //       that.addMessage('robot', '抱歉，服务暂时不可用', '../../images/robot-avatar.png');
  //     });
  // }
});
