/*------------------------------
ANIMATIONS
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   gsap.registerPlugin(ScrollTrigger);

   function elementExists(selector) {
      return document.querySelector(selector) !== null;
   }

   const defaultFadeIn = { opacity: 0, y: -50, duration: 1, ease: "power2.out" };
   const defaultScaleIn = { scale: 0, duration: 1, ease: "power2.out" };

   if (elementExists("body")) {
      gsap.to("body", { opacity: 1, duration: 0.5, ease: "linear" });
   }

   if (elementExists(".header")) {
      gsap.from(".header", defaultFadeIn);
   }

   // Titles
   const titles = document.querySelectorAll(".title");
   if (titles.length) {
      titles.forEach((title) => {
         gsap.fromTo(
            title,
            {
               opacity: 0,
               y: 100,
               scale: 0.9,
               rotateX: 45,
            },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               rotateX: 0,
               duration: 1.2,
               ease: "power3.out",
               scrollTrigger: {
                  trigger: title,
                  start: "top 85%",
                  end: "bottom 65%",
                  toggleActions: "play none none reverse",
               },
            }
         );
      });
   }

   // Subtitles
   const subtitles = document.querySelectorAll(".subtitle");
   if (subtitles.length) {
      subtitles.forEach((subtitle) => {
         gsap.fromTo(
            subtitle,
            {
               opacity: 0,
               y: 40,
               scale: 0.8,
               rotateX: -15,
            },
            {
               opacity: 1,
               y: 0,
               scale: 1,
               rotateX: 0,
               duration: 1,
               ease: "power3.out",
               scrollTrigger: {
                  trigger: subtitle,
                  start: "top 85%",
                  end: "bottom 65%",
                  toggleActions: "play none none reverse",
               },
            }
         );
      });
   }

   // Buttons
   const buttons = document.querySelectorAll(".btn");
   if (buttons.length) {
      buttons.forEach((button) => {
         gsap.fromTo(
            button,
            {
               opacity: 0,
               y: 40,
               skewX: 10,
               scale: 0.95,
            },
            {
               opacity: 1,
               y: 0,
               skewX: 0,
               scale: 1,
               duration: 1.2,
               ease: "power3.out",
               scrollTrigger: {
                  trigger: button,
                  start: "top 90%",
                  end: "bottom 65%",
                  toggleActions: "play none none reverse",
               },
            }
         );
      });
   }

   // Hero advantages
   const advantages = document.querySelectorAll(".welcome__advatage");
   if (advantages.length && elementExists(".welcome__advatages")) {
      gsap.set(".welcome__advatages", { perspective: 800 });

      gsap.fromTo(
         advantages,
         {
            opacity: 0,
            y: 50,
            rotationY: 90,
            z: -100,
            scale: 0.8,
         },
         {
            opacity: 1,
            y: 0,
            rotationY: 0,
            z: 0,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            stagger: 0.25,
            scrollTrigger: {
               trigger: ".welcome__advatages",
               start: "top 85%",
               end: "bottom 65%",
               toggleActions: "play none none reverse",
            },
         }
      );
   }

   const slideImages = document.querySelectorAll(
      ".boats__slide-image img, .technologies__image img, .product-components__image img, .product-technologies__image img, .about__image img"
   );

   if (slideImages.length) {
      slideImages.forEach((img) => {
         let triggerEl = img.closest(".boats__slide");

         if (!triggerEl) {
            if (img.closest(".technologies__image")) {
               triggerEl = img.closest(".technologies__image");
            } else if (img.closest(".product-components__image")) {
               triggerEl = img.closest(".product-components__image");
            } else if (img.closest(".product-technologies__image")) {
               triggerEl = img.closest(".product-technologies__image");
            } else if (img.closest(".about__image")) {
               triggerEl = img.closest(".about__image");
            }
         }

         if (!triggerEl) return;

         gsap.fromTo(
            img,
            { scale: 1.1 },
            {
               scale: 1,
               ease: "power1.out",
               scrollTrigger: {
                  trigger: triggerEl,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
               },
            }
         );
      });
   }

   // Slides info
   const slidesInfo = document.querySelectorAll(".boats__slide-info");
   if (slidesInfo.length) {
      slidesInfo.forEach((info, index) => {
         const slide = info.closest(".boats__slide");
         if (slide) {
            gsap.fromTo(
               info,
               {
                  opacity: 0,
                  x: index % 2 === 0 ? 100 : -100,
               },
               {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: slide,
                     start: "top 80%",
                     end: "bottom 60%",
                     toggleActions: "play none none reverse",
                  },
               }
            );
         }
      });
   }

   // Gallery slider
   if (elementExists(".gallery-block__slider")) {
      gsap.fromTo(
         ".gallery-block__slider",
         { opacity: 0, y: 50 },
         {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
               trigger: ".gallery-block__slider",
               start: "top 90%",
               end: "top 70%",
               toggleActions: "play none none reverse",
            },
         }
      );
   }

   // Hero product image scale (without ScrollTrigger)
   if (elementExists(".hero-product__image img")) {
      gsap.to(".hero-product__image img", {
         scale: 1,
         duration: 3,
      });
   }

   // Hero product info body animation
   if (elementExists(".hero-product__info-body") && elementExists(".hero-product__info")) {
      gsap.from(".hero-product__info-body", {
         y: 50,
         duration: 1,
         scrollTrigger: {
            trigger: ".hero-product__info",
            start: "top 90%",
            end: "top 70%",
            toggleActions: "play none none reverse",
         },
      });
   }

   // Product characteristics list animation
   const productCharacteristics = document.querySelectorAll(".product-details__characteristics li");
   if (productCharacteristics.length) {
      gsap.fromTo(
         productCharacteristics,
         { opacity: 0, y: 30 },
         {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
               trigger: ".product-details__characteristics",
               start: "top 85%",
               toggleActions: "play none none reverse",
            },
         }
      );
   }

   // Product equipment images
   const equipmentImages = document.querySelectorAll(".product-equipment__image img");
   if (equipmentImages.length) {
      equipmentImages.forEach((img) => {
         const container = img.closest(".product-equipment__image");
         if (container) {
            gsap.fromTo(
               img,
               { y: 50, opacity: 0 },
               {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  ease: "power3.out",
                  scrollTrigger: {
                     trigger: container,
                     start: "top 85%",
                     toggleActions: "play none none reverse",
                  },
               }
            );
         }
      });
   }

   // Product equipment text items
   const equipmentTexts = document.querySelectorAll(".product-equipment__text");
   if (equipmentTexts.length) {
      equipmentTexts.forEach((text) => {
         const items = text.querySelectorAll(".product-equipment__item");
         if (items.length) {
            gsap.fromTo(
               items,
               { opacity: 0, y: 30 },
               {
                  opacity: 1,
                  y: 0,
                  duration: 3,
                  ease: "power3.out",
                  stagger: 0.5,
                  scrollTrigger: {
                     trigger: text,
                     start: "top 85%",
                     toggleActions: "play none none reverse",
                  },
               }
            );
         }
      });
   }

   // Product complectation lists
   const complectationLists = document.querySelectorAll(".product-complectation__body ul");
   if (complectationLists.length) {
      complectationLists.forEach((ul) => {
         const items = ul.querySelectorAll("li");
         if (items.length) {
            gsap.fromTo(
               items,
               { opacity: 0, y: 20 },
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power3.out",
                  stagger: 0.15,
                  scrollTrigger: {
                     trigger: ul,
                     start: "top 85%",
                     toggleActions: "play none none reverse",
                  },
               }
            );
         }
      });
   }

   const philosophyBody = document.querySelector(".philosophy__body");
   if (philosophyBody) {
      const logo = philosophyBody.querySelector(".philosophy__image img");
      const text = philosophyBody.querySelector(".philosophy__text");

      // Параллакс для логотипа
      if (logo) {
         gsap.fromTo(
            logo,
            {
               y: 100,
               scale: 1.3,
               opacity: 0,
            },
            {
               y: 0,
               scale: 1,
               opacity: 1,
               ease: "power1.out",
               scrollTrigger: {
                  trigger: philosophyBody,
                  start: "top bottom",
                  end: "top 10%",
                  scrub: 1.5,
               }
            }
         );
      }

      // Параллакс для текста
      if (text) {
         gsap.fromTo(
            text,
            {
               y: 50,
               opacity: 0,
               scale: 0.9,
            },
            {
               y: 0,
               opacity: 1,
               duration: 2,
               scale: 1,
               ease: "power2.out",
               scrollTrigger: {
                  trigger: text,
                  start: "top 80%",
                  end: "top 20%",
               }
            }
         );
      }
   }


   window.addEventListener("load", () => ScrollTrigger.refresh());
});

