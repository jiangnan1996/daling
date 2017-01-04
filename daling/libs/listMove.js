define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.listMove = function (preid,nextid,wrapid,ulid){

      this.ul = $(ulid)
		this.wrap = $(wrapid);
		var _this = this;
		this.index = this.ul.height()/this.wrap.height()
		//判断this.index是否为整数  如果为整数  滑动的次数应该减1
		if(Math.floor(this.index) === this.index){   
			this.index = this.index -1
		}else{
			this.index = Math.floor(this.index)
		}
		//console.log(this.index)
		//this.ableHeight = this.ul.height() - this.wrap.height()  //ul和div的高度差
		this.top = this.wrap.height()   //每次滑动的高度
		//console.log(this.top+":"+this.index)
		this.move = 0;  //每次移动的距离
		this.num = 0;
		//index*jichu
		$(nextid).on('click',function(){  //向下
			
			//console.log(_this.move+':'+_this.ableHeight)
			
			if(_this.num < _this.index){
				//console.log(_this.num)
				_this.move = (_this.num+1)  * _this.top;
				//console.log(_this.move)
				_this.num ++;
				_this.ul.stop().animate({
					marginTop: -_this.move 
				})

			}
				
		})
		$(preid).on('click',function(){ //向上
			
			if( _this.move > 0 ){

				_this.move = (_this.num-1) * _this.top;
				//console.log(_this.move)
				//console.log(_this.num)
				_this.num --;
				_this.ul.stop().animate({
					marginTop: -_this.move
				})

			}

		})

	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})