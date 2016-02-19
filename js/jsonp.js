'use strict'
function jsonp(json){
	json = json ||{};
	if(!json.url)return;
	json.cbName = json.cbName||'cb';
	json.data = json.data||{};
	json.timeout = json.timeout||5000;
	var timer = null;

	json.data[json.cbName] = 'show'+Math.random();
	json.data[json.cbName] = json.data[json.cbName].replace('.','');
	var arr = [];
	for(var name in json.data){
		arr.push(name+'='+(json.data[name]));
	}
	var str = arr.join('&');
	window[json.data[json.cbName]] = function(result){
		clearTimeout(timer);
		json.success&&json.success(result);
		oH.removeChild(oS);
	};
	timer = setTimeout(function(){
		window[json.data[json.cbName]]=null;
		json.error&&json.error('网络超时');
	},json.timeout);
	
	//jsonp核心
	var oH = document.getElementsByTagName('head')[0];
	var oS = document.createElement('script');
	oS.src=json.url+'?'+str;
	oH.appendChild(oS);
}