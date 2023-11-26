// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Item: {},
    TabCur: 0,
    Tab: ['营养成分', '推荐做法'],
    recommendList: [],
    isFood: false,
    foods: [{ name: '鸡蛋', quantity: '5个' }, { name: '番茄', quantity: '5个' }, { name: '葱', quantity: '1根' }, { name: '盐', quantity: '1勺' }, { name: '油', quantity: '适量' }, { name: '砂糖', quantity: '少许' },],
    steps: [{
      image: 'http://i2.chuimg.com/5bcd1e1f8acb4179a73231b37783b80b_2048w_1722h.jpg?imageView2/2/w/300/interlace/1/q/90',
      text: "选择比较成熟的番茄，捏着比较软，这样的番茄多汁，味道好一些，然后用刀划十字，放入开水里面烫一下，过入凉水，去皮"
    }, {
      image: 'http://i2.chuimg.com/38fbba613b844b198311dbd43f5c6683_2022w_2048h.jpg?imageView2/2/w/300/interlace/1/q/90',
      text: "番茄切成小块儿，喜欢多汁的就切碎一点"
    }, {
      image: 'http://i2.chuimg.com/2fd03bec614a46ab841d8208d3e28bf9_2000w_2668h.jpg?imageView2/2/w/300/interlace/1/q/90',
      text: "大蒜去皮切成蒜末"
    }, {
      image: 'http://i2.chuimg.com/c0b9dea31a90433092d43dea7ea54363_2208w_1536h.jpg?imageView2/2/w/300/interlace/1/q/90',
      text: "小葱切碎"
    }, {
      image: 'http://i2.chuimg.com/d539ffda408d4214ae22d57b2d1d4bd5_2048w_1804h.jpg?imageView2/2/w/300/interlace/1/q/90',
      text: "鸡蛋加少许盐打散"
    }, {
      image: 'http://i2.chuimg.com/b683696efb95484c90500761b491a8b7_2668w_2668h.jpg?imageView2/2/w/300/interlace/1/q/90',
      text: "锅里放油烧热，倒入蛋液，用筷子划，凝固就可以出锅备用"
    }, {
      image: 'http://i2.chuimg.com/7797e400f6c345dcb27e05fa2dfafaa8_2668w_2668h.jpg?imageView2/2/w/300/interlace/1/q/90',
      text: "就着炒鸡蛋的油，可以不再放油，锅里放入番茄翻炒，加入盐"
    }, {
      image: 'http://i2.chuimg.com/295a0a61d7f64641b1e709cb04ed16bb_2000w_2668h.jpg?imageView2/2/w/300/interlace/1/q/90',
      text: "汤汁比较浓厚时，放入炒好的鸡蛋"
    }, {
      image: 'http://i2.chuimg.com/c96a27ef3e1c45c0910d920c2c281cf8_1000w_1000h.jpg?imageView2/2/w/300/interlace/1/q/90',
      text: "翻炒一下，就可以出锅了，最后撒上葱花。"
    },]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    });
  },
  add() {
    let meals = wx.getStorageSync('meals');
    meals.push(this.data.Item);
    wx.setStorageSync('meals', meals);
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 2000
    })
  },
  make() {
    let recipe = wx.getStorageSync('recipe');
    recipe.push(this.data.Item);
    wx.setStorageSync('recipe', recipe);
    wx.navigateTo({
      url: '../makeMeal/makeMeal',
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
          Item: res.data
        });
        if (that.data.Item.cata.includes('food')) {
          that.setData({
            Tab: ['营养成分', '推荐食谱'],
            isFood: true
          });
          wx.request({
            url: 'http://127.0.0.1:5000/recommendByFood/' + options.name,
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success(res) {
              // 使用setData将返回的数据保存到页面的data中
              that.setData({
                recommendList: res.data
              });
            }
          });
        }
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