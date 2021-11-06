var count = 0;
var par = [];
var id = 1;

var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8];
var array3 = [9, 10, 11, 12];

window.onload = function(){
	var duration = 60 * 8; //conversao para segundos
	var display = document.querySelector("#timer"); //Elemento para exibir o timer
	
	startTimer(duration, display); //inicia a função
	
	for (var int = 1; int <= 12; int++) {
		document.getElementById(int).addEventListener('click', flipCard);
	}

	
	var obj = document.getElementById("1");
	obj.focus();
	
	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case 37: // LEFT arrow
			 if (array1.includes(id)) {
				id = (array1.indexOf(id) === 0) ? array1[array1.length - 1] : id - 1;
				document.getElementById(id).focus();
			}

			else if (array2.includes(id)) {
				id = (array2.indexOf(id) === 0) ? array2[array2.length - 1] : id - 1;
				document.getElementById(id).focus();
			} else if (array3.includes(id)) {
				id = (array3.indexOf(id) === 0) ? array3[array2.length - 1] : id - 1;
				document.getElementById(id).focus();
			}
			break;
		case 38:
			if (array1.includes(id)) {
				id = array3[array1.indexOf(id)];
				document.getElementById(id).focus();
			} else if (array2.includes(id)) {
				id = array1[array2.indexOf(id)];
				document.getElementById(id).focus();
			} else if (array3.includes(id)) {
				id = array2[array3.indexOf(id)];
				document.getElementById(id).focus();
			}
			break;
		case 39: // RIGHT arrow
			if (array1.includes(id)) {
				id = (array1.indexOf(id) === array1.length - 1) ? array1[0] : id + 1;
				document.getElementById(id).focus();
			}

			else if (array2.includes(id)) {
				id = (array2.indexOf(id) === array2.length - 1) ? array2[0] : id + 1;
				document.getElementById(id).focus();
			} else if (array3.includes(id)) {
				id = (array3.indexOf(id) === array3.length - 1) ? array3[0] : id + 1;
				document.getElementById(id).focus();
			}
			break;
		case 40:
			if (array3.includes(id)) {
				id = array1[array3.indexOf(id)];
				document.getElementById(id).focus();
			} else if (array2.includes(id)) {
				id = array3[array2.indexOf(id)];
				document.getElementById(id).focus();
			} else if (array1.includes(id)) {
				id = array2[array1.indexOf(id)];
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

			if (par[par.length - 1] !== id) {
				par.push(id);

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
			window.location.replace("../pages/TelaPerdeu.html");
		}
		
		if(--timer < 0){
			timer = duration;
		}
		
		
	}, 1000);
}

function flipCard() {
	this.classList.add("flip");
	
}


function isFaceUp(id) {
	return document.getElementById(id).classList.contains("flip");
}

function acertouPar() {
	
	var obj1 = document.getElementById(par[0]).childNodes.item(1).childNodes.item(1).attributes.item(1).nodeValue;
	var obj2 = document.getElementById(par[1]).childNodes.item(1).childNodes.item(1).attributes.item(1).nodeValue;
	var erroCard = document.getElementById("erroCard");
	var acertoCard = document.getElementById("acertoCard");
	
	if (obj1 !== obj2) {
		
		setTimeout(function() {
			document.getElementById(par[0]).classList.remove("flip");
			document.getElementById(par[1]).classList.remove("flip");
			erroCard.play();
		}, 1000);	
		
	} else {
		console.log("Acertou o par!");
		acertoCard.play();
	}
}

function venceu() {
	
	count = document.querySelectorAll(".flip");
	setTimeout(function() {
		if (count.length === 12) {
			window.location.href = "TelaVenceu.html";
		}
	}, 1500)
}