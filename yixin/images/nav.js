$(function(){
		//垂直导航高度
		var sH=$('.sides').height();
		var mH=$('.main').height();
		$(document).ready(function(e) {
            $('.sides').css('min-height',mH+'px');
        });
		//水平导航一级与二级切换
        var curr = '';
        if($(".main").hasClass("main_phjr")){
            curr = $(".phjr_nav");
        }else if($(".main").hasClass("main_cfgl")){
            curr = $(".cfgl_nav");
        }else if($(".main").hasClass("main_yxdt1")){
            curr = $(".yxdt_nav");
        }else if($(".main").hasClass("main_shzr")){
            curr = $(".shzr_nav");
        }else if($(".main").hasClass("main_about")){
            curr = $(".about_nav");
        }else {
            curr = $("a.sy").next();
        }
        $("ul.nav_list li").hover(function(){
            var $el = $(this);
            curr.hide();
            $el.children('a').addClass($el.attr('id')+'_c').end().children('div').show();
        }, function(){
            var $el = $(this);
            $el.children('div').hide();
            if($el.attr('id')!=curr.parent().attr('id')){
                $el.children('a').removeClass($el.attr('id')+'_c');
            }
            curr.show();
        });
	    //垂直导航dot切换
		$('.nav_list2 li.dot').mouseenter(function(){
				$(this).removeClass('dot');
				$(this).addClass('dot2');
			});	
		$('.nav_list2 li.dot').mouseout(function(){
				$(this).removeClass('dot2');
				$(this).addClass('dot');
			});	
	    //垂直导航一级plus minus切换
		$('.nav_list2 a.phjr,.nav_list2 span.phjr').mouseenter(function(){
			if($('.nav_list2 span.phjr').hasClass('plus_black')){
				$('.nav_list2 span.phjr').removeClass('plus_black');
				$('.nav_list2 span.phjr').addClass('plus_blue');
			}
			if($('.nav_list2 span.phjr').hasClass('minus_black')){
				$('.nav_list2 span.phjr').removeClass('minus_black');
				$('.nav_list2 span.phjr').addClass('minus_blue');
			}
			
			});
		$('.nav_list2 a.phjr,.nav_list2 span.phjr').mouseout(function(){
			if($('.nav_list2 span.phjr').hasClass('plus_blue')){
				$('.nav_list2 span.phjr').removeClass('plus_blue');
				$('.nav_list2 span.phjr').addClass('plus_black');
			}
			if($('.nav_list2 span.phjr').hasClass('minus_blue')){
				$('.nav_list2 span.phjr').removeClass('minus_blue');
				$('.nav_list2 span.phjr').addClass('minus_black');
			}
			
			});
		$('.nav_list2 a.cfgl,.nav_list2 span.cfgl').mouseenter(function(){
				if($('.nav_list2 span.cfgl').hasClass('plus_black')){
				$('.nav_list2 span.cfgl').removeClass('plus_black');
				$('.nav_list2 span.cfgl').addClass('plus_blue');
			}
			if($('.nav_list2 span.cfgl').hasClass('minus_black')){
				$('.nav_list2 span.cfgl').removeClass('minus_black');
				$('.nav_list2 span.cfgl').addClass('minus_blue');
			}
			});
		$('.nav_list2 a.cfgl,.nav_list2 span.cfgl').mouseout(function(){
				if($('.nav_list2 span.cfgl').hasClass('plus_blue')){
				$('.nav_list2 span.cfgl').removeClass('plus_blue');
				$('.nav_list2 span.cfgl').addClass('plus_black');
			}
			if($('.nav_list2 span.cfgl').hasClass('minus_blue')){
				$('.nav_list2 span.cfgl').removeClass('minus_blue');
				$('.nav_list2 span.cfgl').addClass('minus_black');
			}
			});
		$('.nav_list2 a.yxdt,.nav_list2 span.yxdt').mouseenter(function(){
				if($('.nav_list2 span.yxdt').hasClass('plus_black')){
				$('.nav_list2 span.yxdt').removeClass('plus_black');
				$('.nav_list2 span.yxdt').addClass('plus_blue');
			}
			if($('.nav_list2 span.yxdt').hasClass('minus_black')){
				$('.nav_list2 span.yxdt').removeClass('minus_black');
				$('.nav_list2 span.yxdt').addClass('minus_blue');
			}
			});
		$('.nav_list2 a.yxdt,.nav_list2 span.yxdt').mouseout(function(){
				if($('.nav_list2 span.yxdt').hasClass('plus_blue')){
				$('.nav_list2 span.yxdt').removeClass('plus_blue');
				$('.nav_list2 span.yxdt').addClass('plus_black');
			}
			if($('.nav_list2 span.yxdt').hasClass('minus_blue')){
				$('.nav_list2 span.yxdt').removeClass('minus_blue');
				$('.nav_list2 span.yxdt').addClass('minus_black');
			}
			});
		$('.nav_list2 a.shzr,.nav_list2 span.shzr').mouseenter(function(){
				if($('.nav_list2 span.shzr').hasClass('plus_black')){
				$('.nav_list2 span.shzr').removeClass('plus_black');
				$('.nav_list2 span.shzr').addClass('plus_blue');
			}
			if($('.nav_list2 span.shzr').hasClass('minus_black')){
				$('.nav_list2 span.shzr').removeClass('minus_black');
				$('.nav_list2 span.shzr').addClass('minus_blue');
			}
			});
		$('.nav_list2 a.shzr,.nav_list2 span.shzr').mouseout(function(){
				if($('.nav_list2 span.shzr').hasClass('plus_blue')){
				$('.nav_list2 span.shzr').removeClass('plus_blue');
				$('.nav_list2 span.shzr').addClass('plus_black');
			}
			if($('.nav_list2 span.shzr').hasClass('minus_blue')){
				$('.nav_list2 span.shzr').removeClass('minus_blue');
				$('.nav_list2 span.shzr').addClass('minus_black');
			}
			});
		$('.nav_list2 a.about,.nav_list2 span.about').mouseenter(function(){
				if($('.nav_list2 span.about').hasClass('plus_black')){
				$('.nav_list2 span.about').removeClass('plus_black');
				$('.nav_list2 span.about').addClass('plus_blue');
			}
			if($('.nav_list2 span.about').hasClass('minus_black')){
				$('.nav_list2 span.about').removeClass('minus_black');
				$('.nav_list2 span.about').addClass('minus_blue');
			}
			});
		$('.nav_list2 a.about,.nav_list2 span.about').mouseout(function(){
				if($('.nav_list2 span.about').hasClass('plus_blue')){
				$('.nav_list2 span.about').removeClass('plus_blue');
				$('.nav_list2 span.about').addClass('plus_black');
			}
			if($('.nav_list2 span.about').hasClass('minus_blue')){
				$('.nav_list2 span.about').removeClass('minus_blue');
				$('.nav_list2 span.about').addClass('minus_black');
			}
			});	
			
		//垂直导航二级plus minus切换	
			
		$('.nav_list2 a.shzrln,.nav_list2 span.shzrln').mouseenter(function(){
				if($('.nav_list2 span.shzrln').hasClass('plus_gray')){
				$('.nav_list2 span.shzrln').removeClass('plus_gray');
				$('.nav_list2 span.shzrln').addClass('plus_blue2');
			}
			if($('.nav_list2 span.shzrln').hasClass('minus_gray')){
				$('.nav_list2 span.shzrln').removeClass('minus_gray');
				$('.nav_list2 span.shzrln').addClass('minus_blue2');
			}
			});
		$('.nav_list2 a.shzrln,.nav_list2 span.shzrln').mouseout(function(){
				if($('.nav_list2 span.shzrln').hasClass('plus_blue2')){
				$('.nav_list2 span.shzrln').removeClass('plus_blue2');
				$('.nav_list2 span.shzrln').addClass('plus_gray');
			}
			if($('.nav_list2 span.shzrln').hasClass('minus_blue2')){
				$('.nav_list2 span.shzrln').removeClass('minus_blue2');
				$('.nav_list2 span.shzrln').addClass('minus_gray');
			}
			});	
		$('.nav_list2 a.shzrxm,.nav_list2 span.shzrxm').mouseenter(function(){
				if($('.nav_list2 span.shzrxm').hasClass('plus_gray')){
				$('.nav_list2 span.shzrxm').removeClass('plus_gray');
				$('.nav_list2 span.shzrxm').addClass('plus_blue2');
			}
			if($('.nav_list2 span.shzrxm').hasClass('minus_gray')){
				$('.nav_list2 span.shzrxm').removeClass('minus_gray');
				$('.nav_list2 span.shzrxm').addClass('minus_blue2');
			}
			});
		$('.nav_list2 a.shzrxm,.nav_list2 span.shzrxm').mouseout(function(){
				if($('.nav_list2 span.shzrxm').hasClass('plus_blue2')){
				$('.nav_list2 span.shzrxm').removeClass('plus_blue2');
				$('.nav_list2 span.shzrxm').addClass('plus_gray');
			}
			if($('.nav_list2 span.shzrxm').hasClass('minus_blue2')){
				$('.nav_list2 span.shzrxm').removeClass('minus_blue2');
				$('.nav_list2 span.shzrxm').addClass('minus_gray');
			}
			});	
		$('.nav_list2 a.yxzyz,.nav_list2 span.yxzyz').mouseenter(function(){
				if($('.nav_list2 span.yxzyz').hasClass('plus_gray')){
				$('.nav_list2 span.yxzyz').removeClass('plus_gray');
				$('.nav_list2 span.yxzyz').addClass('plus_blue2');
			}
			if($('.nav_list2 span.yxzyz').hasClass('minus_gray')){
				$('.nav_list2 span.yxzyz').removeClass('minus_gray');
				$('.nav_list2 span.yxzyz').addClass('minus_blue2');
			}
			});
		$('.nav_list2 a.yxzyz,.nav_list2 span.yxzyz').mouseout(function(){
				if($('.nav_list2 span.yxzyz').hasClass('plus_blue2')){
				$('.nav_list2 span.yxzyz').removeClass('plus_blue2');
				$('.nav_list2 span.yxzyz').addClass('plus_gray');
			}
			if($('.nav_list2 span.yxzyz').hasClass('minus_blue2')){
				$('.nav_list2 span.yxzyz').removeClass('minus_blue2');
				$('.nav_list2 span.yxzyz').addClass('minus_gray');
			}
			});
		//垂直一级导航与二级导航切换
		$('.nav_list2 span.phjr').click(function(){
			if($('.nav_list2 li.phjr .zi').is(':hidden')){
				$('.nav_list2 li.phjr .zi').show();
				$('.nav_list2 span.phjr').removeClass('plus_black plus_blue');
				$('.nav_list2 span.phjr').addClass('minus_black');
			}else{
				$('.nav_list2 li.phjr .zi').hide();
				$('.nav_list2 span.phjr').removeClass('minus_black minus_blue');
				$('.nav_list2 span.phjr').addClass('plus_black');
			}
		});	
		$('.nav_list2 span.cfgl').click(function(){
			if($('.nav_list2 li.cfgl .zi').is(':hidden')){
				$('.nav_list2 li.cfgl .zi').show();
				$('.nav_list2 span.cfgl').removeClass('plus_black plus_blue');
				$('.nav_list2 span.cfgl').addClass('minus_black');
			}else{
				$('.nav_list2 li.cfgl .zi').hide();
				$('.nav_list2 span.cfgl').removeClass('minus_black minus_blue');
				$('.nav_list2 span.cfgl').addClass('plus_black');
			}
		});
		$('.nav_list2 span.yxdt').click(function(){
			if($('.nav_list2 li.yxdt .zi').is(':hidden')){
				$('.nav_list2 li.yxdt .zi').show();
				$('.nav_list2 span.yxdt').removeClass('plus_black plus_blue');
				$('.nav_list2 span.yxdt').addClass('minus_black');
			}else{
				$('.nav_list2 li.yxdt .zi').hide();
				$('.nav_list2 span.yxdt').removeClass('minus_black minus_blue');
				$('.nav_list2 span.yxdt').addClass('plus_black');
			}
		});
		$('.nav_list2 span.shzr').click(function(){
			if($('.nav_list2 li.shzr .zi').is(':hidden')){
				$('.nav_list2 li.shzr .zi').show();
				$('.nav_list2 span.shzr').removeClass('plus_black plus_blue');
				$('.nav_list2 span.shzr').addClass('minus_black');
			}else{
				$('.nav_list2 li.shzr .zi').hide();
				$('.nav_list2 span.shzr').removeClass('minus_black minus_blue');
				$('.nav_list2 span.shzr').addClass('plus_black');
			}
		});
		$('.nav_list2 span.about').click(function(){
			if($('.nav_list2 li.about .zi').is(':hidden')){
				$('.nav_list2 li.about .zi').show();
				$('.nav_list2 span.about').removeClass('plus_black plus_blue');
				$('.nav_list2 span.about').addClass('minus_black');
			}else{
				$('.nav_list2 li.about .zi').hide();
				$('.nav_list2 span.about').removeClass('minus_black minus_blue');
				$('.nav_list2 span.about').addClass('plus_black');
			}
		});
		$('.nav_list2 span.shzrln').click(function(){
			if($('.nav_list2 li.shzrln .sun').is(':hidden')){
				$('.nav_list2 li.shzrln .sun').show();
				$('.nav_list2 span.shzrln').removeClass('plus_gray plus_blue2 plus_blue');
				$('.nav_list2 span.shzrln').addClass('minus_gray');
			}else{
				$('.nav_list2 li.shzrln .sun').hide();
				$('.nav_list2 span.shzrln').removeClass('minus_gray minus_blue2');
				$('.nav_list2 span.shzrln').addClass('plus_gray');
			}
		});
		$('.nav_list2 span.shzrxm').click(function(){
			if($('.nav_list2 li.shzrxm .sun').is(':hidden')){
				$('.nav_list2 li.shzrxm .sun').show();
				$('.nav_list2 span.shzrxm').removeClass('plus_gray plus_blue2 plus_blue');
				$('.nav_list2 span.shzrxm').addClass('minus_gray');
			}else{
				$('.nav_list2 li.shzrxm .sun').hide();
				$('.nav_list2 span.shzrxm').removeClass('minus_gray minus_blue2');
				$('.nav_list2 span.shzrxm').addClass('plus_gray');
			}
		});
		$('.nav_list2 span.yxzyz').click(function(){
			if($('.nav_list2 li.yxzyz .sun').is(':hidden')){
				$('.nav_list2 li.yxzyz .sun').show();
				$('.nav_list2 span.yxzyz').removeClass('plus_gray plus_blue2 plus_blue');
				$('.nav_list2 span.yxzyz').addClass('minus_gray');
			}else{
				$('.nav_list2 li.yxzyz .sun').hide();
				$('.nav_list2 span.yxzyz').removeClass('minus_gray minus_blue2');
				$('.nav_list2 span.yxzyz').addClass('plus_gray');
			}
		});
		//志愿者章程展开与折叠
		$('.main_cevaxly .open').click(function(){
			$('.total_zyzzc').slideDown();
			$(this).hide();
			$('.fold').show();
			});
		$('.main_cevaxly .fold').click(function(){
			$('.total_zyzzc').slideUp();
			$(this).hide();
			$('.open').show();
			});
		//公益理财tab切换
		$('.main_gylc .tab_gylc').click(function(){
			$('.main_gylc div.gylcjs').show();
			$('.main_gylc div.ynd').hide();
			$('.main_gylc li.gylc').removeClass('n');
			$('.main_gylc a.tab_gylc').removeClass('h3_gylc2');
			$('.main_gylc li.gylc').addClass('c');
			$('.main_gylc a.tab_gylc').addClass('h3_gylc');
			$('.main_gylc li.ynd').removeClass('c');
			$('.main_gylc a.tab_ynd').removeClass('h3_ynd');
			$('.main_gylc li.ynd').addClass('n');
			$('.main_gylc a.tab_ynd').addClass('h3_ynd2');
			});
		$('.main_gylc .tab_ynd').click(function(){
			$('.main_gylc div.ynd').show();
			$('.main_gylc div.gylcjs').hide();
			$('.main_gylc li.gylc').removeClass('c');
			$('.main_gylc a.tab_gylc').removeClass('h3_gylc');
			$('.main_gylc li.gylc').addClass('n');
			$('.main_gylc a.tab_gylc').addClass('h3_gylc2');
			$('.main_gylc li.ynd').removeClass('n');
			$('.main_gylc a.tab_ynd').removeClass('h3_ynd2');
			$('.main_gylc li.ynd').addClass('c');
			$('.main_gylc a.tab_ynd').addClass('h3_ynd');
			});
		//CEVA在行动城市贴图隐藏与显示
    $("p.open a,p.fold a").click(function(){
        $(this).parent().prev().slideToggle();
        $(this).hide();
        $(this).siblings().show();
        if($(this).parent().hasClass("open")){
            $(this).parent().removeClass("open").addClass("fold");
        }  else if($(this).parent().hasClass("fold")){
            $(this).parent().removeClass("fold").addClass("open");
        }
    });
		//普惠金融tab切换+招贤纳士tab切换
		$('li.city1 a').click(function(){
			$("div.city1,div.jobList").removeClass("dn");
			$("div.city2,div.city3,div.yxr").addClass("dn");
			$(this).addClass("f14");
			$('li.city2 a,li.city3 a').addClass("f12").removeClass("f14");
			$(this).parent().addClass("c").removeClass("n");;
			$("li.city2,li.city3").removeClass("c").addClass("n");
			});
		$('li.city2 a').click(function(){
			$("div.city2,div.yxr").removeClass("dn");
			$("div.city1,div.city3,div.jobList,div.yxr2").addClass("dn");
			$(this).addClass("f14");
			$('li.city1 a,li.city3 a').addClass("f12").removeClass("f14");
			$(this).parent().addClass("c").removeClass("n");;
			$("li.city1,li.city3").removeClass("c").addClass("n");
			});
		$('li.city3 a').click(function(){
			$("div.city3,div.yxr2").removeClass("dn");
			$("div.city1,div.city2,div.jobList,div.yxr").addClass("dn");
			$(this).addClass("f14");
			$('li.city1 a,li.city2 a').addClass("f12").removeClass("f14");
			$(this).parent().addClass("c").removeClass("n");;
			$("li.city2,li.city1").removeClass("c").addClass("n");
			});



		/*高管团队*/
		$(".ul_gaoguan li").hover(function(){
			var index=$(".ul_gaoguan li").index(this);
			$(this).addClass("li1").siblings().removeClass("li1");
			$(".peo"+index).show().siblings().hide();
		})
		
	});