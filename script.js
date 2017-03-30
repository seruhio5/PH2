function mostrarentradas(frm){
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/practica2/rest/entrada/',
		section = frm.parentNode.parentNode;

	xhr.open('GET', url, true);
	//Cuando es get no se pasa nada por parametros, se concatena con la url
	url += '?pag=' + frm.pag.value + '&lpag=' + frm.lpag.value;
	xhr.onload = function(){
		console.log(xhr.responseText);
		let v = JSON.parse(xhr.responseText);
		console.log(v);

		if(v.RESULTADO == 'ok'){
			let html= '';
			for(let i=0; i<v.FILAS.length; i++){
				let e = v.FILAS[i],
					foto = 'http://localhost/practica2/fotos/' + e.fichero;
				html += '<article>'
				html +=	'<h3>'+ e.nombre + '</h3>'
				html +=	'<div>'
				html +=		'<img src="' + foto + '" alt="' + e.descripcion + '">'
				html +=		'<h4>' + e.descripcion + '</h4>'
				html +=     '<aside><a>"Ver mas"</a></aside>' 
				html +=	'</div>'
				html +=	'<footer>'
				html +=		'<p>'+ e.login +'</p>'
				html +=		'<time>' + e.fecha + '</time>'
				html +=		'<p>' + e.ncomentarios + '</p>'
				html +=		'<p> '+ e.nfotos+' </p>'
				html +=	'</footer>'
				html +='</article>'
			} //End for
			section.querySelector('div').innerHTML = html;
		}//end if
	}
	xhr.send();
	return false;
}