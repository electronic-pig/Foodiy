// pages/diary/diary.js
import Canvas from '../../utils/canvas.js'
Page({
  ...Canvas.options,
  /**
   * 页面的初始数据
   */
  data: {
    ...Canvas.data,
    checkIn: false,
    canvasShow: false,
    showConfirm: false,
    buttons: [{text: '取消'},{text: '确认'}]
  },
  showConfirm(){
    this.setData({
      showConfirm: true
    })
  },
  tapDialogButton(e){
    //点击确认
    if(e.detail.index == 1) {
      this.setData({
        checkIn: true
      });
      wx.showToast({
        title: '打卡成功！',
        icon: 'success',
        duration: 2000
      });
    };
    this.setData({
      showConfirm: false
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.draw('runCanvas', 0, 500);
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