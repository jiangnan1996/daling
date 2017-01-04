define(function(require,exports,module){
	var until = {};
    var $ = require('jquery-1.11.3')
    /*until.classification = function (classid){

     
		
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
			new toggle('.select','.select_none');
			
		})

	

	
       
    }*/
    

    //3.模块暴露（让别人能用到这个模块）
    module.exports = until;
})