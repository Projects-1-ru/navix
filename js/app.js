/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".header__wrapper");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();

/*------------------------------Submenu---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const menuItems = document.querySelectorAll('.header__menu a[data-submenu]');
   const submenus = document.querySelectorAll('.submenu');
   const menu = document.querySelector('.header__menu');
   const body = document.body;
   let hideTimeout;

   menuItems.forEach(item => {
      const submenuId = item.getAttribute('data-submenu');
      const targetSubmenu = document.querySelector(`.submenu[data-submenu="${submenuId}"]`);

      item.addEventListener('mouseenter', function () {
         if (window.innerWidth >= 980) {
            submenus.forEach(submenu => submenu.classList.remove('show'));
            targetSubmenu.classList.add('show');
            menu.classList.add('bg');
            body.classList.add('no-scroll');
            item.classList.add('active');
            clearTimeout(hideTimeout);
         }
      });

      item.addEventListener('mouseleave', function () {
         if (window.innerWidth >= 980) {
            hideTimeout = setTimeout(() => {
               if (!targetSubmenu.matches(':hover')) {
                  targetSubmenu.classList.remove('show');
                  menu.classList.remove('bg');
                  body.classList.remove('no-scroll');
                  item.classList.remove('active');
               }
            }, 200);
         }
      });

      targetSubmenu.addEventListener('mouseenter', function () {
         if (window.innerWidth >= 980) {
            clearTimeout(hideTimeout);
         }
      });

      targetSubmenu.addEventListener('mouseleave', function () {
         if (window.innerWidth >= 980) {
            hideTimeout = setTimeout(() => {
               targetSubmenu.classList.remove('show');
               menu.classList.remove('bg');
               body.classList.remove('no-scroll');
               item.classList.remove('active');
            }, 200);
         }
      });
   });
});


/*------------------------------Popups---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const openButtons = document.querySelectorAll(".open-popup");
   const closeButtons = document.querySelectorAll(".popup-close");
   const popups = document.querySelectorAll(".popup");

   // Открытие попапов
   openButtons.forEach(button => {
      button.addEventListener("click", () => {
         const popupName = button.getAttribute("data-popup");
         const targetPopup = document.querySelector(`.popup[data-popup="${popupName}"]`);

         if (targetPopup) {
            targetPopup.classList.add("opened");
            document.body.classList.add("popup-open");
         }
      });
   });

   // Закрытие попапов
   closeButtons.forEach(button => {
      button.addEventListener("click", (e) => {
         const popup = button.closest(".popup");
         if (popup) {
            popup.classList.remove("opened");
            document.body.classList.remove("popup-open");
         }
      });
   });

   // Закрытие по клику вне попапа
   popups.forEach(popup => {
      popup.addEventListener("click", (e) => {
         if (e.target === popup) {
            popup.classList.remove("opened");
            document.body.classList.remove("popup-open");
         }
      });
   });
});



/*------------------------------
Hero slider   
---------------------------*/
const heroSlider = document.querySelector(".hero__slider");

if (heroSlider) {
   const heroSwiper = new Swiper(heroSlider, {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      effect: 'fade',
      navigation: {
         nextEl: '.hero__slider-next',
         prevEl: '.hero__slider-prev',
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
      }
   });
}

/*------------------------------
Boats slider   
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const slider = document.querySelector(".boats__slider");
   let swiperInstance = null;

   function initSwiper() {
      if (window.innerWidth < 980 && !swiperInstance) {
         swiperInstance = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 0,
            parallax: true,
            speed: 800,
            loop: true,
            navigation: {
               nextEl: '.boats__slider-next',
               prevEl: '.boats__slider-prev',
            },
         });
      } else if (window.innerWidth >= 980 && swiperInstance) {
         swiperInstance.destroy(true, true);
         swiperInstance = null;
      }
   }

   initSwiper();
   window.addEventListener("resize", initSwiper);
});


/*------------------------------
Gallery slider
---------------------------*/
const gallerySlider = document.querySelector(".gallery-block__slider");

if (gallerySlider) {
   const gallerySwiper = new Swiper(gallerySlider, {
      slidesPerView: 'auto',
      centeredSlides: true,
      initialSlide: 1,
      loop: true,
      speed: 800,
      navigation: {
         nextEl: '.gallery-block__slider-next',
         prevEl: '.gallery-block__slider-prev',
      }
   });
}

