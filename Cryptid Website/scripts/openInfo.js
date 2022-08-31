//Function to replace info on the Cryptids and Mysterious Events pages when a link is clicked
function openInfo(event, infoName) {
	var i, content, links;

	//Each cryptids/events contents are stored in an array
	content = document.getElementsByClassName("content");
	for(i = 0; i < content.length; i++) {
		content[i].style.display = "none";
	}

	links = document.getElementsByClassName("infolinks");
	for(i = 0; i < links.length; i++) {
		links[i].className = links[i].className.replace(" active", "");
	}

	//when the display is set to active then the information is shown and replaces the current on screen
	//information
	document.getElementById(infoName).style.display = "block";
	event.currentTarget.className += " active";
}