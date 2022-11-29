const card = document.querySelector('.noticia');

// let grados = 180;

function clickRotate() {
	//card.classList.toggle('rotated');
	if (card.classList.contains('rotated')) {
		showContent('noticia1', 2);
		card.classList.remove('rotated');
		card.classList.add('rotated1');
	} else if (card.classList.contains('rotated1')) {
		showContent('noticia2', 3);
		card.classList.remove('rotated1');
		card.classList.add('rotated2');
	} else if (card.classList.contains('rotated2')) {
		showContent('noticia1', 4);
		card.classList.remove('rotated2');
		card.classList.add('rotated3');
	} else if (card.classList.contains('rotated3')) {
		showContent('noticia2', 5);
		card.classList.remove('rotated3');
		card.classList.add('rotated4');	
	} else if (card.classList.contains('rotated4')) {
		showContent('noticia1', 0);
		card.classList.remove('rotated4');
		card.classList.add('rotated5');
	} else if (card.classList.contains('rotated5')) {
		showContent('noticia2', 1);
		card.classList.remove('rotated5');
		card.classList.add('rotated');			
	}else{
		card.classList.remove('rotated5')
		card.classList.add('rotated');
	}
}
card.addEventListener('click', clickRotate);


function showContent(id, nro) {
	var temp = document.getElementsByTagName("template")[nro];
	var clon = temp.content.cloneNode(true);
	document.getElementById(id).innerHTML = "";
	document.getElementById(id).appendChild(clon);
}
/*
	// grados += 180;
	// console.log(grados);
	// let style = document.createElement('style');
	// style.innerHTML = `.rotated1 { transform: rotate3d(0, 1, 0,${grados}deg); }`;

	// event listeners 
	'click', 'mousedown', 'mouseleave', 'mouseup', 'mousemove'
*/



