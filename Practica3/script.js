var player1;

var player2;

var imgr = new Image();

var imgv = new Image();

	imgr.src ="./circulorojo.svg";

	imgv.src ="./circuloverde.svg";

var fichas = new Array();

var fila1=new Array(20);

var fila2=new Array(20);

var fila3=new Array(20);

var fila4=new Array(20);

var fila5=new Array(20);

var fila6=new Array(20);

var fila7=new Array(20);

var fila8=new Array(20);

var fila9=new Array(20);

var inicio;

var inicioP1;

var inicioP2;

var turnoP1;

var turnoP2;

var fila_aux;

var columna_aux;

sessionStorage['fila1']=fila1;

sessionStorage['fila2']=fila2;

sessionStorage['fila3']=fila3;

sessionStorage['fila4']=fila4;

sessionStorage['fila5']=fila5;

sessionStorage['fila6']=fila6;

sessionStorage['fila7']=fila7;

sessionStorage['fila8']=fila8;

sessionStorage['fila9']=fila9;

//guardamos los nombres de los dos jugadores en sessionstorage

function guardarNombres(frm){

	//array pa las fichas

	

	sessionStorage['player1'] = frm.player1.value;

	sessionStorage['player2'] = frm.player2.value

	console.log(sessionStorage['player1']);

	console.log(sessionStorage['player2']);



	mostrarBotonJuego();



	return false

}

//inicializar marcador

function marcador(){

	sessionStorage['goles1']=0;

	sessionStorage['goles2']=0;

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

	html += '<a id="boton_juego" href="juego.html">Ir al juego</a>';

	document.getElementById("juego").innerHTML=html;

}



//-------------------------------FIN DE INDEX--------------------------------------------------------

/*function mostrarNombres(){

	let html="";

	html += '<p>Jugador 1: '+sessionStorage['player1']+'</p>';

	html += '<p>Jugador 2: '+sessionStorage['player2']+'</p>';

	html += '<p>Dado: '+sessionStorage['dado']+'</p>';

	html += '<p>Marcador: '+sessionStorage['goles1']+' - '+sessionStorage['goles2']+'</p>';

	document.getElementById("players").innerHTML=html;

}*/

