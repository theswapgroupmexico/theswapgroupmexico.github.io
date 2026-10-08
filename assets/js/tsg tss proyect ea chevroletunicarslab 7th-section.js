var swiper = new Swiper('.bg-grid-slides-team', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    // mousewheel: {
    //   invert: false,
    // },
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
  },
  keyboard: {
      enabled: true,
      onlyInViewport: true,
  },
  navigation: {
          nextEl: ".fa-angle-right",
          prevEl: ".fa-angle-left"
      },
    
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });