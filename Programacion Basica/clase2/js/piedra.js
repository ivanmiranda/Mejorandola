function aleatorio(minimo, maximo)
{

	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;

}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina = papel;

opcionUsuario = prompt("Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

if(opcionUsuario == piedra)
{

	alert("Elegiste Piedra");
	if(opcionMaquina==piedra)
	{
		alert("Acabas de empatar");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Maquina gana");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Tu ganas");
	}

}
else if(opcionUsuario == papel)
{

	alert("Elegiste Papel");
	if(opcionMaquina==piedra)
	{
		alert("Tu ganas");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Acabas de empatar");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Maquina gana");
	}

}
else if(opcionUsuario == tijera)
{

	alert("Elegiste Tijera");
	if(opcionMaquina==piedra)
	{
		alert("Maquina gana");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Tu ganas");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Acabas de empatar");
	}

}
else
{

	alert("Pos que chingados!");

}