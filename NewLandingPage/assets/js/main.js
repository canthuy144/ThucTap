(function($) {
    "use strict"

    /* 1. Proloder */
    $(window).on('load', function() {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(100).css({
            'overflow': 'visible'
        });
    });

    /* 2. sticky And Scroll UP */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $(".header-sticky").removeClass("sticky-bar");
            $('#back-top').fadeOut(500);
        } else {
            $(".header-sticky").addClass("sticky-bar");
            $('#back-top').fadeIn(500);
        }
    });

    // Scroll Up
    $('#back-top a').on("click", function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


    /* 3. slick Nav */
    // mobile_menu
    var menu = $('ul#navigation');
    if (menu.length) {
        menu.slicknav({
            prependTo: ".mobile_menu",
            closedSymbol: '+',
            openedSymbol: '-'
        });
    };

    /* 4. MainSlider-1 */
    // h1-hero-active
    $('.slider-full-active').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
        nav: false,
        dots: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause: false,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    })

    var dot = $('.slider-active .owl-dot , .slider-full-active .owl-dot');
    console.log(dot)
    dot.each(function() {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });




    /* 4. Testimonial Active*/
    var testimonial = $('.h1-testimonial-active');
    if (testimonial.length) {
        testimonial.slick({
            dots: false,
            infinite: true,
            speed: 1000,
            autoplay: true,
            loop: true,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-arrow-top-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-arrow-top-right"></i></button>',
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false,
                        arrow: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });
    }

    /* 6. Nice Selectorp  */
    var nice_Select = $('select');
    if (nice_Select.length) {
        nice_Select.niceSelect();
    }

    /* 7. data-background */
    // $("[data-background]").each(function() {
    //     $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    // });


    /* 10. WOW active */
    new WOW().init();

    // 11. ---- Mailchimp js --------//  
    function mailChimp() {
        $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


    // 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
    if (popUp.length) {
        popUp.magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    // 12 Pop Up Video
    var popUp = $('.popup-video');
    if (popUp.length) {
        popUp.magnificPopup({
            type: 'iframe'
        });
    }

    /* 13. counterUp*/
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    /* 14. Datepicker */
    $('#datepicker1').datepicker();

    // 15. Time Picker
    $('#timepicker').timepicker();

    //16. Overlay
    $(".snake").snakeify({
        speed: 200
    });

    //17. hamburger Menu
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-menu-show')
    });

    // 18. 
    $('#content1 a').on("click", function() {
        $('#service-area2').css({
            'display': 'none',
        })
        $('#service-area1').css({
            'display': 'block',
        })
        $('body,html').animate({
            scrollTop: $('#service-area1').offset().top - 100
        }, 800);
    });

    $('#content2 a').on("click", function() {
        $('#service-area1').css({
            'display': 'none',
        })
        $('#service-area2').css({
            'display': 'block',
        })
        $('body,html').animate({
            scrollTop: $('#service-area2').offset().top - 100
        }, 800);
    });

    var carousel_dot = $('.carousel-dot, .carousel-control-prev, .carousel-control-next');
    carousel_dot.each(function(){
        $(this).click(function(){
            $('body, html').animate({
                scrollTop: $('#carouselContent').offset().top-100
            }, 500)
        })
    })
    $.each([1,2,3,4], function(index, value){
        $('.single-cat').on("click", function() {
            var val = $(this).attr("data-val");
            console.log(val);
            if(value==val){
                $('#project-area-'+val).css({
                    'display': 'block',
                })
                $('body,html').animate({
                    scrollTop: $('#project-area-'+val).offset().top - 100
                }, 800);
            }
            else {
                $('#project-area-'+value).css({
                    'display': 'none',
                }) 
            }
        });
    })

    $.each([1,2,3,4,5,6], function(index, value){
        $('.trip-detail').on("click", function() {
            var val = $(this).attr("data-value");
            console.log(val);
            if(value==val){
                $('#trip'+val).css({
                    'display': 'inline-block',
                })
                $('body, html').animate({
                    scrollTop: $('#trip'+val).offset().top - 100
                }, 800)
            }
            else {
                $('#trip'+value).css({
                    'display': 'none',
                }) 
            }
        });
    })
})(jQuery);