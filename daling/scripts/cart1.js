define(function(require,exports,module){

	var $ = require('jquery-1.11.3')
	var close = require('close');
   	var se = require('Settlement')
	$(function(){
		
		$('#footer').load('../html/footer.html');
		new close.Close('#close','#header_register');
		new se.Settlement();  //拼接购物车里的数据
	})
	$('.allclick').prop('checked',true)
    var user = $.cookie('name');  //获取登录的用户名
	//console.log(user)
	if(user){
		$('#username').html('尊敬的'+user)
	}         
	
	

})














