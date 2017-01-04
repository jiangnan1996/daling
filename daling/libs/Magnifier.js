define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.Magnifier = function (smallbox,bigbox,smallul){

      $(smallbox).hover(function(){
      	
      		$('#move').css('display','block');
      		$(bigbox).css('display','block');

      		$('#mask').on('mousemove',function(event){
      			//console.log($('#move').width())
      			this.cx = event.offsetX - $('#move').width()/2
      			this.cy = event.offsetY - $('#move').height()/2
      			
      			//边界检测
      			this.cx = this.cx <0? 0: this.cx;
      			this.cx = this.cx > $('#mask').width()- $('#move').width()?  $('#mask').width()- $('#move').width() :this.cx ;
      			
      			this.cy = this.cy <0? 0 : this.cy;
      			this.cy = this.cy > $('#mask').height()- $('#move').height()?   $('#mask').height()- $('#move').height() :this.cy;

      			$('#move').css({
      				'left':this.cx,
      				'top':this.cy
      			})
                        //计算大图片的位移
      			this.scaleX =this.cx / ($('#mask').width() - $('#move').width());
      			this.scaleY =this.cy / ($('#mask').height() - $('#move').height());
      			this.moveX = ($('#bigimg').width() - $(bigbox).width()) * this.scaleX;
      			this.moveY = ($('#bigimg').height() - $(bigbox).height()) * this.scaleY;
      			
      			$('#bigimg').css({
      				left:-this.moveX,
      				top:-this.moveY
      			})


      		})
      },function(){
      		$('#move').css('display','none');
      		$(bigbox).css('display','none');
      })
      $(smallul).on('click','img',function(){  //改变大小图片的路径
      		
      		this.src = $(this).attr('src');
      		$('#img').find('img').eq($(this).index()).attr('src',this.src).css('display','block').siblings().css('display','none')
      		$(bigbox).find('img').eq($(this).index()).attr('src',this.src).css('display','block').siblings().css('display','none')
      })
      this.left = $(smallul).find('li').width() + 10
      this.index = $(smallul).find('li').length - Math.floor($('#small_list').width()/this.left);
     // console.log(this.index)
      $(smallul).width( $(smallul).find('li').length * this.left)
      this.num = 0
      var _this = this
      $('#left').on('click',function(){
      	if(_this.num < _this.index -1 ){
      		_this.num ++;
      		$(smallul).stop().animate({
      			left:-_this.num * _this.left
      		})
      		
      	}
      })
      //下面向右滑动的小列表
      $('#right').on('click',function(){
      		if(_this.num > 0){
      			_this.num --;
      			
      			$(smallul).stop().animate({
      				left:-_this.num * _this.left
      			})
      			;
      		}
      })

    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})