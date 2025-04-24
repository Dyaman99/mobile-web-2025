$(document).ready(function() {

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    // $('.fade').slick({
    //   slidesToShow: 2,
    //   slidesToScroll: 2,
    //   dots: true,
    //   autoplay: true,
    //   autoplaySpeed: 2000,
    // });
  
    // $('.fade').slick({
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   fade: true,
    //   slide: 'div',
    //   cssEase: 'linear',
    //   autoplay: true,
    //   autoplaySpeed: 3000
    // });
  
  });