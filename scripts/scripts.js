function onready() {
	// do everything
	$('.nav-link').removeClass('waves-effect waves-light')

	$('.project .card-body').hide();
	$('.project .card-footer').hide();
	$('.project').click(function(){
		console.log($.fn.jquery);
		$(this).find('.card-body').slideToggle(200);
		$(this).find('.card-footer').slideToggle(200);
	});
}

$(document).ready(onready);
