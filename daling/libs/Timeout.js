define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.Timeout = function(className,date){

      
		
		var _this = this;
		this.$Box = $(className);
		this.endtime = new Date(date);	
		//this.TDown();	//调用计算剩余时间函数	
		var timer= setInterval(function(){
				_this.TDown();
		},1000);

	}
	until.Timeout.prototype.TDown = function(){
		
		//if (times>0) {
			// 用延时器延时1秒调用自己，
			
		//};
		
		var today = new Date();
		var times = this.endtime.getTime()-today.getTime();
		//console.log(times)
		//剩余的天数，
		//day_show = Math.floor(times/(1000*60*60*24));	
		//剩余的小时，
		hours_show = Math.floor(times/(1000*60*60));
		// 剩余分钟
		minutes_show = Math.floor(times/(1000*60)%60);
		// 剩余秒数
		seconds_show = Math.floor(times/1000%60);
		// 拼接
		this.tT = '距闪购结束<span>'+hours_show+'</span><i>:</i><span>'+minutes_show+'</span><i>:</i><span>'+seconds_show+'</span>';
		this.$Box.html(this.tT);
	}

	
       
    
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})