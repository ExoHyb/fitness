var height = window.innerHeight;
$('.slide-item').css('height', + height +'px');

$('#main-slider').slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 3000,
  pauseOnHover: false,
  arrows: false,
  dots: true,
  customPaging : function(slider, i) {
    return '';
  },
});

$( document ).ready(function() {
    console.log( "ready!" );
    $('.wrapper-gallery').packery({
      // itemSelector: '.item-gallery',
    });
});
