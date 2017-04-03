window.addEventListener('load',function(){
	var imagenesTotal =[{promocion:"4-chile",img:"anais-araya .jpg"},
						{promocion:"4-chile",img:"andrea-miranda.jpg"},
						{promocion:"4-chile",img:"berenisse-ríos.jpg"},
						{promocion:"4-chile",img:"caterina-da-silva.jpg"},
						{promocion:"4-chile",img:"daniela-sanchez.jpg"},
						{promocion:"4-chile",img:"francisca-ojeda.jpg"},
						{promocion:"4-chile",img:"katerine-sandoval.jpg"},
						{promocion:"5-lima",img:"andrea-cabrera.jpg"},
						{promocion:"5-lima",img:"ariadna-izaguirre.jpg"},
						{promocion:"5-lima",img:"carito-juarez.jpg"},
						{promocion:"5-lima",img:"cristy-castro.jpg"},
						{promocion:"5-lima",img:"karol-orrillo.jpg"},
						{promocion:"5-lima",img:"paola-ortiz.jpg"},
						{promocion:"5-lima",img:"teresa-lara.jpg"},
						{promocion:"6-lima",img:"arantza-burga.jpg"},
						{promocion:"6-lima",img:"daguiana-revoredo.jpg"},
						{promocion:"6-lima",img:"elizabeth-condori.jpg"},
						{promocion:"6-lima",img:"grecia-rayme.jpg"},
						{promocion:"6-lima",img:"janine-vega.jpg"},
						{promocion:"6-lima",img:"michelle-more.jpg"},
						{promocion:"6-lima",img:"mishel-velasquez.jpg"},
						{promocion:"6-lima",img:"rosario-felix.jpg"}];

	function crearImg(url){
	 	var img = document.createElement("img");
	 	var ruta = "assets/images/"
	 	img.setAttribute("src",ruta+url);
		return img;
	}

	var arrayNumerosAleatorios = [];
	while(arrayNumerosAleatorios.length<imagenesTotal.length){
	 	var numAleatorio = Math.floor(Math.random()*imagenesTotal.length);
	 	if(arrayNumerosAleatorios.indexOf(numAleatorio)==-1){
	 		arrayNumerosAleatorios.push(numAleatorio);
	 	}		
	}
	console.log(arrayNumerosAleatorios);

	var divContenedor = document.getElementById("div-contenedor-img");
	var docFragment= document.createDocumentFragment();
	arrayNumerosAleatorios.forEach(function(elem){
		var url = imagenesTotal[elem].img;
		docFragment.appendChild(crearImg(url));

	});
	//mostrar todas las fotos por defecto
	divContenedor.appendChild(docFragment);

	var selector = document.getElementById('selector');
	selector.addEventListener('change',function(){
		imagenesTotal.filter(function(elem){return elem.promocion == selector.value}).forEach(function(elem){
			docFragment.appendChild(crearImg(elem.img));
		});

		divContenedor.innerHTML="";
		divContenedor.appendChild(docFragment);
	});
});

