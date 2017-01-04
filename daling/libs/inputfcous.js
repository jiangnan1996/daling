define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')

    var gc = require('getCode');
    var cookie = require('cookie')
    cookie($)
    //console.log(getcode.getCode())
    until.register = function (){
    	
    	
    	//console.log($(Rusername))
    	this.arr = [0,0,0,0,0];   //判断所有的是否正确填写
    	this.value = [0,0,0,0,0]  //储存每个input框的值
    	this.getPhonecode();
	    this.focus();
	    this.blur();
	    this.btn();
		
       
    }
    until.register.prototype.getPhonecode =function(){  //在控制台显示验证码
		this.phcode = gc.getCode()
		
		var _this = this
		$('#getcode').on('click',function(){

			console.log(_this.phcode)
		})

	}
    until.register.prototype.focus = function(id){
    	 $('.txt,#login_password').on('focus',function(){
	      	//console.log(2)
	      //	console.log('我得焦了')
	      		$(this).parent().next().css('display','none');
	      		$(this).parent().css('border','1px solid #94d469')
	      		$(this).prev().css('background-positionX','10px')

	      })
    }
    until.register.prototype.blur = function(){
    	var _this = this
    	$('.txt').on('blur',function(event){
    		
    		
    		this.val =  $(this).val()

    		if($(this).attr('id') == 'Rusername'){

				var reg =  /^1(3|4|5|7|8)\d{9}$/;  //手机号
				this.judge = reg.test(this.val);
				this.tip1 = '请输入正确的手机号码';
				this.tip2 = '请输入手机号';
				_this.value[0] = this.val;
				_this.arr[0]=this.judge	;

    		}else if($(this).attr('id') == 'Rcode'){
    			var code = $('#code1').html();
    			this.judge =Boolean(this.val == code) 
    			this.tip1 = '验证码不正确';
				this.tip2 = '请输入验证码';
				_this.value[1] = this.val;
				_this.arr[1]=this.judge	;

    		}else if($(this).attr('id') == 'Rphcode'){
    			//console.log(this.val +'== '+_this.phcode)
    			this.judge =Boolean(this.val == _this.phcode) 
    			this.tip1 = '验证码不正确';
				this.tip2 = '请输入验证码';
				_this.value[2] = this.val;
				_this.arr[2]=this.judge	;

    		}else if($(this).attr('id') == 'Rpassword_val'){
    			var reg1 = /^\w{6,20}$/;
    			this.judge = reg1.test(this.val);
				this.tip1 = '请输入6-20位的密码';
				this.tip2 = '请输入密码';
				_this.value[3] = this.val;
				_this.arr[3]=this.judge	;

    		}else if($(this).attr('id') == 'login_user'){

				var reg =  /^1(3|4|5|7|8)\d{9}$/;  //手机号
				this.judge = reg.test(this.val);
				this.tip1 = '请输入正确的手机号码';
				this.tip2 = '请输入手机号';
				_this.value[4] = this.val;
			}
    		
	    	if(this.val){
	    		
		    	if(this.judge){          //用户名判断
		    		//	console.log('你输入对了')
		    			$(this).prev().css('border-right','1px solid #ccc')
		    			$(this).parent().css('border-color','#ccc')
		    			$(this).prev().css('background-positionX','-20px')
		    			
		    		
		    	}else{
		    		//console.log('格式不对')
		    			$(this).parent().css('border','1px solid #e14958')
		    			$(this).parent().next().css('display','block');
		    			$(this).parent().next().html(this.tip1)
		    	}
		    }else{
		    	//console.log('没填手机号')
		    	$(this).parent().css('border','1px solid #e14958')
		    	$(this).parent().next().css('display','block');
		    	$(this).parent().next().html(this.tip2)

		    }
		  
		})
		$("#choose").on('click',function(){  //判断所有是否填写正确
			 _this.arr[4] =$("#choose").is(':checked')
			   console.log(_this.arr)
			   var isShow = false;
			   for(var i = 0;i < _this.arr.length ;i++){
					
					if(_this.arr[i]){
						isShow = true;
					}else{

						isShow = false;
					}
				}
				console.log(isShow)
				if(isShow){
					$('#register_btn').css('background','#e14958')
				}
		})

		

    }
    until.register.prototype.btn = function(){
    	var _this = this;
    	
    	$('#register_btn').on('click',function(){   //注册
    		for(var i = 0;i < _this.arr.length ;i++){
				
				if(!_this.arr[i]){
					return false;
				}//都是true时才会执行ajax
					
			}
			$.ajax({

						url:'http://datainfo.duapp.com/shopdata/userinfo.php',
						data:{
							status:'register',
							userID:_this.value[0],
							password:_this.value[3]
						},
						type:'POST',
						success:function(res){
							switch(res){
								case '0':alert('重名了')
								break;
								case '1':
									alert('注册成功，去登陆吧');
									window.location.href = 'login.html';
								break;
								case '2':alert('后台错了')
								break;
							}
						}

			})

    	})
    	$('#login_btn').on('click',function(){  //登录
    		//console.log(_this.value[4])
    		var user = _this.value[4]
    		console.log(user)
    		$.cookie('name',user,{path:'/'});
    		var login_pw = $('#login_password').val();
    		$.ajax({

						url:'http://datainfo.duapp.com/shopdata/userinfo.php',
						data:{
							status:'login',
							userID:_this.value[4],
							password:login_pw
						},
						type:'GET',
						success:function(res){
							//console.log(2)
							switch(res){
								case '0':$('#tip').html('*用户名不存在')
								break;
								
								case '2':$('#tip').html('*用户名和密码不符')
								break;
								default:window.location.href="../index.html"
								break;
							}
						}

			})
    	})


    }



    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})