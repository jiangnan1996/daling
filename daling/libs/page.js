define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    var paging = require('paging')
    var span = require('span')

   
    paging($);
   // console.log($('#pageToolbar').pagination)
    until.pageation = function (showNum){  //获取json数据
    	
		$.ajax({
			url:"../data/data.json",
			type:"GET",
			success:function(res){

				until.page(res,showNum);
				until.classification(res,'.classify')
				until.classification(res,'.classify1')
			}
		})
    }
    until.page = function(res,showNum){  //分页
    	//res没有检索时是全部数据，检索之后是检索后的数组
    	var pageNum = Math.ceil(res.length / showNum);
		$('#pageToolbar').pagination(pageNum,{
			items_per_page:1,
			num_display_entries:2,
			current_page:0,
			num_edge_entries:2,
			prev_text:"上一页",
			next_text:"下一页",
			callback:function(index){
							//console.log(index);
				var html = '';
				for (var i = showNum*index; i < (index+1)*showNum; i++) {
					if(i<res.length){
						if(i%4 != 3){  //判断是否添加类名
							html+='<dl class="new1"><dt><a href="details.html?id='+res[i].num+'"><img src="../img/'+res[i].src+'" alt=""><a><span id="'+res[i].num+'" data-price ="'+res[i].price+'" class="btn"><b>加入购物车</b><i></i></span></dt><dd><h3 class="clear"><em>￥</em><b>'+res[i].price+'</b><span>￥'+res[i].oldprice+'</span><i>'+res[i].Collection+'人收藏</i></h3><p><span>4折/</span><a href="">'+res[i].introduce+'</a></p></dd></dl>'
						}else{
							html+='<dl class="new1 d-right"><dt><a href="details.html?id='+res[i].num+'"><img src="../img/'+res[i].src+'" alt=""><a><span id="'+res[i].num+'" data-price ="'+res[i].price+'" class= "btn"><b>加入购物车</b><i></i></span></dt><dd><h3 class="clear"><em>￥</em><b>'+res[i].price+'</b><span>￥'+res[i].oldprice+'</span><i>'+res[i].Collection+'人收藏</i></h3><p><span>4折/</span><a href="">'+res[i].introduce+'</a></p></dd></dl>'
						}
					}
				}
							
				$('#list').html(html);
				new span.spanMove('#list',-30);
			}
		})
    }
    until.classification = function (res,classid){  //点击分类  显示在上面
		
		$(classid).on('click','a', function(){
			
			this.html = '';
			this.$a = $(this).parent().find('a');
			if(classid == '.classify'){
				this.html = '<li><div class="select">'+$(this).html()+'<span></span><div class="select_none"><ul>'
				for (var i = 0; i < this.$a.length; i++) {
					//this.arr.push(this.$a[i].html());
					this.html +='<li>'+this.$a.eq(i).html()+'</li>'
				}
				this.html += '</ul></div></div><span></span></li>'
			}else{
				this.html +='<li><div class="select1 clear">'+$(this).html()+'<a class="close1" href="">×</a></div></li>'
			}

			var li = $(this.html)
			$('#before').before(li);
			$(this).parent().parent().parent().hide()
			//获取点击的内容  
			this.val = $(this).html()
			this.arr1 = []
			for (var j = 0; j < res.length; j++) {
				if(res[j].classify == this.val){  //将符合条件的放在数组里
					this.arr1.push(res[j]);
					until.page(this.arr1,40)
					console.log(3)
				}
			}
			
			
		})
		until.toggle('.select','.select_none');

    }
    until.toggle = function (clickid,toggleid){   //点击分类  出现选项

		$(clickid).on('click',function(){
			//console.log($(this)[0])
			$(this).children().eq(2).toggle();	
			$('.select_none').find('li').on('click',function(){
				$('.select7').html($(this).html())
			})
		})
	
    }
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})