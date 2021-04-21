var link = location.href;

window.onload=()=> {
  if(link == "https://johnoye742.github.io/SFACCG/" || link == "https://johnoye742.github.io/SFACCG" || link == "https://johnoye742.github.io/SFACCG/index.html") {
  var home = document.getElementById("home");
    home.style.backgroundColor="green";
  }
}
function show() {
	var nav = document.getElementById("nav");

if(nav.style.height == "70%") {
	nav.style.height = "0%";
	nav.style.visibility = "hidden";
	
} else {
	nav.style.visibility = "visible";
	nav.style.height = "70%";
	
}
}
