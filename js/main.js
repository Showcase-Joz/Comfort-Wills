


//scroll to top
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.scrollBtn').fadeIn();
        } else {
        $('.scrollBtn').fadeOut();
      }
    });
    $('.scrollBtn').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });


    // set copyright year date
var currentYear=(new Date).getFullYear();
$(document).ready(function(){$(".year").text(currentYear);});

(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 250
        }
    });
        
    $('a[href^="#"]').on('click', function(e) {
        var url = document.URL.split("#");
        var ancher = url[1];
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
    
    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });
    

})(jQuery);