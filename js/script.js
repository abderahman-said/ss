
$(document).ready(init());


function init() {
  
const contactBtn = document.querySelector('.contact_btn');

contactBtn.addEventListener('click', () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});


const contactBtn2 = document.querySelector('.header_btn2');

contactBtn2.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


  AOS.init({
    duration: 800
  });
  
  function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  var section = document.querySelector('.relative_wats');
  var scrollThreshold = 500;
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > scrollThreshold) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
  window.onscroll = function () {
    progressBarScroll();
  };
  
  
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      rtl:true,
        navText : ['<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>','<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>'],
      responsiveClass:true,
      nav:true,
      responsive:{
        0:{
            items:1
        },
        500:{
          items:1
      },
        600:{
            items:1
        },
        800:{
          items:2
      },
        1000:{
            items:3
        }
      }
  })
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:4,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  })
  
    setTimeout(function() {
        document.getElementById("page-top").scrollIntoView();
        
        $('#ctn-preloader').addClass('loaded');  
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
          $(this).delay(2000).fadeOut();
        }
    }, 1000);
}

