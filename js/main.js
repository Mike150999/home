(function stickyBlock(id = "header") {
	const block = document.getElementById(id),
		sticky = block.getBoundingClientRect().height;

	window.addEventListener('scroll', () => {
		stickyClass();
	});

	function stickyClass() {
		const pageTop = window.pageYOffset;

		if (pageTop > sticky) {
			block.classList.add("sticky");
		} else {
			block.classList.remove("sticky");
		}
	}
})()





	(function () {
		const burgerItem = document.querySelector('.burger');
		const menu = document.querySelector('.header-nav');
		const menuClose = document.querySelector('.header__nav-close')
		const linkClose = document.querySelector('.header__link1')
		const linkClose2 = document.querySelector('.header__link2')
		const linkClose3 = document.querySelector('.header__link3')
		const linkClose4 = document.querySelector('.header__link4')
		const videoClose = document.querySelector('.video__box')

		burgerItem.addEventListener('click', () => {
			menu.classList.add("header-nav--active");

		});
		menuClose.addEventListener('click', () => {
			menu.classList.remove("header-nav--active");

		});
		linkClose.addEventListener('click', () => {
			menu.classList.remove("header-nav--active");

		});
		linkClose2.addEventListener('click', () => {
			menu.classList.remove("header-nav--active");

		});
		linkClose3.addEventListener('click', () => {
			menu.classList.remove("header-nav--active");

		});
		linkClose4.addEventListener('click', () => {
			menu.classList.remove("header-nav--active");

		});
	}());