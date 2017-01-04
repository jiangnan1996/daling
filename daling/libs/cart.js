define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    var cookie = require('cookie')
    //console.log(cookie);
    cookie($)
    //console.log($.cookie);
    until.cart = function (id,url){
    	var _this = this;
        //console.log(1)
       // console.log($(id).find('.btn'))
    	$(id).on('click','.btn',function(){
    		
    		var id = this.id;
            var price = $(this).attr('data-price');
            //console.log(price)
    		var first = $.cookie('goods')==null?true:false;
    		this.same = false;
    		if(first){
    			//console.log(2)
    			$.cookie('goods','[{id:'+id+',num:1,price:'+price+'}]',{path:"/"})
    		}else{
    			this.str = $.cookie('goods')
    			//console.log(this.str)
    			this.arr= eval(this.str);

    			for(var i in this.arr){
    				if(this.arr[i].id == id){		
						this.arr[i].num = this.arr[i].num + 1;  
						var cookieStr = JSON.stringify(this.arr);
						$.cookie('goods',cookieStr,{path:"/"});
						this.same = true;
					}
    			}

    			if(!this.same){
					var obj  = {id:id,num:1,price:price};
					this.arr.push(obj);
					var cookieStr = JSON.stringify(this.arr);
					$.cookie('goods',cookieStr,{path:"/"});
				}
    		}
    		_this.scCar();
    		_this.sc_msg(url);
            _this.price();
           
    	})
      
        
	
       
    }
    until.cart.prototype.scCar = function(){
    	this.sc_str = $.cookie('goods')
    	//console.log(this.sc_str)
    	if(this.sc_str){                           //判断   ?如果cookie为空 数字为零
    		this.sc_obj = eval(this.sc_str);
    		this.sc_num = 0;

    		for(var i in this.sc_obj){
    			this.sc_num += Number(this.sc_obj[i].num)
    			
    			//console.log(this.sc_obj[i].num)

    		}
    		//console.log(this.sc_str)
    		
    	}else{
            this.sc_num = 0;
            $('.cart_bg').show()
        }
        $('#cart_number').html(this.sc_num);
        $('.sums').html(this.sc_num)
        $('#cart_num').html(this.sc_num)
    }
    until.cart.prototype.sc_msg = function(url){
    	var _this = this
    	//console.log(1)
			$.ajax({
				url:url,
				type:'GET',
				success:function(res){
					//console.log(1)
					var sc_str = $.cookie('goods');
					if(sc_str){
                        $('.cart_bg').hide()
						var sc_obj = eval(sc_str);
						var sc_num = 0 ;
						var html = ''; 
						for(var i in sc_obj){	

							html += '<dl class="commodity clear"><dt><img src="../img/'+res[sc_obj[i].id].src+'" alt=""></dt><dd><div class="cart_title"><p>'+res[sc_obj[i].id].introduce+'</p><a href="javascript:;" class="cut">-</a><span id="num">'+sc_obj[i].num+'</span><a href="javascript:;" class="add">+</a></div><div class="cart_price"><span>￥'+res[sc_obj[i].id].price+'</span><i class="delete">删除</i></div></dd></dl>'
						}
						
						$('#commodity_list').html(html);
					}
                    _this.deletecart();
                    _this.changeNum();
				}
			})


		}
    until.cart.prototype.deletecart = function(){   //删除
        var _this = this;
        //console.log($('.delete'))
        $('.delete').on('click',function(){
            
            this.str = $.cookie('goods');
            this.arr = eval(this.str);
            this.arr.splice($(this).parent().parent().parent().index(),1) 
            //index找到parent  才能正确的找到对应下标
            this.obj = JSON.stringify(this.arr);
            $(this).parent().parent().parent().remove();
            $.cookie('goods',null,{path:'/'});
            if(this.arr.length != 0){
                $.cookie('goods',this.obj,{path:'/'});
            }
            _this.scCar();
            _this.price();
        })
    }
    until.cart.prototype.price = function(){  //计算价钱
        this.sc_str = $.cookie('goods')
        //console.log(this.sc_str)
        if(this.sc_str){
            this.sc_obj = eval(this.sc_str);
            this.sc_price = 0;

            for(var i in this.sc_obj){
                this.sc_price +=this.sc_obj[i].num * Number(this.sc_obj[i].price)
                
            }
           
        }else{
            this.sc_price = 0;
        }

        $('.Total').html(this.sc_price);
    }
    until.cart.prototype.changeNum = function(){   //点击加减改变数量
        //console.log($('.add'))
        var _this = this;
        $('.add').on('click',function(){
            this.num =$(this).prev().html();
            this.num ++;
            $(this).prev().html(this.num)
            this.str = $.cookie('goods');
            this.arr = eval(this.str);
            console.log($(this).parent().parent().parent().index())
            this.arr[$(this).parent().parent().parent().index()].num = this.num;
            $.cookie('goods',null,{path:'/'})
            this.obj = JSON.stringify(this.arr)
            $.cookie('goods',this.obj,{path:'/'})
            _this.scCar();
            _this.price();
        })
        $('.cut').on('click',function(){
            this.num =$(this).next().html();
            this.num --;
            if(this.num<=1){
                this.num = 1;
            }
                $(this).next().html(this.num)
                this.str = $.cookie('goods');
                this.arr = eval(this.str);
                console.log($(this).parent().parent().parent().index())
                this.arr[$(this).parent().parent().parent().index()].num = this.num;
                $.cookie('goods',null,{path:'/'})
                this.obj = JSON.stringify(this.arr)
                $.cookie('goods',this.obj,{path:'/'})

            _this.scCar();
            _this.price();
        })
    }


    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})