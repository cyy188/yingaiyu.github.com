'use strict'
window.onload=function(){
	// 轮播图
	;(function(){
		var oBannerUl = document.querySelector('#banner_li');
		var aLi = oBannerUl.getElementsByTagName('li');
		var oBannerCol = document.querySelector('#banner_col');
		var oA = oBannerCol.getElementsByTagName('a')[0];
		var oBannerOl = document.querySelector('#banner_btn');
		var aBtn= oBannerOl.getElementsByTagName('li');

		var iNow=0;
		var timer = null;
		function tick(){
			timer = setInterval(function(){
				iNow++;
				if(iNow==aBtn.length){
					iNow=0;
				}
				tab();

			},2000);
		}
		function tab(){
			for(var i=0;i<aBtn.length;i++){
				aBtn[i].className = 'fl';
				aLi[i].className = '';
			}
			aBtn[iNow].className = 'on fl';
			aLi[iNow].className = 'on';
		}
		tick();
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onclick=function(){
				iNow = this.index;
				tab();
			};
		}
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].onmouseover=function(){
				clearInterval(timer);
			};
			aBtn[i].onmouseout=function(){
				tick();
			};
		}
		oA.onmouseover=function(){
			clearInterval(timer);
			oA.style.color = '#cf2b2b';
			oA.style.border = '2px solid #cf2b2b';
		};
		oA.onmouseout=function(){
			tick();
			oA.style.color = '#fff';
			oA.style.border = '2px solid #fff';
		};
	})();

	// 导航
	;(function(){
		var  oNavS = document.querySelector('#nav_s');
		var  oNavTxt = document.querySelector('#nav_txt');
		var  oNavSub = document.querySelector('#nav_sub');
		var  oDownBox = document.querySelector('#down_box');
		oNavTxt.onfocus=function(){
			oNavS.style.display='none';
		};
		oNavTxt.onblur=function(){
			if(oNavTxt.value == ''){
				oNavS.style.display='block';
			}
		};
		oNavS.onclick=function(){
			oNavTxt.focus();
		};
		oDownBox.onmouseover=function(ev){
			var oEvent = ev||event;
			var oSrc = oEvent.srcElement||oEvent.target;
			if(oSrc.tagName!='LI')return;
			oSrc.style.background='#efefef';
		};
		oDownBox.onmouseout=function(ev){
			var oEvent = ev||event;
			var oSrc = oEvent.srcElement||oEvent.target;
			if(oSrc.tagName!='LI')return;
			oSrc.style.background='none';
		};
		oDownBox.onclick=function(ev){
			var oEvent = ev||event;
			var oSrc = oEvent.srcElement||oEvent.target;
			if(oSrc.tagName!='LI')return;
			window.open('https://www.baidu.com/s?wd='+encodeURIComponent(oSrc.innerHTML),'_self');
			oNavTxt.value='';
		};
		oNavSub.onclick=function(){
			window.open('https://www.baidu.com/s?wd='+encodeURIComponent(oNavTxt.value),'_self');
			oNavTxt.value='';
		};
		oNavTxt.onkeyup=function(){
			jsonp({
				url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
				data:{
					wd:this.value
				},
				success:function(json){
					var arr = json.s;
					oDownBox.innerHTML='';
					for(var i=0;i<arr.length;i++){
						var oLi = document.createElement('li');
						oLi.innerHTML = arr[i];
						oDownBox.appendChild(oLi);
					}
				}
			});
		};
		var oNav_box = document.querySelector('.nav_box');
		var oNav_box2 = document.querySelector('.nav_box2');
		var oH = oNav_box.offsetTop;
		document.onscroll=function(){
			var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
			if(scrollTop>=oH){
				oNav_box.style.position = 'fixed';
				oNav_box.style.top = 0;
				oNav_box.style.left = 0;
				oNav_box.style.background = '#fff';
				oNav_box.style.zIndex = '3';
				oNav_box2.style.display = 'block';
			}else{
				oNav_box.style.position = '';
				oNav_box2.style.display = 'none';
			}
		};
	})();

	// 页面介绍
	;(function(){
		var oPage_m = document.getElementById('page_m');
		var oPage_l = document.getElementById('page_l');
		var oPage_r = document.getElementById('page_r');
		window.onscroll=function(){
			var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
			// alert(scrollTop);
			var oT = oPage_m.offsetTop;
			var oH = oPage_m.offsetHeight;
			var cH= document.documentElement.clientHeight;
			if(oT>scrollTop&&oT+oH<scrollTop+cH){
				oPage_l.className = 'fl on';
				oPage_r.className = 'fl on';
			}
		};
	})();

	// 自我介绍
	;(function(){
		var oIntroSelf = document.querySelector('#intro_self');
		var aBtn = oIntroSelf.getElementsByTagName('li');
		var oIntroLi = document.querySelector('#intro_li');
		var aLi = oIntroLi.getElementsByTagName('li');
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index = i;
			aBtn[i].onclick=function(){
				for(var i=0;i<aBtn.length;i++){
					aBtn[i].className = '';
					aLi[i].className = '';
				}
				this.className = 'on';
				aLi[this.index].className = 'on';
			};
		}
	})();

	// 效果展示
	;(function(){
		var oEffect_ul=document.getElementById('effect_ul');
		var aLi=oEffect_ul.getElementsByTagName('li');
		var aEffect_pos=document.querySelectorAll('.effect_pos');
		var aEffect_a=document.querySelectorAll('.effect_ul li a');
		var aEffect_pos_return = document.querySelectorAll('.effect_ul .effect_pos_return');
		var oEffect_enlarge = document.querySelector('#effect_enlarge');
		var oEnlarge_l = document.querySelector('#enlarge_l');
		var oEnlarge_smak = document.querySelector('#enlarge_smak');
		var oEnlarge_r = document.querySelector('#enlarge_r');
		var oEnlarge_img = oEnlarge_r.children[0];
		for(var i=0;i<aLi.length;i++){
			through(aLi[i]);
		}
		for(var i=0;i<aEffect_a.length;i++){
			aEffect_a[i].index=i;
			aEffect_a[i].onclick=function(){
				for(var i=0;i<aEffect_a.length;i++){
					aEffect_pos[i].style.display='none';
				}
				aEffect_pos[this.index].style.display='block';
			};
		}
		for(var i=0;i<aEffect_pos_return.length;i++){
			aEffect_pos_return[i].index=i;
			aEffect_pos_return[i].onclick=function(){
				aEffect_pos[this.index].style.display='none';
			};
		}
		// 放大镜
		oEnlarge_l.onmouseover=function(){
			oEnlarge_smak.style.display='block';
			oEnlarge_r.style.display='block';
		};
		oEnlarge_l.onmouseout=function(){
			oEnlarge_smak.style.display='none';
			oEnlarge_r.style.display='none';
		};
		oEnlarge_l.onmousemove=function(ev){
			var oEvent=ev||event;
			var left=oEvent.clientX-oEnlarge_smak.offsetWidth/2-oEffect_enlarge.offsetLeft;
			var top=oEvent.clientY-oEnlarge_smak.offsetHeight/2-oEffect_enlarge.offsetTop;
			if(left<0){
				left=0;
			}else if(left>oEnlarge_l.offsetWidth-oEnlarge_smak.offsetWidth){
				left=oEnlarge_l.offsetWidth-oEnlarge_smak.offsetWidth;
			}
			if(top<0){
				top=0;
			}else if(top>oEnlarge_l.offsetHeight-oEnlarge_smak.offsetHeight){
				top=oEnlarge_l.offsetHeight-oEnlarge_smak.offsetHeight;
			}
			oEnlarge_smak.style.left=left+'px';
			oEnlarge_smak.style.top=top+'px';
			oEnlarge_img.style.left=-(left/(oEnlarge_l.offsetWidth-oEnlarge_smak.offsetWidth))*(oEnlarge_img.offsetWidth-oEnlarge_r.offsetWidth)+'px';
			oEnlarge_img.style.top=-(top/(oEnlarge_l.offsetHeight-oEnlarge_smak.offsetHeight))*(oEnlarge_img.offsetHeight-oEnlarge_r.offsetHeight)+'px';
		};

		// 360°图片旋转
		var oRotate_box = document.querySelector('.rotate_box');
		var oRotate_img = oRotate_box.children[0];
		var oRotate_l = oRotate_box.children[1];
		var oRotate_r = oRotate_box.children[2];
		var iNow = 0;
		var timer = null;
		// +
		oRotate_l.onmouseover=function(){
			clearInterval(timer);
			timer = setInterval(function(){
				iNow++;
				if(iNow==77)iNow=0;
				oRotate_img.src='img/rotate/'+iNow+'.jpg';
			},30);
		};
		//-
		oRotate_r.onmouseover=fnR;
		function fnR(){
			clearInterval(timer);
			timer = setInterval(function(){
				iNow--;
				if(iNow<0)iNow=76;
				oRotate_img.src='img/rotate/'+iNow+'.jpg';
			},30);
		}
		fnR();

		// 九宫格拖拽
		var oStepByStep_box=document.querySelector('.StepByStep_box');
		var aDiv=oStepByStep_box.children;
		for(var i=0;i<aDiv.length;i++){
			changeSize(aDiv[i]);
		}
		function changeSize(obj){
			obj.onmousedown=function(ev){
				var oEvent=ev||event;
				oEvent.cancelBubble=true;
				var oldW=oStepByStep_box.offsetWidth;
				var oldH=oStepByStep_box.offsetHeight;
				var oldT=oStepByStep_box.offsetTop;
				var oldL=oStepByStep_box.offsetLeft;
				var oldX=oEvent.clientX;
				var oldY=oEvent.clientY;
				document.onmousemove=function(ev){ MsTransform
					var oEvent=ev||event;
					if(obj.className.indexOf('t')!=-1){
						oStepByStep_box.style.height=oldH+(oldY-oEvent.clientY)+'px';
						oStepByStep_box.style.top=oldT-(oldY-oEvent.clientY)+'px';
					}
					if(obj.className.indexOf('r')!=-1){
						oStepByStep_box.style.width=oldW+(oEvent.clientX-oldX)+'px';
					}
					if(obj.className.indexOf('b')!=-1){
						oStepByStep_box.style.height=oldH+(oEvent.clientY-oldY)+'px';
					}
					if(obj.className.indexOf('l')!=-1){
						oStepByStep_box.style.width=oldW+(oldX-oEvent.clientX)+'px';
						oStepByStep_box.style.left=oldL-(oldX-oEvent.clientX)+'px';
					}
				};
				document.onmouseup=function(){
					document.onmousemove=null;
					document.onmouseup=null;
					obj.releaseCapture&&obj.releaseCapture();
				};
				obj.setCapture&&obj.setCapture();
				return false;			
			};
		}
		oStepByStep_box.onmousedown=function(ev){
			var oEvent=ev||event;
			var disX=oEvent.clientX-oStepByStep_box.offsetLeft;
			var disY=oEvent.clientY-oStepByStep_box.offsetTop;
			document.onmousemove=function(ev){
				var oEvent=ev||event;
				oStepByStep_box.style.top=oEvent.clientY-disY+'px';
				oStepByStep_box.style.left=oEvent.clientX-disX+'px';
			};
			document.onmouseup=function(ev){
				document.onmouseup=null;
				document.onmousemove=null;
				oStepByStep_box.releaseCapture&&oStepByStep_box.releaseCapture();
			};
			oStepByStep_box.setCapture&&oStepByStep_box.setCapture();
			return false;
		};


		// 弹性运动
		var oEffect_ball = document.querySelector('.effect_ball');
		var oBall_img = oEffect_ball.children[0];
		var iSpeedX = 8;
		var iSpeedY = 8;
		setInterval(function(){
			var l = oBall_img.offsetLeft+iSpeedX;
			var t = oBall_img.offsetTop+iSpeedY;
			if(t>=document.documentElement.clientHeight-oBall_img.offsetHeight){
				iSpeedY*=-1;
			}
			if(l>=document.documentElement.clientWidth-oBall_img.offsetWidth){
				iSpeedX*=-1;
			}
			if(t<=0){
				iSpeedY*=-1;
			}
			if(l<=0){
				iSpeedX*=-1;
			}
			oBall_img.style.left = l+'px';
			oBall_img.style.top = t+'px';
		},30);

		// 3D盒子
		

		// 简易表盘
		var oBox=document.querySelector('.surface_box');
		var oHou=document.querySelector('.surface_box .surface_h')
		var oMin=document.querySelector('.surface_box .surface_m')
		var oSec=document.querySelector('.surface_box .surface_s')
		for(var i=0;i<60;i++){
			var oSpan = document.createElement('span');
			if(i%5==0){
				oSpan.className='big_scale';
			}else{
				oSpan.className='scale';
			}
			oBox.appendChild(oSpan);
			
			oSpan.style.WebkitTransform = 'rotate('+i*6+'deg)';
			oSpan.style.MozTransform = 'rotate('+i*6+'deg)';
			oSpan.style.msTransform = 'rotate('+i*6+'deg)';
			oSpan.style.transform = 'rotate('+i*6+'deg)';
		}
		
		
		function tick(){
			var oDate = new Date();
			oHou.style.WebkitTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
			oHou.style.MozkitTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
			oHou.style.msTransform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
			oHou.style.transform='rotate('+(oDate.getHours()+oDate.getMinutes()/60)*30+'deg)';
			oMin.style.WebkitTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
			oMin.style.MozTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
			oMin.style.msTransform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
			oMin.style.transform='rotate('+(oDate.getMinutes()+oDate.getSeconds()/60)*6+'deg)';
			oSec.style.WebkitTransform='rotate('+oDate.getSeconds()*6+'deg)';
			oSec.style.MozTransform='rotate('+oDate.getSeconds()*6+'deg)';
			oSec.style.msTransform='rotate('+oDate.getSeconds()*6+'deg)';
			oSec.style.transform='rotate('+oDate.getSeconds()*6+'deg)';
		}
		tick();
		setInterval(tick,1000);
		
	})();

	// 无缝滚动
	;(function(){
		var oPage_Box = document.getElementById('page_box');
		var oPage_box_Ul = document.getElementById('page_box_ul');
		var aPage_box_Li = oPage_box_Ul.getElementsByTagName('li');
		var aPage_Mask = oPage_box_Ul.getElementsByTagName('div');
		for(var i=0;i<aPage_box_Li.length;i++){
			aPage_box_Li[i].index=i;
			aPage_box_Li[i].onmouseover=function(){
				this.style.border = '5px solid orange';
				aPage_Mask[this.index].style.display = 'block';
				this.style.WebkitTransform = 'translateY(-20px)';
				this.style.MozTransform = 'translateY(-20px)';
				this.style.msTransform = 'translateY(-20px)';
				this.style.transform = 'translateY(-20px)';
			};
		}
		for(var i=0;i<aPage_box_Li.length;i++){
			aPage_box_Li[i].index=i;
			aPage_box_Li[i].onmouseout=function(){
				this.style.border = '5px solid #666';
				aPage_Mask[this.index].style.display = 'none';
				this.style.WebkitTransform = 'translateY(0)';
				this.style.MozTransform = 'translateY(0)';
				this.style.msTransform = 'translateY(0)';
				this.style.transform = 'translateY(0)';
			};
		}

	})();
	
};