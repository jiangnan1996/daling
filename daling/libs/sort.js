define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    until.sort = function (){
		$('.sort').on('click',function(){ 
		 	
		    	this.arr = [];
		    	var _this =this;
		      	$.ajax({
			      	url:"../data/data.json",
			      	type:"GET",
			      	success:function(res){
			      		for (var i = 0; i < res.length; i++) {
			      			_this.arr.push(Number(res[i].price))
			      		}
			      		//将数组进行排序   a-b是从小到大  a+b反过来
			      		_this.arr = _this.arr.sort(function(a,b){
			      			return a -b;
			      		})
			      		this.html = ''
			      		//按排序后的重新拼接
			      		for(var j = 0;j< 40 ;j++){  //排序后数组的循环在外面  
			      			for (var k = 0; k < res.length; k++) {
			      				if(parseInt(res[k].price) == _this.arr[j]){
			      					 	if(j%4 != 3){
			      					 		
											this.html+='<dl class="new1"><dt><a href="details.html?id='+res[k].num+'"><img src="../img/'+res[k].src+'" alt=""><a><span id="'+res[k].num+'" data-price ="'+res[k].price+'" class="btn"><b>加入购物车</b><i></i></span></dt><dd><h3 class="clear"><em>￥</em><b>'+res[k].price+'</b><span>￥'+res[k].oldprice+'</span><i>'+res[k].Collection+'人收藏</i></h3><p><span>4折/</span><a href="">'+res[k].introduce+'</a></p></dd></dl>'
										}else{
											this.html+='<dl class="new1 d-right"><dt><a href="details.html?id='+res[k].num+'"><img src="../img/'+res[k].src+'" alt=""><a><span id="'+res[k].num+'" data-price ="'+res[k].price+'" class= "btn"><b>加入购物车</b><i></i></span></dt><dd><h3 class="clear"><em>￥</em><b>'+res[k].price+'</b><span>￥'+res[k].oldprice+'</span><i>'+res[k].Collection+'人收藏</i></h3><p><span>4折/</span><a href="">'+res[k].introduce+'</a></p></dd></dl>'
										}
									res.splice(k,1)	
									break;
			      				}
			      			}
			      		}
			      		$('#list').html(this.html);
			      	}

		      })
		})  
       
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})