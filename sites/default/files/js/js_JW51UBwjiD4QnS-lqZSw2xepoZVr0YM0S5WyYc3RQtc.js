/* global a2a*/
(function (Drupal) {
  'use strict';

  Drupal.behaviors.addToAny = {
    attach: function (context, settings) {
      // If not the full document (it's probably AJAX), and window.a2a exists
      if (context !== document && window.a2a) {
        a2a.init_all(); // Init all uninitiated AddToAny instances
      }
    }
  };

})(Drupal);
;
/* image-animation.js */
/*
(function ($) {
    Drupal.behaviors.yourthemeImageAnimation = {
      attach: function (context, settings) {
        $(window).on('load', function () {
          $('img').addClass('animate');
        });
      }
    };
  })(jQuery);*/
  /*
  $(document).ready(function() {
    setTimeout(function() {
      $('img').addClass('fadeInUp').css('visibility', 'visible');
    }, 100);
  });
  */
 /*
  (function ($) {
    // wait for the document to be ready
    $(document).ready(function() {
      // select the image element by its class
      var myImage = $('.image-field ');
  
      // get the image's position and height
      var imgPos = myImage.offset().top;
      var imgHeight = myImage.outerHeight();
  
      // set the image's initial position and opacity
      para.css({
        position: 'relative',
        top: imgPos + imgHeight,
        opacity: 0
      });
  
      // animate the image's position and opacity
      myImage.animate({
        top: imgPos,
        opacity: 1
      }, 1000, 'fadeInUp');
    });
  })(jQuery);
  
  */;
