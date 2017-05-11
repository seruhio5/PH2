function dibujarCampo(){
	let cv = document.getElementById("cv01"),
		ctx = cv.getContext("2d"),
		dim = cv.width/18;

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle = '#000';

	for(let i=0;i<=18; i++){
		//Lineas verticales
		ctx.moveTo(i*dim, 0);
		ctx.lineTo(i*dim, cv.height);
		//Lineas horizontales
		ctx.moveTo(0, i*dim);
		ctx.lineTo(cv.height*3, i*dim);

	}
	ctx.strokeStyle="#ff0000";
	ctx.stroke();
}

function mouse_move(e){
	let cv 		= e.target,
		dim 	= cv.width/18,
		x 		= e.offsetX,
		y 		= e.offsetY,
		fila 	= Math.floor(y/dim),
		columna	= Math.floor(x/dim);

	console.log(`Posicion: ${x} - ${y}`);
	console.log(`Fila: ${fila} -  columna: ${columna}`);
}

function mouse_click(e){
	let cv 		= e.target,
		dim 	= cv.width/18,
		x 		= e.offsetX,
		y 		= e.offsetY,
		fila 	= Math.floor(y/dim),
		columna	= Math.floor(x/dim);

	if(fila<0)
		fila=0;
	if(columna<0)
		columna=0;
	if(fila>=9)
		fila=9;
	if(columna>=18)
		columna=18;

	//console.log(`Posicion: ${x} - ${y}`);
	console.log(`Fila: ${fila} -  columna: ${columna}`);

	//Se limpia el canvas para pintar todo otra vez
	cv.width = cv.width;
	dibujarCampo();

	let ctx = cv.getContext('2d');
	ctx.beginPath();
	ctx.strokeStyle = '#a00';
	ctx.lineWidth = 4;
	ctx.strokeRect(columna*dim, fila*dim,dim, dim)

}