const list = [
	{
		name: 'Турбазы на Байкале',
		img: '/img/tour_list/1.jpg',
		href: '/campSites.html',
	},
	{
		name: 'Экскурсии и туры',
		img: '/img/tour_list/2.jpg',
		href: '#',
	},
	{
		name: 'Охота и рыбалка',
		img: '/img/tour_list/3.jpg',
		href: '#',
	},
	{
		name: 'Экстрим туры',
		img: '/img/tour_list/4.jpg',
		href: '#',
	},
	{
		name: 'Теплоходы, яхты',
		img: '/img/tour_list/5.jpg',
		href: '#',
	},
	{
		name: 'Красоты Байкала',
		img: '/img/tour_list/6.jpg',
		href: '#',
	},
	{
		name: 'Гостиницы в Улан-Удэ',
		img: '/img/tour_list/7.jpg',
		href: '#',
	},
	{
		name: 'Транспорт',
		img: '/img/tour_list/8.jpg',
		href: '#',
	},
	{
		name: 'Деловой туризм',
		img: '/img/tour_list/9.jpg',
		href: '#',
	},
	{
		name: 'Круизы по Байкалу',
		img: '/img/tour_list/10.jpg',
		href: '#',
	},
	{
		name: 'Зимние туры',
		img: '/img/tour_list/11.jpg',
		href: '#',
	},
	{
		name: 'Карта Байкала',
		img: '/img/tour_list/12.jpg',
		href: '#',
	},
];
const suggestions = [
	{
		name: 'Зимний однодневный тур на Чивыркуйский залив',
		price: 4000,
		img: '/img/suggestions/1.jpg',
		href: '#',
	},
	{
		name: 'Зимний однодневный тур на остров Ольхон',
		price: 5000,
		img: '/img/suggestions/2.jpg',
		href: '#',
	},
	{
		name: 'Обзорная экскурсия по Улан-Удэ',
		minPrice: 500,
		duration: '3 часа',
		img: '/img/suggestions/3.jpg',
		href: '#',
	},
	{
		name: 'Эко-отель «Байкальское шале», с. Максимиха',
		minPrice: 6500,
		img: '/img/suggestions/4.jpg',
		href: '#',
	},
	{
		name: 'Экскурсия в Иволгинский дацан',
		minPrice: 500,
		duration: '4 часа',
		img: '/img/suggestions/5.jpg',
		href: '#',
	},
	{
		name: 'Летний однодневный тур в Чивыркуйский залив',
		price: 4000,
		img: '/img/suggestions/6.jpg',
		href: '#',
	},
	{
		name: 'Отель «Белая Карета», с. Горячинск',
		minPrice: 4000,
		img: '/img/suggestions/7.jpg',
		href: '#',
	},
	{
		name: 'Однодневная поездка на Байкал «Байкальская Гавань»',
		minPrice: 1000,
		img: '/img/suggestions/10.jpg',
		href: '#',
	},
	{
		name: 'Парк-отель «Сагаан-Морин», с. Сухая',
		minPrice: 3500,
		img: '/img/suggestions/11.jpg',
		href: '#',
	},
	{
		name: 'Летний однодневный тур на остров Ольхон',
		price: 8500,
		img: '/img/suggestions/8.jpg',
		href: '#',
	},
	{
		name: 'Парк-отель «Байкальская Ривьера», с. Гремячинск',
		minPrice: 3700,
		img: '/img/suggestions/9.jpg',
		href: '#',
	},
	{
		name: 'Зимний тур «Чивыркуйская сказка»',
		price: 2000,
		img: '/img/suggestions/12.jpg',
		href: '#',
	},
	{
		name: 'Показать все предложения',
		img: '/img/suggestions/all.jpg',
		href: '#',
	},
];
const galleryImages = [
	{
		img: '/img/gallery/1.jpg',
	},
	{
		img: '/img/gallery/2.jpg',
	},
	{
		img: '/img/gallery/3.jpg',
	},
	{
		img: '/img/gallery/4.jpg',
	},
	{
		img: '/img/gallery/5.jpg',
	},
	{
		img: '/img/gallery/6.jpg',
	},
	{
		img: '/img/gallery/7.jpg',
	},
	{
		img: '/img/gallery/8.jpg',
	},
	{
		img: '/img/gallery/9.jpg',
	},
];
;
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
;

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
