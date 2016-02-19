var isWebKit = navigator.userAgent.indexOf('WebKit') !== -1;
/*get by class name*/
function getElementsByClassName(root,className){
    var eles = root.getElementsByTagName('*');
    var result = [];
    for(var i = 0;i<eles.length;i++){
        if(hasClassName(eles[i],className)){
            result.push(eles[i]);
        }
    }
    return result;
}
function hasClassName(ele,className){
    var eleName = ' '+ele.className+' ';
    var names = className.split(' ');
    for(var i = 0,name;name = names[i];i++){
        if(eleName.indexOf(' '+name+' ')===-1){
            return false;
        }
    }
    return true;
}
/*top*/
/*search bar*/
var seForm = document.getElementById('se_form'),
	searchBar = document.getElementById('searchBar'),
	searchBarValue = '银魂',
	srchRecom = document.getElementById('srch_recmnd'),
	srchRecmndVal = srchRecom.getElementsByTagName('a');
searchBar.onfocus = function(){
	this.value = '';
	seForm.className = 'se_form se_form_focus';
}
searchBar.onclick = function(e){
	if(srchRecom.className === 'srch_recmnd')
		srchRecom.className = 'srch_recmnd active';
	else
		srchRecom.className = 'srch_recmnd';
}
searchBar.onblur = function(){
	this.value = searchBarValue;
	seForm.className = 'se_form';
	srchRecom.className = 'srch_recmnd';
}
for(i = 0;i<srchRecmndVal.length;i++){
	srchRecmndVal[i].onmousedown = function(){
		searchBar.value = this.lastElementChild.innerHTML;
		searchBar.form.submit();
	}
}
/*record list*/
var rcdCon = document.getElementById('record'),
	rcdList = document.getElementById('rcd_list');
rcdCon.onmouseenter = togRcd('block');
rcdCon.onmouseleave = togRcd('none');
function togRcd(display){
	return function(){
		if(this.tout){
			clearTimeout(this.tout);
			this.tout = false;
		}else{
			this.tout = setTimeout('rcdList.style.display = "'+display+'";rcdCon.tout = false;',300);
		}
	}
}
/*banners slider*/
var bnr_container = document.getElementById('bnr_slds_con'),
	bnr_slds = document.getElementById('bnr_slds').getElementsByTagName('li'),
	bnr_thms = document.getElementById('bnr_thms').getElementsByTagName('a'),
	bnrIndex = 0,
	nextBnrIndex = 1,
	bnrPlay;
for(var i = 0;i<bnr_thms.length;i++){
	var thm = bnr_thms[i];
	thm.index = i;
	thm.onmouseenter = function(){
		if(this.index !== bnrIndex){
			var thisBnr = bnr_slds[this.index],
				currBnr = bnr_slds[bnrIndex];
			clearInterval(currBnr.intv);
			clearInterval(thisBnr.intv);
			currBnr.intv = setInterval('bnr_slide('+bnrIndex+',-0.1)',20);
			thisBnr.intv = setInterval('bnr_slide('+this.index+',0.1)',20);
			bnr_update(this.index);
		}
	}
}
function bnr_slide(index,offset){
	var bnr = bnr_slds[index],
		op = parseFloat(bnr.style.opacity),
		result = op + offset;
		bnr.style.display = 'block';
		if(Math.abs(result) - 0.5 < 0.5){
			bnr.style.opacity = result;
		}else{
			if(offset>0)
				bnr.style.opacity = 1;
			else{
				bnr.style.opacity = 0;
				bnr.style.display = 'none';
			}
			clearInterval(bnr.intv);
		}
}
function bnr_update(next){
	bnr_thms[bnrIndex].className = 'thm_a';
	bnr_thms[next].className = 'thm_a thm_a_act';
	bnrIndex = next;
	nextBnrIndex = bnrIndex === 8 ? 0 : (bnrIndex + 1);
}
function bnr_play(){
	clearInterval(bnr_slds[bnrIndex].intv);
	clearInterval(bnr_slds[nextBnrIndex].intv);
	bnr_slds[bnrIndex].intv = setInterval('bnr_slide('+bnrIndex+',-0.1)',20);
	bnr_slds[nextBnrIndex].intv = setInterval('bnr_slide('+nextBnrIndex+',0.1)',20);
	bnr_update(nextBnrIndex);
}
bnr_container.onmouseenter = function(){
	clearInterval(bnrPlay);
}
bnr_container.onmouseleave = function(){
	bnrPlay = setInterval('bnr_play()',4000);
}
bnrPlay = setInterval('bnr_play()',4000);
/*online movies slider*/
var om_sls = document.getElementById('om_sl').getElementsByTagName('ul'),
	om_btnl = document.getElementById('om_btnl'),
	om_btnr = document.getElementById('om_btnr'),
	currOmSl = om_sls[1],
	thoOmSl = om_sls[0],
	omSlIntv;
	om_btnl.onclick = function(){
		if(thoOmSl.style.left === '992px')
			thoOmSl.style.left = '-992px';
		else if(thoOmSl.style.left !== '992px'){
			clearInterval(omSlIntv);
			currOmSl.style.left = '-992px';
			thoOmSl.style.left = '0';
			om_btn_update();
		}
		omSlIntv = setInterval('om_slide(60)',20);
	}
	om_btnr.onclick = function(){
		if(thoOmSl.style.left === '-992px')
			thoOmSl.style.left = '992px';
		else if(thoOmSl.style.left !== '992px'){
			clearInterval(omSlIntv);
			currOmSl.style.left = '992px';
			thoOmSl.style.left = '0';
			om_btn_update();
		}
		omSlIntv = setInterval('om_slide(-60)',20);
	}
