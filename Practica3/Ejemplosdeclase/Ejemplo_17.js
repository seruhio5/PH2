function prepararDnD(){
	//ZONA DRAGGABLE
	let v = document.querySelectorAll('#s1>ul>li');
	for(let i=0; i<v.length; i++){
		v[i].setAttribute('draggable','true');
		v[i].ondragstart = function(e){
			e.dataTransfer.setData('text/plain', v[i].id);
		}
	}

	//ZONA DROPPABLE
	let section = document.getElementById('s2');
	section.dragover = function(e){
		e.preventDefault();
		e.stopPropagation();
	}
	section.ondrop = function(e){
		e.preventDefault();
		e.stopPropagation();
		let id_li = e.dataTransfer.getData('text/plain');
	}
	section.querySelector('ul').appendChild(document.getElementById(id_li));
}