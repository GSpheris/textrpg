//TextRPG Game
var prompt = require("prompt-sync")();
//defaults
const defaultHealth = 100;
const main_information = "Choose your actions:\n   1. Hero Status\n   2. Fight Monster\n   3. Upgrade Stats\n   4. Inventory";


//Character Object
var hero = {
	numbers: {
		health: defaultHealth,
		xp: 0,
		level: 1,
		stats: {
			strength: 0,
			vitality: 0,
			intelligence: 0
		}
	},

	inventory: {
		using: {
			right_hand: 0,
			left_hand: 0,
			head: 0,
			torso: 0,
			legs: 0,
			feet: 0
		},
		bag: {
			sword: 0,
			shield: 0,
			helmet: 0,
			chestplate: 0,
			leggings: 0,
			boots: 0
		}
	},

	skills: {
		hit: 0,
		slash: 0,
		shieldbash: 0,
		guard: 0,
		fireball: 0
	}
};

//Main Game Loop
while (true){
	console.log(main_information);
	var choice = prompt("Enter the number: ");
	if (choice = 1){
		showStatus();
	} else if (choice = 2) {
		doCombat();
	} else if (choice = 3) {
		upgradeStats();
	} else if (choice = 4) {
		inventory();
	} else {
		console.log("Please enter a number from 1 to 4.");
		continue;
	}
	break; //For testing
}

//Other Functions
function showStatus(){
	console.log("Hi Jeff.");
}

function doCombat(){

}

function upgradeStats(){

}

function inventory(){

}

function updateEquipment(){

}

function updateStats(){

}