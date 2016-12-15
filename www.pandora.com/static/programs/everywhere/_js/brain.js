$(document).ready(function(){


  //if console is undefined (IE), make it an empty object so it wont fail
  if (typeof console === "undefined" || typeof console.log === "undefined") {
    console = {};
    console.log = function() {};
  }


  $('.iosSlider').iosSlider({
    snapToChildren: true,
    desktopClickDrag: true,
    startAtSlide: 1,
    infiniteSlider: true,
    snapSlideCenter: true,
	autoSlide: false,
	autoSlideTimer: 1500,
    onSlideChange: slideChange,
    onSliderLoaded: slideChange,
	autoSlideHoverPause: false,
    navNextSelector: $('#navNext'),
    navPrevSelector: $('#navPrev')
  });
  
  $('.iosSlider').iosSlider('lock');

});


function slideChange(args) {

  //nextSlide = args.currentSlideNumber%$('.iosSlider .slide').length;
  //nextSlideText = $('.iosSlider .slide').eq(nextSlide).attr('data-title');
  //$('#navNext').html(nextSlideText);


  $('#dots .dot').removeClass('active');
  $('#dots .dot:eq('+(args.currentSlideNumber-1)+')').addClass('active');
}