window.addEventListener('load', () => {
   const galleryWrapper = document.querySelector('.gallery-block__slider-wrapper');

   if (galleryWrapper && galleryWrapper.querySelector('a')) {
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/umd/photoswipe.umd.min.js', () => {
         loadScript('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/umd/photoswipe-lightbox.umd.min.js', () => {
            initPhotoSwipe();
         });
      });
   }
});

function loadScript(src, callback) {
   const script = document.createElement('script');
   script.src = src;
   script.onload = callback;
   script.onerror = () => {
      console.error(`Ошибка загрузки скрипта: ${src}`);
   };
   document.body.appendChild(script);
}

// Инициализация Photoswipe
function initPhotoSwipe() {
   if (typeof PhotoSwipeLightbox !== 'undefined') {
      const lightbox = new PhotoSwipeLightbox({
         gallery: '.gallery-block__slider-wrapper',
         children: 'a',
         pswpModule: PhotoSwipe
      });
      lightbox.init();
   }
}


/*------------------------------
Catalog sliders
---------------------------*/

function debounce(func, delay = 200) {
   let timeout;
   return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
   };
}

document.querySelectorAll('.catalog__product-slider').forEach((productSlider) => {
   const slides = productSlider.querySelectorAll('.swiper-slide');
   if (slides.length > 0) {
      const productCard = productSlider.closest('.catalog__product');
      const pagination = productCard.querySelector('.catalog__product-pagination');

      new Swiper(productSlider, {
         slidesPerView: 1,
         spaceBetween: 10,
         loop: true,
         pagination: {
            el: pagination,
            clickable: true,
         },
      });
   }
});

let mainSwiper = null;
const initMainSwiper = debounce(() => {
   const catalogSlider = document.querySelector('.catalog__products-slider');
   const slides = catalogSlider?.querySelectorAll('.swiper-slide');

   if (!catalogSlider || slides.length === 0) return;

   if (window.innerWidth <= 767) {
      if (!mainSwiper) {
         mainSwiper = new Swiper(catalogSlider, {
            slidesPerView: 1.3,
            spaceBetween: 12,
            speed: 800,

         });
      }
   } else if (mainSwiper) {
      mainSwiper.destroy();
      mainSwiper = null;
   }
}, 200);

initMainSwiper();
window.addEventListener('resize', initMainSwiper);

/*------------------------------
Catalog Menu Slider
---------------------------*/
let catalogMenuSwiper = null;
const initCatalogMenuSwiper = debounce(() => {
   const catalogMenuSlider = document.querySelector('.catalog__menu-slider');
   const slides = catalogMenuSlider?.querySelectorAll('.swiper-slide');

   if (!catalogMenuSlider || slides.length === 0) return;

   if (window.innerWidth <= 980) {
      if (!catalogMenuSwiper) {
         catalogMenuSwiper = new Swiper(catalogMenuSlider, {
            slidesPerView: 'auto',
            freeMode: true,
            spaceBetween: 12,
         });
      }
   } else if (catalogMenuSwiper) {
      catalogMenuSwiper.destroy();
      catalogMenuSwiper = null;
   }
}, 200);

initCatalogMenuSwiper();
window.addEventListener('resize', initCatalogMenuSwiper);


/*------------------------------
Hero slider   
---------------------------*/
const moreProductsSlider = document.querySelector(".more-products__slider");

if (moreProductsSlider) {
   const moreProductsSwiper = new Swiper(moreProductsSlider, {
      loop: true,
      speed: 800,
      breakpoints: {
         320: {
            slidesPerView: 1.3,
            spaceBetween: 12,
         },
         480: {
            slidesPerView: 2.3,
            spaceBetween: 12,
         },
         981: {
            slidesPerView: 3.3,
            spaceBetween: 20,
         },
         1200: {
            slidesPerView: 3.5,
            spaceBetween: 40,
         },
         1840: {
            slidesPerView: 3.9,
            spaceBetween: 40,
         }
      }
   });
}

