// pages/diary/diary.js
import Canvas from '../../utils/canvas.js'
Page({
  ...Canvas.options,
  /**
   * 页面的初始数据
   */
  data: {
    ...Canvas.data,
    meals: [],
    totalscore: 0,
    checkIn: false,
    canvasShow: false,
    showConfirm: false,
    buttons: [{ text: '取消' }, { text: '确认' }]
  },
  getScore() {
    let meals = this.data.meals;
    let total = 0;
    for (let i = 0; i < meals.length; i++) {
      total += meals[i].score / meals.length;
    }
    this.setData({
      totalScore: total.toFixed(1)
    });
    this.draw('runCanvas', total.toFixed(1) * 10, 500);
  },
  showConfirm() {
    this.setData({
      showConfirm: true
    })
  },
  tapDialogButton(e) {
    //点击确认
    if (e.detail.index == 1) {
      this.setData({
        checkIn: true
      });
      wx.showToast({
        title: '打卡成功！',
        icon: 'success',
        duration: 2000
      });
      let daysCount = wx.getStorageSync('daysCount');
      daysCount += 1;
      wx.setStorageSync('daysCount', daysCount);
    };
    this.setData({
      showConfirm: false
    });
  },
  del(e) {
    const meals = wx.getStorageSync('meals');
    const updatedMeals = meals.filter(item => item.name !== e.currentTarget.dataset.item.name);
    wx.setStorageSync('meals', updatedMeals);
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000
    });
    this.setData({
      meals: wx.getStorageSync('meals')
    })
  },
  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
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
    this.draw('runCanvas', 0, 500);
    this.setData({
      meals: wx.getStorageSync('meals')
    });
    this.getScore();
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