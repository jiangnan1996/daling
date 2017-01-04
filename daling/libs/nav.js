define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.Nav = function (parentid,childid){

      
		$(parentid).on('mouseover',function(){
			//console.log($('.two_dl')[0])
			$(childid).eq($(this).index()).css('display','block')
		})
		$(parentid).on('mouseout',function(){
			//console.log($('.two_dl')[0])
			$(childid).eq($(this).index()).css('display','none')
		})
	
	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})