// pages/login/login.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: defaultAvatarUrl,
    nickname: "",
  },
  //事件处理函数
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    this.setData({
      avatarUrl,
    })
  },
  onInput(e) {
    this.setData({
      nickname: e.detail.value
    })
  },
  onSubmit() {
    wx.setStorageSync('avatar', this.avatarUrl);
    wx.setStorageSync('nickname', this.nickname);
    wx.showToast({
      title: '登录成功！',
      icon: 'success',
      duration: 2000,
    });
    // 延迟 2000ms（与提示框持续时间一致）后执行页面跳转
    setTimeout(() => {
      wx.navigateBack()
    }, 2000);
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

  }
})