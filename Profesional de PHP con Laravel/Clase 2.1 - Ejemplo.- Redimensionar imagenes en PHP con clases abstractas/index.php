<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>Ejemplo</title>

</head>
<body>
	<h1 id="titulo">Ejemplo</h1>
	
	<div>
		
		<?php

			require "ImageResize.php";

			$src = "archivo.jpg";
			$dest = "archivo150x150.jpg";
			$resize = new ImageResize($src);
			$resize->resize(150,150);
			if (!@$resize->save($dest))
			{
			   echo "Archivo no fue generado. Error: " . error_get_last();
			}
			else 
			{
			   echo "Archivo $dest generado.";
			}
		?>

	</div>
</body>
</html>

