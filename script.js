var fromana = 0;
const fmDisplay = document.getElementById("fm");


/* EDUCATION */
var attendingMagicSchool = false;


/* FUNCTIONS */

function genFromana(x) {
	fromana = fromana + x;
	fmDisplay.innerHTML = Math.floor(fromana);
};

function buyRuneWheel() {
	if (fromana >= 10) {
		document.getElementById('cheddar').src="images/cheese-aseprite/cheddar-rune.png";
		fromana = fromana - 10;
		fmDisplay.innerHTML = Math.floor(fromana);
		document.getElementById('magicSchool').disabled = true;
		attendingMagicSchool = true;
	}
	else {

	}
};





/* SAVE */
var save = {
	fromana: fromana,
	attendingMagicSchool: attendingMagicSchool
}

/* GAME LOOP */
window.setInterval(function(){
	if (attendingMagicSchool == true){
		genFromana(0.1)
	}
	

	fmDisplay.innerHTML = Math.floor(fromana);
}, 1000);



