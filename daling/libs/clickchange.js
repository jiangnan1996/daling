define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.clickChange = function (id){

      
		//console.log($(id).find('a'))
		$(id).find('a').on('click',function(){  //改变登录注册
			//console.log($(this).index())
			$(id).find('a').attr('class','')
			$(this).addClass('active');
			if($(this).index() == 0){
				
				$('#register').hide();
				$('#login').show();
			}else{
				
				$('#login').hide();
				$('#register').show();
			}
		})
	
	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})