/*-----------------------------------------------------------
* Template Name    : Liam - Creative Personal Portfolio
* Author           : gtomdesign
* Version          : 1.0
* Created          : April 2020
* File Description : Main Js file of the template
*------------------------------------------------------------
*/

! function($) {
    "use strict";

    /* ---------------------------------------------- /*
    * Preloader
    /* ---------------------------------------------- */

    $(window).on('load', function() {
        $('#preloader').addClass("loaded");
    });

    /* ---------------------------------------------- /*
    * Section Scroll - Navbar
    /* ---------------------------------------------- */
    
    $('.navbar-links a').on('click', function() {
        setTimeout(function() {
            $(".navbar-collapse").removeClass('open');
            $(".ham").removeClass('active');
            $(".navbar-toggler").addClass('collapsed');
            $("body, html").toggleClass('overflow-hidden');
            $("body").toggleClass('aside-open');
        }, 300);
        
    });

    $('.navbar-toggler').on('click', function(){

        $(this).toggleClass('collapsed');
        $(".navbar-collapse").toggleClass('open');
        $(".ham").toggleClass('active');
        $("body, html").toggleClass('overflow-hidden');
        $("body").toggleClass('aside-open');
    });

    /* ---------------------------------------------- /*
    * Scroll Spy - init
    /* ---------------------------------------------- */

    $("#navbarCollapse").scrollspy({
        offset:20
    });

    /* ---------------------------------------------- /*
    * Magnific Popup - Init
    /* ---------------------------------------------- */

    $('.simple-ajax-popup').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        zoom: {
            enabled: true,

            duration: 300,
            easing: 'ease-in-out',

            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    /* ---------------------------------------------- /*
    * Swipper - Init
    /* ---------------------------------------------- */

    // Portolio init

    var swiper = new Swiper('.swiper-portfolio', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: -30,
        initialSlide: 2,
        coverflowEffect: {
            rotate: 25,
            stretch: 0,
            depth: 150,
            slideShadows : false,
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
            }
        },
        pagination: {
            el: '.portfolio-pagination',
            dynamicBullets: true,
        },
    });

    // Testimony init

    var swipertest = new Swiper('.swiper-testimony', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    /* ---------------------------------------------- /*
    * AnimateOnScroll - Init
    /* ---------------------------------------------- */

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();



    /* ---------------------------------------------- /*
    * pagepiling - Init
    /* ---------------------------------------------- */



    var windowWidth = $(window).width();


    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $(".mobileView").hide();
    }

    if(windowWidth >= 769) {
 
        $('#pagepiling').pagepiling({
            menu: null,
            direction: 'vertical',
            verticalCentered: true,
            sectionsColor: [],
            anchors: [
                'HOME', 
                'ABOUT', 
                'SERVICES', 
                'PRICE', 
                'RESUME', 
                'PORTFOLIO', 
                'TESTIMONY', 
                'CONTACT'
            ],
            scrollingSpeed: 500,
            easing: 'swing',
            loopBottom: true,
            loopTop: false,
            css3: true,
            navigation: {
                'textColor': '#000',
                'bulletsColor': '#fff',
                'position': 'right',
                'tooltips': [
                    'HOME', 
                    'ABOUT', 
                    'SERVICES', 
                    'PRICE', 
                    'Resume', 
                    'Portfolio', 
                    'Testimony', 
                    'Contact'
                ]
            },
            normalScrollElements: null,
            normalScrollElementTouchThreshold: 5,
            touchSensitivity: 1,
            keyboardScrolling: true,
            sectionSelector: '.section',
            animateAnchor: false,

            //events
            onLeave: function(index, nextIndex, direction){},
            afterLoad: function(anchorLink, index){},
            afterRender: function(){},
        });
    }



    /* ---------------------------------------------- /*
    * Textition - Init
    /* ---------------------------------------------- */

    $('#autoplay').textition({
        speed: 1.5,
        animation: 'ease-out',
        map: {x: 200, y: 100, z: 0},
        autoplay: true,
        interval: 3
    });


}(window.jQuery);

