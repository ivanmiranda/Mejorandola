var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

function mostrarFormulario(){
	$form.slideToggle();
	return false; //Para quitar el scroll automatico al dar click al boton por el href="#"
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		clone = $post.clone();

	clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	clone.hide();

	$list.prepend(clone);

	clone.slideDown();

	return false;
}

//Eventos

$button.click( mostrarFormulario );
$form.on('submit', agregarPost);