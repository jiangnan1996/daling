define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    /*until.toggle = function (clickid,toggleid){

      
		
		$(clickid).on('click',function(){
			//console.log($(this)[0])
			$(this).children().eq(2).toggle();	
			$('.select_none').find('li').on('click',function(){
				$('.select7').html($(this).html())
			})
		})
	

	
       
    }*/
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})