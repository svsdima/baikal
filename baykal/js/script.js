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
});
