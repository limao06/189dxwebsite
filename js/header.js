function up_rightShow1() {
	var shower = document.getElementById("u1_top_right");
	shower.style.display = "block";
}

function closeShow1() {
	var shower = document.getElementById("u1_top_right");
	shower.style.display = "none";
}

function up_rightShow2() {
	var shower = document.getElementById("u2_top_right");
	shower.style.display = "block";
}

function closeShow2() {
	var shower = document.getElementById("u2_top_right");
	shower.style.display = "none";
}

function up_rightShow3() {
	var shower = document.getElementById("u3_top_right");
	shower.style.display = "block";
}

function closeShow3() {
	var shower = document.getElementById("u3_top_right");
	shower.style.display = "none";
}
// 手机宽带固话

function changBg1() {
	var p_spElev = document.getElementById("p_sp");
	var amountEle = document.getElementById("amount1");
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}


function changBg2() {
	var p_spElev = document.getElementById("p_sp");
	var amountEle = document.getElementById("amount2");
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}


function changBg3() {
	var p_spElev = document.getElementById("p_sp");
	var amountEle = document.getElementById("amount3");
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}


function changBg4() {
	var p_spElev = document.getElementById("p_sp");
	var amountEle = document.getElementById("amount4");
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}


function changBg5() {
	var p_spElev = document.getElementById("p_sp");
	var amountEle = document.getElementById("amount5");	
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}

function changBg6() {
	var p_spElev = document.getElementById("p_sp1");
	var amountEle = document.getElementById("amount6");
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}
function changBg7() {
	var p_spElev = document.getElementById("p_sp1");
	var amountEle = document.getElementById("amount7");
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}
function changBg8() {
	var p_spElev = document.getElementById("p_sp1");
	var amountEle = document.getElementById("amount8");
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}
function changBg9() {
	var p_spElev = document.getElementById("p_sp1");
	var amountEle = document.getElementById("amount9");
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}
function changBg10() {
	var p_spElev = document.getElementById("p_sp1");
	var amountEle = document.getElementById("amount10");
	p_spElev.innerText = amountEle.innerText;
	// amountEle.style.background ="#fc0"
}


function show1() {
	var phoneEle = document.getElementById("tabphone");
	var tabNconEle = document.getElementById("tabNcon");
	var guhuanEle = document.getElementById("guhuan");
	var guEle = document.getElementById("phone");
	var guhuEle = document.getElementById("kuandai");
	var guhuaEle = document.getElementById("guhua");

	phoneEle.style.display = "block";
	tabNconEle.style.display = "none";
	guhuanEle.style.display = "none";
	guEle.style.color = "#FF8200";
	guhuEle.style.color = "#505050";
	guhuaEle.style.color = "#505050";
}

function show2() {
	var phoneEle = document.getElementById("tabphone");
	var tabNconEle = document.getElementById("tabNcon");
	var guhuanEle = document.getElementById("guhuan");
	var guEle = document.getElementById("phone");
	var guhuEle = document.getElementById("kuandai");
	var guhuaEle = document.getElementById("guhua");

	phoneEle.style.display = "none";
	tabNconEle.style.display = "block";
	guhuanEle.style.display = "none";
	guEle.style.color = "#505050 ";
	guhuEle.style.color = "#FF8200";
	guhuaEle.style.color = "#505050";
}

function show3() {
	var phoneEle = document.getElementById("tabphone");
	var tabNconEle = document.getElementById("tabNcon");
	var guhuanEle = document.getElementById("guhuan");
	var guEle = document.getElementById("phone");
	var guhuEle = document.getElementById("kuandai");
	var guhuaEle = document.getElementById("guhua");

	phoneEle.style.display = "none";
	tabNconEle.style.display = "none";
	guhuanEle.style.display = "block";
	guEle.style.color = "#505050";
	guhuEle.style.color = "#505050";
	guhuaEle.style.color = "#FF8200";
}



//省份
function $(){
	return document.getElementById("id");
	}
function city_gd_sz(){
	var szEle = $("sz");
	
	var cityEle = $("city_span2");
	cityEle.innerText = szEle.innerText;
}
// banner

function init() {
	var timer;
	startLunTimer();
}

function startLunTimer() {
	timer = setInterval("showPic()", 3500);
}
var index = 1;

function showPic() {
	var imgEle = document.getElementById("banner_show");
	var imgs = imgEle.getElementsByClassName("hidden");
	var lis = imgEle.getElementsByTagName("li");
	for (var i = 0; i < imgs.length; i++) {
		if (index == i) {
			imgs[i].style.display = "block";
			lis[i].style.backgroundColor = "#FFFFFF";
		} else {
			imgs[i].style.display = "none";
			lis[i].style.backgroundColor = "transparent";
		}
	}
	if (index == imgs.length - 1) {
		index = 0;
	} else {
		index++;
	}
}

function stopLunTimer() {
	clearInterval(timer);
}