function om_slide(offset){
	var left = parseInt(currOmSl.style.left),
		k = Math.abs(left)/992,
		offset = k > 0.5 ? offset > 0 ? Math.ceil(offset*2*(1-k)) : Math.floor(offset*2*(1-k)) : offset;
		result = left + offset;
		if(Math.abs(result) < 992){
			currOmSl.style.left = result + 'px';
			thoOmSl.style.left = parseInt(thoOmSl.style.left) + offset +'px';
		}else{
			if(offset > 0){
				currOmSl.style.left = '992px';
				thoOmSl.style.left = '0';
			}else{
				currOmSl.style.left = '-992px';
				thoOmSl.style.left = '0';
			}
			om_btn_update();
			clearInterval(omSlIntv);
		}
}
function om_btn_update(){
	var temp = currOmSl;
		currOmSl = thoOmSl;
		thoOmSl = temp;
}
/*aside a universal*/
function genTogA(currA){
	return function(){
		if(this !== currA.a){
			this.className = 'asd_a asd_a_act';
			currA.a.className = 'asd_a';
			currA.a = this;
		}
	}
}
function initAs(id){
	var as = document.getElementById(id).getElementsByTagName('a'),
	currA = {a:as[0]};
	for(var i = 0;i<as.length;i++){
		as[i].onmouseenter = genTogA(currA);
	}
}
/*aside list online movies*/
 	initAs('om_ul');
/*aside series*/
 	initAs('ser_asd');
/*aside movies*/
	initAs('mov_asd');
/*aside entertainment*/
	initAs('ent_asd')
/*tabs universal*/
function genSwiTab(currIdx,tabs,vs){
	return function(){
		if(this.index !== currIdx.value){
			this.className = 'tab tab_act';
			tabs[currIdx.value].className = 'tab';
			vs[this.index].className = 'vs_block  vs_blk_act';
			vs[currIdx.value].className = 'vs_block';
			currIdx.value = this.index;
		}
	}
}
function initTabs(id){
	var cont = document.getElementById(id),
		tabs = getElementsByClassName(cont,'tab'),
		vs = getElementsByClassName(cont,'vs_block'),
		currIdx = {value:0};
	for(i = 0;i<tabs.length;i++){
		var tab = tabs[i];
		tab.index = i;
		tab.onmouseenter = genSwiTab(currIdx,tabs,vs);
	}
}
/*tabs today's hot*/
initTabs('hot_td');
/*tabs series*/
initTabs('series');
/*tabs movies*/
initTabs('movies');
/*tabs entertainment*/
initTabs('entrtn');
/*tabs アニメ*/
initTabs('anime');
/*tabs exclusive*/
initTabs('exclsv');

/*新しいアニメ*/
var updt = document.getElementById('updt'),
	updtList = document.getElementById('updt_list'),
	dateBtns = getElementsByClassName(updt,'updt_tab'),
	dates = getElementsByClassName(updtList,'date'),
	date = new Date(),
	todayIdx = date.getDay() === 0 ? 6 : (date.getDay() - 1),
	datesValue = [],
	currDateIdx = todayIdx;
function addZero(num){
	if(num<10)
		return '0' + num;
	else
		return num;
}
(function(){
	date.setDate(date.getDate() + 6 - todayIdx);
	var sunday = date.getMonth();
	date.setDate(date.getDate() - 6);
	var monday = date.getMonth();
	if(monday !== sunday){
		for(var i = 0;i < 7;i++){
			datesValue.push(addZero(date.getMonth()+1) + '-' + addZero(date.getDate()));
			date.setDate(date.getDate() + 1);
		}
	}else{
		monday = addZero(monday+1);
		for(var i = 0;i < 7;i++){
			datesValue.push(monday + '-' + addZero((date.getDate() + i)));
		}
	}
})();
for(i = 0;i < 7;i++){
	dates[i].innerHTML = datesValue[i];
	if(i === todayIdx){
		dates[i].className = 'date today';
		dateBtns[i].className = 'updt_tab updt_tab_act';
		updtList.scrollTop = 280 * i;
	}
	dateBtns[i].index = i;
	dateBtns[i].onclick = function(){
		updtList.scrollTop = 280 * this.index;
		dateBtns[currDateIdx].className = 'updt_tab';
		this.className = 'updt_tab updt_tab_act';
		dates[currDateIdx].className = 'date';
		dates[this.index].className = 'date today';
		currDateIdx = this.index;
	}
}
/*fixed btns*/
var fixedBtns = document.getElementById('fix_btns'),
	fBStyle = fixedBtns.style,
	feedback = fixedBtns.firstChild,
	toTop = fixedBtns.lastChild,
	bodyEle = isWebKit ? document.body : document.documentElement;
window.onscroll = function(){
	if(bodyEle.scrollTop >= 900 && fBStyle.display !== 'block'){
		fBStyle.display = 'block';
	}else if(bodyEle.scrollTop <= 900 && fBStyle.display === 'block'){
		fBStyle.display = 'none';
	}
}
window.onresize = function(){
	if(bodyEle.clientWidth <= 1294 && fixedBtns.className === 'btns'){
		fixedBtns.className = 'btns btns_nar';
	}else if(bodyEle.clientWidth >= 1294 && fixedBtns.className !== 'btns'){
		fixedBtns.className = 'btns';
	}
}
toTop.onclick = function(){
	bodyEle.scrollTop = 0;
}
