$(function( ){
		    //数字验证 
    $("#getcode_num").click(function(){ 
		//alert("abcd");return false;
        $(this).attr("src",'/feedback/code.php?' + Math.random()); 
    }); 
	$('.feedbackbotton').mouseover(function(){
		$this=$(this);
		$this.attr('src','/ce_images/feedbackbtn02.gif');
	}).mouseout(function(){
		$this.attr('src','/ce_images/feedbackbtn01.gif');
	}).click(function(){
		$('.feedback').show();
	});
	//提交
	$('.feedbackbtn').click(function(){
	//ajax 
		var name  = $('#name').val();
		var tel = $('#tel').val();
		var email = $('#email').val();
		var message = $('#message').val();
		var code = $('#code_num').val();

		if(name == "" || name == "填写姓名"){
			alert("请填写您的姓名");
			return false;
		}
		if(tel == "" || tel == "手机号"){
			alert("请填写您的手机号");
			return false;
		}
		var reg_tel = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/;
		var Flag_tel = reg_tel.test(tel);
		if(!Flag_tel){
			alert("手机号格式输入不正确");
			return false;
		}
		if(email == "" || email == "电子邮箱"){
			alert("请填写您的电子邮箱");
			return false;
		}
		var reg_email = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		var Flag_email = reg_email.test(email);
		if(!Flag_email){
			alert("邮箱格式输入不正确");
			return false;
		}
		if(message == "" || message == "留言内容"){
			alert("请填写您对我们的建议");
			return false;
		}
		if(code == "" || code == "验证码"){
			alert("请填写验证码");
			return false;
		}
		$.post(
			'/feedback/feedback.php',
			{
				name:name,
				tel:tel,
				email:email,
				message:message,
				code:code
			},
			function (data) //回传函数
			{	//alert(data);return false;
				if(data == -1){
					alert("提交失败");
				}else if(data == 5){
					alert("同个ip每天只能提交５次，您本次提交失败");
					parent.location.reload();
				}else if(data == -2){
					alert("验证码输入有误");
					//parent.location.reload();
				}else{
					if(data == 1){
						$('.feedbackforms').hide();
						$('.feedbackhint').show();
					}
				}
			}
		);
		
	});
	//关闭
	$('.feedbackcolse').click(function(){
		$('.feedback').hide();
		parent.location.reload();
	});

	scrollAd();
	$(window).scroll(scrollAd);
	$(window).resize(scrollAd);
	function scrollAd(){
		var conheight = $('.feedback').height();
		var offsetHeight = $(window).height() + $(document).scrollTop(),
			offsetWidth = $(window).width();
		$('.feedbackbotton').animate({top:offsetHeight-760+500},{duration:200,queue:false}).animate({left:offsetWidth-(offsetWidth-1100)/2});;
		$('.feedback').animate({top:$(document).scrollTop()},{duration:200,queue:false});
	};

});
