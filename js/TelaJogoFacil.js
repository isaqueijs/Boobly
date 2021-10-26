

/* CONTROL SETTINGS*/
window.onload = function() {

	document.getElementById("1").focus();

	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case 37: // LEFT arrow
			break;
		case 38:
			if (document.activeElement === document.getElementById("3")) {
				document.getElementById("2").focus()
			} else if (document.activeElement === document
					.getElementById("2")) {
				document.getElementById("1").focus()
			} else if (document.activeElement === document
					.getElementById("1")) {
				document.getElementById("3").focus()
			} else {
				document.getElementById("1").focus()
			} // UP arrow
			break;
		case 39: // RIGHT arrow
			break;
		case 40:
			if (document.activeElement === document.getElementById("1")) {
				document.getElementById("2").focus()
			} else if (document.activeElement === document
					.getElementById("2")) {
				document.getElementById("3").focus()
			} else {
				document.getElementById("1").focus()
			}// DOWN arrow
			break;
		case 13:
			document.activeElement.click() // OK button
			break;
		case 10009: // RETURN button
			tizen.application.getCurrentApplication().exit();
			break;
		default:
			console.log('Key code : ' + e.keyCode);
			break;
		}
	});
}
 


/* GAME TIMER */

function startTimer(duration, display){
	var timer = duration, minutes, seconds;
	
	setInterval(function () {
		
		minutes = parseInt(timer / 60, 10);
		seconds = parseInt(timer % 60, 10);
		
		minutes = minutes < 10 ? "0" + minutes: minutes;
		seconds = seconds < 10 ? "0" + seconds: seconds;
		
		display.textContent = minutes + ":" + seconds;
		
		
		if(timer == 0){
			window.location.replace("../pages/TelaJogarNovamente.html");
		}
		
		if(--timer < 0){
			timer = duration;
		}
		
		
	}, 1000);
}


window.onload = function(){
	var duration = 60 * 0.25; //conversao para segundos
	var display = document.querySelector("#timer"); //Elemento para exibir o timer
	
	startTimer(duration, display); //inicia a função
}


/**************************************************************/


/* RANDOM CARD TEMPLATES */


const FRONT = "card_front";
const BACK = "card_back"
	
	
var techs =  ['coruja',
              'dog',
              'elefante',
              'foca',
              'gato',
              'grilo',
              'jacare',
              'macaco',
              'panda',
              'tigre',
              'veado',
              'polvo',
              'urso',
              'joaninha',
              'siri',
              'sapo',
              'galinha'];

var cards = null;

startGame();

function startGame(){
	cards = createCardsFromTechs(techs);
	shuffleCards(cards);
	console.log(cards);
	
}


function shuffleCards(cards) {
	let currentIndex = cards.lenght;
	let randomIndex = 0;
	
	while(currentIndex !== 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		
		[cards[randomIndex], cards[currentIndex]] = [ cards[currentIndex], cards[randomIndex]];
	}
}












function createCardsFromTechs(techs){
	let cards = [];
	
	for(var techs of techs){
		cards.push(createPairFromTech(tech));
	}
	
	return cards.flatMap(pair => pair);
}

function createPairFromTech(tech) {
	return [{
		id: createIdWithTech(tech),
		icon: tech,
		flipped: false,
	}, {
		id: createIdWithTech(tech),
		icon: tech,
		flipped: false,
	}]
}



function createIdWithTech(tech) {
	return tech + parseInt( Math.random() * 1000);
}