function comprobar(){

	if((sessionStorage.getItem('player1')==null || sessionStorage.getItem('player1')=="") && (sessionStorage.getItem('player2')==null || sessionStorage.getItem('player2')=="")){

		window.location="./index.html";

	}else{

		inicioP1=true;

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

   sessionStorage["dado"]=randomdice+1;

   mostrarNombres();

}





/********************************Canvas*************************************/

function fichas_p1(){

	let html= '';

	switch(cont_p1){

			case 0:

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<input type="button" value="random1" onClick="colocarficharandom_p1(event)">'

			break;

			case 1:

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<input type="button" value="random1" onClick="colocarficharandom_p1(event)">'

			break;

			case 2:

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<input type="button" value="random1" onClick="colocarficharandom_p1(event)">'

			break;

			case 3:

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<input type="button" value="random1" onClick="colocarficharandom_p1(event)">'

			break;

			case 4:

				html += '<img src="circulorojo.svg" alt="circulorojo" />'

				html += '<input type="button" value="random1" onClick="colocarficharandom_p1(event)">'

			break;

			case 5:

				html += '<input type="button" value="random1" onClick="colocarficharandom_p1(event)">'

			break;



			}

			document.getElementById('fichas_p1').innerHTML = html;

}

function fichas_p2(){

		let html= '';

	switch(cont_p2){

			case 0:

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<input type="button" value="random2" onClick="colocarficharandom_p2(event)">'

			break;

			case 1:

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<input type="button" value="random2" onClick="colocarficharandom_p2(event)">'

			break;

			case 2:

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<input type="button" value="random2" onClick="colocarficharandom_p2(event)">'

			break;

			case 3:

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<input type="button" value="random2" onClick="colocarficharandom_p2(event)">'

			break;

			case 4:

				html += '<img src="circuloverde.svg" alt="circuloverde" />'

				html += '<input type="button" value="random2" onClick="colocarficharandom_p2(event)">'

			break;

			case 5:

				html += '<input type="button" value="random2" onClick="colocarficharandom_p2(event)">'

			break;



			}

			document.getElementById('fichas_p2').innerHTML = html;

}

function dibujarCampo(){

	let cv = document.getElementById("cv01"),

		ctx = cv.getContext("2d"),port1 = cv.getContext("2d"),port2 = cv.getContext("2d"),

		dim = cv.width/20;



	ctx.beginPath();

	ctx.lineWidth = 2;

	ctx.strokeStyle = '#000';

	ctx.fillStyle="#32CD32";

	ctx.fillRect(dim,0,cv.width-dim*2,cv.height);

	

	port1.fillStyle="#B0B0B0";

	port1.fillRect(0,dim*3,dim,dim*3);

	port2.fillStyle="#B0B0B0";

	port2.fillRect(cv.width-dim,dim*3,dim,dim*3);

	for(let i=1;i<=19;i++){

		

		//Lineas verticales

		

			ctx.moveTo(i*dim, 0);

			ctx.lineTo(i*dim, cv.height);

		

		//Lineas horizontales

		if(i>2&&i<7){

			ctx.moveTo(0,i*dim);

			ctx.lineTo(cv.height*2+dim*2,i*dim);

		}else{

			ctx.moveTo(dim, i*dim);

			ctx.lineTo(cv.height*2+dim, i*dim);

		}

	}

			ctx.moveTo(0, dim*3);

			ctx.lineTo(0, cv.height-dim*3);

			ctx.moveTo(20*dim, dim*3);

			ctx.lineTo(20*dim, cv.height-dim*3);

			ctx.stroke();



			//Lineas del campo en rojo

			ctx.beginPath();

			ctx.lineWidth = 3;

			ctx.strokeStyle = '#FF0040';

			ctx.moveTo(dim,0);

			ctx.lineTo(dim, cv.height);



			ctx.moveTo(19*dim,0);

			ctx.lineTo(19*dim, cv.height);



			ctx.stroke();

			ctx.beginPath();

			ctx.lineWidth = 6;

			ctx.moveTo(dim,0);

			ctx.lineTo(cv.height*2+dim,0);



			ctx.moveTo(dim,9*dim);

			ctx.lineTo(cv.height*2+dim,9*dim);



			ctx.stroke();

			ctx.beginPath();

			ctx.strokeStyle = '#FFFFFF';

			ctx.lineWidth = 5;

			ctx.moveTo(10*dim,0);

			ctx.lineTo(10*dim, cv.height);



			//Lineas de las porterias en rojo

			//PI

			ctx.moveTo(dim,2*dim);

			ctx.lineTo(4*dim, 2*dim);

			ctx.lineTo(4*dim,7*dim);

			ctx.lineTo(dim,7*dim);

			//PD

			ctx.moveTo(19*dim,2*dim);

			ctx.lineTo(16*dim, 2*dim);

			ctx.lineTo(16*dim,7*dim);

			ctx.lineTo(19*dim,7*dim);



			//Circulos

			//central

			ctx.stroke();

			ctx.beginPath();

			ctx.arc(10*dim, 4.5*dim, 50, 0,2*Math.PI, false);

			ctx.stroke();

			//CI

			ctx.stroke();

			ctx.beginPath();

			ctx.arc(4*dim, 4.5*dim, 50, 3*Math.PI/2,Math.PI/2, false);

			ctx.stroke();

			//CD

			ctx.stroke();

			ctx.beginPath();

			ctx.arc(16*dim, 4.5*dim, 50, 3*Math.PI/2,Math.PI/2, true);

			ctx.stroke();













	ctx.stroke();

}

/*

function mouse_move(e){

	let cv 		= e.target,

		dim 	= cv.width/20,

		x 		= e.offsetX,

		y 		= e.offsetY,

		fila 	= Math.floor(y/dim),

		columna	= Math.floor(x/dim);



	console.log(`Posicion: ${x} - ${y}`);

	console.log(`Fila: ${fila} -  columna: ${columna}`);

}*/



var cont_p1=0;

var cont_p2=0;



function mouse_click(e){

	let cv 		= e.target,

		dim 	= cv.width/20,

		x 		= e.offsetX,

		y 		= e.offsetY,

		fila 	= Math.floor(y/dim),

		columna	= Math.floor(x/dim),

		ctx = cv.getContext("2d");



	if(fila<0)

		fila=0;

	if(columna<0)

		columna=0;

	if(fila>=9)

		fila=9;

	if(columna>=20)

		columna=20;

	if(fila>5&&columna==0)

		fila=5;

	if(fila<3&&columna==0)

		fila=3;

	if(fila>5&&columna==19)

		fila=5;

	if(fila<3&&columna==19)

		fila=3;







	//console.log(`Posicion: ${x} - ${y}`);

	console.log(`Fila: ${fila} -  columna: ${columna}`);



	//Se limpia el canvas para pintar todo otra vez

	//cv.width = cv.width;

	//dibujarCampo();



	ctx.beginPath();



	/*ctx.drawImage(imgr, sessionStorage["ficha1_inicial_p1x"], sessionStorage["ficha1_inicial_p1y"]);

	ctx.drawImage(imgr, sessionStorage["ficha2_inicial_p1x"], sessionStorage["ficha2_inicial_p1y"]);

	ctx.drawImage(imgr, sessionStorage["ficha3_inicial_p1x"], sessionStorage["ficha3_inicial_p1y"]);

	ctx.drawImage(imgr, sessionStorage["ficha4_inicial_p1x"], sessionStorage["ficha4_inicial_p1y"]);

	ctx.drawImage(imgr, sessionStorage["ficha5_inicial_p1x"], sessionStorage["ficha5_inicial_p1y"]);



	ctx.drawImage(imgv, sessionStorage["ficha1_inicial_p2x"], sessionStorage["ficha1_inicial_p2y"]);

	ctx.drawImage(imgv, sessionStorage["ficha2_inicial_p2x"], sessionStorage["ficha2_inicial_p2y"]);

	ctx.drawImage(imgv, sessionStorage["ficha3_inicial_p2x"], sessionStorage["ficha3_inicial_p2y"]);

	ctx.drawImage(imgv, sessionStorage["ficha4_inicial_p2x"], sessionStorage["ficha4_inicial_p2y"]);

	ctx.drawImage(imgv, sessionStorage["ficha5_inicial_p2x"], sessionStorage["ficha5_inicial_p2y"]);*/
	if(inicioP1==true || inicioP2==true){
	if(columna<10 && inicioP1==true)

	colocarficha(columna,fila,dim,ctx);

	if(columna<20 && inicioP2==true)

	colocarficha(columna,fila,dim,ctx);

	fichas_p1();

	fichas_p2();
}
	if(turnoP1){
		if(fila_aux==undefined){
			console.log(fila_aux);
			fila_aux=fila;
			columna_aux=columna;
		}else{
			console.log(cont_p1);
			colocarficha(columna,fila,dim,ctx);console.log(cont_p1);
			if(cont_p1==6){
				ctx.clearRect(0,0,ctx.width/2,ctx.height);
				dibujarCampo();
			switch(fila_aux){

					case 0:

					if(fila1[columna_aux]!=0){console.log("fila-columna_aux");
console.log(fila_aux);console.log(columna_aux);
						fila1[columna_aux]=0;

						cont_p1--;

					}

					break;

					case 1:

					if(fila2[columna_aux]!=0){

						fila2[columna_aux]=0;

						cont_p1--;

					}

					break;

					case 2:

					if(fila3[columna_aux]!=0){

						fila3[columna_aux]=0;

						cont_p1--;

					}

					break;

					case 3:

					if(fila4[columna_aux]!=0){

						fila4[columna_aux]=0;

						cont_p1--;

					}

					break;

					case 4:

					if(fila5[columna_aux]!=0){

						fila5[columna_aux]=0;

						cont_p1--;

					}

					break;

					case 5:

					if(fila6[columna_aux]!=0){

						fila6[columna_aux]=0;

						cont_p1--;

					}

					break;

					case 6:

					if(fila7[columna_aux]!=0){

						fila7[columna_aux]=0;

						cont_p1--;

					}

					break;

					case 7:

					if(fila8[columna_aux]!=0){

						fila8[columna_aux]=0;

						cont_p1--;

					}

					break;

					case 8:

					if(fila9[columna_aux]!=0){

						fila9[columna_aux]=0;

						cont_p1--;

					}

					break;			

				}
			}
			for(var cont=0;cont<10;cont++){

				if(fila1[cont]==1)

					ctx.drawImage(imgr, (cont*dim-dim/4)-2, (0*dim-dim/4)-2);

				if(fila2[cont]==1)

					ctx.drawImage(imgr, (cont*dim-dim/4)-2, (1*dim-dim/4)-2);

				if(fila3[cont]==1)

					ctx.drawImage(imgr, (cont*dim-dim/4)-2, (2*dim-dim/4)-2);

				if(fila4[cont]==1)

					ctx.drawImage(imgr, (cont*dim-dim/4)-2, (3*dim-dim/4)-2);

				if(fila5[cont]==1)

					ctx.drawImage(imgr, (cont*dim-dim/4)-2, (4*dim-dim/4)-2);

				if(fila6[cont]==1)

					ctx.drawImage(imgr, (cont*dim-dim/4)-2, (5*dim-dim/4)-2);

				if(fila7[cont]==1)

					ctx.drawImage(imgr, (cont*dim-dim/4)-2, (6*dim-dim/4)-2);

				if(fila8[cont]==1)

					ctx.drawImage(imgr, (cont*dim-dim/4)-2, (7*dim-dim/4)-2);

				if(fila9[cont]==1)

					ctx.drawImage(imgr, (cont*dim-dim/4)-2, (8*dim-dim/4)-2);

			}
			for(var cont=10;cont<20;cont++){

				if(fila1[cont]==1)

					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (0*dim-dim/4)-2);

				if(fila2[cont]==1)

					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (1*dim-dim/4)-2);

				if(fila3[cont]==1)

					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (2*dim-dim/4)-2);

				if(fila4[cont]==1)

					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (3*dim-dim/4)-2);

				if(fila5[cont]==1)

					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (4*dim-dim/4)-2);

				if(fila6[cont]==1)

					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (5*dim-dim/4)-2);

				if(fila7[cont]==1)

					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (6*dim-dim/4)-2);

				if(fila8[cont]==1)

					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (7*dim-dim/4)-2);

				if(fila9[cont]==1)

					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (8*dim-dim/4)-2);

			}
			fila_aux=undefined;
			columna_aux=undefined;
			/*turnoP1=false;
			turnoP2=true;*/
			console.log(fila_aux);
		}
	}

}

