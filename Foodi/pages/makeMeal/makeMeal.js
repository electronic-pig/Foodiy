// pages/makeMeal/makeMeal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    TabCur: 0,
    Tab: ['五谷杂粮', '蔬菜', '水果', '肉蛋、水产'],
    totalScore: 0,
    totalAmount: 0,
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
    let that = this; // 保存页面实例的引用
    let cata = '';
    if (e.currentTarget.dataset.id == 0) cata = "grain";
    if (e.currentTarget.dataset.id == 1) cata = "vegetable";
    if (e.currentTarget.dataset.id == 2) cata = "fruit";
    if (e.currentTarget.dataset.id == 3) cata = "meat";
    wx.request({
      url: 'http://127.0.0.1:5000/food/' + cata,
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        // 使用setData将返回的数据保存到页面的data中
        let newList = res.data;
        newList.forEach(item => {
          item.quantity = 0;
        });
        that.setData({
          list: newList
        });
      }
    });
  },
  make(e) {
    let recipe = wx.getStorageSync('recipe');
    recipe.push(e.currentTarget.dataset.item);
    console.log(recipe);
    wx.setStorageSync('recipe', recipe);
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 1000
    });
    recipe = wx.getStorageSync('recipe');
    let total = 0;
    let amount = 0;
    for (let i = 0; i < recipe.length; i++) {
      total += recipe[i].score / recipe.length;
      amount += recipe[i].amount;
    }
    this.setData({
      totalScore: total.toFixed(1),
      totalAmount: amount
    });
  },
  next(){
    wx.navigateTo({
      url: '../makeConfirm/makeConfirm',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that = this; // 保存页面实例的引用
    wx.request({
      url: 'http://127.0.0.1:5000/food/' + "grain",
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        // 使用setData将返回的数据保存到页面的data中
        that.setData({
          list: res.data
        });
      }
    });
    let recipe = wx.getStorageSync('recipe');
    console.log(wx.getStorageSync('recipe'))
    let total = 0;
    let amount = 0;
    for (let i = 0; i < recipe.length; i++) {
      total += recipe[i].score / recipe.length;
      amount += recipe[i].amount;
    }
    this.setData({
      totalScore: total.toFixed(1),
      totalAmount: amount
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