var mixer = mixitup('.mixer-all');



new VenoBox({
    selector: '.videoHome',
});


$(document).ready(function () {
  $('.sliderContainer').slick({
      autoplay: true,
      autoplaySpeed: 3000, // 3 seconds
      dots: true,          // Show navigation dots
      arrows: true,        // Enable navigation arrows
      infinite: true,      // Infinite loop
      speed: 800,          // Slide transition speed
      slidesToShow: 1,     // Number of slides visible
      slidesToScroll: 1,   // Number of slides to scroll
  });
});


  
// $('.spacialProduct-box').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });


// $('.spacialProduct-box').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 1000,
// });


// $(document).ready(function(){
//     $('.your-class').slick({
//       setting-name: setting-value
//     });
//   });



// $('.testimonialItemsBox').slick({
//   infinite: true,
//   speed: 300,
//   slidesToShow: 1,
//   adaptiveHeight: true,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   default: 3000,
// });
      