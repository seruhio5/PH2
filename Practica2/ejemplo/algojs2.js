function empezar(){
	console.log('Video empezado');
	mostrarEnCanvas();
}
function pausado(){
	let v=document.querySelector('video');
	console.log('Video pausado: ' + v.currentTime);
}


function mostrarEnCanvas(){
	let cv=document.getElementById('cv1'), ctx=cv.getContext('2d'),v=document.querySelector('video');
	if(v.ended||v.paused){
		return false;
	}
	ctx.drawImage(v,0,0,cv.width/2,cv.height/2);
	setTimeout(mostrarEnCanvas,60/1000);//60 milisegundos

}
function pintarRect(){
	let cv=document.getElementById('cv1'), ctx=cv.getContext('2d');
	
	ctx.beginPath();
	ctx.fillStyle='#00a';
	ctx.strokeStyle='#a00';
	ctx.lineWidth=4;
	ctx.fillRect(20,20,150,100);
	ctx.strokeRect(20,20,150,100);

}
function pintarTexto(){
	let cv=document.getElementById('cv1'), ctx=cv.getContext('2d');

	ctx.beginPath();
	ctx.fillStyle='#aa0';
	ctx.strokeStyle='#00a';
	ctx.lineWidth=1;
	ctx.font='bold 46px arial';
	ctx.fillText('hola',200,200);
	ctx.strokeText('holaa',200,200);
}

function pintarLinea(){
	let cv=document.getElementById('cv1'), ctx=cv.getContext('2d');

	ctx.beginPath();//para hacer varias lineas
	ctx.strokeStyle='#a00';
	ctx.lineWidth=4;
	ctx.moveTo(100,100);//necasrio para empezar a dibujar y sitio donde empieza a dibujar
	ctx.lineTo(120,175);//punto donde se va a mover la linea(pinta desde el punto anterior hasta el indicado en este punto)
	ctx.lineTo(120,250);
	ctx.stroke();//termina la linea
	ctx.beginPath();//nueva linea
	ctx.strokeStyle='#0a0';
	ctx.moveTo(120,250);
	ctx.lineTo(80,250);
	ctx.stroke();
}
function pintarCirculo(){
	let cv=document.getElementById('cv1'), ctx=cv.getContext('2d');

	ctx.beginPath();
	ctx.strokeStyle='#a00';
	ctx.arc(100,100,75,0, Math.PI,true);//la variable boolean consiste en false=sentido horario, true=sentido antihorario
	ctx.stroke();
}
function Limpiar(){//dos formas de limpiar
	let cv=document.getElementById('cv1'), ctx=cv.getContext('2d');
	//ctx.clearRect(0,0, cv.width, cv.height);
	cv.width=cv.width;//aqui se puede poner anchura o altura que funciona igual
}
function pintarImagen(){
	let cv=document.getElementById('cv1'), ctx=cv.getContext('2d');
	img=new Image();
	img.onload=function(){//necesario para que cargue en el primer click de la llamada a la funcion
		ctx.drawImage(img,100,100,200,200,100,100,cv.width/2,cv.height/2);//los primeros cuatro parametros de la funcion de numeros es para mostrar un cacho de la imagen con todo el tamaño
	}
	img.src='logoPH2.png';
	
}