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

	var somBotao = document.getElementById("somBotao");

	document.getElementById("play").focus();

	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case 37: // LEFT arrow
			break;
		case 38:
			somBotao.play();
			if (document.activeElement === document.getElementById("exit")) {
				document.getElementById("ranking").focus()
			} else if (document.activeElement === document
					.getElementById("ranking")) {
				document.getElementById("play").focus()
			} else if (document.activeElement === document
					.getElementById("play")) {
				document.getElementById("exit").focus()
			} else {
				document.getElementById("play").focus()
			} // UP arrow
			break;
		case 39: // RIGHT arrow
			break;
		case 40:
			somBotao.play();
			if (document.activeElement === document.getElementById("play")) {
				document.getElementById("ranking").focus()
			} else if (document.activeElement === document
					.getElementById("ranking")) {
				document.getElementById("exit").focus()
			} else {
				document.getElementById("play").focus()
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