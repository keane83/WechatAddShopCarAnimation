# WechatAddShopCarAnimation
小程序 购物车动画

使用canvas 实现添加购物车抛物线动画，性能远超view标签方式，使用方法简单

使用方法：
1.引用 AddShopCar.js
2.预使用的页面中最底部 引入canvas代码
<canvas style="display:{{display_good_box ? 'block' : 'none'}}; position:fixed; width: 100%; height: 100%; left:0rpx; top:0rpx;" canvas-id="myCanvas" />
3.点击事件中加入动画触发函数
AddShopCar.startAddShopAnimation([小球终点坐标, 小球起点坐标], this)
4.OVER


