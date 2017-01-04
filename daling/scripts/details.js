
define(function(require,exports,module){

	var $ = require('jquery-1.11.3')
	var nav = require('nav')
	var span = require('span')
	var lm = require('listMove')
    var show = require('scrollshow')
    var sh = require('isShow')
    var bg = require('bgcolor')
    var cm = require('cartmove')
    var gb = require('goback')
    var close = require('close');
   	var page = require('page');
   	var cart = require('cart');
   	var lm = require('listMove')
   	var ceil = require('ceil');
   	var mo = require('Mosaic')
   //	var ss = require('scrollshow')
	$(function(){
		$('#header').load('../html/header.html',function(){

			new nav.Nav('.one_dl','.two_dl');
			new close.Close('#close','#header_register');
			var user = $.cookie('name');  //获取登录的用户名
			//console.log(user)
			if(user){
				$('#username').html('尊敬的'+user)
			}
		})
		$('#footer').load('../html/footer.html');
		$('#d_cart').load('../index.html #cart',function(){

			new sh.isShow('#Coupon','#Coupon_none');//侧边栏的东西是否显示
			new sh.isShow('#Collection','#collection_none');
			new sh.isShow('#QRcode','#QRcode_none');
			new bg.Bgcolor('#Coupon');
			new bg.Bgcolor('#Collection');//背景色的改变
			new bg.Bgcolor('#car');
			new cm.cartMove('#car','#cart','#cart_close','../data/data.json');//购物车移动
			new gb.goBack('#goTop');
			new page.pageation(40);//分页  每页显示40个数据
			new cart.cart('.content')
			var cc = new cart.cart()
			cc.scCar()
			

		})
		new show.scrollshow('#goTop','#ceil','tab','active')//返回顶部是否显示
		new ceil.ceil('tab','active')//吸顶
		new ceil.ceil('ceil_tab','active')
		new lm.listMove('#pre','#next','#allbuy','#allbuy_ul');//小列表的移动
		new mo.Mosaic();   //拼接详情页数据
		

		
	})
	
	
	

})

























