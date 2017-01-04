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
   	var sort = require('sort');
   	//var cla = require('classify');
   	var mc = require('morechoose');
   	var select = require('isselect');
   	//var tg = require('toogle')
	$(function(){
		$('#head').load('../html/header.html',function(){
			new nav.Nav('.one_dl','.two_dl');
			new close.Close('#close','#header_register');
			var user = $.cookie('name');  //获取登录的用户名
			if(user){
				$('#username').html('尊敬的'+user)
			}
		})
		$('#footer').load('../html/footer.html');
		$('#lcart').load('../index.html #cart',function(){
			new show.scrollshow('#goTop');
			new sh.isShow('#Coupon','#Coupon_none');
			new sh.isShow('#Collection','#collection_none');
			new sh.isShow('#QRcode','#QRcode_none');
			new bg.Bgcolor('#Coupon');
			new bg.Bgcolor('#Collection');
			new bg.Bgcolor('#car');
			new cm.cartMove('#car','#cart','#cart_close','../data/data.json');
			new gb.goBack('#goTop');
			new page.pageation(40); //分页
			new cart.cart('#list','../data/data.json')
			var cc = new cart.cart()
			cc.scCar()

		})
		new mc.moreChoose('#click_more1','#change1','active')  //选择更多
		new mc.moreChoose('#click_more2','#change2','active')
		new mc.moreChoose('#click_more3','#change3','active')
		new mc.moreChoose('#click_more4','#change4','active')
		new mc.moreChoose('#click_more5','#change5','active')
		new mc.moreChoose('#more1','#change2','active_move')
		new mc.moreChoose('#more2','#change4','active_move')
		page.toggle('.select','.select_none') 
		
		new select.isSelect()  //选择确认或取消
		new sort.sort();//排序
		//new close.Close('.close1','#header_register');
	})
	
	

	
	
	
	

})










