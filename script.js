var fromana = 0;
const fmDisplay = document.getElementById("fm");


/* EDUCATION */
var attendingMagicSchool = false;


/* FUNCTIONS */

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function genFromana(x) {
	fromana = fromana + x;
	fmDisplay.innerHTML = prettify(fromana);
};

function buyRuneWheel() {
	if (fromana >= 24) {
		document.getElementById('cheddar').src="images/cheese-aseprite/cheddar-rune.png";
		fromana = fromana - 24;
		fmDisplay.innerHTML = prettify(fromana);
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


	fmDisplay.innerHTML = prettify(fromana);
}, 1000);
