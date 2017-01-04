define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.Close = function (flaseid,closeid){

     
		$(flaseid).on('click',function(){
			$(closeid).css('display','none');
		})
	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})