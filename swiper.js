const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 1000,
    direction: 'horizontal',
    loop: true,
    effect: 'card',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },

    mousewheel: {
      invert: true,
    },

    autoplay: {
      delay: 2000,
    },

    // responsive breakpoint
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        // 480: {
        //   slidesPerView: 3,
        //   spaceBetween: 30
        // },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40
        },

        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },

        // when window width is >= 2560px
        2560: {
          slidesPerView: 4,
          spaceBetween: 30
        },

      }

  });