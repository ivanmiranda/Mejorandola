<?php 

class HomeController
{
	public function indexAction()
	{
		//return ['titulo' => 'MejorandoPHP'];
		//return "Hola enfermera";
		return $view = new View('home', ['titulo' => 'Clase 2']);
	}
}