function pressBtn(i) {
	index = i;
	showPic();
}
//腰带
function init() {
	var date;
	startTimer();
}

function startTimer() {
	date = setInterval("showUp()", 5000);
}
var index2 = 1;

function showUp() {
	var sildesEls = document.getElementById("slides");
	var liEle = sildesEls.getElementsByClassName("control_li");
	var prEle = sildesEls.getElementsByClassName("prev2");
	var neEle = sildesEls.getElementsByClassName("next2");
	for (var i = 0; i < liEle.length; i++) {
		if (index2 == i) {
			liEle[i].style.display = "block";
		} else {
			liEle[i].style.display = "none";
		}
	}
	if (index2 == liEle.length - 1) {
		index2 = 0;
	} else {
		index2++;
	}
}

function stopTimer() {
	clearInterval(date);
}

function pressLi() {
	showUp();
}
//极客炫耀








//专区公告
function hxfw(){
	var curEle = document.getElementById("pic_list_1");
	var contEle = document.getElementById("pic_list_0");
	var meun_01Ele = document.getElementById("meun_01");
	curEle.style.display="block";
	contEle.style.display="none";
}
function czg(){
	var curEle = document.getElementById("pic_list_1");
	var contEle = document.getElementById("pic_list_0");
	var meun_02Ele = document.getElementById("meun_02");
	curEle.style.display="none";
	contEle.style.display="block";
}
function showNext() {
	var sildesEls = document.getElementById("pic_list_1");
	var liEle = sildesEls.getElementsByTagName("li");
	var prEle = sildesEls.getElementsByClassName("prev");
	var neEle = sildesEls.getElementsByClassName("next");
	
	for (var i = 0; i < liEle.length; i++) {
		if (index2 == i) {
			liEle[i].style.display = "block";
		} else {
			liEle[i].style.display = "none";
		}
	}
	if (index2 == liEle.length - 1) {
		index2 = 0;
	} else {
		index2++;
	}
}

function nextImg() {
	showNext();
}
function showPrev() {
	var sildesEls = document.getElementById("pic_list_0");
	var liEle = sildesEls.getElementsByTagName("li");
	var prEle = sildesEls.getElementsByClassName("prev");
	var neEle = sildesEls.getElementsByClassName("next");
	
	for (var i = 0; i < liEle.length; i++) {
		if (index2 == i) {
			liEle[i].style.display = "block";
		} else {
			liEle[i].style.display = "none";
		}
	}
	if (index2 == liEle.length - 1) {
		index2 = 0;
	} else {
		index2++;
	}
}
function prevImg() {
	showPrev();
}

function showGun() {
	var sildesEls = document.getElementById("pic_list_2");
	var liEle = sildesEls.getElementsByTagName("li");
	var prEle = sildesEls.getElementsByClassName("prev3");
	var neEle = sildesEls.getElementsByClassName("next3");
	
	for (var i = 0; i < liEle.length; i++) {
		if (index == i) {
			liEle[i].style.display = "block";
		} else {
			liEle[i].style.display = "none";
		}
	}
	if (index == liEle.length - 1) {
		index = 0;
	} else {
		index++;
	}
}
function rgt() {
	showGun();
}


//手机窗帘效果
// var openTime = "";

// function aDown(){
// 	setInterval("down()",10);	
// }
// function down(){
// 	var aEle = document.getElementById("amount")
	
// 	if(aEle.offsetHeight<50){
// 		aEle.style.height = (aEle.offsetHeight +1) +"px";
// 	}else{
// 		clearInterval(openTime);
// 	}
// }	
var closeTime = "";
function aUp(){	
	closeTime = setInterval("up()",50);	
	var aEle = document.getElementById("amount");
	// aEle.style.display ="block";
}
function up(){
	var aEle = document.getElementById("amount")
	if(aEle.offsetHeight <50){
		aEle.style.height = (aEle.offsetHeight +1) +"px";
	}else{
		clearInterval(closeTime);
	}
}	
function aDown(){	
	closeTime = setInterval("down()",10);	
	var aEle = document.getElementById("amount");
	// aEle.style.display ="none";
}
function down(){
	var aEle = document.getElementById("amount")
	if(aEle.offsetHeight > 0){
		aEle.style.height = (aEle.offsetHeight -1) +"px";
	}else{
		clearInterval(closeTime);
	}
}


//链接
function secBorad1() {
	var li01Ele = document.getElementsByClassName("li01");
	var li01Ele = document.getElementsByClassName("li02");
	var proEle1 = document.getElementById("vouchb_1");
	var proEle2 = document.getElementById("vouchb_2");
	proEle1.style.display = "block";
	proEle2.style.display = "none";
}

function secBorad2() {
	var li01Ele = document.getElementsByClassName("li01");
	var li01Ele = document.getElementsByClassName("li02");
	var proEle1 = document.getElementById("vouchb_1");
	var proEle2 = document.getElementById("vouchb_2");
	proEle1.style.display = "none";
	proEle2.style.display = "block";
}
