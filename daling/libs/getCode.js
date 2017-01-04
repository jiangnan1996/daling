define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.getCode = function (){  //获取验证码

      	this.a = String(Math.round(Math.random()*9));
		this.b = String(Math.round(Math.random()*9));
		this.c = String(Math.round(Math.random()*9));
		this.d = String(Math.round(Math.random()*9));

		this.num = this.a + this.b + this.c + this.d; 
		
		return this.num;

	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})