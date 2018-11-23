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
			FROMANA ON CHEDDAR WHEEL CLICK
##################################################
*/
var cheeseBtn = document.getElementById('cheeseBtn');
function clickWheel(){
	genFromana(1);
}
cheeseBtn.addEventListener("click", clickWheel);

/*
##################################################
			FROMANA ON CHEDDAR WHEEL CLICK
##################################################
*/
var magicSchool = document.getElementById('magicSchool');
magicSchool.addEventListener('click', buyRuneWheel);

/*
##################################################
			INVENTORY MANIPULATION
##################################################
*/
// Dropping a rune in the inventory when the fromana bottle is clicked
var freeSpace = document.getElementsByClassName('notFull');
var fromanaBottle = document.getElementById('fromanaBottle');
var inventory = document.getElementsByClassName('inventory');

// creating the rune <img>
var affinageRune = document.createElement('img');
affinageRune.src="images/cheese-aseprite/rune-affinage.png";
affinageRune.style="width:100%";
// cloning the rune <img>
var cloneRuneAff = affinageRune.cloneNode(true);


function dropRune() {
	// cloning the rune <img> to prevent it from disappearing with new click
	var clnRuneAffinage = affinageRune.cloneNode(true);
	freeSpace.item(0).appendChild(clnRuneAffinage);
	freeSpace.item(0).classList.add('full');
	freeSpace.item(0).classList.remove("notFull");
	if (freeSpace.length == 0) {
	inventory.item(0).classList.add("full");
	fromanaBottle.classList.remove('active');
	fromanaBottle.removeEventListener("click", dropRune)
	}
};
fromanaBottle.addEventListener("click", dropRune);




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
