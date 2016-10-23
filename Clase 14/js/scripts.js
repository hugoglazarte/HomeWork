function Noticia(id, titulo, descripcion, imagen, categoria) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.categoria = categoria;

}

var Diario = (function () {

    // Atributos privados
    var noticias = [];
	var claveLocalStorage = 'noticias';

    /*
        Permite precargar las noticias por localstorage
    */
    var precargarNoticias = function () {
		
        var datos = localStorage.getItem(claveLocalStorage);

        if (datos !== null && datos !== '') {

            noticias = JSON.parse(datos);
			
			for (i = 0; i < noticias.length; i++) {
				
				dibujarNoticia(noticias[i]);
				
			}

		}

	}

	/*
		Guarda el array de noticias en localstorage
	*/
	var guardarNoticias = function () {

		var datos = JSON.stringify(noticias);
		localStorage.setItem(claveLocalStorage, datos);

	}
	
	/*
		Agrega el texto al elemento utilizando un nodoTexto
		Retorna el elemento con el nodoTexto agregado
	 */
    // var agregarTexto = function (elemento, texto) {

    //     //var nodoTexto = document.createTextNode(texto);
    //     //elemento.appendChild(nodoTexto);
    //     elemento.html(texto);

    //     return elemento;

    // }

    var modificarNoticia = function (noticia) {

    	// var POSICION_TITULO = 2;
    	// var POSICION_DESCRIPCION = 3;
    	// var POSICION_IMAGEN = 4;

    	var posicion = obtenerPosicionNoticia(noticia.id);
    	// var noticiaDOM = document.getElementById(noticia.id);
    	var noticiaDOM = $('#' + noticia.id);

    	noticias[posicion].titulo = noticia.titulo;
    	noticias[posicion].descripcion = noticia.descripcion;
    	noticias[posicion].imagen = noticia.imagen;
    	noticias[posicion].categoria = noticia.categoria;
    	// noticiaDOM.childNodes[POSICION_TITULO].innerHTML = noticia.titulo;
    	// noticiaDOM.childNodes[POSICION_DESCRIPCION].innerHTML = noticia.descripcion;
    	// noticiaDOM.childNodes[POSICION_IMAGEN].setAttribute('src', noticia.imagen);

    	$('#' + noticia.id +' > h3').html(noticia.titulo);
    	$('#' + noticia.id +' > p').html(noticia.descripcion);
    	$('#' + noticia.id +' > img').attr('src', noticia.imagen);
    	$('#' + noticia.id +' > h4').html(noticia.categoria);

    	$('#' + noticia.id).removeAttr('class');
    	$('#' + noticia.id).addClass('list-group-item');
    	$('#' + noticia.id).addClass(noticia.categoria);


    	var categoriaSeleccionada = $('#filtroCategoria').val()

    	if (noticia.categoria !== categoriaSeleccionada) {

			$('#' + noticia.id).hide();    		

    	}

    	// $('#'+ noticia.id + 'h3').html(noticia.titulo);
    	// $('#'+ noticia.id + 'p').html(noticia.descripcion);

    	guardarNoticias();
    	limpiarFormulario();


    	//     	// var POSICION_TITULO = 2;
    	// // var POSICION_DESCRIPCION = 3;
    	// // var POSICION_IMAGEN = 4;

    	// var posicion = obtenerPosicionNoticia(noticia.id);
    	// //var noticiaDOM = document.getElementById(noticia.id);
    	// //var noticiaDOM = $('#' + noticia.id);

    	// noticias[posicion].titulo = noticia.titulo;
    	// noticias[posicion].descripcion = noticia.descripcion;
    	// noticias[posicion].imagen = noticia.imagen;
    	// // noticiaDOM.childNodes[POSICION_TITULO].innerHTML = noticia.titulo;
    	// // noticiaDOM.childNodes[POSICION_DESCRIPCION].innerHTML = noticia.descripcion;
    	// // noticiaDOM.childNodes[POSICION_IMAGEN].setAttribute('src', noticia.imagen);

    	// $('#' + noticia.id +' > h3').html(noticia.titulo);
    	// $('#' + noticia.id +' > p').html(noticia.descripcion);
    	// $('#' + noticia.id +' > img').attr('src', noticia.imagen);

    	// // $('#'+ noticia.id + 'h3').html(noticia.titulo);
    	// // $('#'+ noticia.id + 'p').html(noticia.descripcion);

    	// guardarNoticias();
    	// limpiarFormulario();
    	
    }

    var limpiarFormulario = function () {

		// var boton = document.getElementById('boton');
    	
  		// boton.innerHTML = 'Agregar';

    	// var boton = $('#boton').html('Agregar');

	   	// BOTON CREAR NOTICIA
	   	// var boton = document.getElementById('boton');
	   	// boton.innerHTML = 'Agregar'
    	// boton.onclick = crearNoticia;

    	//JQUERy
		var boton = $('#boton').html('Agregar');
		boton.off('click');    	
    	boton.on('click', crearNoticia);

    	$('#titulo').val('');
    	$('#descripcion').val('');
    	$('#imagen').val('');

		// document.getElementById('titulo').value = '';
		// document.getElementById('descripcion').value = '';
		// document.getElementById('imagen').value = '';

		// boton.off('click');

    }

    var cargarNoticia = function (noticia) {

    	$('#titulo').val(noticia.titulo);
    	$('#descripcion').val(noticia.descripcion);
    	$('#imagen').attr('src', noticia.imagem);
    	$('#categoria').val(noticia.categoria);
   
	   	// document.getElementById('titulo').value = noticia.titulo;
	   	// document.getElementById('descripcion').value = noticia.descripcion;
	   	// document.getElementById('imagen').value = noticia.imagen;

	   	// boton.on('click', function(){noticia.titulo = document.getElementById("titulo").value;
	   	// noticia.descripcion = document.getElementById("descripcion").value;
	   	// noticia.imagen = document.getElementById("imagen").value;

	   	// 	modificarNoticia(noticia);});

	   	// boton.off('click');
	   	
	   	// BOTON MODIFICAR
		// var boton = document.getElementById('boton');
	 //   	boton.innerHTML = 'Modificar'

		// boton.onclick = function () {

		// 	noticia.titulo = $('#titulo').val();
		// 	noticia.descripcion = $('#descripcion').val();
		// 	noticia.imagen = $('#imagen').val();

		// 	// noticia.titulo = document.getElementById("titulo").value;
	 //  //  		noticia.descripcion = document.getElementById("descripcion").value;
	 //  //  		noticia.imagen = document.getElementById("imagen").value;

	 //   		modificarNoticia(noticia);

		// }

		//JQUERY
		var boton = $('#boton').html('Modificar');
		boton.off('click');    	
    	boton.on('click', function () {

			noticia.titulo = $('#titulo').val();
			noticia.descripcion = $('#descripcion').val();
			noticia.imagen = $('#imagen').val();
			noticia.categoria = $('#categoria').val();

	  // 		noticia.titulo = document.getElementById("titulo").value;
	  //  		noticia.descripcion = document.getElementById("descripcion").value;
	  //  		noticia.imagen = document.getElementById("imagen").value;

	   		modificarNoticia(noticia);

		});
	}

	/*
		Dibuja en el DOM la noticia pasada como parametro
	 */
	var dibujarNoticia = function (noticia) {
	
		$('<li/>')
			.attr('id', noticia.id)
			.addClass('list-group-item')
			.appendTo('#noticias');

		var botonEliminar = $('<button/>')
									.addClass('btn btn-default btn-xs')
									.on('click', function () { eliminarNoticia(noticia.id); });
		var botonModificar = $('<button/>')
									.addClass('btn btn-default btn-xs')
									.on('click', function() { cargarNoticia(noticia); });

		$('<span/>')
			.addClass('glyphicon glyphicon-remove')
			.html('Borrar')
			.appendTo(botonEliminar);

		$('<span/>')
			.addClass('glyphicon glyphicon-pencil')
			.html('Modificar')
			.appendTo(botonModificar);

		botonEliminar.appendTo('#' + noticia.id);
		botonModificar.appendTo('#' + noticia.id);

		var labelInput = $('<text/>').html('Seleccionar para borrar');
		var inputEliminar = $('<input/>').attr('type', 'checkbox').val('Borrar Noticia');

		inputEliminar.appendTo('#' + noticia.id);
		labelInput.appendTo('#' + noticia.id);

		 $('<h3/>').html(noticia.titulo).appendTo('#' + noticia.id);
		 $('<p/>').html(noticia.descripcion).appendTo('#' + noticia.id);
		 $('<img/>').attr('src', noticia.imagen).appendTo('#' + noticia.id);

		 $('<h4/>').html(noticia.categoria).appendTo('#' + noticia.id);

		 $('#' + noticia.id).addClass(noticia.categoria);


	}

    /*
		Borra del DOM la noticia pasada como parametro
	 */
    var borrarNoticiaDOM = function (id) {

    	$('#' + id).remove();

        // var ul = document.getElementById("noticias");
        // var li = document.getElementById(id);

        // ul.removeChild(li);

    }

    // Si la noticia existe en el array de noticias devuelve la posicion donde se encuentra (0, 1, 2, etc.)
    // En caso contrario devuelve -1;
    var obtenerPosicionNoticia = function (id) {

        var posicion = -1; 
        
        // La condicion del for lee: 'Mientras haya elementos en el array de noticias por recorrer y la posicion sea -1
        for(i = 0; i < noticias.length && posicion === -1; i++) { 

            if (noticias[i].id === id) { 
                
                // Si los ids coinciden me guardo el contenido de la variable i en la variable posicion
                posicion = i; 

            }

        }

        return posicion;

    }

    var agregarNoticia = function (noticia) {

    	

		noticias.push(noticia);

		guardarNoticias();

		dibujarNoticia(noticia);

		var categoriaSeleccionada = $('#filtroCategoria').val();

		debugger;

		if (categoriaSeleccionada === 'Todas') {

			$('#' + noticia.id).show();    		

    	} else if (noticia.categoria !== categoriaSeleccionada){

    		$('#' + noticia.id).hide(); 

    	}

		//ordenadorCategoria();

		limpiarFormulario();


		
    }
	
    var eliminarNoticia = function (id) {

        var posicion = obtenerPosicionNoticia(id);

		// Borra 1 elemento desde la posicion
		noticias.splice(posicion, 1);

		guardarNoticias();

		borrarNoticiaDOM(id);

    }

    var limpiarNoticiasDOM = function () {

    	$('#noticias').empty();

		// var noticiasDOM = document.getElementById('noticias');
		
		// while (noticiasDOM.firstChild) {

		// 	noticiasDOM.removeChild(noticiasDOM.firstChild);

		// }

    }

	var limpiarDiario = function () {

		noticias = []
		localStorage.removeItem(claveLocalStorage);
		
		limpiarNoticiasDOM();

	}

	// var ordenadorCategoria = function() {

	// 	$("#filtroCategoria").change(function(){

 //            //alert($('select[id=filtroCategoria]').val());

 //            //$('#valor2').val($(this).val());
 //            var mensaje = $("#filtroCategoria").val();
 //            console.log(mensaje);

	// 	}
	// }

	var ordenadorCategoria = function() {

		$( "#filtroCategoria" ).change(function() {

		  //alert( $('select[id=filtroCategoria]').val() );

		  var filtro = $('select[id=filtroCategoria]').val();

		  	$('.list-group-item').hide();

		  	$('.'+ filtro +'').show();

		 	if (filtro === 'Todas') {

			$('.list-group-item').show(); 		

    		}

		});

  

	}

	// $('#static-parent').on('keyup', '#aDropdownID', function(ev){
	// // stuff happens
	// });

	var contruirBuscador = function() {

		$('#buscadorNoticias').on('keyup', function(){
			debugger;
			var textInput = $('#buscadorNoticias').val().split('');

			// var textInputArray = textinput.trim();

			// console.log('apretaste' + textinput);

			// console.log('apretaste' + textInput[0]);

			$('.list-group-item').hide();

			var titulosH3 = $('h3');

			

			for( var i = 0 ; i < titulosH3.length ; i++ ){

				var tempH3 = titulosH3[i];

				var tempH3Array = tempH3.innerHTML.split('')

				for( var j = 0 ; j < tempH3Array.length ; j++){

					if(textInput[j] === tempH3Array[j]){

						//alert('se repite una letra en la noticia');

						var mostrarNoticia = tempH3.parentNode;
						
						$(mostrarNoticia).show();

					} 
				}

			}

		});
	}

	var segundoBuscador = function(){

		var noticiasLi = $('#noticias li');// agarras noticias li

		$('#buscadorNoticias').keyup(function() {

		    var val = $.trim($(this).val()).toLowerCase();

		    // var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
		    
		    noticiasLi.show().filter(function() {

		        var text = $(this).find('h3').text().toLowerCase();
		        // var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();

		        return !~text.indexOf(val);

		    }).hide();

		});

	}

	// selectores checked

	var borrarPorCheckbox = function(){

		// var noticiasAborrar = $("input[type='checkbox']:checked").closest('li');

		$('#borrarSeleccionados').on('click', function(){

			debugger;

			var noticiasAborrar = $("input[type='checkbox']:checked").closest('li');

			noticiasAborrar.each(function(index){

			// console.log(index);

			eliminarNoticia(index);

			// console.log($(element).html())

			});

			guardarNoticias();
			limpiarNoticiasDOM();
			precargarNoticias();

		})
		// noticiasAborrar.each(function(index, element){
		// console.log(index)
		// console.log($(element).html())
		// });
	}


	var construirComparador = function (atributo, ordenamientoAscendente) {

		return function (elementoA, elementoB) {

			var resultado;

			if (elementoA[atributo] > elementoB[atributo]) {

				resultado = 1;

			}

			if (elementoA[atributo] === elementoB[atributo]) {

				resultado = 0;

			}

			if (elementoA[atributo] < elementoB[atributo]) {

				resultado = -1;

			}

			if (ordenamientoAscendente === false) {

				resultado = -resultado;

			}

			return resultado;

		}

	}

	var ordenarNoticias = function (atributo, ordenamientoAscendente) {

		var comparador = construirComparador(atributo, ordenamientoAscendente);

		noticias.sort(comparador);

		guardarNoticias();
		limpiarNoticiasDOM();
		precargarNoticias();

	}

	/*

		Busca en el array de noticias la noticia con el id mas grande y devuelve ese id incrementado en una unidad.

	*/
	var generarNuevoId = function () {

		var id = 0;

		if (noticias.length !== 0) {
			
			var atributo = 'id';
			var ordenamientoAscendente = false;
			var comparador = construirComparador(atributo, ordenamientoAscendente);
			var copiaNoticias = noticias;

			copiaNoticias.sort(comparador);

			id = copiaNoticias[0].id + 1;

		}

		return id;
		
	}
	
	// var mostrarOcultarListado = function () {
	
	// 	// var listado = document.getElementById('noticias');
	// 	// // var listado = $('#noticias');

	// 	// var ordenadores = document.getElementById('ordenadores');
	// 	// // var ordenadores = $('#ordenadores');
		
	// 	// if (listado.className == '') {

	// 	// 	listado.className = 'hidden';
	// 	// 	ordenadores.className = 'hidden';
	// 	// 	this.textContent = 'Mostrar Noticias';

	// 	// } else {

	// 	// 	listado.className = '';
	// 	// 	ordenadores.className = 'btn-group';
	// 	// 	this.textContent = 'Ocultar Noticias';

	// 	// }

	// 	// JQUERY

	// 		// Esta funcion anonima se ejecuta luego de que toggle termina su ejecucion

		
	// }



	var mostrarOcultarListado = function () {
	// toogle puede recibir una funcion que se ejecuta una vez que el elemento se oculta/muestra.
	// Esto lo vamos a ver con mas detalle la proxima clase. 
	// Esta funcion anonima se ejecuta luego de que toggle termina su ejecucion.
		$('#noticias').toggle(

			function () {

				if ($('#mostrarOcultarListado').text() === 'Ocultar Noticias') {

					$('#mostrarOcultarListado').text('Mostrar Noticias');

				} else {

					$('#mostrarOcultarListado').text('Ocultar Noticias');
				}

			}

		);

	}



	var crearNoticia = function () {

		var id = generarNuevoId();

		var titulo = $('#titulo').val();
		var descripcion = $('#descripcion').val();
		var imagen = $('#imagen').val();

		var categoria = $('#categoria').val();

		// var titulo = document.getElementById('titulo').value;
		// var descripcion = document.getElementById('descripcion').value;
		// var imagen = document.getElementById('imagen').value;

		var noticia = new Noticia(id, titulo, descripcion, imagen, categoria);

		agregarNoticia(noticia);

	}

	// BOTON CREAR NOTICIA
	var vincularFormulario = function () {

		// var boton = document.getElementById('boton');
		// boton.onclick = crearNoticia;

		//JQUERY
		var boton = $('#boton');
		boton.off('click');    	
    	boton.on('click', crearNoticia);

	}
	
	var vincularOrdenamientos = function () {

		// var ordenarPorId = document.getElementById('id');
		// var ordenarPorAZ = document.getElementById('az');
		// var ordenarPorZA = document.getElementById('za');

		//JQUERY

		var ordenarPorId = $('#id');
		var ordenarPorAZ = $('#az');
		var ordenarPorZA = $('#za');

		// ordenarPorId.onclick = function () {
			
		// 	var atributo = 'id';
		// 	var ordenamientoAscendente = true;

		// 	ordenarNoticias(atributo, ordenamientoAscendente);

		// }

		// ordenarPorAZ.onclick = function () {
			
		// 	var atributo = 'titulo';
		// 	var ordenamientoAscendente = true;

		// 	ordenarNoticias(atributo, ordenamientoAscendente);

		// }

		// ordenarPorZA.onclick = function () {
			
		// 	var atributo = 'titulo';
		// 	var ordenamientoAscendente = false;

		// 	ordenarNoticias(atributo, ordenamientoAscendente);

		// }

		//JQUERY

		ordenarPorId.off('click');
		ordenarPorId.on('click', function () {
			debugger;
			
			var atributo = 'id';
			var ordenamientoAscendente = true;

			ordenarNoticias(atributo, ordenamientoAscendente);

		} )

		ordenarPorAZ.off('click');
		ordenarPorAZ.on('click', function () {
			
			var atributo = 'titulo';
			var ordenamientoAscendente = true;

			ordenarNoticias(atributo, ordenamientoAscendente);

		} )

		ordenarPorZA.off('click');
		ordenarPorZA.on('click', function () {
			
			var atributo = 'titulo';
			var ordenamientoAscendente = false;

			ordenarNoticias(atributo, ordenamientoAscendente);

		} )

		
	}

	// BOTON OCULTAR MOSTRAR
	// var vincularBotonListado = function () {

	// 	// var boton = document.getElementById('mostrarOcultarListado');
	// 	// boton.onclick = mostrarOcultarListado;

	// 	var boton = $('#mostrarOcultarListado');
	// 	boton.off('click');
	// 	boton.on('click', mostrarOcultarListado );

	// }

	var vincularBotonListado = function () {

	//var boton = document.getElementById('mostrarOcultarListado');
	//boton.onclick = mostrarOcultarListado;

		$('#mostrarOcultarListado').on('click', function () { mostrarOcultarListado(); } )

	}
	
	var iniciar = function () {

		vincularFormulario();
		vincularOrdenamientos();
		vincularBotonListado();
		precargarNoticias();
		ordenadorCategoria();
		// contruirBuscador();
		segundoBuscador();
		borrarPorCheckbox();

	}

    // El 'agregarNoticia' de la izquierda es el nombre del atributo de nuestro objeto literal.
    // El 'agregarNoticia' de la derecha es el valor que tendra el atributo. Es la funcion que tenemos declarada

    // El 'eliminarNoticia' de la izquierda es el nombre del atributo de nuestro objeto literal.
    // El 'eliminarNoticia' de la derecha es el valor que tendra el atributo. Es la funcion que tenemos declarada
    return {

        /* Esto se hace ahora a traves de los eventos del formulario.
		agregarNoticia: agregarNoticia,
        eliminarNoticia: eliminarNoticia,*/
		limpiarDiario: limpiarDiario,
		iniciar: iniciar

    };

})()

// Para limpiar el diario pueden hacer lo siguiente:
// Esto borra el array de noticias, limpia localstorage y quita todas las noticias del DOM.
// Diario.limpiarDiario()

$(document).ready(function () {

		Diario.iniciar();

	}
);




