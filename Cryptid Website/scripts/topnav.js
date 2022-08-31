//Function for a responsive topnav. This removes all links but one on the topnav
//and stores all in a hamburger menu
function topnav() {
	var x = document.getElementById("topnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
  	}
}	