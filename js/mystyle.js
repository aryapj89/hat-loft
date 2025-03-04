$(document).ready(function(){

    $(".nav-link").click(function()
{
    $(".nav-link").removeClass("active1");
    $(this).addClass("active1")
});
});


/************  Initialize Swiper ************/
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 4,
    breakpoints: {
        280: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
         
       
    },
     autoplay: {
      delay: 2500,
      disableOnInteraction: false,
     },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });