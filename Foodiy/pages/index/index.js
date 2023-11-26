// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      name: '土豆烧牛肉',
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8e86bbb4-d784-46c7-aabd-c0ddf73ec70d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703156607&t=ccd59e06ae273873da3502502f2693d2'
    }, {
      id: 1,
      type: 'image',
      name: '麻婆豆腐',
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F299b58cd-4141-42da-8a8d-6693fde082c3%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703156608&t=fd98e7344c28724d6d6d22fec42c7b9c',
    }, {
      id: 2,
      type: 'image',
      name: '宫保鸡丁',
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fd256b891-3a5b-4cb8-9171-40b21c44f6dc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703156609&t=235ef29e9340d0b1e57f93629dbd6897'
    }, {
      id: 3,
      type: 'image',
      name: '重庆小面',
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Ff0bb4ef7-f813-4b32-b429-730e5e7e4ebe%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703156613&t=f2a45d2f2625a80b78962c213d684018'
    }, {
      id: 4,
      type: 'image',
      name: '皮蛋瘦肉粥',
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F276dd253-9549-46e4-8c54-580325575abc%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703156616&t=c2aeee8b0ea972c6b6f80366ad8cd3c0'
    }, {
      id: 5,
      type: 'image',
      name: '水果沙拉',
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F18118420%2Ffee5c4e8f3b94ae0946932f77e6ce4d6.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMTgxMTg0MjAvZmVlNWM0ZThmM2I5NGFlMDk0NjkzMmY3N2U2Y2U0ZDYuanBn%2Fsign%2F7c4c02063c2dc1734b3122b79d611e11.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1703156618&t=96aaf70aa12c1f107923022108612eb9'
    }]
  },
  search() {
    wx.navigateTo({
      url: '../search/search',
    })
  },
})
