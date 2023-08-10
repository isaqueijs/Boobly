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
 */


function gravarNome(){
	window.localStorage.setItem('nomeUsuario', document.getElementById("inputName").value);
	//console.log(window.localStorage.getItem('nomeUsuario'))
}




window.onload = function() {
	
	

	document.getElementById("inputName").focus();

	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case 37: // LEFT arrow
			break;
		case 38:
			if (document.activeElement === document.getElementById("inputName")) {
				document.getElementById("button").focus()
			} else if (document.activeElement === document
					.getElementById("button")) {
				document.getElementById("inputName").focus()
			} else {
				document.getElementById("button").focus()
			}// UP arrow
			break;
		case 39: // RIGHT arrow
			break;
		case 40:
			if (document.activeElement === document.getElementById("inputName")) {
				document.getElementById("button").focus()
			} else if (document.activeElement === document
					.getElementById("button")) {
				document.getElementById("inputName").focus()
			} else {
				document.getElementById("button").focus()
			}// DOWN arrow
			break;
		case 13:
//			window.location.href = "TelaNivel.html"; // OK button
			document.activeElement.click();
			break;
		case 10009: // RETURN button
			window.location.href = "TelaMenuPrincipal.html";
			break;
		default:
			console.log('Key code : ' + e.keyCode);
			break;
		}
	});
}


