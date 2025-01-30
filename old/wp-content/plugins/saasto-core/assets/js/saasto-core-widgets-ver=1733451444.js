(function ($) {
	"use strict";


	/**
	   * @param $scope The Widget wrapper element as a jQuery element
	 * @param $ The jQuery alias
	 */


	function mybe_note_undefined($selector, $data_atts) {
		return ($selector.data($data_atts) !== undefined) ? $selector.data($data_atts) : '';
	}


	/**
	 * Swiper activation
	 * @param $scope
	 * @param $
	*/
	var WidgetSliderHandler = function ($scope, $) {
		var slider_el = $scope.find(".saasto-demo-active").eq(0);
		if (slider_el.length === 0)
			return;
		var settings = slider_el.data('settings');
		var arrows = settings['arrows'];
		var dots = settings['dots'];
		var autoplay = settings['autoplay'];
		var autoplay_speed = parseInt(settings['autoplay_speed']) || 2500;
		var infinite = settings['infinite'];
		var for_xl_desktop = settings['for_xl_desktop'];
		var slidesToShow = settings['slidesToShow'];
		var for_laptop = settings['for_laptop'];
		var for_tablet = settings['for_tablet'];
		var for_mobile = settings['for_mobile'];
		var for_xs_mobile = settings['for_xs_mobile'];

		var tpslider = new Swiper('.saasto-demo-active', {
			slidesPerView: for_xl_desktop,
			spaceBetween: 30,
			// direction: 'vertical',
			loop: infinite,
			autoplay: {
				delay: autoplay_speed,
			},
			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},

			// And if we need scrollbar
			// scrollbar: {
			//   el: '.swiper-scrollbar',
			// },
			breakpoints: {
				0: {
					slidesPerView: for_xs_mobile,
				},
				550: {
					slidesPerView: for_mobile,
				},
				768: {
					slidesPerView: for_tablet,
				},
				992: {
					slidesPerView: for_laptop,
				},
				1200: {
					slidesPerView: slidesToShow,
				},
				1599: {
					slidesPerView: for_xl_desktop,
				},
			}
		});

		if (true !== autoplay) {
			tpslider.autoplay.stop();
		}

	};

	// // Make sure you run this code under Elementor.
	$(window).on('elementor/frontend/init', function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/portfolio.default', WidgetSliderHandler);
	});

	$(window).on("elementor/frontend/init", function () {

		elementorFrontend.hooks.addAction('frontend/element_ready/saasto_slider.default', function ($scope) {

			const element = $scope.find('.blog-style-one');
			let data_settings = element.data('blog-slide-settings');
			const swiper_init = '.blog_slider_' + data_settings.slider_wrapper;
			const slide_next = '.next_' + data_settings.slider_wrapper;
			const slide_prev = '.prev_' + data_settings.slider_wrapper;

			var blog_Slider_One = new Swiper(swiper_init, {
				slidesPerView: 1,
				speed: data_settings.slide_speed,
				spaceBetween: 24,
				loop: data_settings.slide_auto_play,
				roundLengths: true,
				centeredSlides: false,
				autoplay: {
					delay: data_settings.slide_auto_play_speed
				},
				navigation: {
					nextEl: slide_next,
					prevEl: slide_prev,
				},
				breakpoints: {
					480: {
						slidesPerView: 1
					},
					575: {
						slidesPerView: 2
					},
					992: {
						slidesPerView: data_settings.blog_slide_column
					}
				}
			});


		})
	});


	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/st_ai_3d_slider.default', function ($scope) {
			var ai_slider = new Swiper('.ai-hero-slider', {
				effect: "coverflow",
				grabCursor: true,
				centeredSlides: true,
				loop: true,
				autoplay: false,
				speed: 2500,
				spaceBetween: 0,
				slidesPerView: "1",
				coverflowEffect: {
					rotate: 30,
					stretch: 75,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				},
				pagination: {
					el: ".ai-hero-pagination",
					clickable: true,
				},
				breakpoints: {
					320: {
						slidesPerView: 1,
						speed: 1500,
						coverflowEffect: {
							stretch: 150,
						},
					},
					768: {
						slidesPerView: 2
					},
					992: {
						slidesPerView: 3
					}
				}
			});
		});
	}
	);

	$(window).on('elementor/frontend/init', function () {

		elementorFrontend.hooks.addAction('frontend/element_ready/st_testimonial.default', function (scope, $) {

			const element = scope.find('.st__testimonial');
        	let data_settings = element.data('testimonial-slide-settings');
			console.log(data_settings);
			if (data_settings.slider_style == 'style-7') {

				// init slider for style 7
				var swiper = new Swiper('.testimonial__slider_' + data_settings.slider_wrapper, {
					spaceBetween: data_settings.slide_space,
					centeredSlides: true,
					speed: data_settings.slide_speed,
					autoplay: {
					  delay: 1,
					  reverseDirection: data_settings.reverse_slider
					},
					loop: true,
					slidesPerView:'auto',
					allowTouchMove: false,
					disableOnInteraction: true
				  });
			}else{

				/* testimonial slider and testimonial thumbs*/
				var testimonial_Thumbs = new Swiper('.testimonial-thumbs', {
					spaceBetween: 24,
					slidesPerView: 1,
					effect: 'fade',
					speed: 1000,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					allowTouchMove: false,
					fadeEffect: {
						crossFade: true
					},
				});
				var testimonial_Slider = new Swiper('.testimonial-slider', {
					spaceBetween: 24,
					slidesPerView: 1,
					speed: 1000,
					loop: true,
					pagination: {
						el: ".testi-pagination",
						clickable: true
					},
					thumbs: {
						swiper: testimonial_Thumbs
					}
				});


				/* testimonial slider two and testimonial thumbs two */
				var testimonial_Thumbs_Two = new Swiper('.testimonial-thumbs-two', {
					spaceBetween: 24,
					slidesPerView: 1,
					effect: 'fade',
					speed: 1000,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					allowTouchMove: false,
					fadeEffect: {
						crossFade: true
					},
				});
				var testimonial_Slider_Two = new Swiper('.testimonial-slider-two', {
					spaceBetween: 24,
					slidesPerView: 1,
					speed: 1000,
					loop: true,
					pagination: {
						el: ".testi-pagination-two",
						clickable: true
					},
					thumbs: {
						swiper: testimonial_Thumbs_Two
					}
				});

				/* testimonial Style Two*/
				$(document).ready(function () {
					$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
						disableOn: 700,
						type: 'iframe',
						mainClass: 'mfp-fade',
						removalDelay: 160,
						preloader: false,
						fixedContentPos: false,
					});
				});

				var swiper = new Swiper('.testimonial-review_slider', {
					spaceBetween: 25,
					slidesPerView: 1,
					speed: 800,
					loop: true,
					autoplay: {
						delay: 1500,
						disableOnInteraction: false,
					},
					navigation: {
						nextEl: '.testimonial-review-next',
						prevEl: '.testimonial-review-prev',
					},
					breakpoints: {
						992: {
							slidesPerView: 2,
							spaceBetween: 48,
						},
					},
				});
			}
		});
	});


	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/st_service_slider.default', function ($scope) {

			/* service slider */
			var service_Slider = new Swiper('.service-slider', {
				spaceBetween: 20,
				slidesPerView: 1,
				speed: 1000,
				loop: false,
				centeredSlides: false,
				autoplay: {
					delay: 2000,
					disableOnInteraction: false,
				},
				breakpoints: {
					480: {
						slidesPerView: 1
					},
					575: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					992: {
						slidesPerView: 2.5
					}
				}
			});
		});
	});

	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/st_brand_carousel.default', function ($scope) {

			/* Partners Start */
			var swiper = new Swiper('.partners__slider', {
				loop: 'true',
				spaceBetween: 100,
				slidesPerView: 1,
				speed: 3000,
				autoplay: {
					delay: 1,
					disableOnInteraction: false,
				},
				breakpoints: {
					1200: {
						slidesPerView: 5,
					},
					992: {
						slidesPerView: 4,
					},
					575: {
						slidesPerView: 3,
					},
					320: {
						slidesPerView: 2,
					},
				},
			});

			/* Brand */
			var brand_slider = new Swiper('.brand-slide-wrap', {
				spaceBetween: 100,
				centeredSlides: true,
				speed: 5000,
				autoplay: {
					delay: 1,
				},
				loop: true,
				slidesPerView: 'auto',
				allowTouchMove: false,
				disableOnInteraction: true,
				breakpoints: {
					320: {
						spaceBetween: 50,
					},
					992: {
						spaceBetween: 70,
					}
				},
			});

		});
	});

	$(window).on("elementor/frontend/init", function () {
		elementorFrontend.hooks.addAction('frontend/element_ready/st_pricing.default', function ($scope) {
			// Pricing - style 6 Hover to Active 
			const cards = document.querySelectorAll('.pricing-card-style-six');

			cards.forEach((card) => {
				card.addEventListener('mouseenter', function () {
					cards.forEach((c) => c.classList.remove('active-card'));
					this.classList.add('active-card');
				});

				card.addEventListener('mouseleave', function () {
					this.classList.add('active-card');
				});
			});

		});
	});


}(jQuery));
