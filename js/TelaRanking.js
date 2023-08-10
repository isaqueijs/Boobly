

function fazGet(url){
	let request = new XMLHttpRequest()
	request.open("GET", url, false)
	request.send()
	return request.responseText
}


function GetResultados(dificuldade){
	return fazGet("http://localhost:58241/Jogo?nivel="+dificuldade);
}

function montarResultado(classificacao, nome, tempo){
	return '<table class="tableSettings">' 
	+ '<tr>'
	+	'<td class="Column1">'
	+	'<span>' + classificacao + ') </span>'
	+	'<span>'+ nome + '</span>'
	+	'<span> | </span>'
	+	'<span>'+ tempo + '</span>'
	+	'</td>'
	+'</tr>'
+ '</table>'
}

function montarResultadoTotal(resultados){
	var resultado = '';
	var indice;
	for (var i = 0; i < resultados.length; i++) {
		indice = resultados[i];
		resultado += montarResultado(i + 1, indice.nome, indice.tempo);
	}
	
	return resultado;
}

window.onload = function() {
	
	var facil = JSON.parse(GetResultados(1));
	var medio = JSON.parse(GetResultados(2));
	var dificil = JSON.parse(GetResultados(3));
	
	console.log(facil);
	console.log(medio);
	console.log(dificil);

	var stringFacil = montarResultadoTotal(facil);
	var stringMedio = montarResultadoTotal(medio);
	var stringDificil = montarResultadoTotal(dificil);

	document.getElementById("facil").innerHTML = stringFacil;
	document.getElementById("medio").innerHTML = stringMedio;
	document.getElementById("dificil").innerHTML = stringDificil;
	
	// add eventListener for keydown
	document.addEventListener('keydown', function(e) {
		switch (e.keyCode) {
		case 37: // LEFT arrow
			break;
		case 38: // UP arrow
			break;
		case 39: // RIGHT arrow
			break;
		case 40: // DOWN arrow
			break;
		case 13: // OK button
			break;
		case 10009: // RETURN button
			window.location.href = "TelaMenuPrincipal.html"
			break;
		default:
			console.log('Key code : ' + e.keyCode);
			break;
		}
	});
}