function terminar_inicio1(){

	if(cont_p1>=5){

	inicioP2=true;

	inicioP1=false;

}

}

function terminar_inicio2(){

	if(cont_p2>=5){

	inicioP1=false;

	inicioP2=false;

	turnoP1=true;

}

}

function colocarficharandom_p1(e){

	if(inicioP1==true){

	let cv = document.getElementById("cv01"),

		dim 	= cv.width/20,

		x 		= e.offsetX,

		y 		= e.offsetY,

		fila 	= Math.floor(y/dim),

		columna	= Math.floor(x/dim),

		ctx = cv.getContext("2d");

	ctx.clearRect(0,0,ctx.width/2,ctx.height);

	dibujarCampo();

	for(var cont=0;cont<10;cont++){

		fila1[cont]=0;

		fila2[cont]=0;

		fila3[cont]=0;

		fila4[cont]=0;

		fila5[cont]=0;

		fila6[cont]=0;

		fila7[cont]=0;

		fila8[cont]=0;

		fila9[cont]=0;

	}

	for(var cont=10;cont<20;cont++){

		if(fila1[cont]==1)

			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (0*dim-dim/4)-2);

		if(fila2[cont]==1)

			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (1*dim-dim/4)-2);

		if(fila3[cont]==1)

			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (2*dim-dim/4)-2);

		if(fila4[cont]==1)

			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (3*dim-dim/4)-2);

		if(fila5[cont]==1)

			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (4*dim-dim/4)-2);

		if(fila6[cont]==1)

			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (5*dim-dim/4)-2);

		if(fila7[cont]==1)

			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (6*dim-dim/4)-2);

		if(fila8[cont]==1)

			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (7*dim-dim/4)-2);

		if(fila9[cont]==1)

			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (8*dim-dim/4)-2);

	}

	columna=Math.floor((Math.random() * 9) + 1);

	fila=Math.floor((Math.random() * 10));

	console.log(cont_p1);

	cont_p1=0;



	while(cont_p1<5){

		columna=Math.floor((Math.random() * 9) + 1);

		fila=Math.floor((Math.random() * 10));

		colocarficha(columna,fila,dim,ctx);

	}

	fichas_p1();

}

}

