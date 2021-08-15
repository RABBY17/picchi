
  /*-- scroll to top --*/
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

/*-- toggler btn --*/
function myFunction(x) {
  x.classList.toggle("change");
}
$(".toggler-btn").click(function(){
  $("nav").toggleClass("open-nav");
});

/*-- CounterUp --*/
$('.counter').counterUp({
    delay: 10,
    time: 1500,
});

  /*-- slick slider --*/
$('.client__items').slick({
  infinite: true,
  loop:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  speed:1000,
  dots:true,
  pauseOnHover:false,

  prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
  
  responsive: [

    {
      breakpoint: 1024,
      settings: {
        arrows:false,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 992,
      settings: {
        arrows:true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:600,
      settings: {
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]

});


$('.partners__items').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover:false,
  infinite: true,
  loop:true,
  arrows:false ,
  dots:false,

  responsive: [
    {
      breakpoint:768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },

    {
      breakpoint:600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
  ]
});
