define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.keySearch = function (inputid,listid){
    	var _this = this
      $(inputid).on('keyup',  function(){
			    this.val = $(inputid).val();  // val是关键字
			    console.log(this.val)
				var oScript = document.createElement('script');
				oScript.src = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+this.val+'&cb=_this.nh()';
			
				document.body.appendChild( oScript );
				document.body.removeChild( oScript );
		});
		
       
    }
   until.keySearch.prototype.nh = function( res ){//  定义回调函数nh( { json数据 } )
                //  这里的res是后台返回的数据，传递给前台使用。
				this.str = '';
				for( var i=0;i<res.s.length;i++){
					this.str += '<li><a href="https://www.baidu.com/s?wd='+res.s[i]+'" target="_blank">'+res.s[i]+'</a></li>';
					
				};
				oUl.innerHTML = this.str;
				oUl.style.display = 'block';
				
	};
	
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})