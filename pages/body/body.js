// pages/body/body.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender: 0,
    genderArray: ['男', '女'],
    birthday: "2003-01-01",
    region: ["四川省", "成都市", "郫都区"],
    height: 0,
    heightArray: [],
    weight: 0,
    weightArray: [],
    fatRate: 0,
    fatRateArray: [],
    bp: [0, 0],
    bpArray: [[], []],
    bs: 0,
    bsArray: [],
    intensity: 0,
    intensityArray: ['低', '中', '高'],
    stress: false,
  },
  //事件处理函数
  genderChange(e) {
    this.setData({
      gender: e.detail.value,
    })
  },
  birthdayChange(e) {
    this.setData({
      birthday: e.detail.value,
    })
  },
  regionChange(e) {
    this.setData({
      region: e.detail.value,
    })
  },
  heightChange(e) {
    this.setData({
      height: e.detail.value
    })
  },
  heightChange(e) {
    this.setData({
      height: this.data.heightArray[e.detail.value]
    });
  },
  weightChange(e) {
    this.setData({
      weight: this.data.weightArray[e.detail.value]
    })
  },
  fatRateChange(e) {
    this.setData({
      fatRate: this.data.fatRateArray[e.detail.value]
    })
  },
  bpChange(e) {
    this.setData({
      bp: e.detail.value
    })
  },
  bsChange(e) {
    console.log(e.detail.value)
    this.setData({
      bs: this.data.bsArray[e.detail.value]
    })
  },
  intensityChange(e){
    this.setData({
      intensity: e.detail.value,
    })
  },
  stressChange(e){
    this.setData({
      stress: e.detail.value,
    })
  },
  submit(){
    wx.showLoading({
      title: '数据提交中',
    })
    wx.showToast({
      title: '数据提交成功！',
      icon: 'success',
      duration: 2000
    });
    wx.request({
      url: 'http://127.0.0.1:5000/test', //仅为示例，并非真实的接口地址
      data: {
        'x': 'hello'
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success (res) {
        console.log(res.data)
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let heightArray = [];
    for (let i = 150; i <= 210; i++) {
      heightArray.push(i);
    };
    let weightArray = [];
    for (let i = 40; i <= 100; i++) {
      weightArray.push(i);
    };
    let fatRateArray = [];
    for (let i = 10; i <= 30; i++) {
      fatRateArray.push(i);
    };
    let bpArray = [[], []];
    for (let i = 0; i <= 200; i++) {
      bpArray[0].push(i);
      bpArray[1].push(i);
    };
    let bsArray = [];
    for (let i = 0; i <= 15; i += 0.1) {
      bsArray.push(i.toFixed(1));
    }
    this.setData({
      heightArray: heightArray,
      height: 170, //默认值
      weightArray: weightArray,
      weight: 55, //默认值
      fatRateArray: fatRateArray,
      fatRate: 17, //默认值
      bpArray: bpArray,
      bp: [75, 115], //默认值
      bsArray: bsArray,
      bs: 5.0, //默认值
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