<?php 

	$confidencial = "Esto es confidencial";
	$idioma = "PHP";
	$titulo = "MejorandoPHP";

	//Llamando una funcion
	//Esto: ['language' => $idioma, 'titulo' => $titulo] es igual a esto: compact('language', 'titulo')
	view('home', compact('idioma', 'titulo'));