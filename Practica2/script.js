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
				html +=	'<div class="menos">'
				html +=		'<img src="' + foto + '" alt="' + e.descripcion + '">'
				html +=		'<h4>' + e.descripcion + '</h4>'
				html += 	'<aside><a href="entrada.html?entrada=' +e.id+ '">Ver más</a></aside>'
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
	console.log(id);
	if(id!=null && id!=""){
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
			} //End for.
			document.getElementById('entrada').innerHTML = html;
		}//end if
	}
	xhr.send();
	}
	else
		{
			window.location="http://localhost/PH2/Practica2/index.html";
		}
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
					if(sessionStorage['nombre']!=null){
						html +=     '<a href="#form" onclick="formularioRespuesta('+e.titulo+');" class="contestar">Contestar</a>'
					}
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
	
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/login/',	//Puesto para mi ruta
		fd  = new FormData(frm);	//Mete todos los valores del formulario automaticamente

	xhr.open('POST', url, true);
	xhr.onload = function(){	//Cuando llega al paso 4 realiza la ejecudion de este codigo
		let du = JSON.parse(xhr.responseText);	
		//Lo que hace es guardarlo en el sesion storage si ha funcionado
		if(du.RESULTADO == 'ok'){
			//console.log(du);
			sessionStorage['error'] = undefined;
			sessionStorage['clave'] = du.clave; //se podria utilizar la funcion stringiflay!
			sessionStorage['login'] = du.login;
			sessionStorage['nombre'] = du.nombre;
			sessionStorage['email'] = du.email;
			sessionStorage['ultimo_acceso'] = du.ultimo_acceso;
			mostrarMensajeLogin();
		}
		else{
			sessionStorage['error'] = "El usuario y/o contraseña son incorrectos";
			mostrarMensajeLogin();
		}
	};
	xhr.send(fd);
	return false;
}
function registro(frm){
	if(frm.pwd.value==frm.pwd2.value){
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/usuario/',	//Puesto para mi ruta
		fd  = new FormData(frm);	//Mete todos los valores del formulario automaticamente
	xhr.open('POST', url, true);
	
	xhr.onload = function(){	//Cuando llega al paso 4 realiza la ejecudion de este codigo
		let du = JSON.parse(xhr.responseText);	
		if(du.RESULTADO=='ok'){
		mostrarMensajeRegistro();
		}
		else{
		mostrarMensajeRegistroFail();
		}
		//Lo que hace es guardarlo en el sesion storage si ha funcionado
	};
	xhr.send(fd);
	}
	else{
		mostrarMensajeRegistroFailPwd();
	}
	return false;
}
function hacercomentario(frm){
	let id=getParameterByName('entrada');
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/comentario/';	//Puesto para mi ruta
			//Mete todos los valores del formulario automaticamente
	xhr.open('POST', url, true);

	let fd  = new FormData(frm);
	fd.append('login',sessionStorage['login']);
	fd.append('id_entrada',id);
	xhr.setRequestHeader('Authorization', sessionStorage['clave']);

	xhr.onload = function(){	//Cuando llega al paso 4 realiza la ejecudion de este codigo
		let du = JSON.parse(xhr.responseText);	
		console.log(du);
		console.log(fd);
		if(du.RESULTADO=='ok'){
		mostrarMensajeComentario(id);
		}
		else{
		mostrarMensajeComentarioFail();
		}
		//Lo que hace es guardarlo en el sesion storage si ha funcionado
	};
	xhr.send(fd);
	return false;
}
function mostrarMensajeRegistroFailPwd(){
	let html="";

	html +='<p id="fail_pwd">Las contraseñas no coinciden<p>';

	document.getElementById('fallo_pwd').innerHTML = html;
}
function comprobar(){
	if(sessionStorage.getItem('login')!=null){
		window.location="http://localhost/PH2/Practica2/index.html";
	}
}
function mostrarMensajeLogin(){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";
	
	if(sessionStorage['nombre']!=null){
	html +='<h2>ACIERTO</h2>';
	html +='<p>Bienvenido '+sessionStorage['nombre']+'</p>';
	html +='<p>Ultima visita: '+sessionStorage['ultimo_acceso']+'</p>';
	}else{
		html +='<h2>ERROR</h2>';
		html +='<p>'+sessionStorage['error']+'</p>';
	}
	html += '<button onclick="this.parentNode.parentNode.remove();comprobar();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mostrarMensajeRegistro(){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";

	html +='<h2>Usuario registrado correctamente</h2>';
	html += '<button onclick="this.parentNode.parentNode.remove();mensaje_login();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mostrarMensajeRegistroFail(){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";

	html +='<h2>El nombre de usuario que ha introducido ya existe</h2>';
	html += '<button onclick="this.parentNode.parentNode.remove();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mostrarMensajeComentario(id){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";

	html +='<h2>Comentario registrado correctamente</h2>';
	html += '<button onclick="this.parentNode.parentNode.remove();mensaje_comentario('+id+');">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mostrarMensajeComentarioFail(){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article');
	capa_fondo.appendChild(capa_frente);
	let html="";

	html +='<h2>ERROR: No se ha podido crear el comentario</h2>';
	html += '<button onclick="this.parentNode.parentNode.remove();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}
