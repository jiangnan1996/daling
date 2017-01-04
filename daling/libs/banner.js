define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.Banner = function (bannerid,Tabid){

    
		this.index = 0
		var _this = this;
		this.aLi = $(bannerid).find('li');
		this.aTab = $(Tabid).find('li');
		
		//点击切换图片
		this.aTab.on('click',function(){
			//console.log(this)
			_this.Tab(this);
		})

		//定时器
		clearInterval(this.timer);
		this.timer = setInterval(function(){
			_this.cut();
		},3000);
		$(Tabid).add(this.aLi).on('mouseenter',function(){
			//console.log(1)
			clearInterval(_this.timer);
		})
		$(Tabid).add(this.aLi).on('mouseleave',function(){
			//console.log(2)
			_this.timer = setInterval(function(){
				_this.cut();
			},3000);
		})
		
	}
	//切换图片
	until.Banner.prototype.cut = function(){
		if (this.index < this.aLi.length - 1){
			this.index++;
		}else{
			this.index = 0; 
		}
		//console.log(this.index)
		this.aLi.stop().fadeOut(100).eq(this.index).stop().fadeIn(600);
		this.aTab.css('background','rgba(0,0,0,.3)').eq(this.index).css('background','rgba(0,0,0,.7)');
	}
	until.Banner.prototype.Tab = function(index){
		//console.log($(index).index())
		this.index = $(index).index();
		this.aLi.stop().fadeOut(100).eq(this.index).stop().fadeIn(600);
		this.aTab.css('background','rgba(0,0,0,.3)').eq(this.index).css('background','rgba(0,0,0,.7)');
	}
	
       
    
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})