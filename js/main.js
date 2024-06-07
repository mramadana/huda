$(document).ready(function () {
    "use strict";
    var isRtl = $("html[lang='ar']").length > 0;
    console.log(isRtl);
    /* ======================= drop-down-lang =============================*/
    $(document).click(function () {
        $(".drop-lang").removeClass('show');
    });

    $(".btn-nav-lang").click(function (e) {
        e.stopPropagation();
        $(".drop-lang").toggleClass('show');
    });

    /*========================== remove over-lay from body and ul when i click on btn-nav-ul */
    $(".nav-btn").click(function () {
        $(".side-bar-content").addClass('active');
    });

    $(".side-bar-content .mobil-nav li a").click(function (e) {
        e.preventDefault();
        $(this).next('.menu-ul').addClass('active')
    });

    $(".side-bar-content .mobil-nav li .back").click(function (e) {
        e.preventDefault();
        $(this).parents('ul').removeClass('active');
    });

    $(".service-box .close-nav").click(function () {
        $(this).parents('.side-bar-content').removeClass('active')
    })

    /*========================== add class over-lay to body and ul when i click on over-lay */
    $('.over-lay').click(function () {
        $(".nav-btn").removeClass('active');
        $(".over-lay").addClass('transform-x');
        $(".header-nav .inner .nav").addClass('transform-2x');
    });

    /*============= toggle-class-open in responsive-sc when i click it =========================*/
    $(".responsive-search-btn").click(function (e) {
        $(".search-container").addClass('active');
    });

    $(".search-container .close-search").click(function (e) {
        $(".search-container").removeClass('active')
    });

    $(".new-arrivals .card-body .shop-now").click(function(e) {
        e.preventDefault();
        var el = $(this);
        el.addClass('active');
        setTimeout(function() {
            el.removeClass('active')
        },3000)
    });
    
    /*============================== start maim slider ========================*/
    $(".main-slider").owlCarousel({
        items: 1,
        loop: true,
        rtl: isRtl,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        autoplayHoverPause: false,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
    });

    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
            width: "100%",
            transition: "width 5000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }
    /*====================== responsive-footer-links-collapse=======================*/
    if ($(window).width() <= 768) {
        $(".footer .foot-title").click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active')
                $(this).siblings(".links").stop().slideUp();
            } else {
                $(".footer .foot-title").removeClass('active')
                $(".footer .links").stop().slideUp();
                $(this).addClass('active')
                $(this).siblings(".links").stop().slideDown();
            }
        });
    }
    $(".dark-mode").click(function () {
        $(this).toggleClass('active');
        $("body").toggleClass('dark-theme');
        if ($(this).hasClass('active')) {
            localStorage.setItem("mode", "dark");
        } else {
            localStorage.setItem("mode", "light");
        }
        console.log(localStorage.mode)
    });

    /*============= if ================*/
    if (localStorage.mode == "dark") {
        $("body").addClass('dark-theme');
        $(".dark-mode").addClass('active')
    };
    $(".new-arrivals .card-body .shop-now").click(function (e) {
        e.preventDefault();
        $(".new-arrivals .card-body .shop-now img").show().delay(2500).fadeOut();
    });

    $(".bottom-nav a").click(function() {
        $(".bottom-nav a").removeClass('active');
        $(this).addClass('active')
    });
    // when i click on cart ==========================================
    $(".cart-over-lay").click(function() {
        $(".over-lay-cart").addClass('active')
    })
    $(".close-cart").click(function() {
        $(".over-lay-cart").removeClass('active')
    })

    // slider >>> shopping
    $('.shopping').owlCarousel({
        loop:false,
        rtl:isRtl,
        margin:10,
        nav:false,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        autoplay: false,
        dots:false,
        touchDrag  : false,
        mouseDrag  : false,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
        responsive:{
            0:{
                items:1,
                autoplay: true,
                touchDrag  : true,
                mouseDrag  : true,
                loop:true,
            },
            600:{
                items:3,
                autoplay: true,
                touchDrag  : true,
                mouseDrag  : true,
                loop:true,
            }, 
            1000:{
                items:4
            }
        }
    });
});
    /*================================= loader =======================================*/
    $(window).on('load', function() {
        setTimeout(function() {
            $(".animate-section").fadeOut();
            $("body").css("overflow", "auto");
            $(".animate-section").hide()
        },3000)
    })
