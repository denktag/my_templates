// //! Popup ////////////////////////////////////////////////
// //* класс '_popup-link' - добавить ссылке при нажатии на которую будет открываться попап
// //* класс "close-popup" нужно добавить  элементу по нажатию на котрой будет закрываться попап (<a class="popup__close close-popup" href="#"></a>)
// //* добавить класс 'lock-padding' к фиксированным объектам (position: fixed) если при открытии/закрытии попапа контент сдвигается

// const popupLinks = document.querySelectorAll('._popup-link');
// const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll('.lock-padding');  

// let unlock = true;
// const timeout = 500; //время проигрывания анимации

// if (popupLinks.length > 0) {
// 	for (let index = 0; index < popupLinks.length; index++) {
// 		const popupLink = popupLinks[index];
// 		popupLink.addEventListener("click", function (e) {
// 			const popupName = popupLink.getAttribute('href').replace('#', '');
// 			const curentPopup = document.getElementById(popupName);
// 			popupOpen(curentPopup);
// 			e.preventDefault();  // блокируем дальнейшую работу ссылки
// 		});
// 	}
// }

// const popupCloseIcon = document.querySelectorAll('.popup__close');
// if (popupCloseIcon.length > 0) {
// 	for (let index = 0; index < popupCloseIcon.length; index++) {
// 		const el = popupCloseIcon[index];
// 		el.addEventListener('click', function (e) {
// 			popupClose(el.closest('.popup'));
// 			e.preventDefault();
// 		});
// 	}
// }

// function popupOpen(curentPopup) {
// 	if (curentPopup && unlock) {
// 		const popupActive = document.querySelector('.popup.open');
// 		if (popupActive) {
// 			popupClose(popupActive, false);
// 		}
// 		else {
// 			bodyLock();
// 		}
// 		curentPopup.classList.add('open');
// 		curentPopup.addEventListener("click", function (e) {
// 			if (!e.target.closest('.popup__content')) {
// 				popupClose(e.target.closest('.popup'));
// 			}
// 		});
// 	}
// }

// function popupClose(popupActive, doUnlock = true) {
// 	if(unlock) {
// 		popupActive.classList.remove('open');
// 		if (doUnlock) {
// 			bodyUnlock();
// 		}
// 	}
// }

// function bodyLock() {
// 	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

// 	if (lockPadding.length > 0) {
// 		for (let index = 0; index < lockPadding.length; index++) {
// 			const el = lockPadding[index];
// 			el.style.paddingRight = lockPaddingValue;
// 		}
// 	}
	
// 	body.style.paddingRight = lockPaddingValue;
// 	body.classList.add('lock'); 
// 	//!  в css нужно добавить body c классом 'lock' overflow: hidden (body.lock {overflow: hidden;})

// 	unlock = false;
// 	setTimeout(function () {
// 		unlock = true;
// 	}, timeout);
// }

// function bodyUnlock() {
// 	setTimeout(function () {
// 		if (lockPadding.length > 0) {
// 			for (let index = 0; index < lockPadding.length; index++) {
// 				const el = lockPadding[index];
// 				el.style.paddingRight = '0px';
// 			}
// 		}
		
// 		body.style.paddingRight = '0px';
// 		body.classList.remove('lock');
// 	}, timeout);

// 	unlock = false;
// 	setTimeout(function () {
// 		unlock = true;
// 	}, timeout);
// }

// //* закрытие попапа при нажатии на 'esc'
// document.addEventListener('keydown', function (e) {
// 	if (e.which === 27) {
// 		const popupActive = document.querySelector('.popup.open');
// 		popupClose(popupActive);
// 	}
// });

// //* 2 функции которые подгоняют параметры под старые браузеры (например EA11)
// (function () {
// 	if (!Element.prototype.closest) {
// 		Element.prototype.closest = function (css) {
// 			let node = this;
// 			while (node) {
// 				if (node.matches(css)) return node;
// 				else node = node.parentElement;
// 			}
// 			return null;
// 		};
// 	}
// })();

// (function () {
// 	if (!Element.prototype.matches) {
// 		Element.prototype.matches = Element.prototype.matchesSelector ||
// 		Element.prototype.webkitMatchesSelector ||
// 		Element.prototype.mozMatchesSelector ||
// 		Element.prototype.msMatchesSelector;
// 	}
// })();