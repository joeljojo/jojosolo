/*========================================
        Preloader

========================================== */
$(window).on('load', function() {
    $('#status').fadeOut();
    $('#preloader').delay(4000).fadeOut('slow');
});
/*========================================
        Team
========================================== */
$(function() {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //BreakPoint from 0 up
            0: {
                items: 1
            },
            //BreakPoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/*========================================
            Progress Bars
========================================== */
$(function() {
    $("#progress-elements").waypoint(function() {
        $(".progress-bar").each(function() {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });
});
/*========================================
            Responsive Tabs
========================================== */
$(function() {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*========================================
          Portfolio
========================================= */
$(window).on('load', function() {

    //Initialize Isotope
    $(".isotope-container").isotope({});
    //Filter items on button click
    $("#isotope-filters").on('click', 'button', function() {
        //Get Filter Value
        var filterValue = $(this).attr('data-filter');
        //Filter Portfolio Items
        $(".isotope-container").isotope({
            filter: filterValue
        });
        //Active Button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });


});
/*========================================
          Magnifier
========================================= */
$(function() {
    $("#portfolio-items-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*========================================
          Testimonials
========================================= */
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/*========================================
            Clients
========================================= */
$(function() {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            //BreakPoint from 0 up
            0: {
                items: 2
            },
            //BreakPoint from 480 up
            480: {
                items: 3
            },
            //BreakPoint from 768 up
            768: {
                items: 6
            }
        }
    });
});
$(function() {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});
/*========================================
            Navigation
========================================= */
$(function() {
    //Show/Hide Nav On Page Load
    showHideNav();
    $(window).scroll(function() {
        //Show/Hide Nav On Window's Scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show White Nav
            $("nav").addClass("white-nav-top");
            //Show Dark Logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            //Show Back To Top Button
            $("#back-to-top").fadeIn();
        } else {
            //Hide White Nav
            $("nav").removeClass("white-nav-top");
            //Show Normal Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            //Hide Back To Top Button
            $("#back-to-top").fadeOut();
        }
    }
});
// Smooth Scrolling
$(function() {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        //get section id like #about,#services,#work and etc
        var section_id = $(this).attr("href");
        $("html,body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});
/*========================================
           Mobile Navigation
========================================= */
$(function() {
    //show mobile navigation
    $("#mobile-nav-open-btn").click(function() {
        $("#mobile-nav").css("height", "100%");
    });
    //Hide mobile navigation
    $("#mobile-nav-close-btn,#mobile-nav a").click(function() {
        $("#mobile-nav").css("height", "0%");
    });
});
/*========================================
          Animation
========================================= */
//Animate on Scroll
$(function() {
    new WOW().init();
});
//Home Animation on page load
$(window).on('load', function() {
    $("#heading-1").addClass("animated fadeInDown");
});