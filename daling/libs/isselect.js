define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.isSelect = function (){

      
		$('.confirm').on('click',function(){  //多选时确认和取消
			this.input = $(this).parent().parent().find('input');
			this.btrue = false;
			for (var i = 0; i < this.input.length; i++) {
				if(this.input.eq(i).is(":checked")){
					this.btrue = true;
				}
			}
			if(this.btrue){
				this.input.css('display','none');
				$(this).parent().parent().removeAttr("class")
			}	
		})
		$('.cancel').on('click',function(){
			$(this).parent().parent().find('input').css('display','none');
			$(this).parent().parent().removeAttr("class")
		})
			
	
	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})