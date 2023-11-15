// pages/user/user.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    nickname: '微信用户',
    hasUserInfo: false,
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toLogin() {
    wx.navigateTo({
      url: '../login/login',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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
    // 获取本地缓存中的用户头像和昵称
    const avatarUrl = wx.getStorageSync('avatar')
    const nickname = wx.getStorageSync('nickname')
    console.log(avatarUrl);
    console.log(nickname);
    // 将获取到的头像和昵称数据存储到页面数据中
    if (avatarUrl && nickname) {
      this.setData({
        avatarUrl: avatarUrl,
        nickname: nickname,
      });
    }
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