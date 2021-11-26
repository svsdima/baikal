const imageSlider = new Swiper('.image-slider', {
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.image-slider__arrow-right',
		prevEl: '.image-slider__arrow-left',
	},
});
