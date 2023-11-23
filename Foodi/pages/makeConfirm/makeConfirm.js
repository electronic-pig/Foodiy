// pages/makeConfirm/makeConfirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recipeList: [],
    radioList: [{ name: '炒', checked: true, id: 1 }, { name: '煎', checked: false, id: 2 }, { name: '蒸', checked: false, id: 3 }, { name: '炖', checked: false, id: 4 }, { name: '煮', checked: false, id: 5 }, { name: '烤', checked: false, id: 6 }, { name: '焖', checked: false, id: 7 }, { name: '炸', checked: false, id: 8 }],
    index: -1,
    imgList: [],
    mealMade: { name: '', amount: 0, cal: 0, score: 0, eva: '', color: '', nutrition: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
    swiperList: [{
      id: 0,
      type: 'image',
      name: '土豆烧牛肉',
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8e86bbb4-d784-46c7-aabd-c0ddf73ec70d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703156607&t=ccd59e06ae273873da3502502f2693d2'
    }, {
      id: 1,
      type: 'image',
      name: '香煎牛排',
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Faac22582-5b48-46f1-b693-be73d9ce001c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703156619&t=f12f166272ee4869101d5804d9dc0be8',
    }]
  },
  radioChange(e) {
    console.log("选中的标签：" + e.detail.value);
    var radioList = this.data.radioList;
    var that = this;
    for (const i in radioList) {
      if (radioList[i].id == e.detail.value) {
        radioList[i].checked = true;
      } else {
        radioList[i].checked = false;
      }
    }
    that.setData({
      radioList: radioList
    })
  },
  getInput(e) {
    let mealMade = this.data.mealMade;
    mealMade.name = e.detail.value;
    this.setData({
      mealMade: mealMade
    })
  },
  ChooseImage() {
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    this.data.imgList.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      imgList: this.data.imgList
    })
  },
  complete() {
    wx.switchTab({
      url: '../make/make',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      recipeList: wx.getStorageSync('recipe')
    });
    let mealMade = this.data.mealMade;
    let recipeList = this.data.recipeList;
    for (let i = 0; i < recipeList.length; i++) {
      mealMade.amount += recipeList[i].amount;
      mealMade.cal += recipeList[i].cal;
      mealMade.score += recipeList[i].score / recipeList.length;
      for (let j = 0; j < recipeList[i].nutrition.length; j++) {
        mealMade.nutrition[j] += recipeList[i].nutrition[j];
      };
    };
    mealMade.score = mealMade.score.toFixed(1);
    if (mealMade.score <= 4) {
      mealMade.eva = 'Limit'
      mealMade.color = '#fbbd08'
    }
    else if (mealMade.score <= 6) {
      mealMade.eva = 'Normal'
      mealMade.color = '#666666'
    }
    else if (mealMade.score <= 8) {
      mealMade.eva = 'Good'
      mealMade.color = '#8dc63f'
    }
    else {
      mealMade.eva = 'Excellent'
      mealMade.color = '#39b54a'
    };
    this.setData({
      mealMade: mealMade,
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