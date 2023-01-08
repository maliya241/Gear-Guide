document.getElementById("nav").innerHTML = `<a href="index.html">Home</a>
			<a href="enthsiasts.html">Ethusiasts</a>
			<div class="dropdown">
				<button><a href="duty_use.html">Duty</a></button>
				<div class="dropdown_content">
					<a href="helmets_duty_use.html">Helmets</a>
					<a href="helmet_night_vision_duty_use.html">Night Vision</a>
				</div>
			</div>
			<a href="education.html">Education</a>`;
			
document.getElementById("scripts").innerHTML = `<script src="js/data_functions.js"></script>
		<script src="js/data/helmets.js"></script>
		<script src="js/data/monocular_night_vision.js"></script>
		<script src="js/main.js"></script>`;