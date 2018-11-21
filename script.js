var fromana = 0;
const fmDisplay = document.getElementById("fm");


/*
##################################################
			EDUCATION
##################################################
*/
var attendingMagicSchool = false;


/*
##################################################
			FUNCTIONS
##################################################
*/

// prettify the numbers
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


// general function to call when you generate some fromana and need to display input
function genFromana(x) {
	fromana = fromana + x;
	fmDisplay.innerHTML = prettify(fromana);
};

// add a rune on the classic cheddar wheel and start generating fromana iddly
function buyRuneWheel() {
	if (fromana >= 24) {
		document.getElementById('cheddar').src="images/cheese-aseprite/cheddar-rune.png";
		fromana = fromana - 24;
		fmDisplay.innerHTML = prettify(fromana);
		document.getElementById('magicSchool').disabled = true;
		attendingMagicSchool = true;
	}
};

/*
##################################################
			MANIPULATION
##################################################
*/
// Dropping a rune in the inventory when the fromana bottle is clicked
var freeSpace = document.getElementsByClassName('notFull');
var fromanaBottle = document.getElementById('fromanaBottle');
fromanaBottle.addEventListener("click", function() {
		freeSpace.item(0).style="background: #fff";
		freeSpace.item(0).classList.add('full');
		freeSpace.item(0).classList.remove("notFull");
	});




/*
##################################################
			SAVE
##################################################
*/
var save = {
	fromana: fromana,
	attendingMagicSchool: attendingMagicSchool
}

/*
##################################################
			GAME LOOP
##################################################
*/
window.setInterval(function(){
	if (attendingMagicSchool == true){
		genFromana(0.1)
	}

	fmDisplay.innerHTML = prettify(fromana);
}, 1000);
