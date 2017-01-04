define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.spanMove = function (id,target){

      
		$(id).find('dl').on('mouseenter',function(){
			//console.log($(this).find('dt').find('span'))
			$(this).find('dt').find('span').stop().animate({
	            bottom:0
	        })
        })
        $(id).find('dl').on('mouseleave',function(){
			//console.log(this)
			$(this).find('dt').find('span').stop().animate({
	            bottom:target
	        })
        })

	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})