function onready() {
	// do everything
	$('.nav-link').removeClass('waves-effect waves-light')

	$('#first-project').find('.card-footer').delay(2000).slideUp(200);

	$('.project .card-body').hide();
	$('.project').click(function(){
		console.log($.fn.jquery);
		$(this).find('.card-body').slideToggle(200);
	});
}

$(document).ready(onready);