function mensaje_comentario(id){
	window.location="http://localhost/PH2/Practica2/entrada.html?entrada="+id;
}
function mensaje_login(){
	window.location="http://localhost/PH2/Practica2/login.html";
}
function comprobar2(){
	if(sessionStorage.getItem('login')==null){
		window.location="http://localhost/PH2/Practica2/index.html";
	}
}
function logout(){
	sessionStorage.clear();
}
function menuindex(){
	let html="";
	
	if(sessionStorage['nombre']!=undefined){
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu" id="active">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a onclick="logout();" href="index.html">';
	html +='<i class="demo-icon icon-logout-1"></i>Logout';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="nueva-entrada.html">';
	html +='<i class="demo-icon icon-doc"></i>Nueva entrada';
	html +='</a>';
	html +='</li>';
	}
	else{
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu" id="active">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="login.html">';
	html +='<i class="demo-icon icon-login"></i>Login';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="registro.html">';
	html +='<i class="demo-icon icon-user-plus"></i>Registro';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	}
	document.getElementById('menu').innerHTML = html;					
}
function menulogin(){
	let html="";
	if(sessionStorage['nombre']!=null){
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a onclick="logout();" href="index.html">';
	html +='<i class="demo-icon icon-logout-1"></i>Logout';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="nueva-entrada.html">';
	html +='<i class="demo-icon icon-doc"></i>Nueva entrada';
	html +='</a>';
	html +='</li>';
	}
	else{
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu" id="active">';
	html +='<a href="login.html">';
	html +='<i class="demo-icon icon-login"></i>Login';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="registro.html">';
	html +='<i class="demo-icon icon-user-plus"></i>Registro';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	}
	document.getElementById('menu').innerHTML = html;					
}
function menuregistro(){
	let html="";
	if(sessionStorage['nombre']!=null){
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a onclick="logout();" href="index.html">';
	html +='<i class="demo-icon icon-logout-1"></i>Logout';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="nueva-entrada.html">';
	html +='<i class="demo-icon icon-doc"></i>Nueva entrada';
	html +='</a>';
	html +='</li>';
	}
	else{
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="login.html">';
	html +='<i class="demo-icon icon-login"></i>Login';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu" id="active">';
	html +='<a href="registro.html">';
	html +='<i class="demo-icon icon-user-plus"></i>Registro';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	}
	document.getElementById('menu').innerHTML = html;					
}
function menubuscar(){
	let html="";
	if(sessionStorage['nombre']!=null){
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu" id="active">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a onclick="logout();" href="index.html">';
	html +='<i class="demo-icon icon-logout-1"></i>Logout';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="nueva-entrada.html">';
	html +='<i class="demo-icon icon-doc"></i>Nueva entrada';
	html +='</a>';
	html +='</li>';
	}
	else{
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="login.html">';
	html +='<i class="demo-icon icon-login"></i>Login';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="registro.html">';
	html +='<i class="demo-icon icon-user-plus"></i>Registro';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu" id="active">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	}
	document.getElementById('menu').innerHTML = html;					
}
function menulogout(){
	let html="";
	if(sessionStorage['nombre']!=null){
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu" id="active">';
	html +='<a onclick="logout();" href="index.html">';
	html +='<i class="demo-icon icon-logout-1"></i>Logout';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="nueva-entrada.html">';
	html +='<i class="demo-icon icon-doc"></i>Nueva entrada';
	html +='</a>';
	html +='</li>';
	}
	else{
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="login.html">';
	html +='<i class="demo-icon icon-login"></i>Login';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="registro.html">';
	html +='<i class="demo-icon icon-user-plus"></i>Registro';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	}
	document.getElementById('menu').innerHTML = html;					
}
function menunuevaentrada(){
	let html="";
	if(sessionStorage['nombre']!=null){
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a onclick="logout();" href="index.html">';
	html +='<i class="demo-icon icon-logout-1"></i>Logout';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu" id="active">';
	html +='<a href="nueva-entrada.html">';
	html +='<i class="demo-icon icon-doc"></i>Nueva entrada';
	html +='</a>';
	html +='</li>';
	}
	else{
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="login.html">';
	html +='<i class="demo-icon icon-login"></i>Login';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="registro.html">';
	html +='<i class="demo-icon icon-user-plus"></i>Registro';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	}
	document.getElementById('menu').innerHTML = html;					
}
function menuentrada(){
	let html="";
	if(sessionStorage['nombre']!=null){
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a onclick="logout();" href="index.html">';
	html +='<i class="demo-icon icon-logout-1"></i>Logout';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="nueva-entrada.html">';
	html +='<i class="demo-icon icon-doc"></i>Nueva entrada';
	html +='</a>';
	html +='</li>';
	}
	else{
	html +='<li>';
	html +='<label for="ckb-menu">&equiv;</label>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="index.html">';
	html +='<i class="demo-icon icon-home-1"></i>Inicio';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="login.html">';
	html +='<i class="demo-icon icon-login"></i>Login';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="registro.html">';
	html +='<i class="demo-icon icon-user-plus"></i>Registro';
	html +='</a>';
	html +='</li>';
	html +='<li class="menu">';
	html +='<a href="buscar.html">';
	html +='<i class="demo-icon icon-search-1"></i>Buscar';
	html +='</a>';
	html +='</li>';
	}
	document.getElementById('menu').innerHTML = html;					
}

function formulario(){

	let html= '';
	if(sessionStorage['nombre']!=undefined){
		html += '<form method="POST" onsubmit="return hacercomentario(this);">'
		html +=	'<h2>Responder</h2>'
		html +=	'<ul class="formu">'
		html +=	'<li>'
		html +=	' <label>Titulo <span class="required">*</span></label>'
		html += 	'<input type="text" maxlength="50" name="titulo" class="field-long" id="titulo" required=""/>'
		html +=	'</li>'
		html +=	'<li>'
		html +=		' <label>Descripcion <span class="required">*</span></label>'
		html +=		' <textarea cols="30" rows="5" maxlength="200" class="field-long" name="texto" required="" id="texto"></textarea>'
		html +=	'</li>'
		html +='<li>'
		html +=' <input type="submit" value="Responder" />'
		html +='</li>'
		html +='</ul>'
		html +='</form>'
	}
	else{
		html += '<h2>Para dejar un comentario debes estar <a href="login.html">logueado</a></h2'
	}

	document.getElementById('form').innerHTML = html;
}
function formularioRespuesta(comentario){
console.log("aqui no llega");
	let html= '';
	if(sessionStorage['nombre']!=undefined){
		html += '<form method="POST" onsubmit="return hacercomentario(this);">'
		html +=	'<h2>Responder</h2>'
		html +=	'<ul class="formu">'
		html +=	'<li>'
		html +=	' <label>Titulo <span class="required">*</span></label>'
		html += 	'<input type="text" maxlength="50" disabled placeholder="Re:'+comentario+'" name="titulo" class="field-long" id="titulo" required=""/>'
		html +=	'</li>'
		html +=	'<li>'
		html +=		' <label>Descripcion <span class="required">*</span></label>'
		html +=		' <textarea cols="30" rows="5" maxlength="200" class="field-long" name="texto" required="" id="texto"></textarea>'
		html +=	'</li>'
		html +='<li>'
		html +=' <input type="submit" value="Responder" />'
		html +='</li>'
		html +='</ul>'
		html +='</form>'
	}
	else{
		html += '<h2>Para dejar un comentario debes estar <a href="login.html">logueado</a></h2'
	}

	document.getElementById('form').innerHTML = html;
}