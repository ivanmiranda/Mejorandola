<?php

	/*
	 * El frontend controller se encarga de configurar nuestra aplicacion
	 * Se puede agregar archivos con require y con include, la diferencia es que include los incluye, 
	 * pero sin ser obligatorio que exista el archivo, con require si debe existir el archivo.
	 */
	require "config.php";
	require "helpers.php";

	//Llamar al controlador indicado
	controller($_GET['url']);

	/*
	//SE COMENTO ESTO, YA QUE LA MEJOR MANERA DE HACERLO, ES COMO APARECE ARRIBA DE ESTE CODIGO
	//Llamar a los controladores individuales
	 
	//index.php
	if(empty($_GET['url']))
	{
		require "controllers/home.php";
	}
	//index.php?url=contactos
	elseif($_GET['url'] == 'contactos') 
	{
		require "controllers/contactos.php"; 
	}
	//index.php?url=asdasdasd
	else
	{
		header("HTTP/1.0 404 Not Found");
		exit("Pagina no encontrada");
	}*/