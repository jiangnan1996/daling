define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    var cookie = require('cookie')
    cookie($)
    until.Settlement = function (){  //购物车结算拼接
      var _this = this;
      this.cookie = $.cookie('goods');
      this.arr = eval(this.cookie);
    
		$.ajax({
			url:'../data/data.json',
			type:'GET',
			success:function(res){
				this.html = '';
                if(_this.cookie){
    				for(var j=0 ; j < _this.arr.length; j++){
    					
    					for (var i = 0; i < res.length; i++) {
    					
    						if(_this.arr[j].id == i){
    							this.total = _this.arr[j].num * Number(_this.arr[j].price)
    							this.html +='<ul class="cart_goods clear"><li><input type="checkbox" class ="checkbox" checked ="checked"><div class="img"><img src="../img/'+res[i].src+'" alt=""></div></li><li class="goods">'+res[i].introduce+'</li><li class="price">'+res[i].price+'</li><li> <div class="cut">-</div><div class="sums">'+_this.arr[j].num+'</div><div class="add">+</div></li><li class="Total_price"><span class="Total_price1">'+this.total+'</span>.00</li><li class="delete">删除</li></ul>'
    						}
    					}
    				}
                }
				$('#list').html(this.html)
				_this.clickcheckbox();
                _this.delete();
                _this.sc_car();
                _this.Number()

			}

		})

		

       
    }
    until.Settlement.prototype.clickcheckbox = function(){///判断多选框是否选中

    	
    	var _this = this;

    	$('.checkbox').on('click',function(){
    		

    		if(!$(this).is(":checked")){
    			_this.count1 -= Number($(this).parent().parent().find('.Total_price1').html());
                _this.sums1 -= Number($(this).parent().parent().find('.sums').html());
                $('.Total').html(_this.count1)
                $('#num1').html(_this.sums1)

    			
    		}else{
    			
                _this.count1 += Number($(this).parent().parent().find('.Total_price1').html());
                _this.sums1 += Number($(this).parent().parent().find('.sums').html());
                $('.Total').html(_this.count1)
                $('#num1').html(_this.sums1)  //直接用下面计算的就可以,不用另写变量
    		}
    	})
    	$('.allclick').on('click',function(){
    		
           // console.log($(this).is(":checked"))
    		if(!$(this).is(":checked")){
    			$('.allclick').prop('checked',false);//jq中不能用attr设置checkbox属性
    			$('.checkbox').prop('checked',false);
                 _this.count1 = 0;
                _this.sums1 = 0;
                 $('#num1').html(0)
                $('.Total').html(0)
    		}else{
                $('.allclick').prop('checked',true)
                $('.checkbox').prop('checked',true);
                _this.sc_car();
            }
    	})
    	
    }
    until.Settlement.prototype.delete = function(){
        this.str = $.cookie('goods');
        this.arr1 = eval(this.str);
        var _this = this;
        $('.delete').on('click',function(){
            
            _this.arr1.splice($(this).parent().index(),1)
            $.cookie('goods',null,{path:'/'})
            this.data = JSON.stringify(_this.arr1)
            if(_this.arr1.length != 0){
                $.cookie('goods',this.data,{path:'/'})
            }
            $(this).parent().remove();
            _this.sc_car();
            
        })
    }
    until.Settlement.prototype.sc_car = function(){
        this.sums1 = 0;
        this.count1 = 0;
        this.str2 = $.cookie('goods');
        this.arr2 = eval(this.str2);
        if(this.str2){
            for (var k = 0; k < this.arr2.length; k++) {
                this.sums1 += this.arr2[k].num; 
                this.count1 += this.arr2[k].num * Number(this.arr2[k].price)
            }
        }else{
            this.sums1 = 0;
            this.count1 = 0;
        }
        //console.log(this.sums)
        $('#num1').html(this.sums1)
        $('.Total').html(this.count1)
    }
    until.Settlement.prototype.Number = function(){
        var _this = this;
        $('.add').on('click',function(){
            this.num =$(this).prev().html();
            this.num ++;
            $(this).prev().html(this.num)
            this.str = $.cookie('goods');
            this.arr = eval(this.str);
            this.arr[$(this).parent().parent().index()].num = this.num;
            $.cookie('goods',null,{path:'/'})
            this.obj = JSON.stringify(this.arr)
            $.cookie('goods',this.obj,{path:'/'})
            _this.sc_car();
            this.total = this.num * _this.arr[$(this).parent().parent().index()].price
            $('.Total_price1').eq($(this).parent().parent().index()).html(this.total)
        })
        $('.cut').on('click',function(){
            this.num =$(this).next().html();
            this.num --;
            if(this.num<=1){  //减的时候加一个判断
                this.num = 1;
            }
                $(this).next().html(this.num)
                this.str = $.cookie('goods');
                this.arr = eval(this.str);
                this.arr[$(this).parent().parent().index()].num = this.num;
                $.cookie('goods',null,{path:'/'})
                this.obj = JSON.stringify(this.arr)
                $.cookie('goods',this.obj,{path:'/'})

                _this.sc_car();
                this.total = this.num * _this.arr[$(this).parent().parent().index()].price
                $('.Total_price1').eq($(this).parent().parent().index()).html(this.total)
        })
    }

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})