define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.ceil = function (clickid,classid){

      $('.'+clickid).on('click',function(){
	      			$('.'+clickid).attr('class',clickid)
	      			console.log($(this).index())
	      			if($(this).index() == 0 ||$(this).index() == 2){
	      				
	      				$('body').stop().animate({
	      					scrollTop:$('#parameter').offset().top
	      				})
	      				$('.'+clickid).eq(0).addClass(classid)
	      				$('.'+clickid).eq(2).addClass(classid)
	      			}else{
	      				console.log(111)
	      				$('body').stop().animate({
	      					scrollTop:$('#services').offset().top
	      				})
	      				$('.'+clickid).eq(1).addClass(classid)
	      				$('.'+clickid).eq(3).addClass(classid)
	      			}
	     })
		

     
	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})