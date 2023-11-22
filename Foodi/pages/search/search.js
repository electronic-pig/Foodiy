// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
  },
  search(value) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: 'http://127.0.0.1:5000/search/' + value,
        method: 'GET',
        header: {
          'content-type': 'application/json'
        },
        success: (res) => {
          if (res.statusCode === 200) {
            let selectResult = []
            for(let i = 0; i < res.data.length; i++){
              selectResult.push({text: res.data[i].name})
            }
            resolve(selectResult); // 请求成功时使用 resolve 返回数据
          } else {
            reject('请求失败'); // 如果请求失败，使用 reject 返回错误信息
            console.log(url)
          }
        },
        fail: (error) => {
          reject(error); // 请求失败时使用 reject 返回错误信息
        }
      });
    });
  },
  selectResult(e) {
    wx.navigateTo({
      url: '../details/details?name=' + e.detail.item.text,
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
    this.setData({
      search: this.search.bind(this)
    });
    let that = this; // 保存页面实例的引用
    wx.request({
      url: 'http://127.0.0.1:5000' + options.cata,
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