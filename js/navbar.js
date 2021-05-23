$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      if($(this).scrollTop() > 20) { 
          $('.menu-bar').addClass('solid');
      } else {
          $('.menu-bar').removeClass('solid');
      }
    });
});