// Función que realiza la busqueda
function realizarBusqueda(frm){

	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PHII/practica2/rest/entrada/',
		section = frm.parentNode.parentNode;

	/*Recojo los parámetros del formulario*/
	var titulo_value = document.getElementById("titulo").value;
	var descripcion_value = document.getElementById("descripcion").value;
	var autor_value = document.getElementById("autor").value;
	var fi_value = document.getElementById("fecha_inicio").value;
	var ff_value = document.getElementById("fecha_final").value;

	url += '?n=' + titulo_value + '&d=' + descripcion_value + '&l=' + autor_value + '&fi=' + fi_value + '&ff=' + ff_value;

	/*Pruebas para ver si recojo bien el value del formulario*/
	/*console.log(titulo_value);
	console.log(descripcion_value);
	console.log(autor_value);
	console.log(fi_value);
	console.log(ff_value);*/	

	xhr.open('GET', url, true);

	xhr.onload = function(){
		console.log(xhr.responseText);
		let v = JSON.parse(xhr.responseText);
		console.log(v.RESULTADO);

		if(v.RESULTADO == 'ok' && (titulo_value!='' || descripcion_value!='' || autor_value!='' || fi_value!='' || ff_value!='')){
			let html = '';

			for(let i=0; i<v.FILAS.length && i<6; i++){
				let e = v.FILAS[i];

					foto = 'http://localhost/PHII/practica2/fotos/' + e.fichero;

				html += '<article>';
				html +=   '<h3><a href="entrada.html?id=' + e.id + '">' + e.nombre + '</a></h3>'; 
				html += 	'<figure>';
				html += 		'<img src="' + foto + '" alt="' + e.descripcion_foto + '">';
				html += 		'<figcaption>' + e.descripcion + '<footer><a>Ver más</a></footer></figcaption>';
				html += 	'</figure>';
				html += 	'<footer>';
				html += 	'<ul>';
				html += 		'<li><span aria-hidden="true" class="icon-comment"></span>' + e.ncomentarios + '</li>';
				html += 		'<li><span aria-hidden="true" class="icon-picture"></span>' + e.nfotos + '</li>';
				html += 		'<li><span aria-hidden="true" class="icon-calendar"></span><time datetime="'+ e.fecha + '">' + e.fecha + '</time></li>';
				html += 		'<li><span aria-hidden="true" class="icon-user"></span>' + e.login + '</li>';
				html += 	'</ul>';
				html += 	'</footer>';
				html += '</article>';

			}
			section.querySelector('h2+div').innerHTML = html;

		}else{
			// Mostrar un mensaje avisando al usuario de que incluya algún parámetro de búsqueda
			alert("Ningún resultado. Incluye algún parámetro de búsqueda");
			location.replace('buscar.html');
		}

	};

	xhr.send();

	return false;
}