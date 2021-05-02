var link = location.href;

window.onload=()=> {
  if(link == "https://johnoye742.github.io/SFACCG/" || link == "https://johnoye742.github.io/SFACCG" || link == "https://johnoye742.github.io/SFACCG/index.html") {
  var home = document.getElementById("home");
    home.style.backgroundColor="green";
  }
}
$(document).ready(function(){
	var con = $(".__container");
	var nav = $("#nav");
	con.click(function(){
nav.toggle(1000);
	});
});
window.addEventListener("scroll", scFun);

function scFun() {
	var p = window.scrollY;
	var sc = document.getElementById("scroller");
		const c = ()=> {
			
			window.scrollTo(0, 0);
		};
	if(p > 0) {
		
		sc.style.opacity = "1";
	sc.style.bottom = "0";
			
		sc.onclick = c;
	} else {
		sc.style.bottom = "-2em";
		sc.style.opacity = "0";
		
	

	}
}
 function scr() {
	window.scrollY = 0;
}
