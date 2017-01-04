
define(function(require,exports,module){

	var $ = require('jquery-1.11.3')
	var nav = require('nav')
	var span = require('span')
	
    var show = require('scrollshow')
    var sh = require('isShow')
    var bg = require('bgcolor')
    var cm = require('cartmove')
    var gb = require('goback')
    var close = require('close');
   	var page = require('page');
   	var cart = require('cart');
   var time = require('Timeout')
   //	var ss = require('scrollshow')
	$(function(){
		$('#head').load('../html/header.html',function(){
			new nav.Nav('.one_dl','.two_dl');//二级导航
			new close.Close('#close','#header_register');
			var user = $.cookie('name');  //获取登录的用户名
			//console.log(user)
			if(user){//判断是否登录
				$('#username').html('尊敬的'+user)
			}
		})
		$('#footer').load('../html/footer.html');
		$('#a_cart').load('../index.html #cart',function(){
			new show.scrollshow('#goTop');//返回顶部滚动到一定位置显示
			new sh.isShow('#Coupon','#Coupon_none');//侧边栏的东西是否显示
			new sh.isShow('#Collection','#collection_none');
			new sh.isShow('#QRcode','#QRcode_none');
			new bg.Bgcolor('#Coupon');
			new bg.Bgcolor('#Collection');//改变背景颜色
			new bg.Bgcolor('#car');
			new cm.cartMove('#car','#cart','#cart_close');//购物车移入移出
			new gb.goBack('#goTop');//返回顶部
			new page.pageation(40);
			new cart.cart('#list')//购物车
			var cc = new cart.cart()
			cc.scCar()

		})
		new time.Timeout('.timeout','2016/12/30 20:00:00');
		

		
	})

	

	

})
