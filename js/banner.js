 var timer;

 function init() {
 	startLunTimer();
 }

 function startLunTimer() {
 	timer = setInterval("showPic()", 2000);
 }
 var index = 1;

 function showPic() {
 	var imgEle = document.getElementById("banner_show");
 	var imgs = imgEle.getElementsByTagName("img");
 	var lis = imgEle.getElementsByTagName("li");
 	for (var i = 0; i < imgs.length; i++) {
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

 function stopLunTimer() {
 	clearInterval(timer);
 }
