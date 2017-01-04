define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.moreChoose = function (clickid,changeid,classid){

      
		
		//console.log($dd);
		$(clickid).on('click',function(){  //列表页更多选择
			//console.log($(changeid).hasClass(classid))
			if(classid == 'active'){
				if($(changeid).hasClass(classid)){
					$(changeid).find('input').css('display','none');
					$(changeid).removeAttr("class");
					$(clickid).siblings().show()
				}else{
					
					$(changeid).find('input').css('display','inline-block');
					$(changeid).addClass(classid);
					$(clickid).siblings().hide()
				}
			}else{
				if($(changeid).hasClass(classid)){
					
					$(changeid).removeClass(classid);
				}else{
					
					
					$(changeid).addClass(classid);
				}
			}	
		})

	

	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})