//Creatives//

function showText(name) {
  document.getElementById(name).style.display = "block";
};

function hideText(name) {
  document.getElementById(name).style.display = "none";
};

//Logos//
$(document).ready(function(){
    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
  
    });
  });
  
  $(document).ready(function(){
    $('.customer-logosTwo').slick({
      slidesToShow: 5,
      slidesToScroll: -1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
  
    });
  });



  //original stylish-portfolio.js//
  (function($) {
    "use strict"; // Start of use strict
  
    // Closes the sidebar menu
    $(".menu-toggle").click(function(e) {
      e.preventDefault();
      $("#sidebar-wrapper").toggleClass("active");
      $(".menu-toggle > .icon-menu, .menu-toggle > .icon-close").toggleClass("icon-menu icon-close");
      $(this).toggleClass("active");
    });
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('#sidebar-wrapper .js-scroll-trigger').click(function() {
      $("#sidebar-wrapper").removeClass("active");
      $(".menu-toggle").removeClass("active");
      $(".menu-toggle > .icon-menu, .menu-toggle > .icon-close").toggleClass("icon-menu icon-close");
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
  })(jQuery); // End of use strict
