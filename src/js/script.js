$(document).ready(function(){
    $('.reviews__slids').slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
  });

  $('.next').on('click', function() {
    $('.reviews__slids').slick('slickNext');
  });

  $('.prev').on('click', function() {
    $('.reviews__slids').slick('slickPrev');
  });

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu__active');
        })
    })
})