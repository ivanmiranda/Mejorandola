<?php

class Controller
{

        protected $params = null;

   final function execute($action, $params = null) //funcion intermedia
   {
      
      $reflectionMethod = new ReflectionMethod($this, $action); //se crea una instancia de ReflectionMethod con la referencia al metodo que necesitamos llamar

//asi ya tenemos disponible las funcionalidades de ReflectionMethod:
      
      if(($action == 'execute') || !$reflectionMethod->isPublic() || (count($params) < $reflectionMethod->getNumberOfRequiredParameters()))
      {
         //LANZAR ERROR
      }
            
      $parametros = $reflectionMethod->getParameters(); //con esto obtenemos los parametros de nuestro metodo
      
      $this->params = new ControllerParams();
      
      foreach($parameters as $key => $parameter) //y hacemos un ciclo con ellos
      {
         $name = $parameter->getName(); //obtenemos el nombre

         if(isset($params[$key])) //si el usuario mandó algun valor lo asignamos
         {
            $this->params->$name = $params[$key];
         }
         else
         {
            $this->params->$name = $parameter->getDefaultValue(); //sino tambien podemos tomar el valor por defecto
         }

      }
      
      call_user_func_array(array(&$this,   $action),   $params); //y por ultimo hacemos el llamado de costumbre
       }

}