/*------------------------------
product gallery
---------------------------*/
document.addEventListener('DOMContentLoaded', () => {
   // Инициализация Swiper
   const productGallerySlider = document.querySelector(".product__gallery-slider");
   const productGallerySlider2 = document.querySelector(".product__gallery-slider-2");

   if (productGallerySlider && productGallerySlider2) {
      const productSwiper = new Swiper(productGallerySlider, {
         slidesPerView: 4,
         freeMode: true,
         watchSlidesProgress: true,
         breakpoints: {
            320: {
               spaceBetween: 12,
            },
            601: {
               spaceBetween: 20,
            }
         }
      });

      const productSwiper2 = new Swiper(productGallerySlider2, {
         spaceBetween: 20,
         navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
         },
         thumbs: {
            swiper: productSwiper,
         },
      });
   }

   // Инициализация PhotoSwipe
   loadScript('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/umd/photoswipe.umd.min.js', () => {
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/umd/photoswipe-lightbox.umd.min.js', () => {
         initPhotoSwipe();
      });
   });

   function loadScript(src, callback) {
      const script = document.createElement('script');
      script.src = src;
      script.onload = callback;
      script.onerror = () => {
         console.error(`Ошибка загрузки скрипта: ${src}`);
      };
      document.body.appendChild(script);
   }

   function initPhotoSwipe() {
      if (typeof PhotoSwipeLightbox !== 'undefined') {
         const lightbox = new PhotoSwipeLightbox({
            gallery: '.product__gallery-slider-2',
            children: 'a',
            pswpModule: PhotoSwipe,
         });
         lightbox.init();
      }
   }
});

/*------------------------------
Quantity inputs
---------------------------*/
document.addEventListener("click", (e) => {
   const button = e.target;
   const container = button.closest(".cart__product-quantity");

   if (!container) return;

   const input = container.querySelector(".quantity-input");
   let currentValue = parseInt(input.value, 10);

   if (button.classList.contains("quantity-plus")) {
      input.value = currentValue + 1;
   }

   if (button.classList.contains("quantity-minus")) {
      input.value = Math.max(1, currentValue - 1);
   }
});


/*------------------------------
Cart tabs
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const tabs = document.querySelectorAll(".cart__delivery-tab");
   const groups = document.querySelectorAll(".cart__delivery-group");

   if (tabs.length === 0 || groups.length === 0) return;

   tabs[0].classList.add("active");
   groups[0].classList.add("active");

   tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
         const tabId = tab.dataset.methodTab;

         tabs.forEach((t) => t.classList.remove("active"));
         groups.forEach((group) => group.classList.remove("active"));

         tab.classList.add("active");
         const targetGroup = document.querySelector(`[data-method-group="${tabId}"]`);
         if (targetGroup) targetGroup.classList.add("active");
      });
   });
});

/*------------------------------
Select
---------------------------*/
document.querySelectorAll('.custom-select select').forEach(select => {
   const parent = select.parentElement;

   select.addEventListener('focus', () => {
      if (!parent.classList.contains('active')) {
         parent.classList.add('active');
      }
   });

   select.addEventListener('blur', () => {
      if (parent.classList.contains('active')) {
         parent.classList.remove('active');
      }
   });

   select.addEventListener('change', () => {
      if (parent.classList.contains('active')) {
         parent.classList.remove('active');
      }
   });
});


/*------------------------------
Move cart contact
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const contacts = document.querySelector(".cart__delivery-contacts");
   const contactsMob = document.querySelector(".cart__delivery-contacts-mob");
   const deliveryPopup = document.querySelector(".cart__delivery-popup");

   if (!contacts || !contactsMob || !deliveryPopup) return;

   function moveContacts() {
      if (window.innerWidth < 767) {
         if (!contactsMob.contains(contacts)) {
            contactsMob.appendChild(contacts);
         }
      } else {
         if (!deliveryPopup.contains(contacts)) {
            deliveryPopup.appendChild(contacts);
         }
      }
   }

   moveContacts();
   window.addEventListener("resize", moveContacts);
});


/*------------------------------
Delivery popup on mobile
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const popup = document.querySelector(".cart__delivery-popup");
   const openBtn = document.getElementById("open-delivery-popup");
   const closeBtn = document.querySelector(".cart__delivery-popup-close");

   if (!popup || !openBtn || !closeBtn) return;

   function togglePopup() {
      if (window.innerWidth < 767) {
         popup.classList.toggle("opened");
         document.body.classList.toggle("no-scrolling");
      }
   }

   openBtn.addEventListener("click", togglePopup);
   closeBtn.addEventListener("click", togglePopup);
});



/*------------------------------
Upload
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const fileInputs = document.querySelectorAll(".file-upload__input");

   if (fileInputs.length) {
      fileInputs.forEach(input => {
         input.addEventListener("change", () => {
            const fileName = input.files[0]?.name || "Файл не выбран";
            const textElement = input.closest(".file-upload").querySelector(".file-upload__text");
            textElement.textContent = fileName;
         });
      });
   }
});


/*------------------------------
Calendar
---------------------------*/
const inputDate = document.querySelector('.cabinet__book-date-input');
const spanDate = document.querySelector('.choosen-date');

