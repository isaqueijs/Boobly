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


window.onload = function() {

	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case 37:
			alert("TETANDO IR PRA ONDE??") // LEFT arrow
			break;
		case 38:
			alert("TU NÃO VAI PRA CIMA!") // UP arrow
			break;
		case 39:
			alert("DIREITA????") // RIGHT arrow
			break;
		case 40:
			alert("VAI PRA BAIXO???") // DOWN arrow
			break;
		case 13:
			alert("TEM CERTEZA???") // OK button
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