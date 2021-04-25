var link = location.href;

window.onload=()=> {
  if(link == "https://johnoye742.github.io/SFACCG/" || link == "https://johnoye742.github.io/SFACCG" || link == "https://johnoye742.github.io/SFACCG/index.html") {
  var home = document.getElementById("home");
    home.style.backgroundColor="green";
  }
}
function show() {
	var nav = document.getElementById("nav");

if(nav.style.height == "100%") {
	nav.style.height = "0%";
	nav.style.visibility = "hidden";
	
} else {
	nav.style.visibility = "visible";
	nav.style.height = "100%";
	
}
}
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