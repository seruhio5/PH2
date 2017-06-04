sessionStorage['goles1']=0;
sessionStorage['goles2']=0;
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
var dado1;
var dado2;
var turnoP1;
var turnoP2;
var fila_aux;
var columna_aux;
var comprobarFicha;
var goles1;
var goles2;
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
	mostrarBotonJuego();
	return false
}
//inicializar marcador
function marcador(){
	let html='<h1>'+sessionStorage['goles1']+' - '+sessionStorage['goles2']+'</h1>';
	document.getElementById("marcador").innerHTML=html;
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
var face6=new Image()
face6.src="fotos/dado0.png"
function lanzar()
{
	if(dado1==false && dado2==false){
   		mostrarMensajeDado();
	}
	if(dado1==true){
		turnoP1=true;
		var randomdice=Math.round(Math.random()*5);
   		document.images["mydice"].src=eval("face"+randomdice+".src");
   		sessionStorage["dado"]=randomdice+1;
   		dado1=false;
   		dado2=false;
	}
	if(dado2==true){
		turnoP2=true;
		var randomdice=Math.round(Math.random()*5);
   		document.images["mydice"].src=eval("face"+randomdice+".src");
   		sessionStorage["dado"]=randomdice+1;
   		dado1=false;
   		dado2=false;
	}

}
/********************************Canvas*************************************/
function fichas_p1(){
	let html= '';
	switch(cont_p1){
			case 0:
				html += '<h2>'+sessionStorage['player1']+'</h2>'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<input type="button" id="aleatorio1" value="random1" onClick="colocarficharandom_p1(event)">'
			break;
			case 1:
				html += '<h2>'+sessionStorage['player1']+'</h2>'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<input type="button" id="aleatorio1" value="random1" onClick="colocarficharandom_p1(event)">'
			break;
			case 2:
				html += '<h2>'+sessionStorage['player1']+'</h2>'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<input type="button" id="aleatorio1" value="random1" onClick="colocarficharandom_p1(event)">'
			break;
			case 3:
				html += '<h2>'+sessionStorage['player1']+'</h2>'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<input type="button" id="aleatorio1" value="random1" onClick="colocarficharandom_p1(event)">'
			break;
			case 4:
				html += '<h2>'+sessionStorage['player1']+'</h2>'
				html += '<img src="circulorojo.svg" alt="circulorojo" />'
				html += '<input type="button" id="aleatorio1" value="random1" onClick="colocarficharandom_p1(event)">'
			break;
			case 5:
				html += '<h2>'+sessionStorage['player1']+'</h2>'
				if(inicioP1==true){
				html += '<input type="button" id="aleatorio1" value="random1" onClick="colocarficharandom_p1(event)">'
				html += '<input type="button" value="Terminar turno" onClick="terminar_inicio1()">'
				}
			break;
	}
	document.getElementById('fichas_p1').innerHTML = html;
}
function fichas_p2(){
		let html= '';
	switch(cont_p2){
			case 0:
				html += '<h2>'+sessionStorage['player2']+'</h2>'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<input type="button" id="aleatorio2" value="random2" onClick="colocarficharandom_p2(event)">'
			break;
			case 1:
				html += '<h2>'+sessionStorage['player2']+'</h2>'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<input type="button" id="aleatorio2" value="random2" onClick="colocarficharandom_p2(event)">'
			break;
			case 2:
				html += '<h2>'+sessionStorage['player2']+'</h2>'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<input type="button" id="aleatorio2" value="random2" onClick="colocarficharandom_p2(event)">'
			break;
			case 3:
				html += '<h2>'+sessionStorage['player2']+'</h2>'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<input type="button" id="aleatorio2" value="random2" onClick="colocarficharandom_p2(event)">'
			break;
			case 4:
				html += '<h2>'+sessionStorage['player2']+'</h2>'
				html += '<img src="circuloverde.svg" alt="circuloverde" />'
				html += '<input type="button" id="aleatorio2" value="random2" onClick="colocarficharandom_p2(event)">'
			break;
			case 5:
				html += '<h2>'+sessionStorage['player2']+'</h2>'
				html += '<input type="button" id="aleatorio2" value="random2" onClick="colocarficharandom_p2(event)">'
				html += '<input type="button" value="Terminar turno" onClick="terminar_inicio2()">'
			break;
			}
			document.getElementById('fichas_p2').innerHTML = html;
}
function dragFichas(){

    //PREPARAR EL DRAG END DROP
    //ZONA DRAGGABLE
    //SERAN LOS LI

    let v = document.querySelectorAll('#fichas_p1>img');
    for(let i = 0 ; i<v.length;i++){
        v[i].setAttribute('draggable','true');
        v[i].ondragstart = function(e){
            e.dataTransfer.setData('text/plain',v[i].id);
        }
    }
    //ZONA DROPPABLE
    let section = document.getElementById('cv01');
    section.ondragover = function(e)
    {
        e.preventDefault();
        e.stopPropagation();//para prevenir , por si la primera
    }

    section.ondrop = function(e)
    {
        /*e.preventDefault();
        e.stopPropagation();//para prevenir , por si la primera
        let id_li = e.dataTransfer.getData('text/plain');
        console.log("DROP: "+id_li);
        //AÑADIR COMO HIJO EL ELEMENTO QUE SE HA SACADO DEL
        //PRIMER SECTION A LA LISTA DEL SEGUNDO.
        section.querySelector('cv01').appendChild(document.getElementById(id_li));*/
        mouse_move(e);
    }
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
function comprobar_ficha(fila,columna,fila_aux,columna_aux){
	comprobarFicha=false;
	let dado=parseInt(sessionStorage['dado']);
	let aux=true;
	let dadoaux=dado;
	if(columna_aux-columna==0){
		if(fila<fila_aux){
			if(fila_aux-fila<=dado){
				dado=dado-(fila_aux-fila);
			}
		}else{//de abajo a arriba
			if(fila-fila_aux<=dado){
				dado=dado-(fila-fila_aux);
			}
		}
	}
	if(dado==0){
		console.log("vertical");
		comprobarFicha=true;
		aux= false;
		for(var cont=0;cont<dadoaux;cont++){

			if(fila<fila_aux){//de abajo a arriba


					switch(fila+cont){
						case 0:
						if(fila1[columna]!=0){
							aux=false;
							comprobarFicha=false;
						}
						break;
						case 1:
						if(fila2[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 2:
						if(fila3[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 3:
						if(fila4[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 4:
						if(fila5[columna]!=0){
							aux= false;c
							comprobarFicha=false;
						}
						break;
						case 5:
						if(fila6[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 6:
						if(fila7[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 7:
						if(fila8[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 8:
						if(fila9[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
					}

		}else{//de arriba a abajo

				switch(fila-cont){
						case 0:
						if(fila1[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 1:
						if(fila2[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 2:
						if(fila3[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 3:
						if(fila4[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 4:
						if(fila5[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 5:
						if(fila6[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 6:
						if(fila7[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 7:
						if(fila8[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 8:
						if(fila9[columna]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
					}
				}


	}}if(aux==true){
		dado=dadoaux;
		if(columna<columna_aux){//horizontal
			if(columna_aux-columna<=dado){
				dado=dado-(columna_aux-columna);
			}
		}else{
			if(columna-columna_aux<=dado){
				dado=dado-(columna-columna_aux);
			}
		}
	}else{
		dado=100;
	}
	if(dado==0){
		console.log("horizontal");
		comprobarFicha=true;
		for(var cont=0;cont<dadoaux;cont++){
			if(columna<columna_aux){//caso de derecha a izquierda

					switch(fila){
						case 0:
						if(fila1[columna+cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 1:
						if(fila2[columna+cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 2:
						if(fila3[columna+cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 3:
						if(fila4[columna+cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 4:
						if(fila5[columna+cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 5:
						if(fila6[columna+cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 6:
						if(fila7[columna+cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 7:
						if(fila8[columna+cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 8:
						if(fila9[columna+cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
					}

			}else{//caso de izquierda a derecha

					switch(fila){
						case 0:
						if(fila1[columna-cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 1:
						if(fila2[columna-cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 2:
						if(fila3[columna-cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 3:
						if(fila4[columna-cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 4:
						if(fila5[columna-cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 5:
						if(fila6[columna-cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 6:
						if(fila7[columna-cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 7:
						if(fila8[columna-cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
						case 8:
						if(fila9[columna-cont]!=0){
							aux= false;
							comprobarFicha=false;
						}
						break;
					}

			}
		}

	}else{//diagonal
		if(aux==true){
			dado=dadoaux;
			if(fila<fila_aux){
				if(fila_aux-fila<=dado){
					dado=dado-(fila_aux-fila);
				}
			}else{
				if(fila-fila_aux<=dado){
					dado=dado-(fila-fila_aux);
				}
			}
		}else{
			dado=100;
		}
	}
	/*if(dado==0){
		comprobarFicha=true;
	}else{
		comprobarFicha=false;
	}*/
}

function mouse_move(e){
	console.log(e);
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

	ctx.beginPath();

	if(inicioP1==true || inicioP2==true){
		if(columna<10 && inicioP1==true)
			colocarficha(columna,fila,dim,ctx);
		if(columna<20 && inicioP2==true)
			colocarficha(columna,fila,dim,ctx);
		fichas_p1();
		fichas_p2();
	}
}
function resaltarCasilla(columna,fila,ctx){
	let d1,d2,d3,d4;
	d1=columna+parseInt(sessionStorage['dado']); //abajo
	d2=columna-parseInt(sessionStorage['dado']); //arriba
	d3=fila+parseInt(sessionStorage['dado']);//derecha
	d4=fila-parseInt(sessionStorage['dado']);//izquierda
}
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

	ctx.beginPath();

	if(inicioP1==true || inicioP2==true){
		if(columna<10 && inicioP1==true){
			colocarficha(columna,fila,dim,ctx);
		}
		else if(inicioP1==true){
			mostrarMensajeColocacionCampo();
		}
		if(columna<20 && inicioP2==true){
			colocarficha(columna,fila,dim,ctx);
		}
		else if(inicioP2==true){
			mostrarMensajeColocacionCampo();
		}
		fichas_p1();
		fichas_p2();
	}
	console.log(cont_p1);
	console.log(fila_aux);
	console.log(cont_p2);
	if(turnoP1){
		if(fila_aux==undefined){//cuando no hay ninguna ficha seleccionada
			fila_aux=fila;
			columna_aux=columna;
			switch(fila_aux){//comprobar que se selecciona una ficha
					case 0:
					if(fila1[columna_aux]!=1){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 1:
					if(fila2[columna_aux]!=1){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 2:
					if(fila3[columna_aux]!=1){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 3:
					if(fila4[columna_aux]!=1){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 4:
					if(fila5[columna_aux]!=1){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 5:
					if(fila6[columna_aux]!=1){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 6:
					if(fila7[columna_aux]!=1){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 7:
					if(fila8[columna_aux]!=1){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 8:
					if(fila9[columna_aux]!=1){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
				}


		}else{//cuando hay una ficha seleccionada

			comprobar_ficha(fila,columna,fila_aux,columna_aux);
			if(comprobarFicha==true){
				colocarficha(columna,fila,dim,ctx);
				if(turnoP1==true){
					turnoP1=false;
					dado2=true;
					let html1='';
					html1 += '<h2>'+sessionStorage['player2']+'</h2>'
					html1 += '<img src="circuloverde.svg" alt="circuloverde" />'
					document.getElementById('fichas_p2').innerHTML = html1;
					let html2='';
					html2 += '<h2>'+sessionStorage['player1']+'</h2>'
					document.getElementById('fichas_p1').innerHTML = html2;
				}else if(turnoP2==true){
					dado1=true;
					turnoP2=false;

				}
			}
			else{
				mostrarMensajeMovimientoErroneo();
			}
			if(cont_p1==6){
				ctx.clearRect(0,0,ctx.width/2,ctx.height);
				dibujarCampo();
			switch(fila_aux){
					case 0:
					if(fila1[columna_aux]!=0){
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
			for(var cont=0;cont<20;cont++){
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
				if(fila1[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (0*dim-dim/4)-2);
				if(fila2[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (1*dim-dim/4)-2);
				if(fila3[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (2*dim-dim/4)-2);
				if(fila4[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (3*dim-dim/4)-2);
				if(fila5[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (4*dim-dim/4)-2);
				if(fila6[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (5*dim-dim/4)-2);
				if(fila7[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (6*dim-dim/4)-2);
				if(fila8[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (7*dim-dim/4)-2);
				if(fila9[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (8*dim-dim/4)-2);
			}
			}
			fila_aux=undefined;
			columna_aux=undefined;
			/*turnoP1=false;
			turnoP2=true;*/
		}
	}else if(turnoP2){
		if(fila_aux==undefined){//cuando no hay ninguna ficha seleccionada
			fila_aux=fila;
			columna_aux=columna;
			switch(fila_aux){//comprobar que se selecciona una ficha
					case 0:
					if(fila1[columna_aux]!=2){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 1:
					if(fila2[columna_aux]!=2){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 2:
					if(fila3[columna_aux]!=2){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 3:
					if(fila4[columna_aux]!=2){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 4:
					if(fila5[columna_aux]!=2){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 5:
					if(fila6[columna_aux]!=2){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 6:
					if(fila7[columna_aux]!=2){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 7:
					if(fila8[columna_aux]!=2){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
					case 8:
					if(fila9[columna_aux]!=2){
						fila_aux=undefined;
						columna_aux=undefined;
					}
					break;
				}


		}else{//cuando hay una ficha seleccionada
			comprobar_ficha(fila,columna,fila_aux,columna_aux);
			if(comprobarFicha==true){
				colocarficha(columna,fila,dim,ctx);
				if(turnoP1==true){
					turnoP1=false;
					dado2=true;

				}else if(turnoP2==true){
					dado1=true;
					turnoP2=false;
					let html1='';
					html1 += '<h2>'+sessionStorage['player2']+'</h2>'
					document.getElementById('fichas_p2').innerHTML = html1;
					let html2='';
					html2 += '<h2>'+sessionStorage['player1']+'</h2>'
					html2 += '<img src="circulorojo.svg" alt="circulorojo" />'
					document.getElementById('fichas_p1').innerHTML = html2;
				}
			}
			else{
				mostrarMensajeMovimientoErroneo();
			}
			if(cont_p2==6){
				ctx.clearRect(0,0,ctx.width/2,ctx.height);
				dibujarCampo();
			switch(fila_aux){
					case 0:
					if(fila1[columna_aux]!=0){
						fila1[columna_aux]=0;
						cont_p2--;
					}
					break;
					case 1:
					if(fila2[columna_aux]!=0){
						fila2[columna_aux]=0;
						cont_p2--;
					}
					break;
					case 2:
					if(fila3[columna_aux]!=0){
						fila3[columna_aux]=0;
						cont_p2--;
					}
					break;
					case 3:
					if(fila4[columna_aux]!=0){
						fila4[columna_aux]=0;
						cont_p2--;
					}
					break;
					case 4:
					if(fila5[columna_aux]!=0){
						fila5[columna_aux]=0;
						cont_p2--;
					}
					break;
					case 5:
					if(fila6[columna_aux]!=0){
						fila6[columna_aux]=0;
						cont_p2--;
					}
					break;
					case 6:
					if(fila7[columna_aux]!=0){
						fila7[columna_aux]=0;
						cont_p2--;
					}
					break;
					case 7:
					if(fila8[columna_aux]!=0){
						fila8[columna_aux]=0;
						cont_p2--;
					}
					break;
					case 8:
					if(fila9[columna_aux]!=0){
						fila9[columna_aux]=0;
						cont_p2--;
					}
					break;
				}
			for(var cont=0;cont<20;cont++){
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
				if(fila1[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (0*dim-dim/4)-2);
				if(fila2[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (1*dim-dim/4)-2);
				if(fila3[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (2*dim-dim/4)-2);
				if(fila4[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (3*dim-dim/4)-2);
				if(fila5[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (4*dim-dim/4)-2);
				if(fila6[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (5*dim-dim/4)-2);
				if(fila7[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (6*dim-dim/4)-2);
				if(fila8[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (7*dim-dim/4)-2);
				if(fila9[cont]==2)
					ctx.drawImage(imgv, (cont*dim-dim/4)-2, (8*dim-dim/4)-2);
			}
			}
			fila_aux=undefined;
			columna_aux=undefined;
			/*turnoP1=false;
			turnoP2=true;*/
		}
	}
}
function terminar_inicio1(){
	if(cont_p1>=5){
	inicioP2=true;
	inicioP1=false;
}
let html1='<h2>'+sessionStorage['player1']+'</h2>';
	document.getElementById("fichas_p1").innerHTML=html1;
goles1=0;
goles2=0;
}
function terminar_inicio2(){
	if(cont_p2>=5){
	inicioP1=false;
	inicioP2=false;
	dado1=true;

	let html = '<img src="" id="mydice" alt="dado"> <input type="button" value="Lanza dado" onClick="lanzar()">';
	document.getElementById("dado").innerHTML=html;
	document.images["mydice"].src=eval("face6.src");
	let html1='';
	html1 += '<h2>'+sessionStorage['player2']+'</h2>'
	document.getElementById('fichas_p2').innerHTML = html1;
	let html2='';
	html2 += '<h2>'+sessionStorage['player1']+'</h2>'
	html2 += '<img src="circulorojo.svg" alt="circulorojo" />'
	document.getElementById('fichas_p1').innerHTML = html2;
	}

}
function colocarficharandom_p1(e){
	if(inicioP1==true){
	let cv = document.getElementById("cv01"),
		dim 	= cv.width/20,

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
	columna=Math.floor((Math.random() * 9) + 1);
	fila=Math.floor((Math.random() * 10));
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

	if((columna>0 && columna<=9 && cont_p1<5) || (turnoP1==true)){
		switch(cont_p1){
			case 0:
				switch(fila){
					case 0:
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha1_inicial_p1x"]=columna;
						sessionStorage["ficha1_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=1;
						cont_p1++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha1_inicial_p1x"]=columna;
						sessionStorage["ficha1_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=1;
						cont_p1++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha1_inicial_p1x"]=columna;
						sessionStorage["ficha1_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=1;
						cont_p1++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha1_inicial_p1x"]=columna;
						sessionStorage["ficha1_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=1;
						cont_p1++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha1_inicial_p1x"]=columna;
						sessionStorage["ficha1_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=1;
						cont_p1++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha1_inicial_p1x"]=columna;
						sessionStorage["ficha1_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=1;
						cont_p1++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha1_inicial_p1x"]=columna;
						sessionStorage["ficha1_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=1;
						cont_p1++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha1_inicial_p1x"]=columna;
						sessionStorage["ficha1_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=1;
						cont_p1++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha1_inicial_p1x"]=columna;
						sessionStorage["ficha1_inicial_p1y"]=fila;
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
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha2_inicial_p1x"]=columna;
						sessionStorage["ficha2_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=1;
						cont_p1++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha2_inicial_p1x"]=columna;
						sessionStorage["ficha2_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=1;
						cont_p1++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha2_inicial_p1x"]=columna;
						sessionStorage["ficha2_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=1;
						cont_p1++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha2_inicial_p1x"]=columna;
						sessionStorage["ficha2_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=1;
						cont_p1++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha2_inicial_p1x"]=columna;
						sessionStorage["ficha2_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=1;
						cont_p1++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha2_inicial_p1x"]=columna;
						sessionStorage["ficha2_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=1;
						cont_p1++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha2_inicial_p1x"]=columna;
						sessionStorage["ficha2_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=1;
						cont_p1++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha2_inicial_p1x"]=columna;
						sessionStorage["ficha2_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=1;
						cont_p1++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha2_inicial_p1x"]=columna;
						sessionStorage["ficha2_inicial_p1y"]=fila;
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
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha3_inicial_p1x"]=columna;
						sessionStorage["ficha3_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=1;
						cont_p1++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha3_inicial_p1x"]=columna;
						sessionStorage["ficha3_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=1;
						cont_p1++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha3_inicial_p1x"]=columna;
						sessionStorage["ficha3_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=1;
						cont_p1++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha3_inicial_p1x"]=columna;
						sessionStorage["ficha3_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=1;
						cont_p1++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha3_inicial_p1x"]=columna;
						sessionStorage["ficha3_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=1;
						cont_p1++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha3_inicial_p1x"]=columna;
						sessionStorage["ficha3_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=1;
						cont_p1++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha3_inicial_p1x"]=columna;
						sessionStorage["ficha3_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=1;
						cont_p1++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha3_inicial_p1x"]=columna;
						sessionStorage["ficha3_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=1;
						cont_p1++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha3_inicial_p1x"]=columna;
						sessionStorage["ficha3_inicial_p1y"]=fila;
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
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha4_inicial_p1x"]=columna;
						sessionStorage["ficha4_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=1;
						cont_p1++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha4_inicial_p1x"]=columna;
						sessionStorage["ficha4_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=1;
						cont_p1++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha4_inicial_p1x"]=columna;
						sessionStorage["ficha4_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=1;
						cont_p1++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha4_inicial_p1x"]=columna;
						sessionStorage["ficha4_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=1;
						cont_p1++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha4_inicial_p1x"]=columna;
						sessionStorage["ficha4_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=1;
						cont_p1++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha4_inicial_p1x"]=columna;
						sessionStorage["ficha4_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=1;
						cont_p1++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha4_inicial_p1x"]=columna;
						sessionStorage["ficha4_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=1;
						cont_p1++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha4_inicial_p1x"]=columna;
						sessionStorage["ficha4_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=1;
						cont_p1++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha4_inicial_p1x"]=columna;
						sessionStorage["ficha4_inicial_p1y"]=fila;
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
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha5_inicial_p1x"]=columna;
						sessionStorage["ficha5_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=1;
						cont_p1++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha5_inicial_p1x"]=columna;
						sessionStorage["ficha5_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=1;
						cont_p1++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha5_inicial_p1x"]=columna;
						sessionStorage["ficha5_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=1;
						cont_p1++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha5_inicial_p1x"]=columna;
						sessionStorage["ficha5_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=1;
						cont_p1++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha5_inicial_p1x"]=columna;
						sessionStorage["ficha5_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=1;
						cont_p1++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha5_inicial_p1x"]=columna;
						sessionStorage["ficha5_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=1;
						cont_p1++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha5_inicial_p1x"]=columna;
						sessionStorage["ficha5_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=1;
						cont_p1++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha5_inicial_p1x"]=columna;
						sessionStorage["ficha5_inicial_p1y"]=fila;
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=1;
						cont_p1++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha5_inicial_p1x"]=columna;
						sessionStorage["ficha5_inicial_p1y"]=fila;
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
					if(fila1[columna]==0 || fila1[columna]==undefined){
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=1;
						cont_p1++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=1;
						cont_p1++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=1;
						cont_p1++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=1;
						cont_p1++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=1;
						cont_p1++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=1;
						cont_p1++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=1;
						cont_p1++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=1;
						cont_p1++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						ctx.drawImage(imgr, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila9[columna]=1;
						cont_p1++;
					}
					break;
				}
				if(columna==19){
					meter_gol(1);
				}
				break;
		}
	}
	if((columna>=10 && columna<19 && cont_p2<5) || (turnoP2==true)){
		switch(cont_p2){
			case 0:
				switch(fila){
					case 0:
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha1_inicial_p2x"]=columna;
						sessionStorage["ficha1_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=2;
						cont_p2++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha1_inicial_p2x"]=columna;
						sessionStorage["ficha1_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=2;
						cont_p2++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha1_inicial_p2x"]=columna;
						sessionStorage["ficha1_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=2;
						cont_p2++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha1_inicial_p2x"]=columna;
						sessionStorage["ficha1_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=2;
						cont_p2++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha1_inicial_p2x"]=columna;
						sessionStorage["ficha1_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=2;
						cont_p2++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha1_inicial_p2x"]=columna;
						sessionStorage["ficha1_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=2;
						cont_p2++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha1_inicial_p2x"]=columna;
						sessionStorage["ficha1_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=2;
						cont_p2++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha1_inicial_p2x"]=columna;
						sessionStorage["ficha1_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=2;
						cont_p2++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha1_inicial_p2x"]=columna;
						sessionStorage["ficha1_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila9[columna]=2;
						cont_p2++;
					}
					break;
				}
			break;
			case 1:
				switch(fila){
					case 0:
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha2_inicial_p2x"]=columna;
						sessionStorage["ficha2_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=2;
						cont_p2++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha2_inicial_p2x"]=columna;
						sessionStorage["ficha2_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=2;
						cont_p2++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha2_inicial_p2x"]=columna;
						sessionStorage["ficha2_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=2;
						cont_p2++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha2_inicial_p2x"]=columna;
						sessionStorage["ficha2_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=2;
						cont_p2++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha2_inicial_p2x"]=columna;
						sessionStorage["ficha2_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=2;
						cont_p2++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha2_inicial_p2x"]=columna;
						sessionStorage["ficha2_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=2;
						cont_p2++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha2_inicial_p2x"]=columna;
						sessionStorage["ficha2_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=2;
						cont_p2++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha2_inicial_p2x"]=columna;
						sessionStorage["ficha2_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=2;
						cont_p2++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha2_inicial_p2x"]=columna;
						sessionStorage["ficha2_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila9[columna]=2;
						cont_p2++;
					}
					break;
				}
			break;
			case 2:
				switch(fila){
					case 0:
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha3_inicial_p2x"]=columna;
						sessionStorage["ficha3_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=2;
						cont_p2++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha3_inicial_p2x"]=columna;
						sessionStorage["ficha3_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=2;
						cont_p2++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha3_inicial_p2x"]=columna;
						sessionStorage["ficha3_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=2;
						cont_p2++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha3_inicial_p2x"]=columna;
						sessionStorage["ficha3_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=2;
						cont_p2++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha3_inicial_p2x"]=columna;
						sessionStorage["ficha3_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=2;
						cont_p2++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha3_inicial_p2x"]=columna;
						sessionStorage["ficha3_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=2;
						cont_p2++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha3_inicial_p2x"]=columna;
						sessionStorage["ficha3_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=2;
						cont_p2++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha3_inicial_p2x"]=columna;
						sessionStorage["ficha3_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=2;
						cont_p2++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha3_inicial_p2x"]=columna;
						sessionStorage["ficha3_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila9[columna]=2;
						cont_p2++;
					}
					break;
				}
			break;
			case 3:
				switch(fila){
					case 0:
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha4_inicial_p2x"]=columna;
						sessionStorage["ficha4_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=2;
						cont_p2++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha4_inicial_p2x"]=columna;
						sessionStorage["ficha4_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=2;
						cont_p2++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha4_inicial_p2x"]=columna;
						sessionStorage["ficha4_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=2;
						cont_p2++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha4_inicial_p2x"]=columna;
						sessionStorage["ficha4_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=2;
						cont_p2++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha4_inicial_p2x"]=columna;
						sessionStorage["ficha4_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=2;
						cont_p2++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha4_inicial_p2x"]=columna;
						sessionStorage["ficha4_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=2;
						cont_p2++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha4_inicial_p2x"]=columna;
						sessionStorage["ficha4_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=2;
						cont_p2++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha4_inicial_p2x"]=columna;
						sessionStorage["ficha4_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=2;
						cont_p2++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha4_inicial_p2x"]=columna;
						sessionStorage["ficha4_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila9[columna]=2;
						cont_p2++;
					}
					break;
				}
			break;
			case 4:
				switch(fila){
					case 0:
					if(fila1[columna]==0 || fila1[columna]==undefined){
						sessionStorage["ficha5_inicial_p2x"]=columna;
						sessionStorage["ficha5_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=2;
						cont_p2++;
					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						sessionStorage["ficha5_inicial_p2x"]=columna;
						sessionStorage["ficha5_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=2;
						cont_p2++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						sessionStorage["ficha5_inicial_p2x"]=columna;
						sessionStorage["ficha5_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=2;
						cont_p2++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						sessionStorage["ficha5_inicial_p2x"]=columna;
						sessionStorage["ficha5_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=2;
						cont_p2++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						sessionStorage["ficha5_inicial_p2x"]=columna;
						sessionStorage["ficha5_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=2;
						cont_p2++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						sessionStorage["ficha5_inicial_p2x"]=columna;
						sessionStorage["ficha5_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=2;
						cont_p2++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						sessionStorage["ficha5_inicial_p2x"]=columna;
						sessionStorage["ficha5_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=2;
						cont_p2++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						sessionStorage["ficha5_inicial_p2x"]=columna;
						sessionStorage["ficha5_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=2;
						cont_p2++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						sessionStorage["ficha5_inicial_p2x"]=columna;
						sessionStorage["ficha5_inicial_p2y"]=fila;
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila9[columna]=2;
						cont_p2++;
					}
					break;
				}
			break;
			case 5:

				switch(fila){
					case 0:
					if(fila1[columna]==0 || fila1[columna]==undefined){
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila1[columna]=2;
						cont_p2++;

					}
					break;
					case 1:
					if(fila2[columna]==0 || fila2[columna]==undefined){
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila2[columna]=2;
						cont_p2++;
					}
					break;
					case 2:
					if(fila3[columna]==0 || fila3[columna]==undefined){
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila3[columna]=2;
						cont_p2++;
					}
					break;
					case 3:
					if(fila4[columna]==0 || fila4[columna]==undefined){
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila4[columna]=2;
						cont_p2++;
					}
					break;
					case 4:
					if(fila5[columna]==0 || fila5[columna]==undefined){
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila5[columna]=2;
						cont_p2++;
					}
					break;
					case 5:
					if(fila6[columna]==0 || fila6[columna]==undefined){
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila6[columna]=2;
						cont_p2++;
					}
					break;
					case 6:
					if(fila7[columna]==0 || fila7[columna]==undefined){
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila7[columna]=2;
						cont_p2++;
					}
					break;
					case 7:
					if(fila8[columna]==0 || fila8[columna]==undefined){
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila8[columna]=2;
						cont_p2++;
					}
					break;
					case 8:
					if(fila9[columna]==0 || fila9[columna]==undefined){
						ctx.drawImage(imgv, (columna*dim-dim/4)-2, (fila*dim-dim/4)-2);
						fila9[columna]=2;
						cont_p2++;
					}
					break;
				}
				if(columna==0){
					meter_gol(2);
				}
			break;
		}
	}
}
function meter_gol(jug){
	if(jug==2){
		goles2++;
		sessionStorage['goles2']=goles2;
		marcador();
		if(goles2-goles1>=2 && goles2>=5){
			mostrarMensajeFin(jug);
		}
		else{
			mostrarMensajeGol(jug);
			turnoP1=false;
			turnoP2=false;
			dado1=true;
			let html1='';
			html1 += '<h2>'+sessionStorage['player1']+'</h2>'
			html1 += '<img src="circulorojo.svg" alt="circulorojo" />'
			document.getElementById('fichas_p1').innerHTML = html1;
			let html2='';
			html2 += '<h2>'+sessionStorage['player2']+'</h2>'
			document.getElementById('fichas_p2').innerHTML = html2;
		}
	}
	if(jug==1){
		goles1++;
		sessionStorage['goles1']=goles1;
		marcador();
		if(goles1-goles2>=2 && goles1>=5){
			mostrarMensajeFin(jug);
		}
		else{
			mostrarMensajeGol(jug);
			turnoP2=false;
			turnoP1=false;
			dado2=true;
			let html1='';
			html1 += '<h2>'+sessionStorage['player2']+'</h2>'
			html1 += '<img src="circuloverde.svg" alt="circuloverde" />'
			document.getElementById('fichas_p2').innerHTML = html1;
			let html2='';
			html2 += '<h2>'+sessionStorage['player1']+'</h2>'
			document.getElementById('fichas_p1').innerHTML = html2;
		}
	}
	random_inicio();
	/*for(var cont=0;cont<20;cont++){
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
		if(fila1[cont]==2)
			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (0*dim-dim/4)-2);
		if(fila2[cont]==2)
			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (1*dim-dim/4)-2);
		if(fila3[cont]==2)
			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (2*dim-dim/4)-2);
		if(fila4[cont]==2)
			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (3*dim-dim/4)-2);
		if(fila5[cont]==2)
			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (4*dim-dim/4)-2);
		if(fila6[cont]==2)
			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (5*dim-dim/4)-2);
		if(fila7[cont]==2)
			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (6*dim-dim/4)-2);
		if(fila8[cont]==2)
			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (7*dim-dim/4)-2);
		if(fila9[cont]==2)
			ctx.drawImage(imgv, (cont*dim-dim/4)-2, (8*dim-dim/4)-2);
	}*/
}
function random_inicio(){
let cv = document.getElementById("cv01"),
		dim 	= cv.width/20,

		ctx = cv.getContext("2d");
	ctx.clearRect(0,0,ctx.width/2,ctx.height);
	dibujarCampo();
	for(var cont=0;cont<20;cont++){
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
	columna=Math.floor((Math.random() * 9) + 1);
	fila=Math.floor((Math.random() * 10));
	cont_p1=0;
	while(cont_p1<5){
		columna=Math.floor((Math.random() * 9) + 1);
		fila=Math.floor((Math.random() * 10));
		colocarficha(columna,fila,dim,ctx);
	}
	columna=Math.floor((Math.random() * 9) + 10);
	fila=Math.floor((Math.random() * 10));
	cont_p2=0;
	while(cont_p2<5){
		columna=Math.floor((Math.random() * 9) + 10);
		fila=Math.floor((Math.random() * 10));
		colocarficha(columna,fila,dim,ctx);
	}
}

//mensajes del juego
function mostrarMensajeDado(){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";

	html +='<h2>Solo puedes lanzar el dado una vez por turno.</h2>';
	html += '<button onclick="this.parentNode.parentNode.remove();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mostrarMensajeColocacionCampo(){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";

	html +='<h2>No puedes colocar tus fichas en el campo contrario.</h2>';
	html += '<button onclick="this.parentNode.parentNode.remove();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mostrarMensajeTurnoInicio(){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";
	if(inicioP1==false){
		html +='<h2>No es tu turno, es el turno de '+sessionStorage['player2']+'.</h2>';
	}
	if(inicioP2==false){
		html +='<h2>No es tu turno, es el turno de '+sessionStorage['player1']+'.</h2>';
	}
	html += '<button onclick="this.parentNode.parentNode.remove();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mostrarMensajeMovimientoErroneo(){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";

	html +='<h2>Mueve la ficha en la casilla correcta.</h2>';
	html += '<button onclick="this.parentNode.parentNode.remove();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mostrarMensajeGol(jug){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";
	if(jug==2){
		html +='<h2>'+sessionStorage['player2']+' ha marcado gol!</h2>';
	}
	if(jug==1){
		html +='<h2>'+sessionStorage['player1']+' ha marcado gol!</h2>';
	}
	html += '<button onclick="this.parentNode.parentNode.remove();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mostrarMensajeFin(jug){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";
	if(jug==2){
		html +='<h2>'+sessionStorage['player2']+' ha ganado el partido!</h2>';
	}
	if(jug==1){
		html +='<h2>'+sessionStorage['player1']+' ha ganado el partido!</h2>';
	}
	html += '<button onclick="this.parentNode.parentNode.remove();reinicio();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
//hacer toda la session a null/0 y volvemos al index
function reinicio(){
	sessionStorage.clear();
	window.location="./index.html";
}