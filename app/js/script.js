"use strict"


// //! burger-menu start //////////////////////////////////////////////////////
$(document).on("click", ".header__burger", function(e) {
	$('.header__burger, .header__menu').toggleClass('_active');
});

//! Скрыть блок навигации, по клику вне блока
$(document).mouseup(function (e) { // событие клика по веб-документу
	if ( ! $(".header__burger").is(e.target) && $(".header__burger").has(e.target).length === 0 &&
		// если клик был не по нашему блоку
		! $(".header__menu").is(e.target) && $(".header__menu").has(e.target).length === 0
		// и не по его дочерним элементам
			) {
	$(".header__burger, .header__menu").removeClass('_active'); // скрываем его
	}
});

// скрыть меню при сколле
$(window).on('scroll', function() {
	if ($(this).scrollTop() > 340) {
		$('.header__burger, .header__menu').removeClass('_active');
	}
});
// //! burger-menu end ////////////////////////////////////////////////////




// //! Плавный скролл start ////////////////////////////////////////////////////
// $(document).on("click", ".header__item-link", function(e) {
// 	e.preventDefault();
// 	let id  = $(this).attr('href');
// 	let top = $(id).offset().top;
// 	$('body, html').animate({scrollTop: top}, 800);
// });

// // //* Плавный скролл вверх при нажатии на кнопку
// // $(document).on("click", ".scroll-up", function(e) {
// // 	e.preventDefault();
// // 	$('body, html').animate({scrollTop: 0}, 800);
// // });
// //! Плавный скролл end ////////////////////////////////////////////////////




// //! Анимация start ////////////////////////////////////////////////////
// //* '_anim-items' - дежурный класс (нужно добавить в HTML к анимируемому объекту)
// //* '_anim-no-hide' - при добавлении этого класса анимация проигрывается только 1 раз

// const animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0){
// 	window.addEventListener('scroll', animOnScroll);

// 	function animOnScroll() {
// 		for (let index = 0; index < animItems.length; index++) {
// 			const animItem = animItems[index];
// 			const animItemHeight = animItem.offsetHeight;
// 			const animItemOffset = offset(animItem).top;
// 			const animStart = 4;

// 			let animItemPoint = window.innerHeight - animItemHeight / animStart;

// 			if (animItemHeight > window.innerHeight) {
// 				animItemPoint = window.innerHeight - window.innerHeight / animStart;
// 			}

// 			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
// 				animItem.classList.add('_active');
// 			}

// 			else{
// 				if (!animItem.classList.contains('_anim-no-hide')) {
// 					animItem.classList.remove('_active');
// 				}
// 			}
// 		}
// 	}

// 	function offset(el) {
// 		const rect = el.getBoundingClientRect(),
// 			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 			scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
// 		return {
// 			top: rect.top + scrollTop,
// 			left: rect.left + scrollLeft
// 		}
// 	}
// 	animOnScroll();
// }
// //! Анимация end ////////////////////////////////////////////////////





//! webp start ////////////////////////////////////////////////////
// Определение поддержки браузером формата webp для использования webp в свойстве background-image в scss
function testWebP(callback) {

	let webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
//! webp end ////////////////////////////////////////////////////