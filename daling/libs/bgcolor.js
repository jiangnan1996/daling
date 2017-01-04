define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.Bgcolor = function (id){

      
		
		$(id).hover(function(){
			$(this).css('background-color','#ef7486')
		},function(){
			$(this).css('background-color','#333')
		})
	

	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})