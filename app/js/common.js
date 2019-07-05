$(document).ready(function () {
    var $body = $(window.document.body);
    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth));
        // $body.css('position', 'fixed');
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '0');
        $body.css('overflow-y', 'auto');
        $body.css('position', 'relative');
    }

    // Main fullpage
    $('.fullpage').fullpage({
    //     //options here
    //     // scrollHorizontally: true,
    //     // autoScrolling: true,
    //     // fitToSection: true
    //     // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
        navigation: true,
        navigationPosition: 'right',
    });
    // document.querySelector('#sidebar').onwheel = e => e.stopPropagation();

    // Main search
    $(".header-top-logo").click(function () {
        $(".header-search").addClass('active');
    });
    $(".header-search-close").click(function () {
        $(".header-search").removeClass('active');
    });

    // Main search tabs
    $(".header-search-tab").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".header-search-contanet").eq(index).addClass('active').siblings().removeClass('active');
    });

    // Main login
    $(".header-top-name").click(function () {
        $(".popup-sing").addClass('active');
    });
    $(".popup-sing-close").click(function () {
        $(".popup-sing, .popup-bag").removeClass('active');
    });
    $(".popup-sing-up").click(function () {
        $(".popup-sing-main").removeClass('active');
        $(".popup-sing-create").addClass('active');
        $(".popup-sing-forgot").removeClass('active');
    });
    $(".popup-sing-in").click(function () {
        $(".popup-sing-main").addClass('active');
        $(".popup-sing-create").removeClass('active');
        $(".popup-sing-forgot").removeClass('active');
    });
    $(".popup-sing-linkforgot").click(function () {
        $(".popup-sing-main").removeClass('active');
        $(".popup-sing-forgot").addClass('active');
    });
    $(".popup-sing-cancel").click(function () {
        $(".popup-sing-main").addClass('active');
        $(".popup-sing-forgot").removeClass('active');
    });

    //Main bag
    $(".popup-bag-list").click(function () {
        $(this).parent().find(".popup-bag-drop").slideToggle(500);
        $(this).find(".popup-bag-arrow").toggleClass('active');
    });

    $('.textlimited[maxlength]').keyup(function(){
        //get the fields limit
        var maxLength = $(this).attr("maxlength");

        // check if the limit is passed
        if(this.value.length > maxLength){
            return false;
        }

        // find the counter element by the id specified in the source input element
        var counterElement = $(".textcounter#" + $(this).data("textcounterid"));
        // update counter  text
        counterElement.html((maxLength - this.value.length) + " characters remaining");
    });

    //My Bag
    $(".header-top-basket").click(function () {
        $(".popup-bag").addClass('active');
    });
    $(".popup-bag-sellers").click(function (e) {
        e.preventDefault();
        $(".popup-bag-in").addClass('active');
        $(".popup-bag-empty").removeClass('active');
    });
    $(".popup-bag-chadd").click(function () {
        $(".popup-gift").addClass('active');
        $(".popup-bag-in").removeClass('active');
    });
    $(".popup-gift-cancel").click(function () {
        $(".popup-bag-in").addClass('active');
        $(".popup-gift").removeClass('active');
    });

    //
    $(".footer-mid-locator").click(function (e) {
        e.preventDefault();
        $(".footer-popup").addClass('active');
    });

    //Main - popup email
    $(".popup-email-close").click(function () {
        $(".popup-email").removeClass('active');
    });

    //Collection - read less
    $(".collection-drop").click(function () {
        $(".collection-change").slideToggle(500);
        $(".collection-drop-arrow").toggleClass('active');
    });

    $(".collection-lv1").select2({
        minimumResultsForSearch: -1,
        placeholder: 'sort',
    });

    //Collection - menu
    $(".collection-list").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".collection-change-item").eq(index).addClass('active').siblings().removeClass('active');
        $(".collection-type-check").eq(index).addClass('active').siblings().removeClass('active');

    });

    $('.collection-type-sunglasses').click(function() {
        $('.collection-type-check').removeClass('active');
        $('.collection-lvl2').addClass('active');
    });
    $('.collection-type-optical').click(function() {
        $('.collection-type-check, .collection-lvl2').removeClass('active');
        $('.collection-lvl3').addClass('active');
    });
    $(".collection-type-close").click(function () {
        $('.collection-lvl2, .collection-link, .collection-type-check, .collection-type, .collection-lvl3, .collection-change-item').removeClass('active');
    });

    //Collection - change colors
    $(".collection-third-color").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".collection-third-slide").eq(index).addClass('active').siblings().removeClass('active');
    });

    //Collection - plus more colors
    $(".collection-third-more").click(function () {
        $(".collection-third-change").addClass('active');
        $(this).hide();
    });

    $(".collection-third-heart").click(function () {
        $(this).toggleClass('active');
    });

    $(".collection-fouth-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: true,
        dots: false,
    });

    //Product - header
    $(".product-svg").click(function () {
        $(".product-item").addClass('active');
    });


    // $(".product-slider").slick({
    //     slidesToScroll: 1,
    //     slidesToShow: 1,
    //     arrows: false,
    //     dots: true,
    //     vertical: true
    // });

    //Product - slider main
    const slider = $(".product-slider");
    slider
        .slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            vertical: true,
            prevArrow: document.querySelector('slider-prev'),
            nextArrow: document.querySelector('slider-next'),
        });

    slider.on('wheel', (function(e) {
        e.preventDefault();

        if (e.originalEvent.deltaY < 0) {
            $(this).slick('slickNext');
        } else {
            $(this).slick('slickPrev');
        }
    }));

    // $('.zoom').zoomple({
    //     offset : {x: 0, y: 0},
    //     zoomWidth : 100,
    //     zoomHeight : 100,
    //     roundedCorners : true
    // });

    //Product - slider colors
    $(".product-colors").slick({
        slidesToShow: 9,
        arrows: true ,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '40px'
    });

    //Product - star
    var star = $('.jq-star');
    star.click(function (event) {
        event.preventDefault();
        var rating = star.index(this);
        star.removeClass('active');
        $(this).addClass('active');
    });
    $(".popup-returns-close").click(function () {
        $(".popup-returns").removeClass('active');
    });
    $(".product-returns-btn").click(function (e) {
        e.preventDefault();
        $(".popup-returns").addClass('active');
    });

    $(".slick-arrow").text("");

    $('[data-fancybox="gallery"]').fancybox({
        thumbs: {
            autoStart : true,
            axis      : 'x'
        }
    });

    $(".product-second-tab").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".product-second-item").eq(index).addClass('active').siblings().removeClass('active');
    });

    //Product - More fit details
    $(".product-details").click(function () {
        $(".product-second-popup").addClass('active');
        bodyFreezeScroll();
    });
    $(".product-second-close").click(function () {
        $(".product-second-popup").removeClass('active');
        bodyUnfreezeScroll();
    });

    $(".product-third-tab_options").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".product-third-options").eq(index).addClass('active').siblings().removeClass('active');
        $(".product-third-side").eq(index).addClass('active').siblings().removeClass('active');
    });
    $(".product-third-tab_lens").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".product-third-offerings").eq(index).addClass('active').siblings().removeClass('active');
        // $(".product-third-side").eq(index).addClass('active').siblings().removeClass('active');
    });


});