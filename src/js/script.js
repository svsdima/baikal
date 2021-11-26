@@include('./data/data.js');
@@include('./swiper.js');

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

document.addEventListener('DOMContentLoaded', () => {
	// tourList
	const tourListWrapper = document.querySelector('.tour-list__wrapper');

	tourListWrapper.innerHTML = list.map((link, index) => {
		return `
		<div class="tour-list__item">
			<div class="tour-list__img">
				<a href="${link.href}" class="tour-list__link">
					<img src="${link.img}" alt="${index}" />
				</a>
			</div>
			<div class="tour-list__title">
				<a href="${link.href}" class="tour-list__link">${link.name}</a>
			</div>
		</div>
		`
	}).join("");

	// suggestions
	const suggestionsWrapper = document.querySelector('.suggestions__wrapper');


	suggestionsWrapper.innerHTML = suggestions.map((suggestion, index) => {
		let price;
		let duration;
		if (suggestion.price) {
			price = `
				<div class="suggestions__price">
					Стоимость от ${suggestion.price} руб.
				</div>`;
		} else if (suggestion.minPrice) {
			price = `
				<div class="suggestions__price">
					Стоимость от ${suggestion.minPrice} руб.
				</div>`;
		} else {
			price = '';
		}
		if (suggestion.duration) {
			duration = `
			<div class="suggestions__duration">
				Продолжительность ${suggestion.duration}.
			</div>`;
		} else {
			duration = ``;
		}
		return `
			<a href="${suggestion.href}" class="suggestions__item">
				<div  class="suggestions__img">
					<img src="${suggestion.img}" alt="${index}" />
				</div>
				<div class="suggestions__title">${suggestion.name}</div>
				${duration}
				${price}
			</a>
		`;
	}).join("");

	// gallery - images
	const imageSliderWrapper = document.querySelector('.image-slider__wrapper');
	
	imageSliderWrapper.innerHTML = galleryImages.map((image, index) => {
		return `
			<div class="image-slider__slide swiper-slide">
				<div class="image-slider__image">
					<img src="${image.img}" alt="${index}" />
				</div>
			</div>
		`
	}).join("");
});
