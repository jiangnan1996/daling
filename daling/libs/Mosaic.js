define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    var m = require('Magnifier')
    var cart = require('cart');
    until.Mosaic = function (){
    	this.str = window.location.search;
      console.log(this.str)
    	this.arr = this.str.split('=')
    	var _this = this;
    	//console.log(this.arr[1])
      	$.ajax({
      		url:"../data/data.json",
      		type:"GET",
      		success:function(res){
      			//console.log(1)
      			this.html = ''
      			for (var i = 0; i < res.length; i++) {
      				if(i == _this.arr[1]){
      					this.html +='<div id="Magnifier"><div class="img"><div id="mask"></div><div id="img"><img src="../img/'+res[i].src+'" alt="" class="smallimg"><img src="../img/move2.jpg" alt="" class="smallimg" style="display: none;"><img src="../img/move3.jpg" alt="" class="smallimg" style="display: none;"><img src="../img/move4.jpg" alt="" class="smallimg" style="display: none;"><img src="../img/move5.jpg" alt="" class="smallimg" style="display: none;"><img src="../img/move6.jpg" alt="" class="smallimg" style="display: none;"></div><div id="move"></div></div><div id="small_list"><div id="smallwrap"><ul id="small_ul"><li><img src="../img/'+res[i].src+'" alt=""></li><li><img src="../img/move2.jpg" alt=""></li><li><img src="../img/move3.jpg" alt=""></li><li><img src="../img/move4.jpg" alt=""></li><li><img src="../img/move5.jpg" alt=""></li><li><img src="../img/move6.jpg" alt=""></li></ul></div><div id="left"><</div><div id="right">></div></div><div id="bigbox"><img src="../img/'+res[i].src+'" alt="" id="bigimg"><img src="../img/move2.jpg" alt="" class="smallimg" style="display: none;"><img src="../img/move3.jpg" alt="" class="smallimg" style="display: none;"><img src="../img/move4.jpg" alt="" class="smallimg" style="display: none;"><img src="../img/move5.jpg" alt="" class="smallimg" style="display: none;"><img src="../img/move6.jpg" alt="" class="smallimg" style="display: none;"></div></div><div class="content"><p class="content_title">'+res[i].introduce+'</p><dl class="clear"><dt style="margin-top: 20px">达令价</dt><dd><p>￥<b>'+res[i].price+'</b></p><p>海外限时售价<em>￥1220.00</em><span>5.2折</span></p><p><s>直邮发货</s><i>税费:￥0.00</i><i>邮费:￥25.00</i></p></dd></dl><dl class="sale clear"><dt>促销信息</dt><dd><span>无敌价</span>此商品参加无敌价活动</dd></dl><h3>收藏:81</h3><dl class="buy_num clear"><dt>购买数量</dt><dd><div class="num">1</div><a href="javascript:;" id="up"></a><a href="javascript:;" id="down"></a></dd></dl><div class="buy_now"><a href="cart.html">立即购买</a></div><div class="addcart btn" id = "'+res[i].num+'" data-price ="'+res[i].price+'">添加到购物车</div></div>'
      				}
      			}
      			$('#Mosaic').html(this.html)


      			new m.Magnifier('.img','#bigbox','#small_ul')
      			new cart.cart('.content','../data/data.json')
      		}
      	})
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})