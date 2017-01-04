define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.scrollshow = function (id,ceilid,clickid,classid){

      
		var _this = this;
		
		this.ch = document.documentElement.clientHeight || document.body.clientHeight;
		window.onscroll = function(){  //只能有一个
			
			//console.log($(ceilid))
			if($('body').scrollTop()){
				_this.scroll = $('body').scrollTop();
			}else if($('html').scrollTop()){
				_this.scroll = $('body').scrollTop();
			}

				
			//console.log(_this.scroll+':'+ _this.ch)
			if(_this.scroll > _this.ch){
				$(id).css('display','block');
			}else{
				$(id).css('display','none');
			}

		//	console.log(_this.scroll >$('#parameter').offset().top)
			//滚动换类名
			if(ceilid){   //判断有没有这个
				if(_this.scroll >$('#parameter').offset().top&&_this.scroll <$('#services').offset().top-400){
					
					$('.'+clickid).attr('class',clickid)
					$('.'+clickid).eq(0).addClass(classid);
					$('.'+clickid).eq(2).addClass(classid);

					$(ceilid).css('display','block')
				}else if(_this.scroll >$('#services').offset().top-400){
					
					$('.'+clickid).attr('class',clickid)
					$('.'+clickid).eq(1).addClass(classid);
					$('.'+clickid).eq(3).addClass(classid);

					$(ceilid).css('display','block')
				}else{
					
					$(ceilid).css('display','none')
				}
			}
		}
		
	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})