function pedirEntrada(frm){
	let idEntrada=frm.id.value;//permite tener una variable local sin sobreescribir la variable local con el mismo nombre
	console.log('hola'+idEntrada);
	let xhr=new XMLHttpRequest();
	let url=file:///C:/Users/babio/Dropbox/PH2/P2/picarcodigo.html//url de a la que se le pide el recurso
	xhr.open('GET','Users/babio/Dropbox/PH2/P2/entrada.html'+idEntrada,true);//metodo,url,asincrono o no
	/*xhr.onreadystatechange=function(){
		console.log('readyState:'+xhr.readyState);
		if(xhr.readyState==4){//se ha terminado la comunicacion
			if(xhr.status==200){//todo ha ido correctamente
				let datosEntrada=xhr.responseText;
				frm.parentNode.querySelector('article>p').innerHTML=datosEntrada;
			}
		}
	}*/
	xhr.onload=function(){//el onload se activa cuando el readyState=4 y status=200
		let datosEntrada=xhr.responseText;
		frm.parentNode.querySelector('article>p').innerHTML=datosEntrada;
	};
	xhr.send();//en el casod de que sea un post sera necesiario poner los parametros aqui
	return false;
}
function hacerLogin(frm){
	let idEntrada=frm.id.value;//permite tener una variable local sin sobreescribir la variable local con el mismo nombre
	console.log('hola'+idEntrada);
	let xhr=new XMLHttpRequest();
	let url=file:///C:/Users/babio/Dropbox/PH2/P2/picarcodigo.html//url de a la que se le pide el recurso
	let login=frm.login.value;
	let pwd=frm.pwd.value;
	xhr.open('POST','Users/babio/Dropbox/PH2/P2/login.html',true);//metodo,url,asincrono o no
	xhr.onload=function(){//el onload se activa cuando el readyState=4 y status=200
		let datosUsuario=xhr.responseText;
		frm.parentNode.querySelector('article>p').innerHTML=datosUsuario;
	};
	let params='login='+login+'&pwd='+pwd;
	xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
	xhr.send(params);//en el casod de que sea un post sera necesiario poner los parametros aqui
	return false;
}