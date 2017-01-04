define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.isShow = function (parentid,childid){

      
		this.bshow = true;
		var _this = this
		$(parentid).on('mouseover',function(){
			
			$(childid).css('display','block')
			
		})
		
		$(parentid).on('mouseout',function(){
			//console.log(_this.bshow)
			setTimeout(function(){
				
				if(_this.bshow){
					
					$(childid).css('display','none')
					
				}
			},500)
				
		})
		
		$(childid).on('mouseover',function(){
			
			_this.bshow = false;

			
		})
		$(childid).on('mouseout',function(){
			
			$(this).css('display','none');
			_this.bshow = true;
			
		})

	
	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})