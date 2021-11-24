@@include('./data/data.js');

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
