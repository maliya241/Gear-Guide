document.getElementById("nav").innerHTML = `<a href="index.html" tabindex="0">Home</a>
	<a href="enthsiasts.html" tabindex="0">Ethusiasts</a>
	<div class="nav_dropdown">
		<button type="button" class="nav_dropdown_button" tabindex="0" onclick="toggle_dropdown_display('nav_dropdown_duty')"><a href="duty_use.html" tabindex="0">Duty</a></button>
		<div id="nav_dropdown_duty" class="nav_dropdown_content">
			<a href="helmets_duty_use.html" tabindex="0">Helmets</a>
			<a href="helmet_night_vision_duty_use.html" tabindex="0">Night Vision</a>
		</div>
	</div>
	<a href="education.html">Education</a>`;
	
		
document.getElementById("footer").innerHTML = ``;

/**************
toggle_dropdown_display function changes the display style of a dropdown contents based on previous display style when dropdown button has been clicked.
dropdown_content_id parameter is the id of a div of contents for a dropdown.
Executes when a dropdown button is clicked.
**************/
function toggle_dropdown_display(dropdown_content_id) {
	if (document.getElementById(dropdown_content_id).style.display == "none") {
		document.getElementById(dropdown_content_id).style.display = 'block';
	} else {
		document.getElementById(dropdown_content_id).style.display = 'none';
	}
}