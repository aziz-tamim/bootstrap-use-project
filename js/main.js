$(document) .ready(function(){
    
  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });



  // slider active
    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        slidesToScroll: 1
      });

      // slider active
      $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        slidesToScroll: 1
        
      });
      
        // slider active
        $('.brand-active').slick({
          infinite: true,
          slidesToShow: 5,
          arrows: false,
          dots: false,
          autoplay: true,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
      // counter up
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


})