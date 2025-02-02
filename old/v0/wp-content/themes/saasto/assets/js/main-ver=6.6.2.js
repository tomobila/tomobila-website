(function ($) {
  "use strict";

  /***********
   mobile menu  js
   ************/
  $('.hamburger').on('click', function (event) {
    $(this).toggleClass('h-active');
    $('.main-nav').toggleClass('slidenav');
  });

  $('.header-home .main-nav ul li  a').on('click', function (event) {
    $('.hamburger').removeClass('h-active');
    $('.main-nav').removeClass('slidenav');
  });

  $(".main-nav .fl").on('click', function (event) {
    var $fl = $(this);
    $(this).parent().siblings().find('.sub-menu').slideUp();
    $(this).parent().siblings().find('.fl').addClass('f_icon-plus').text("+");
    if ($fl.hasClass('f_icon-plus')) {
      $fl.removeClass('f_icon-plus').addClass('f_icon-minus').text("-");
    } else {
      $fl.removeClass('f_icon-minus').addClass('f_icon-plus').text("+");
    }
    $fl.next(".sub-menu").slideToggle();
  });

  /***********
 Preloder js
 ************/
  jQuery(window).on('load', function () {
    $(".preloader").delay(1600).fadeOut("slow");
  });


  /***********
   Wow js Initialization
   ************/
  function wowAnimation() {
    new WOW({
      offset: 100,
      animateClass: "animated",
      mobile: true,
    }).init();
  }

  jQuery(window).on('load', function () {
    wowAnimation();
  });


  // Pricing Plan JS
  function priceToggle() {
    const myAnnTables = document.getElementById("myAnnualTables");
    const myMonTables = document.getElementById("myMonthlyTables");

    myAnnTables.classList.toggle("plan-tables-hidden");
    myMonTables.classList.toggle("plan-tables-hidden");
  }
  var el = document.getElementById('priceSwitch');
  if (el) {
    el.addEventListener('click', priceToggle, false);
  }

  // Pricing - style 6 & style 7 Hover Active 
  // const cards = document.querySelectorAll('.pricing-card-style-six');
  const cards = document.querySelectorAll('.pricing-card-style-six, .pricing-card-seven');


  cards.forEach((card) => {
    card.addEventListener('mouseenter', function () {
      cards.forEach((c) => c.classList.remove('active-card'));
      this.classList.add('active-card');
    });

    card.addEventListener('mouseleave', function () {
      this.classList.add('active-card');
    });
  });

  /***********
   All swiper slider JS
   ************/

  /*Ai hero Slide*/

  // var aiheroSlider = new Swiper('.ai-hero-slider', {
  //   effect: "coverflow",
  //     grabCursor: true,
  //     centeredSlides: true,
  //     loop: true,
  //     autoplay: false,
  //     speed: 2500,
  //     spaceBetween: 0,
  //     slidesPerView: "1", 
  //     coverflowEffect: {
  //       rotate: 30,
  //       stretch: 75,
  //       depth: 100,
  //       modifier: 1,
  //       slideShadows: false,
  //     },
  //     pagination: {
  //       el: ".ai-hero-pagination",
  //       clickable: true,
  //     },
  //     breakpoints: {
  //       320: {
  //         slidesPerView: 1,
  //         speed: 1500,
  //         coverflowEffect: {
  //           stretch: 150,
  //         },
  //       },
  //       768: {
  //         slidesPerView: 2
  //       },
  //       992: {
  //         slidesPerView: 3
  //       }
  //     }
  // });

  /*Ai hero Slide End*/

  /*blog slider one */
  var blog_Slider_One = new Swiper('.blog-slider-one', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    centeredSlides: false,
    autoplay: {
      delay: 15000
    },
    navigation: {
      nextEl: '.blog-next',
      prevEl: '.blog-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      }
    }
  });

  /* service process slider */
  var service_Process_Slider = new Swiper('.service-process-slider', {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    centeredSlides: false,
    autoplay: {
      delay: 15000
    },
    navigation: {
      nextEl: '.blog-next',
      prevEl: '.blog-prev',
    },
    breakpoints: {
      480: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 4
      }
    }
  });

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

  /* testimonial Two*/
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

  /* Testimonial */

//top



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

  /* Brand End */

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

  /* Partners End */

  /* Client slider */
  var company_Client_Slider = new Swiper('.company-clients-slider', {
    spaceBetween: 20,
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    centeredSlides: true,
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
        centeredSlides: false,
      },
      992: {
        slidesPerView: 3
      }
    }
  });

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

  /* testimonial slider three and testimonial thumbs three */
  var testimonial_Slider_Three = new Swiper('.testimonil-slider-three', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      el: ".testi-pagination-three",
      clickable: true
    },
    loop: true,
    loopedSlides: 4,

    breakpoints: {
      480: {
        slidesPerView: 1
      },
      575: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2
      }
    }
  });

  var testimonial_Thumbs_Three = new Swiper('.testimonial-thumbs-three', {
    spaceBetween: 0,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 3
  });
  testimonial_Slider_Three.controller.control = testimonial_Thumbs_Three;
  testimonial_Thumbs_Three.controller.control = testimonial_Slider_Three;

  /* init Video Player */
  // const player = new Plyr('.player');

  /* init swipper slider */
  var swiper = new Swiper(".blog_thumb__slider", {
    spaceBetween: 0,
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: ".blog-button-next",
      prevEl: ".blog-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  var swiper = new Swiper(".sponsor-brands-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
      delay: 1,
    },
    allowTouchMove: false,
    disableOnInteraction: true,
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 137,
      },
    }
  });

  var swiper = new Swiper(".testimonial-seven-slider", {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper('.product-sider-eight', {
    spaceBetween: 12,
    slidesPerView: 1,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-custom-pagination",
      clickable: true,
    },
  });

  /* Pricing Toggle */
  var checkBox = document.querySelectorAll("#checbox")

  for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("click", () => {
      var text1 = document.querySelectorAll(".text1")
      var text2 = document.querySelectorAll(".text2")

      if (checkBox[i].checked == true) {
        console.log(text2)
        text1.forEach((e) => {
          e.style.display = "block";
        })
        text2.forEach((e) => {
          e.style.display = "none";
        })
      } else if (checkBox[i].checked == false) {
        text1.forEach((e) => {
          e.style.display = "none";
        })
        text2.forEach((e) => {
          e.style.display = "block";
        })
      }

    })
  }
  
  /* Breadcrumb styles */
  $("[data-background").each(function () {
    $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
  });

  $("[data-bg-color]").each(function () {
    $(this).css("background-color", $(this).attr("data-bg-color"));
  });


  // Custom CSS Animation
  $(document).on("mousemove", function (e) {
    var cursor = $(".cursor");
    requestAnimationFrame(function () {
      cursor.css({
        top: e.pageY - $(window).scrollTop() - 10,
        left: e.pageX - 10
      });

    });
  });

    /***********
   Wow js Initialization
   ************/
   function wowAnimation(){
    new WOW({
      offset:100,
      animateClass:"animated",
      mobile:true,
    }).init();
  }

  jQuery(window).on( 'load', function(){
    wowAnimation();
  });

}(jQuery));