$(document).ready(function () {
	$('.sliders').slick({

		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000

	});

	$('.sliders-for-desctop').slick({

		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		rows: 2

	});

	$('.testimonials__sliders').slick({

		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		easing: 'ease',


	});

	$('.news__sliders').slick({

		infinite: true,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 3000,
		rows: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {

					slidesToShow: 1,
					slidesToScroll: 1,
					rows: 1
				}
			},

			{
				breakpoint: 320,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]

	});



});



