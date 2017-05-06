//guardamos los nombres de los dos jugadores en sessionstorage
function guardarNombres(frm){

	sessionStorage['player1'] = frm.player1.value;
	sessionStorage['player2'] = frm.player2.value
	console.log(sessionStorage['player1']);
	console.log(sessionStorage['player2']);

	mostrarBotonJuego();

	return false
}
function mostrarBotonJuego(){
	let html="";
	html += '<a href="juego.html">Ir al juego</a>';
	document.getElementById("boton_juego").innerHTML=html;
}
function mostrarNombres(){
	let html="";
	html += '<p>Jugador 1: '+sessionStorage['player1']+'</p>';
	html += '<p>Jugador 2: '+sessionStorage['player2']+'</p>';
	document.getElementById("players").innerHTML=html;
}