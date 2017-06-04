function dragFichas(){

    //PREPARAR EL DRAG END DROP
    //ZONA DRAGGABLE
    //SERAN LOS LI

    let v = document.querySelectorAll('#s1>img');
    for(let i = 0 ; i<v.length;i++){
        v[i].setAttribute('draggable','true');
        v[i].ondragstart = function(e){
            e.dataTransfer.setData('text/plain',v[i].id);
        }
    }
    //ZONA DROPPABLE
    let section = document.getElementById('s2');
    section.ondragover = function(e)
    {
        e.preventDefault();
        e.stopPropagation();//para prevenir , por si la primera
    }

    section.ondrop = function(e)
    {
        e.preventDefault();
        e.stopPropagation();//para prevenir , por si la primera
        let id_li = e.dataTransfer.getData('text/plain');
        console.log("DROP: "+id_li);
        //AÑADIR COMO HIJO EL ELEMENTO QUE SE HA SACADO DEL
        //PRIMER SECTION A LA LISTA DEL SEGUNDO.
        section.querySelector('span').appendChild(document.getElementById(id_li));
    }
}