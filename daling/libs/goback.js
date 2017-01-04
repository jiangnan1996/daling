define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.goBack = function (goback){

     
		$(goback).click(function(){
			$('body,html').stop().animate({
				scrollTop:0
			});
		})
	
	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})