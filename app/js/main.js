$(document).ready(function() {
		/**/
	$('.recomend__slider-prew').on('click', function(e) {
		$('.recomend__slider .slick-prev').trigger('click', false);
	});

	$('.recomend__slider-next').on('click', function(e) {
		$('.recomend__slider .slick-next').trigger('click', false);
	});

	/**/
	$('.basket__link').on('click', function() {
		$(this).parent().children('.basket__popup').fadeToggle();
		return false;
	});
	$('.basket__popup-pp').on('click', function() {
		$(this).parent().parent('.basket__popup').fadeOut();
		return false;
	})
});