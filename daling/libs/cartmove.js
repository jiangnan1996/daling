define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    var cart = require('cart');
    until.cartMove = function (clickid,cartid,closeid,url){

      
	

		$(clickid).on('click',function(){
			
			$(cartid).stop().animate({
				right:0
			})
			var gg = new cart.cart();
			gg.sc_msg(url);
			gg.price();
			//gg.changeNum();
		})
		$(closeid).on('click',function(){
			$(cartid).stop().animate({
				right:-280
			})
		})

	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})