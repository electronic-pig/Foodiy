// pages/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    record: [],
    totalScore: 9.9,
    isToday: true,
  },
  /**
  * 日历是否被打开
  */
  bindselect(e) {
    console.log(e.detail.ischeck)
  },
  /**
   * 获取选择日期
   */
  bindgetdate(e) {
    let time = e.detail;
    console.log(time);
    this.setData({
      isToday: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let meals = wx.getStorageSync('meals');
    let total = 0;
    for (let i = 0; i < meals.length; i++) {
      total += meals[i].score / meals.length;
    }
    this.setData({
      totalScore: total.toFixed(1)
    });
    this.setData({
      record: wx.getStorageSync('meals')
    })
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