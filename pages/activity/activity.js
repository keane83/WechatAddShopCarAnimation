//获取应用实例
const app = getApp()
import AddShopCar from '../../utils/AddShopCar.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [{ "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }, { "imgurl": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1282479461,3974636556&fm=27&gp=0.jpg", "active_type": "REGULAR", "name": "红烧肉大黄瓜双拼饭", "guige": "500g/份", "a_price": 98 }]
  },

  /** 去结算按钮点击事件 */
  calculateTap: function() {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },



  goodsItemAddTap: function (e) {    
    var finger = {};
    finger['x'] = e.detail.touch.touches["0"].clientX / wx.getSystemInfoSync().windowWidth * 750;//点击的位置
    finger['y'] = e.detail.touch.touches["0"].clientY / wx.getSystemInfoSync().windowWidth * 750;
    AddShopCar.startAddShopAnimation([{ x: 60, y: 750 * wx.getSystemInfoSync().windowHeight / wx.getSystemInfoSync().windowWidth - 80 }, finger], this)
  },

 
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },




  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})