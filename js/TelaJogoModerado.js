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
			window.location.replace("../pages/TelaJogarPerdeu.html");
		}
		
		if(--timer < 0){
			timer = duration;
		}
		
		
	}, 1000);
}


window.onload = function(){
	var duration = 60 * 0.10; //conversao para segundos
	var display = document.querySelector("#timer"); //Elemento para exibir o timer
	
	startTimer(duration, display); //inicia a função
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



function flipCard() {
	this.classList.add("flip");
	
}



*/

