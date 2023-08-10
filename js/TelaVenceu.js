/*
 *      Copyright 2013  Samsung Electronics Co., Ltd
 *
 *      Licensed under the Flora License, Version 1.1 (the "License");
 *      you may not use this file except in compliance with the License.
 *      You may obtain a copy of the License at
 *
 *              http://floralicense.org/license/
 *
 *      Unless required by applicable law or agreed to in writing, software
 *      distributed under the License is distributed on an "AS IS" BASIS,
 *      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *      See the License for the specific language governing permissions and
 *      limitations under the License.
 *      
 function fazGet(url){
	let request = new XMLHttpRequest()
	request.open("GET", url, false)
	request.send()
	return request.responseText
}*/

function fazPost(url, dados){
	let request = new XMLHttpRequest()
	request.open("POST", url, false)
	request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	request.send(dados)
	return request.responseText
}

/*function GetResultados(dificuldade){
	return fazGet("http://localhost:58241/Jogo?nivel="+dificuldade);
}*/

function SalvarResultado(resultado){
	return fazPost("http://localhost:58241/Jogo", JSON.stringify(resultado));
}

window.onload = function() {
//
	let resultadoPost = {
			'Nome': window.localStorage.getItem('nomeUsuario'), 
			'Tempo': 	window.localStorage.getItem('tempoUser'),
			'Dificuldade': 	parseInt(window.localStorage.getItem('nivelUsuario'))
			}
	console.log(resultadoPost)
	SalvarResultado(resultadoPost)
	var tempoTotal = window.localStorage.getItem('tempoUser');
	
	console.log(tempoTotal)
	console.log(tempoTotal.split(':')[0])
	console.log(tempoTotal.split(':')[1])
	
	document.getElementById("1").focus();
	document.getElementById("tempo-jogo").innerHTML = '<span>' + tempoTotal.split(':')[0] + '&nbsp;min &nbsp;</span><span>' + tempoTotal.split(':')[1] + '&nbsp;seg</span>'

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
			window.location.href = "TelaJogarNovamente.html";
			break;
		default:
			console.log('Key code : ' + e.keyCode);
			break;
		}
	});
}