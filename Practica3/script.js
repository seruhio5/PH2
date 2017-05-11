var player1;
var player2;
//guardamos los nombres de los dos jugadores en sessionstorage
function guardarNombres(frm){

	sessionStorage['player1'] = frm.player1.value;
	sessionStorage['player2'] = frm.player2.value
	console.log(sessionStorage['player1']);
	console.log(sessionStorage['player2']);

	mostrarBotonJuego();

	return false
}
function mostrarFormu(){
	let html= '';
	if(sessionStorage['player1']!=undefined && sessionStorage['player2']!=undefined){
		html += '<form onsubmit="return guardarNombres(this);">'
		html +=	'<ul class="formu">'
		html +=	'<li>'
		html +=	'<label>Jugador 1 <span class="required">*</span></label>'
		var p1=sessionStorage['player1'];
		html +=	'<input type="text" value="'+p1+'" name="player1" class="field-long" required="" autofocus=""/>'
		html += '</li>'
		html +=	'<li>'
		html +=	'<label>Jugador 2 <span class="required">*</span></label>'
		var p2=sessionStorage['player2'];
		html +=	'<input type="text" value="'+p2+'" name="player2" class="field-long" required="" />'
		html +=	'</li>'
		html +=	'<li>'
		html += '<input type="submit" value="Guardar Jugadores" />'
		html += '</li>'
		html += '</ul>'
		html += '</form>'
		document.getElementById("formu").innerHTML=html;
	}
	else
	{
		html += '<form onsubmit="return guardarNombres(this);">'
		html +=	'<ul class="formu">'
		html +=	'<li>'
		html +=	'<label>Jugador 1 <span class="required">*</span></label>'
		html +=	'<input type="text" placeholder="Jugador1" name="player1" class="field-long" required="" autofocus=""/>'
		html += '</li>'
		html +=	'<li>'
		html +=	'<label>Jugador 2 <span class="required">*</span></label>'
		html +=	'<input type="text" placeholder="Jugador2" name="player2" class="field-long" required="" />'
		html +=	'</li>'
		html +=	'<li>'
		html += '<input type="submit" value="Guardar Jugadores" />'
		html += '</li>'
		html += '</ul>'
		html += '</form>'
		document.getElementById("formu").innerHTML=html;
	}	
}
function mostrarBotonJuego(){
	let html="";
	html += '<a href="juego.html">Ir al juego</a>';
	document.getElementById("boton_juego").innerHTML=html;
}

//-------------------------------FIN DE INDEX--------------------------------------------------------
function mostrarNombres(){
	let html="";
	html += '<p>Jugador 1: '+sessionStorage['player1']+'</p>';
	html += '<p>Jugador 2: '+sessionStorage['player2']+'</p>';
	document.getElementById("players").innerHTML=html;
}
function comprobar(){
	if((sessionStorage.getItem('player1')==null || sessionStorage.getItem('player1')=="") && (sessionStorage.getItem('player2')==null || sessionStorage.getItem('player2')=="")){
		window.location="http://localhost/PH2/Practica3/index.html";
	}
}

var face0=new Image()
face0.src="fotos/dado1.png"
var face1=new Image()
face1.src="fotos/dado2.png"
var face2=new Image()
face2.src="fotos/dado3.png"
var face3=new Image()
face3.src="fotos/dado4.png"
var face4=new Image()
face4.src="fotos/dado5.png"
var face5=new Image()
face5.src="fotos/dado6.png"

function lanzar()
{
   var randomdice=Math.round(Math.random()*5);
   document.images["mydice"].src=eval("face"+randomdice+".src");
}


/********************************Canvas*************************************/
function dibujarCampo(){
	let cv = document.getElementById("cv01"),
		ctx = cv.getContext("2d"),
		dim = cv.width/20;

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#000';

	for(let i=0;i<=20;i++){
		if(i==0)
		{
			//Lineas verticales
			ctx.moveTo(i*dim, 0);
			ctx.lineTo(i*dim, cv.height);
			//Lineas horizontales
			ctx.moveTo(0, i*dim);
			ctx.lineTo(cv.height*3, i*dim);
		}
		else if(i==20)
		{
			//Lineas verticales
			ctx.moveTo(i*dim, 0);
			ctx.lineTo(i*dim, cv.height);
			//Lineas horizontales
			ctx.moveTo(0, i*dim);
			ctx.lineTo(cv.height*3, i*dim);
		}
		else{
		//Lineas verticales
		ctx.moveTo(i*dim, 0);
		ctx.lineTo(i*dim, cv.height);
		//Lineas horizontales
		ctx.moveTo(0, i*dim);
		ctx.lineTo(cv.height*3, i*dim);
		}

	}

	ctx.fillStyle="#32CD32";
	ctx.fillRect(0,0,cv.width,cv.height);
	ctx.stroke();
}

function mouse_move(e){
	let cv 		= e.target,
		dim 	= cv.width/20,
		x 		= e.offsetX,
		y 		= e.offsetY,
		fila 	= Math.floor(y/dim),
		columna	= Math.floor(x/dim);

	console.log(`Posicion: ${x} - ${y}`);
	console.log(`Fila: ${fila} -  columna: ${columna}`);
}

function mouse_click(e){
	let cv 		= e.target,
		dim 	= cv.width/20,
		x 		= e.offsetX,
		y 		= e.offsetY,
		fila 	= Math.floor(y/dim),
		columna	= Math.floor(x/dim);

	if(fila<0)
		fila=0;
	if(columna<0)
		columna=0;
	if(fila>=9)
		fila=9;
	if(columna>=20)
		columna=20;

	//console.log(`Posicion: ${x} - ${y}`);
	console.log(`Fila: ${fila} -  columna: ${columna}`);

	//Se limpia el canvas para pintar todo otra vez
	cv.width = cv.width;
	dibujarCampo();

	let ctx = cv.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = '#a00';
	ctx.lineWidth = 4;
	ctx.strokeRect(columna*dim, fila*dim,dim, dim)

}