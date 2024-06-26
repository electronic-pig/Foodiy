// pages/user/user.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    buttons: [{ text: '确认' }],
    daysCount: 0
  },
  // 事件处理函数
  toLogin() {
    wx.navigateTo({
      url: '../login/login',
    })
  },
  showUS() {
    this.setData({
      showDialog: true
    })
  },
  tapDialogButton() {
    this.setData({
      showDialog: false
    })
  },
  clean() {
    wx.showLoading({
      title: '清理中',
    });
    wx.clearStorageSync();
    // Init.init(false);
    // this.onShow();
    wx.hideLoading();
    wx.showToast({
      title: '清理成功！',
      icon: 'success',
      duration: 2000
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
    this.setData({
      daysCount: wx.getStorageSync('daysCount'),
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