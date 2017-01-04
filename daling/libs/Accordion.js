define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.Accordion = function (id){
    	$(id).find('dl').on('mouseenter',function(){
			//console.log($(this).index())  
			if($(this).index() != 0){
				$(this).removeClass('active');
				$(id).find('dl').eq(0).attr('class','beauty1 active');
			}else{
				//console.log(1)
				$(id).find('dl').eq(0).attr('class','beauty1');
			}
			
			
		})
		$(id).find('dl').on('mouseleave',function(){
			if($(this).index() != 0){
				$(this).addClass(' active');
				$(id).find('dl').eq(0).attr('class','beauty1');
			}else{
				$(id).find('dl').eq(0).attr('class','beauty1 active');
			}
			
		})
		$(id).on('mouseleave',function(){    //移出时要变成初始状态
			$(id).find('dl').eq(0).attr('class','beauty1').siblings().attr('class','beauty1 active');
		})
      
	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})