if (inputDate && spanDate) {
   new AirDatepicker('#calendar', {
      minDate: new Date(),
      dateFormat: 'yyyy-MM-dd',
      onSelect({ date, formattedDate }) {
         inputDate.value = formattedDate;

         const formattedSpanDate = date.toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
         });

         spanDate.textContent = formattedSpanDate;
      }
   });
}


/*------------------------------
Constructor slide
---------------------------*/
const constructorSlider = document.querySelector(".constructor__slider");

if (constructorSlider) {
   const constructorSwiper = new Swiper(constructorSlider, {
      slidesPerView: 1,
      loop: true,
      speed: 800,
      effect: 'fade',
      navigation: {
         nextEl: '.constructor__slider-next',
         prevEl: '.constructor__slider-prev',
      },
      pagination: {
         el: '.constructor__slider-pagination',
         clickable: true,
      },
   });
}

/*------------------------------
Constructor
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const tabs = document.querySelectorAll(".constructor__tab");
   const equipments = document.querySelectorAll(".constructor__equipment");
   const prevBtn = document.querySelector(".constructor__equipment-prev");
   const nextBtn = document.querySelector(".constructor__equipment-next");
   const sendBtn = document.querySelector(".constructor__equipment-send");
   const totalSumElement = document.querySelector(".constructor__summ-value");
   const totalItemsContainer = document.querySelector(".constructor__total-items");
   const totalPriceElement = document.querySelector(".constructor__total-price-value");
   const totalContainer = document.querySelector(".constructor__total");
   const descriptions = document.querySelector(".constructor__descriptions");
   const subcontentsBtn = document.querySelector(".constructor__subcontents-btn");
   let currentStep = 1;
   let basePrice = 0;

   function updateTabs() {
      if (tabs.length > 0) {
         tabs.forEach(tab => {
            const step = +tab.dataset.step;
            if (step < currentStep) {
               tab.classList.add("passed");
               tab.classList.remove("active");
            } else if (step === currentStep) {
               tab.classList.add("active");
               tab.classList.remove("passed");
            } else {
               tab.classList.remove("active", "passed");
            }
         });
      }

      if (equipments.length > 0) {
         equipments.forEach(equipment => {
            equipment.style.display = equipment.dataset.step == currentStep ? "block" : "none";
         });
      }

      if (currentStep === 5) {
         if (totalContainer) totalContainer.style.display = "block";
         if (descriptions) descriptions.style.display = "none";
         if (subcontentsBtn) subcontentsBtn.style.display = "none";
         if (nextBtn) nextBtn.style.display = "none";
         if (sendBtn) sendBtn.style.display = "flex";
         updateTotalItems();
      } else {
         if (totalContainer) totalContainer.style.display = "none";
         if (descriptions) descriptions.style.display = "block";
         if (subcontentsBtn) subcontentsBtn.style.display = "block";
         if (nextBtn) nextBtn.style.display = "flex";
         if (sendBtn) sendBtn.style.display = "none";
      }
   }

   function updateTotalSum() {
      if (!totalSumElement || !totalPriceElement) return;

      let total = basePrice;
      document.querySelectorAll(".constructor__equipment input:checked").forEach(input => {
         total += +input.dataset.price || 0;
      });
      totalSumElement.textContent = total.toLocaleString("ru-RU") + " ₽";
      totalPriceElement.textContent = total.toLocaleString("ru-RU") + " ₽*";
   }

   function updateTotalItems() {
      if (!totalItemsContainer) return;

      totalItemsContainer.innerHTML = "";
      document.querySelectorAll(".constructor__equipment input:checked").forEach(input => {
         const itemPrice = +input.getAttribute("data-price") || 0;
         const label = input.closest("label");
         const itemNameElement = label ? label.querySelector(".custom-checkbox__text") : null;
         const itemName = itemNameElement ? itemNameElement.textContent.trim() : "Без названия";

         if (itemName && itemPrice) {
            const itemElement = document.createElement("div");
            itemElement.classList.add("constructor__total-item");
            itemElement.innerHTML = `<span>${itemName}</span><span>${itemPrice.toLocaleString("ru-RU")} ₽</span>`;
            totalItemsContainer.appendChild(itemElement);
         }
      });
   }

   if (nextBtn) {
      nextBtn.addEventListener("click", () => {
         if (currentStep < tabs.length) {
            currentStep++;
            updateTabs();
         }
      });
   }

   if (prevBtn) {
      prevBtn.addEventListener("click", () => {
         if (currentStep > 1) {
            currentStep--;
            updateTabs();
         }
      });
   }

   if (tabs.length > 0) {
      tabs.forEach(tab => {
         tab.addEventListener("click", () => {
            currentStep = +tab.dataset.step;
            updateTabs();
         });
      });
   }

   const equipmentInputs = document.querySelectorAll(".constructor__equipment input");
   if (equipmentInputs.length > 0) {
      equipmentInputs.forEach(input => {
         input.addEventListener("change", () => {
            updateTotalSum();
            if (currentStep === 5) updateTotalItems();
         });
      });
   }

   updateTabs();
   updateTotalSum();
});



/*------------------------------
Subtabs
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const subtabs = document.querySelectorAll(".constructor__subtab");
   const subcontents = document.querySelectorAll(".constructor__subcontent");

   if (subtabs.length === 0 || subcontents.length === 0) return;

   subtabs.forEach((tab) => {
      tab.addEventListener("click", () => {
         subtabs.forEach((item) => item.classList.remove("active"));
         subcontents.forEach((content) => content.classList.remove("active"));

         tab.classList.add("active");
         const targetContent = document.querySelector(`.constructor__subcontent[data-subcontent="${tab.dataset.subtab}"]`);

         if (targetContent) {
            targetContent.classList.add("active");
         }
      });
   });

   subtabs[0].classList.add("active");
   subcontents[0].classList.add("active");
});


/*------------------------------
Details popup
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const descriptions = document.querySelector(".constructor__descriptions");
   const openDetailsButton = document.querySelector(".open-details-popup");
   const closeButton = document.querySelector(".constructor__descriptions-close");
   const totalPopup = document.querySelector(".constructor__total-popup");
   const openTotalButton = document.querySelector(".open-total-popup");
   const closeTotalButton = document.querySelector(".constructor__total-close");
   const body = document.body;

   if (descriptions && openDetailsButton && closeButton) {
      openDetailsButton.addEventListener("click", () => {
         descriptions.classList.add("opened");
         body.style.overflow = "hidden";
      });

      closeButton.addEventListener("click", () => {
         descriptions.classList.remove("opened");
         body.style.overflow = "";
      });
   }

   if (totalPopup && openTotalButton && closeTotalButton) {
      openTotalButton.addEventListener("click", () => {
         totalPopup.classList.add("opened");
         body.style.overflow = "hidden";
      });

      closeTotalButton.addEventListener("click", () => {
         totalPopup.classList.remove("opened");
         body.style.overflow = "";
      });
   }
});


/*------------------------------
Tips
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   if (window.innerWidth < 767) {
      document.addEventListener("click", (event) => {
         const row = event.target.closest(".constructor__options-row");
         const closeButton = event.target.closest(".tips__close");

         if (closeButton) {
            const tips = closeButton.closest(".constructor__options-tips");
            tips.classList.remove("show");
            return;
         }

         if (row) {
            const tips = row.querySelector(".constructor__options-tips");

            document.querySelectorAll(".constructor__options-tips.show").forEach(openTip => {
               if (openTip !== tips) openTip.classList.remove("show");
            });

            if (tips) {
               tips.classList.add("show");
            }
         }
      });
   }
});



})();

/******/ })()
;