function mostrarMensaje(){
	let capa_fondo=document.createElement('div'),capa_frente=document.createElement('article'), texto=document.querySelector('body>input[name="mensaje"]').value;
	capa_fondo.appendChild(capa_frente);
	let html="";
	html +='<h2>MENSAJE EMERGENTE</h2>';
	html +='<p>' + texto + '</p>';
	html += '<button onclick="this.parentNode.parentNode.remove();">Cerrar</button>';

	capa_frente.innerHTML=html;
	capa_fondo.classList.add('capa-fondo');
	capa_frente.classList.add('capa-frente');

	document.body.appendChild(capa_fondo);
}