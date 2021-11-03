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
			window.location.href = "TelaVenceu.html";
		}
		
		if(--timer < 0){
			timer = duration;
		}
		
		
	}, 1000);
}

var count = 0;
var par = [];

window.onload = function(){

	var duration = 60 * 0.10; //conversao para segundos

	var display = document.querySelector("#timer"); //Elemento para exibir o timer

	startTimer(duration, display); //inicia a função


	for (var int = 1; int <= 6; int++) {
		document.getElementById(int).addEventListener('click', flipCard);
	}

	document.getElementById("1").focus();

	var id = 1;

	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case 37: // LEFT arrow
			if (id === 1) {
				id = 3;
				document.getElementById(id).focus();
			} else if (id < 4) {
				id = id - 1;
				document.getElementById(id).focus();
			} else if (id > 4 ) {
				id = id - 1;
				document.getElementById(id).focus();
			} else if (id === 4) {
				id = 6;
				document.getElementById(id).focus();
			}
			break;
		case 38:
			if (id < 4) {
				id = id + 3;
				document.getElementById(id).focus();
			} else if (id > 3) {
				id = id - 3;
				document.getElementById(id).focus();
			} 
			break;
		case 39: // RIGHT arrow
			if (id === 3) {
				id = 1;
				document.getElementById(id).focus();
			} else if (id < 3) {
				id = id + 1;
				document.getElementById(id).focus();
			} else if (id > 3 && id < 6) {
				id = id + 1;
				document.getElementById(id).focus();
			} else if (id === 6) {
				id = 4;
				document.getElementById(id).focus();
			}
			break;
		case 40:
			if (id < 4) {
				id = id + 3;
				document.getElementById(id).focus();
			} else if (id > 3) {
				id = id - 3;
				document.getElementById(id).focus();
			} 
			// DOWN arrow
			break;
		case 13:
			if (isFaceUp(id)) {				
				// OK button
				break;
			} else {
				document.activeElement.click();
			}

			if (par.length === 2) {
				par = [];
			}

			if (par[length] !== id) {
				par.push(id);

				console.log("Ultimo elemento no vetor: "+ par[length]);
				console.log("tamanho do vetor: " + par.length)
				if (par.length === 2) {
					acertouPar();
					venceu();
				}
			}

			break;
		case 10009: // RETURN button

			break;
		default:
			console.log('Key code : ' + e.keyCode);
		break;
		}
	});

}

/* 

const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"
	
	
let techs =  ['coruja',
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

let cards = null; //global 
startGame(); //iniciando


function startGame(){
	cards = createCardsFromTechs(techs); //criando os cards
	shuffleCards(cards); //embaralha cards
	initializeCards(cards);
}

function initializeCards(cards){
	let gameBoard = document.getElementById("gameBoard");
	
	//criando cartas
	cards.forEach(card => {
		let cardElement = document.createElement('div');
		cardElement.id = card.id;  //add id para os cards
		cardElement.classList.add(CARD);
		cardElement.dataset.icon = card.icon; //VERIFICAR SE CARDS SAO IGUAIS
		createCardContent(card, cardElement);
		
		cardElement.addEventListener('click', flipCard); // chamando função flipCard evento do click
		gameBoard.appendChild(cardElement);	// colocando no tabuleiro
		
	})
}


function createCardContent(card, cardElement){	
	createCardFace(FRONT, card, cardElement);
	createCardFace(BACK, card, cardElement);	
}

function createCardFace(face, card, element){
	
	let cardElementFace = document.createElement('div');
	cardElementFace.classList.add(face);
	
	if(face === FRONT){
		let iconElement =  document.createElement('img');
		iconElement.classList.add(ICON);
		iconElement.src = "../images/cards"+ card.icon + ".png";
		cardElementFace.appendChild(iconElement);
		
	}else{
		cardElementFace.innerHtml = "&lt/&gt";
	}
	
	element.appendChild(cardElementFace);
	
}

function shuffleCards(cards) {
	let currentIndex = cards.lenght; //index atual do card
	let randomIndex = 0; //index 0
	
	while(currentIndex !== 0){
		
		randomIndex = Math.floor(Math.random() * currentIndex); //so pode pegar cartas que nao foi embaralhada de 1 até fim 
		currentIndex--; // diminue os cards
		
		[cards[randomIndex], cards[currentIndex]] = [ cards[currentIndex], cards[randomIndex]]
	}
}

 function createCardsFromTechs(techs){
	let cards = [];
	
	techs.forEach((tech) => {
		cards.push(createPairFromTech(tech));
	})
	
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

//criando o ID dos cards
function createIdWithTech(tech) {
	return tech + parseInt( Math.random() * 1000); //Math... numero randomico
}

*/

function flipCard() {
	this.classList.add("flip");
	
}


function isFaceUp(id) {
	return document.getElementById(id).classList.contains("flip");
}

function acertouPar() {
	
	var obj1 = document.getElementById(par[0]).childNodes.item(1).childNodes.item(1).attributes.item(1).nodeValue;
	var obj2 = document.getElementById(par[1]).childNodes.item(1).childNodes.item(1).attributes.item(1).nodeValue;
	
	
	if (obj1 !== obj2) {
		
		setTimeout(function() {
			document.getElementById(par[0]).classList.remove("flip");
			document.getElementById(par[1]).classList.remove("flip");
		}, 1000);	
		
	} else {
		console.log("Acertou o par!");
	}
}

function venceu() {
	
	count = document.querySelectorAll(".flip");
	if (count.length === 6) {
		window.location.href = "TelaVenceu.html";
	}
}

