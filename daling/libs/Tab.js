define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    var span = require('span')
    var cart = require('cart')
    until.tab = function (tabid,innerid){
    	var data
		$.ajax({
			url:"data/data.json",
			type:"GET",
			success:function(res){
				//console.log(res)
				data = res;
			}	
		})
		var _this = this;
		$(tabid).find('li').on('click',function(){

			this.html = ''
			$(tabid).find('li').removeClass('active');
			$(this).addClass('active');
			//console.log($(this).attr('data-id'))
			for (var i = 0; i < data.length; i++) {
				if(data[i].id){
					//console.log(1);
					if($(this).attr('data-id') == data[i].id){
					    this.html +='<dl class="goodlist1"><dt><img src="img/'+data[i].src+'" alt=""><span id="'+data[i].num+'" data-price ="'+data[i].price+'" class="btn"><b>加入购物车</b><i></i></span></dt><dd><h3 class="clear"><em>￥</em><b>'+data[i].price+'</b><span>￥'+data[i].oldprice+'</span><i>'+data[i].Collection+'人收藏</i></h3><p><a href="">'+data[i].introduce+'</a></p><div class="comment clear"><span><img src="img/comment1.jpg" alt=""></span><div class="comment-text"><p>'+data[i].comment+'</p>共有257条评论 好评率98% >></div></div></dd></dl>' 
					}
				}
			}
			$(innerid).html(this.html);
			new span.spanMove('#good-list',-30);  //在点击外面   不然每点击一下就会new一次
			
			
		})
      
		new cart.cart('#good-list','data/data.json')

	
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})