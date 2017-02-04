$(document).ready(function() {
/*Тригеры на слайдер*/
	$('.recomend__slider-prew').on('click', function(e) {
		$('.recomend__slider .slick-prev').trigger('click', false);
	});

	$('.recomend__slider-next').on('click', function(e) {
		$('.recomend__slider .slick-next').trigger('click', false);
	});

/*Корзина*/
	$('.basket__link').on('click', function() {
		$(this).parent().children('.basket__popup').fadeToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.basket__popup').length) return;
				$('.basket__popup').fadeOut();
				event.stopPropagation();
			});
		return false;
	});
	$('.basket__popup-pp').on('click', function() {
		$(this).parent().parent('.basket__popup').fadeOut();
		return false;
	})

/*Кнопка 'Выберите файл'*/
	$(function() {
		if($('#chose_file').length)
		{
			$('#chose_file').click(function() {
				$('#chose_file_input').click();
				return(false);
			});
			$('#chose_file_input').change(function() {
				$('#chose_file_text').html($(this).val());
			}).change();
		}
	});
});