function colocarficharandom_p2(e){

	if(inicioP2==true){

	let cv = document.getElementById("cv01"),

		dim 	= cv.width/20,

		x 		= e.offsetX,

		y 		= e.offsetY,

		fila 	= Math.floor(y/dim),

		columna	= Math.floor(x/dim),

		ctx = cv.getContext("2d");

	ctx.clearRect(0,0,ctx.width,ctx.height);

	dibujarCampo();

	for(var cont=10;cont<20;cont++){

		fila1[cont]=0;

		fila2[cont]=0;

		fila3[cont]=0;

		fila4[cont]=0;

		fila5[cont]=0;

		fila6[cont]=0;

		fila7[cont]=0;

		fila8[cont]=0;

		fila9[cont]=0;

	}

	for(var cont=0;cont<10;cont++){

		if(fila1[cont]==1)

			ctx.drawImage(imgr, (cont*dim-dim/4)-2, (0*dim-dim/4)-2);

		if(fila2[cont]==1)

			ctx.drawImage(imgr, (cont*dim-dim/4)-2, (1*dim-dim/4)-2);

		if(fila3[cont]==1)

			ctx.drawImage(imgr, (cont*dim-dim/4)-2, (2*dim-dim/4)-2);

		if(fila4[cont]==1)

			ctx.drawImage(imgr, (cont*dim-dim/4)-2, (3*dim-dim/4)-2);

		if(fila5[cont]==1)

			ctx.drawImage(imgr, (cont*dim-dim/4)-2, (4*dim-dim/4)-2);

		if(fila6[cont]==1)

			ctx.drawImage(imgr, (cont*dim-dim/4)-2, (5*dim-dim/4)-2);

		if(fila7[cont]==1)

			ctx.drawImage(imgr, (cont*dim-dim/4)-2, (6*dim-dim/4)-2);

		if(fila8[cont]==1)

			ctx.drawImage(imgr, (cont*dim-dim/4)-2, (7*dim-dim/4)-2);

		if(fila9[cont]==1)

			ctx.drawImage(imgr, (cont*dim-dim/4)-2, (8*dim-dim/4)-2);

	}

	columna=Math.floor((Math.random() * 9) + 10);

	fila=Math.floor((Math.random() * 10));

	cont_p2=0;

	while(cont_p2<5){

		columna=Math.floor((Math.random() * 9) + 10);

		fila=Math.floor((Math.random() * 10));

		colocarficha(columna,fila,dim,ctx);

	}

	fichas_p2();

}

}

