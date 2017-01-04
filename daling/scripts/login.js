define(function(require,exports,module){

	var $ = require('jquery-1.11.3')
	
   	var register = require('inputfcous'); 
  	var gc = require('getCode');
  	var cc = require('clickchange');
  	
	$(function(){
		
		$('#footer').load('../html/footer.html');
		new cc.clickChange('.login_title')  //点击变换登录注册
		new register.register();  //登录注册验证
		
	})
	$('#code1').html(gc.getCode()) //把验证码写入页面中
	
	

})
