var count = 0;
var par = [];


window.onload = function(){

	var duration = 60 * 4; //conversao para segundos

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
			window.location.href = "TelaPerdeu.html";
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
		if (count.length === 6) {
			window.location.href = "TelaVenceu.html";
		}

	}, 1500);
}
