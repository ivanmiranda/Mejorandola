<?php

class ControllerParams
{
   
   private $params = array();
   
   function __set($name, $value)
   {
      $this->params[$name] = $value;
   }
   
   function __get($name)
   {
      return $this->params[$name];
   }
   
}