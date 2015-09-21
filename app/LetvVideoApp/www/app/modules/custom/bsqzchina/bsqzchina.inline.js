(function ($) {

  $(document).on('pageshow',function(){
    
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    });
    
//    var swiper = new Swiper('.swiper-navation-bar', {
//        pagination: '.swiper-pagination',
//        slidesPerView: 3,
//        paginationClickable: true,
//        spaceBetween: 30
//    });
    
    console.log('swiper navigation nav 4.');
    var swiper = new Swiper('.swiper-navation-nav', {
//      pagination: '.swiper-pagination',
      slidesPerView: 3,
      paginationClickable: true,
      spaceBetween: 30
    });
    
  });

}(jQuery));