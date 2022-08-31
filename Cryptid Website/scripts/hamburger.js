//I do not remember if this function is used anywhere and I am too afraid to delete it
//similar to topnav.js, makes a hamburger menu
function hamburger() {
	var x = document.getElementById("topnav");
	if(x.styles.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}