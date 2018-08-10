// components/goodsitem/goodsitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods: {
      type: Object,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    goodsItemTap: function(e) {
      this.triggerEvent('goodsItemTap', this.properties.goods);
    },
    goodsItemAddTap: function(e) {
      var goods = this.properties.goods;

      this.triggerEvent('goodsItemAddTap', { goods: this.properties.goods, touch: e });
      
    }
  }
})
