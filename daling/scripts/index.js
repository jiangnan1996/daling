define(function(require,exports,module){

	var $ = require('jquery-1.11.3')
	//console.log($)
	var banner = require('banner')
	var span = require('span')
	var tab = require('Tab')
	var Acc = require('Accordion')
	var lm = require('listMove')
	var time = require('Timeout')
    var nav = require('nav')
    var show = require('scrollshow')
    var sh = require('isShow')
    var bg = require('bgcolor')
    var cm = require('cartmove')
    var gb = require('goback')
    var close = require('close');
    var cart = require('cart');
    var cookie = require('cookie')
    cookie($)
   // var ks = require('keySearch');
    //console.log(ks)
	$(function(){
		
		//new keySearch('#head_text','#search_list')
		new nav.Nav('.one_dl','.two_dl');
		new sh.isShow('#Coupon','#Coupon_none');
		new sh.isShow('#Collection','#collection_none');
		new sh.isShow('#QRcode','#QRcode_none');
		new bg.Bgcolor('#Coupon');
		new bg.Bgcolor('#Collection');
		new bg.Bgcolor('#car')
		new banner.Banner('#banner','#banner_select');
		new span.spanMove('#new',-30);  //滑过出现加入购物车
		new span.spanMove('#good-list',-30);
		new Acc.Accordion('#beauty_dl');   //手风琴
		new Acc.Accordion('#snacks_dl');
		new Acc.Accordion('#life_dl');
		new lm.listMove('#pre','#next','#purchaseright','#purchaseright_ul');
		new time.Timeout('.timeout','2016/12/30 20:00:00');//倒计时
		new close.Close('#close','#header_register');
		new cm.cartMove('#car','#cart','#cart_close','data/data.json');
		new gb.goBack('#goTop');//返回顶部
		new show.scrollshow('#goTop');
		new tab.tab('#goodtab','#good-list')//选项卡
		
		var cc = new cart.cart()
		cc.scCar()//初始显示购物车的数量
	})
	
	var user = $.cookie('name');  //获取登录的用户名
	
	console.log(user)
	if(user){
		$('#username').html('尊敬的'+user)
	}
	
})