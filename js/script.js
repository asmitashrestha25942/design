// this for the remove selected class from the links
$(".nav-link").click(function () {    
    $('.nav-link').removeClass("select");
    // $(this).addClass("select");
    console.log("cicked")
});
// for the jquery togglein mobile
$("document").ready(function () {
  $('.bar-menu').on('click',function(e){
            e.preventDefault();
 $('.nav-link').slideToggle(500)
        });
    });

// this is for the owlCarousel
$("#carousel").owlCarousel({
  autoplay: true,
  lazyLoad: true,
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items: 4
    }
  }
});

$('.gallery') .magnificpoup({
    delegate:'.popimg', 
    type:'image',
    gallery:{
        enabled:true
    }
});
var $gallery =$('.gallery') .isotope({


});
$('.filtering') .on('click', 'span', function(){
    var filtervalue = $(this).attr('data-filter');
    $gallery.isotope({filter : filtervalue});
});
$('filtering').on('click', 'span', function(){
    $(this).addClass('active').siblings().removeClass('active')

});

