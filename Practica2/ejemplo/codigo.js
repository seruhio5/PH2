function hacerlogin(frm){
    

	if (sessionStorage.getItem('algo') == null){
    }
	let xhr = new XMLHttpRequest(),
		url = 'http://localhost/PH2/Practica2/rest/usuario/',	//Puesto para mi ruta
		fd  = new FormData(frm);	//Mete todos los valores del formulario automaticamente

	xhr.open('POST', url, true);
	xhr.onload = function(){	//Cuando llega al paso 4 realiza la ejecudion de este codigo
		console.log(xhr.responseText);	//Muestra la respuesta del proceso por consola
		let du = JSON.parse(xhr.responseText);	
		//Lo que hace es guardarlo en el sesion storage si ha funcionado
		if(du.RESULTADO == 'ok'){
			//console.log(du);
			sessionStorage['algo'] = "algo"; //se podria utilizar la funcion stringiflay!
		}
		
		else{

		}
	
        frm.parentNode.querySelector('p').innerHTML = xhr.responseText; //Text content lo interpreta como texto tal cual (no interpreta el html para luego ponerlo) con inner interpreta el codigo html
		
	};
	console.log(fd);
	xhr.send(fd);
	return false;
}


function mostrarFoto(inp){
	let fr = new FileReader();
	
	fr.onload = function(){
		inp.parentNode.querySelector('img').src = fr.result;
		inp.parentNode.querySelector('img').alt = inp.files[0].name;
	};

	fr.readAsDataURL(inp.files[0]); //en la consola dentro del navegador si se pone $0.files dice los archivos seleccionados y los datos que hay 
}


function enviarFoto(btn){
	let xhr = new XMLHttpRequest;
		url = 'http://localhost:4443/ph2/rest/foto/'
		fd = new FormData();
		du = JSON.parse(sessionStorage['du']);



	fd.append('login', du.login);
	fd.append('id_entrada', 1);	//Sustituir por el id de la entrada que quieres
	fd.append('texto', btn.parentNode.querySelector('textarea').value);
	fd.append('foto', btn.parentNode.querySelector('[type=file]').files[0]);

	xhr.open('POST', url, true);
	xhr.onload = function(){
		console.log(xhr.responseText);
		console.log("funciona");
	};

	xhr.setRequestHeader('Authorization', du.clave);
	xhr.send(fd);

}