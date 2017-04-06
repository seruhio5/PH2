function mostrarentradas(){
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/entrada/';

	xhr.open('GET', url, true);
	//Cuando es get no se pasa nada por parametros, se concatena con la url
	//url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value;
	xhr.onload = function(){
		console.log(xhr.responseText);
		let v = JSON.parse(xhr.responseText);
		console.log(v);

		if(v.RESULTADO == 'ok'){
			let html= '';
			for(let i=0; i<v.FILAS.length; i++){
				let e = v.FILAS[i],
					foto = 'http://localhost/PH2/Practica2/fotos/' + e.fichero;
				html += '<article>'
				html +=	'<h3><a href="entrada.html?entrada=' +e.id+ '">'+ e.nombre + '</a></h3>'
				html +=	'<div>'
				html +=		'<img src="' + foto + '" alt="' + e.descripcion + '">'
				html +=		'<p>' + e.descripcion + '</p>'
				html +=	'</div>'
				html +=		'<p><i class="demo-icon icon-user"></i> '+ e.login +'</p>'
				html +=		'<time><i class="demo-icon icon-calendar"></i> ' + e.fecha + '</time>'
				html +=		'<p><i class="demo-icon icon-comment-empty"></i> Numero de comentarios: ' + e.ncomentarios + '</p>'
				html +=		'<p><i class="demo-icon icon-picture"></i> Numero de fotos: '+ e.nfotos+' </p>'
				html +='</article>'
			} //End for
			document.querySelector('h2+div').innerHTML = html;
		}//end if
	}
	xhr.send();
	return false;
}
function mostrarentrada(){
	var id = getParameterByName('entrada');
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/entrada/';

	xhr.open('GET', url, true);
	//Cuando es get no se pasa nada por parametros, se concatena con la url
	//url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value;
	xhr.onload = function(){
		console.log(xhr.responseText);
		let v = JSON.parse(xhr.responseText);
		console.log(v);

		if(v.RESULTADO == 'ok'){
			let html= '';
			for(let i=0; i<v.FILAS.length; i++){
				
					let e = v.FILAS[i];
				if(e.id==id){ //buscamos la id que nos piden
					let foto = 'http://localhost/PH2/Practica2/fotos/' + e.fichero;
					html += '<article>'
					html +=	'<h3>'+ e.nombre + '</h3>'
					html +=		'<p><i class="demo-icon icon-user"></i> '+ e.login +'</p>'
					html +=		'<time><i class="demo-icon icon-calendar"></i> ' + e.fecha + '</time>'
					//html +=	'<div>'
					//html +=		'<img src="' + foto + '" alt="' + e.descripcion + '">'
					html +=	'<p>' + e.descripcion + '</p>'
					//html +=	'</div>'
					//html +=	'<footer>'
					
					
					html +=		'<p><i class="demo-icon icon-picture"></i> Numero de comentarios: <a href="#comentarios">' + e.ncomentarios + '</a></p>'
					html +=		'<p><i class="demo-icon icon-comment-empty"></i> Numero de fotos: <a href="#fotos">'+ e.nfotos+' </a></p>'
					//html +=	'</footer>'
					html +='</article>'
				}
			} //End for
			document.getElementById('entrada').innerHTML = html;
		}//end if
	}
	xhr.send();
	return false;
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


function mostrarcomentarios(){
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/comentario/?u=10';

	xhr.open('GET', url, true);
	//Cuando es get no se pasa nada por parametros, se concatena con la url
	//url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value;
	xhr.onload = function(){
		console.log(xhr.responseText);
		let v = JSON.parse(xhr.responseText);
		console.log(v);

		if(v.RESULTADO == 'ok'){
			let html= '';
			html += '<h2>Ultimos 10 comentarios</h2>'
			for(let i=0; i<v.FILAS.length; i++){
				let e = v.FILAS[i];
				
				html += '<article>'

				html +=	'<h3><i class="demo-icon icon-user"></i> '+ e.login +' </h3>'
				html +=		'<time><i class="demo-icon icon-calendar"></i> ' + e.fecha + '</time>'
				//html +=	'<div>'
				//html +=		'<img src="' + foto + '" alt="' + e.descripcion + '">'
				//html +=		'<p>' + e.descripcion + '</p>'
				//html +=	'</div>'
				//html +=	'<footer>'
				//html +=		'<a href="entrada.html?entrada=' +e.id_entrada+ '"><p><i class="demo-icon icon-doc-text"></i> ' + e.titulo + '</p></a>'
				html +=		'<a href="entrada.html?entrada=' +e.id_entrada+ '"><p>Titulo Comentario: ' + e.titulo + '</p></a>'
				html +=		'<p>'+ e.texto+' </p>'
				//html +=	'</footer>'
				html +='</article>'

			} //End for
			document.getElementById('comentarios').innerHTML = html;
		}//end if
	}
	xhr.send();
	return false;
}

function mostrarcomentariosid(){
	var id = getParameterByName('entrada');
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/comentario/?id_entrada='+id;

	xhr.open('GET', url, true);
	//Cuando es get no se pasa nada por parametros, se concatena con la url
	//url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value;
	xhr.onload = function(){
		console.log(xhr.responseText);
		let v = JSON.parse(xhr.responseText);
		console.log(v);

		if(v.RESULTADO == 'ok'){
			let html= '';
			html += '<h2>Seccion de comentarios <i class="demo-icon icon-comment-empty"></i></h2>'
			for(let i=0; i<v.FILAS.length; i++){
				let e = v.FILAS[i];

				html += '<article>'
				
				html +=	'<h3><i class="demo-icon icon-user"></i> '+ e.login +' </h3>'
				html +=		'<time><i class="demo-icon icon-calendar"></i> ' + e.fecha + '</time>'
				//html +=	'<div>'
				//html +=		'<img src="' + foto + '" alt="' + e.descripcion + '">'
				//html +=		'<p>' + e.descripcion + '</p>'
				//html +=	'</div>'
				//html +=	'<footer>'
				//html +=		'<a href="entrada.html?entrada=' +e.id_entrada+ '"><p><i class="demo-icon icon-doc-text"></i> ' + e.titulo + '</p></a>'
				html +=		'<p>Titulo Comentario: ' + e.titulo + '</p>'
				html +=		'<p>'+ e.texto+' </p>'
				html +=     '<a href="#form" class="contestar">Contestar</a>'
				//html +=	'</footer>'
				html +='</article>'


			} //End for
			document.getElementById('comentarios').innerHTML = html;
		}//end if
	}
	xhr.send();
	return false;
}

function mostrar_fotos_entrada(){
	var id = getParameterByName('entrada');
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/entrada/'+id+'/fotos';

	xhr.open('GET', url, true);
	//Cuando es get no se pasa nada por parametros, se concatena con la url
	//url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value;
	xhr.onload = function(){
		console.log(xhr.responseText);
		let v = JSON.parse(xhr.responseText);
		console.log(v);

		if(v.RESULTADO == 'ok'){
			let html= '';
			html += '<h2>Seccion de Fotos</h2>'
			html += '<div>'
			for(let i=0; i<v.FILAS.length; i++){
				
					let e = v.FILAS[i];
					
					html += '<figure>'
					html +=		'<img src="fotos/' + e.fichero + '" alt="' + e.texto + '"width="200" height="200">'
					html +=	'<p>' + e.texto + '</p>'
					html +='</figure>'
					
			} //End for
			html += '</div>'
			document.getElementById('fotos').innerHTML = html;
		}//end if
	}
	xhr.send();
	return false;
}
function hacerlogin(frm){
	if (sessionStorage.getItem('usu') == null){
		console.log(sessionStorage['usu']);
    }
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/login/',	//Puesto para mi ruta
		fd  = new FormData(frm);	//Mete todos los valores del formulario automaticamente

	xhr.open('POST', url, true);
	xhr.onload = function(){	//Cuando llega al paso 4 realiza la ejecudion de este codigo
		console.log(xhr.responseText);	//Muestra la respuesta del proceso por consola
		let du = JSON.parse(xhr.responseText);	
		//Lo que hace es guardarlo en el sesion storage si ha funcionado
		if(du.RESULTADO == 'ok'){
			sessionStorage['usu'] = xhr.responseText; //se podria utilizar la funcion stringiflay!
		}
		
		else{

		}
	
        frm.parentNode.querySelector('p').innerHTML = xhr.responseText; //Text content lo interpreta como texto tal cual (no interpreta el html para luego ponerlo) con inner interpreta el codigo html
		
	};
	xhr.send(fd);
	return false;
}