function colocarficha(columna,fila,dim,ctx){
console.log(turnoP1);
	if(columna>0 && columna<=9 && (cont_p1<5 || turnoP1==true)){

		console.log(turnoP1);

		switch(cont_p1){

			case 0:

				

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha1_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p1++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha1_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p1++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha1_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p1++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha1_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p1++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha1_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p1++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha1_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p1++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha1_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p1++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha1_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p1++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha1_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p1++;

					}

					break;			

				}

			break;

				

			case 1:

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p1++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p1++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p1++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p1++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p1++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p1++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p1++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p1++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p1++;

					}

					break;			

				}

			break;

			

			case 2:

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha3_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p1++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha3_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p1++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha3_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p1++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha3_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p1++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha3_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p1++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha3_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p1++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha3_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p1++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha3_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p1++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha3_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p1++;

					}

					break;			

				}

			break;

			

			case 3:

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha4_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p1++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha4_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p1++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha4_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p1++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha4_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p1++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha4_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p1++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha4_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p1++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha4_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p1++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha4_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p1++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha4_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p1++;

					}

					break;			

				}

			break;

			

			case 4:

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha5_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p1++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha5_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p1++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha5_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p1++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha5_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p1++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha5_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p1++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha5_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p1++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha5_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p1++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha5_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p1++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha5_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p1++;

					}

					break;			

				}

			break;
			case 5:
			switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p1++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p1++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p1++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p1++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p1++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p1++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p1++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p1++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha2_inicial_p1x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p1y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p1++;

					}

					break;			

				}
				break;

		}

		

	}

	if(columna>=10 && columna<19 && (cont_p2<5 || turnoP2==true)){

		switch(cont_p2){

			case 0:

				

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha1_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p2++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha1_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p2++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha1_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p2++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha1_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p2++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha1_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p2++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha1_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p2++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha1_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p2++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha1_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p2++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha1_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha1_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p2++;

					}

					break;			

				}

			break;

				

			case 1:

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha2_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p2++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha2_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p2++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha2_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p2++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha2_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p2++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha2_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p2++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha2_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p2++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha2_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p2++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha2_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p2++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha2_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha2_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p2++;

					}

					break;			

				}

			break;

			

			case 2:

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha3_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p2++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha3_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p2++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha3_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p2++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha3_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p2++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha3_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p2++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha3_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p2++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha3_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p2++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha3_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p2++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha3_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha3_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p2++;

					}

					break;			

				}

			break;

			

			case 3:

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha4_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p2++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha4_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p2++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha4_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p2++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha4_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p2++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha4_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p2++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha4_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p2++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha4_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p2++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha4_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p2++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha4_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha4_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p2++;

					}

					break;			

				}

			break;

			

			case 4:

				switch(fila){

					case 0:

					if(fila1[columna]!=1){

						sessionStorage["ficha5_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila1[columna]=1;

						cont_p2++;

					}

					break;

					case 1:

					if(fila2[columna]!=1){

						sessionStorage["ficha5_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila2[columna]=1;

						cont_p2++;

					}

					break;

					case 2:

					if(fila3[columna]!=1){

						sessionStorage["ficha5_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila3[columna]=1;

						cont_p2++;

					}

					break;

					case 3:

					if(fila4[columna]!=1){

						sessionStorage["ficha5_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila4[columna]=1;

						cont_p2++;

					}

					break;

					case 4:

					if(fila5[columna]!=1){

						sessionStorage["ficha5_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila5[columna]=1;

						cont_p2++;

					}

					break;

					case 5:

					if(fila6[columna]!=1){

						sessionStorage["ficha5_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila6[columna]=1;

						cont_p2++;

					}

					break;

					case 6:

					if(fila7[columna]!=1){

						sessionStorage["ficha5_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila7[columna]=1;

						cont_p2++;

					}

					break;

					case 7:

					if(fila8[columna]!=1){

						sessionStorage["ficha5_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila8[columna]=1;

						cont_p2++;

					}

					break;

					case 8:

					if(fila9[columna]!=1){

						sessionStorage["ficha5_inicial_p2x"]=(columna*dim-dim/4)-2;

						sessionStorage["ficha5_inicial_p2y"]=(fila*dim-dim/4)-2;

						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);

						fila9[columna]=1;

						cont_p2++;

					}

					break;			

				}

			break;

		}

	}

}