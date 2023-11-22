// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    foodItem: {},
    TabCur: 0,
    Tab:['营养成分','推荐食谱'],
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this;
    wx.request({
      url: 'http://127.0.0.1:5000/item/' + options.name,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        // 使用setData将返回的数据保存到页面的data中
        that.setData({
          foodItem: res.data
        });
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