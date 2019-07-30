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
    //Blog (mobile) - "explore by topic"
    $(".blog-menu-item").click(function () {
        $(".blog-menu-span").toggleClass('active');
        $(".blog-menu-drop").slideToggle(500);
    });





    //Main (mob) - header menu
    if (window.matchMedia("(max-width: 993px)").matches) {
        $(".fifth").addClass("section");
        $('.header-btn-menu').click(function(){
            $(this).toggleClass('btn-active');
            $('.header-menu').addClass("active");
            $(".header-menu-drop").addClass('active');
            bodyFreezeScroll();
            if (!$(this).hasClass('btn-active')) {
                $('.header-menu').removeClass("active");
                $(".header-menu-drop").removeClass('active');
                $(".header-menu-subdrop").slideUp(500);
                $(".header-menu-subtitle").removeClass('active');
                bodyUnfreezeScroll();
            }
        });

        $(".header-menu-link").click(function (e) {
            e.preventDefault();
            $(this).parent().find(".header-menu-drop").slideToggle(500).parents().siblings().find(".header-menu-drop").slideUp(500);
        });
        $(".header-menu-subtitle").click(function () {
            $(this).toggleClass('active');
            $(this).parent().find(".header-menu-subdrop").slideToggle(500).parents().siblings().find(".header-menu-subdrop").slideUp(500);

        });
    }
    // Main fullpage
    $('.fullpage').fullpage({
        navigation: true,
        scrollOverflow: true,
        autoScrolling: true,
        scrollHorizontally: true,
        scrollBar: false,
        navigationPosition: 'right',


});


    // $( ".header-menu-img" ).each(function() {
    //     var attr = $(this).attr('data-image-src');
    //
    //     if (typeof attr !== typeof undefined && attr !== false) {
    //         $(this).css('background', 'url('+attr+') no-repeat center / cover');
    //     }
    //
    // });
    // Main search
    var addCl = true;
    $(".header-top-logo_search, .header-top-logo_mob").bind('click', function () {
        $(".header-search").addClass('active');
    });

    $(".header-search-close").bind('click', function () {
        $(".header-search").removeClass('active');
    });

    $(".popup-welcome-close, .popup-welcome-overlay").click(function () {
        $(".popup-welcome").removeClass('active')
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
        $(".popup-sing, .popup-bag, .popup").removeClass('active');
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
    if (window.matchMedia("(max-width: 993px)").matches) {
        //Product - accordion mobile
        $(".product-mob-item").click(function (e) {
            e.preventDefault();
            $(this).parent().find(".product-mob-drop").slideToggle(500);
            $(this).find(".product-mob-arrow").toggleClass('active');
        });
    }

    //Main bag
    $(".popup-bag-list").click(function () {
        $(this).parent().find(".popup-bag-drop").slideToggle(500);
        $(this).find(".popup-bag-arrow").toggleClass('active');
    });
    //Collection - menu
    $(".collection-list").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".collection-change-item").eq(index).addClass('active').siblings().removeClass('active');
        $(".collection-type-check").eq(index).addClass('active').siblings().removeClass('active');

    });
    $(".collection-second-two").click(function () {
        $(".collection-third-card").addClass('active');
    });
    $(".collection-second-one").click(function () {
        $(".collection-third-card").removeClass('active');
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
    $(".collection-sort-flex, .collection-popup-title").click(function () {
        bodyUnfreezeScroll();
        $(".popup-type-item, .collection-popup, .collection-sort, .collection-filter-menu, .collection-popup-flex").removeClass('active');
    });
    $(".btn-sort").click(function () {
        bodyFreezeScroll();
        $(".collection-sort").addClass('active');
    });
    $(".btn-filters").click(function () {
        bodyFreezeScroll();
        $(".collection-popup, .popup-filter, .bottom-one").addClass('active');
    });
    //Collection - main filter
    $(".btn-category").click(function (e) {
        e.preventDefault();
        $(".collection-filter-menu, .collection-popup-flex").removeClass('active');
        $(".win-filter-category, .bottom-tree").addClass('active');
    });
    $(".btn-prescription").click(function (e) {
        e.preventDefault();
        $(".collection-filter-menu, .collection-popup-flex").removeClass('active');
        $(".win-filter-prescription, .bottom-tree").addClass('active');
    });
    $(".btn-brands").click(function (e) {
        e.preventDefault();
        $(".collection-filter-menu, .collection-popup-flex").removeClass('active');
        $(".popup-brands, .bottom-two").addClass('active');
    });
    $(".btn-type").click(function () {
        $(".collection-filter-menu, .collection-popup-flex, .popup-type-item").removeClass('active');
        $(".popup-type, .bottom-two").addClass('active');
        $(".popup-type-list").show();
    });
    $(".btn-gender").click(function () {
        $(".collection-filter-menu, .collection-popup-flex").removeClass('active');
        $(".popup-gender, .bottom-two").addClass('active');
    });
    $(".btn-size").click(function () {
        $(".collection-filter-menu, .collection-popup-flex").removeClass('active');
        $(".popup-size, .bottom-two").addClass('active');
    });
    $(".btn-shape").click(function () {
        $(".collection-filter-menu, .collection-popup-flex").removeClass('active');
        $(".popup-shape, .bottom-two").addClass('active');
    });

    //Main
    if (window.matchMedia("(min-width: 994px)").matches) {
        $(".header-menu-item").hover(function () {
            $(".header-menu-link").toggleClass("gray");
            $(this).find(".header-menu-link").toggleClass('active');
        });
        $(".header-menu-sublink").hover(function () {
            $(".header-menu-sublink").toggleClass("gray");
            $(this).toggleClass('active');
        });
        $(".header-search-tab").hover(function () {
            $(".header-search-tab").toggleClass("gray");
            $(this).toggleClass('active');
        });
        $(".footer-mid-sublink").hover(function () {
            $(this).parent().parent().find(".footer-mid-sublink").toggleClass('gray');
            $(this).toggleClass('active');
        });
        $(".header-search-form").hover(function () {
            $(".header-search-drop").toggleClass("active");
        });
        $(".header-menu-item").mouseover(function () {
            $(".header-menu-bg").addClass('active');
        });
        $(".header-menu-item").mouseout(function () {
            $(".header-menu-bg").removeClass('active');
        });
    }
    $(".header-top-name").hover(function () {
        $(".header-top-border, .header-top-number").toggleClass('gray');
        $(this).toggleClass('black');
    });
    $(".header-top-like").hover(function () {
        $(".header-top-border, .header-top-number, .header-top-name").toggleClass('gray');
        $(this).find(".header-top-border").toggleClass('black');
    });
    $(".header-top-basket").hover(function () {
        $(".header-top-like .header-top-border, .header-top-name").toggleClass('gray');
        $(this).toggleClass('black');
    });

    //Collection - plus more colors
    $(".collection-third-more").click(function () {
        $(this).parent().find(".collection-third-change").addClass('active');
        $(this).hide();
    });


    //wishlist - share
    $(".wishlist-btn-share").click(function (e) {
        e.preventDefault();
        $(".wishlist-share").slideDown(500);
        $(".wishlist-share-card").slideUp(500);
        $(".wishlist-flex-justify").slideUp(500);
    });
    $(".wishlist-left-list").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".wishlist-right-list").eq(index).addClass('active').siblings().removeClass('active');

    });
    $(".popup-reset-close").click(function () {
        $(".popup-reset").removeClass('active');
    });
    $(".made-mob-item").click(function () {
        $(".shop-menu").slideToggle(500);
        $(".made-mob-arrow").toggleClass('active');
    });
    if (window.matchMedia("(max-width: 993px)").matches) {
        $(".wishlist-left-list").removeClass('active');
        $(".wishlist-left-list").click(function () {
            $(".wishlist-right").addClass('active');
            $(".wishlist-left").addClass('hide');
        });
        $(".wishlist-title").click(function () {
            $(".wishlist-right, .wishlist-form").removeClass('active');
            $(".wishlist-add").addClass('active');
            $(".wishlist-left").removeClass('hide');
            $(".wishlist-share").slideUp(500);
            $(".wishlist-share-card").slideDown(500);
            $(".wishlist-flex-justify").slideDown(500);
        });

    }
    $(".wishlist-btn-add").click(function () {
        $(".wishlist-add").removeClass('active');
        $(".wishlist-form").addClass('active');
    });
    $(".popup-cookie-accept").click(function (e) {
        e.preventDefault();
        $(".popup-cookie").removeClass('active');
    });
    // Progressive
    $(".progressive-sixth-list").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".progressive-sixth-main").eq(index).addClass('active').siblings().removeClass('active');
    });
    $(".progressive-sixth-main").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".progressive-sixth-list").eq(index).addClass('active').siblings().removeClass('active');
    });
    //My Bag
    $(".header-top-basket").click(function () {
        $(".popup-bag, .popup").addClass('active');
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
    //Meet
    $(".meet-card").click(function () {
        bodyFreezeScroll();
        let index = $(this).index();
        $(".meet-change-item").eq(index).addClass('active').siblings().removeClass('active');
    });
    $(".meet-close").click(function () {
        $(".meet-change-item").removeClass('active');
        bodyUnfreezeScroll();
    });
    $('.textlimited[maxlength]').keyup(function(){
        //get the fields limit
        var maxLength = $(this).attr("maxlength");

        // check if the limit is passed
        if(this.value.length > maxLength){
            return false;
        }

        // find the counter element by the id specified in the source input element
        var counterElement = $(".textcounter" + $(this).data("textcounterid"));
        // update counter  text
        counterElement.html((maxLength - this.value.length));
    });

    //Book - click on "change"
    $(".book-first-link").click(function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(".book-drop").addClass('active');
        $(".book-first-title").hide();
    });

    //Book - time choose
    $(".book-drop-list").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).addClass('active')){
            $('.book-block').slideUp(500);
            $('.book-second').slideDown(500);

        }
        $(".book-left-time").text($(".book-drop-list.active").text());
        $(".book-left-date").text($(".book-first-date").datepicker("getDate").getMonth() + "/" +  $(".ui-state-active").text() + "/" + $(".ui-datepicker-year").text());
    });
    $(".book-left-btn").click(function (e) {
        e.preventDefault();
        $('.book-block').slideDown(500);
        $('.book-second').slideUp(500);


    });
    //Book - date
    $(".book-first-date").datepicker();

    //
    $(".footer-mid-locator").click(function (e) {
        e.preventDefault();
        $(".footer-popup").addClass('active');
    });

    //Main - popup email
    $(".popup-email-close").click(function () {
        $(".popup-email").removeClass('active');
    });

    $(".collection-third-heart").click(function () {
        $(this).toggleClass('active');
    });

    //Product - header
    $(".product-svg").click(function () {
        $(".product-item").addClass('active');
    });

    if (window.matchMedia("(min-width: 994px)").matches) {
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
    } else {
        $(".product-slider") .slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            dots: true,
            vertical: false,
            prevArrow: document.querySelector('slider-prev'),
            nextArrow: document.querySelector('slider-next'),
        });
    }

    //Product - slider colors
    $(".product-colors").slick({
        slidesToShow: 9,
        arrows: true ,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 7,
                    variableWidth: true,
                    centerMode: false
                }
            }
        ]

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

    //Product - tabs lens
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
        $(".product-third-protection").eq(index).addClass('active').siblings().removeClass('active');
    });
    $(".product-third-tab_materials").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".product-third-material").eq(index).addClass('active').siblings().removeClass('active');
        $(".product-third-technology").eq(index).addClass('active').siblings().removeClass('active');
    });
    if (window.matchMedia("(min-width: 994px)").matches) {
        $(".product-btn-reviews").click(function (e) {
            e.preventDefault();
            $(".reviews").slideDown(400);
            var headHeight = $(".header").height();
            $('html,body').animate({scrollTop:$('.reviews').offset().top - headHeight + "px"},{duration:1E3});
        });
    } else {
        $(".product-mob-reviews").click(function (e) {
            e.preventDefault();
            $(".reviews").slideDown(400);
            var headHeight = $(".header").height();
            $('html,body').animate({scrollTop:$('.reviews').offset().top - headHeight + "px"},{duration:1E3});
        });
    }

    $(".product-slider-two").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    variableWidth: true,
                    centerMode: false
                }
            }
        ]
    });
    $(".product-slider-tree").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                    centerMode: false,
                    arrows: false
                }
            }
        ]
    });
    $(".product-slider-four").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    variableWidth: true,
                    centerMode: false,
                    arrows: false
                }
            }
        ]
    });



    $(".reviews-link").click(function (e) {
        e.preventDefault();
        $(".reviews-content").slideToggle(500);
        $(".reviews-write").slideToggle(500);
    });
    if (window.matchMedia("(min-width: 994px)").matches) {
        $(".product-btn-bag").click(function (e) {
            e.preventDefault();
            $(".product-bag").addClass('active');
        });
    } else {
        $(".product-btn-bag").click(function (e) {
            e.preventDefault();
            $(".product-bag").slideToggle(400);
        });
    }


    //Product - select a prescription type
    $(".popup-select-list").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".popup-select-side ").eq(index).addClass('active').siblings().removeClass('active');
    });
    $(".popup-select-list").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $(".popup-select-lens").eq(index).addClass('active').siblings().removeClass('active');
    });
    $(".popup-select-list").click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find(".popup-select-focus").addClass('active').parent().siblings().find(".popup-select-focus").removeClass('active');
        let index = $(this).index();
        $(".popup-material-technology").eq(index).addClass('active').siblings().removeClass('active');
    });

    //Product - open popup select lenses and next popup
    $(".product-first-btn").click(function (e) {
        e.preventDefault();
        $(".popup-select, .popup-prescription_type").addClass('active');
        bodyFreezeScroll();

    });
    $(".popup-next-type").click(function (e) {
        e.preventDefault();
        $(".popup-close").removeClass('active');
        $(".popup-lens").addClass('active');
    });
    $(".popup-next_material").click(function (e) {
        e.preventDefault();
        $(".popup-close").removeClass('active');
        $(".popup-material").addClass('active');
    });
    $(".popup-next-selections").click(function (e) {
        e.preventDefault();
        $(".popup-close").removeClass('active');
        $(".popup-prescription ").addClass('active');
    });
    $(".popup-next-measure").click(function (e) {
        e.preventDefault();
        $(".popup-close").removeClass('active');
        $(".popup-measure").addClass('active');
    });
    $(".popup-next-color").click(function (e) {
        e.preventDefault();
        $(".popup-close").removeClass('active');
        $(".popup-color").addClass('active');
    });
    $(".popup-next-boxes").click(function (e) {
        e.preventDefault();
        $(".popup-close").removeClass('active');
        $(".popup-boxes").addClass('active');
    });
    $(".popup-next-review").click(function (e) {
        e.preventDefault();
        $(".popup-close").removeClass('active');
        $(".popup-review").addClass('active');
    });
    $(".popup-lens-back").click(function () {
        $(".popup-close").removeClass('active');
        $(".popup-prescription_type").addClass('active');
    });
    $(".popup-material-back").click(function (){
        $(".popup-close").removeClass('active');
        $(".popup-lens").addClass('active');
    });
    $(".popup-review-back").click(function () {
        $(".popup-close").removeClass('active');
        $(".popup-material").addClass('active');
    });
    $(".popup-measure-back").click(function () {
        $(".popup-close").removeClass('active');
        $(".popup-prescription").addClass('active');
    });
    $(".popup-color-back").click(function () {
        $(".popup-close").removeClass('active');
        $(".popup-measure").addClass('active');
    });
    $(".popup-boxes-back").click(function () {
        $(".popup-close").removeClass('active');
        $(".popup-color").addClass('active');
    });
    //Product - close popup select lenses
    $(".popup-select-close").click(function () {
        $(".popup-select, .popup-close").removeClass('active');
        bodyUnfreezeScroll();
    });

    //Product - accordion in "review your lens selections"
    $(".popup-review-item").click(function () {
        $(this).parent().find(".popup-review-accordion").slideToggle(500);
        $(this).find(".popup-review-arrow").toggleClass('active');
    });

    $(".popup-prescription-select").select2({
        minimumResultsForSearch: -1,
    });
    $(".popup-prescription-subselect").select2({
        minimumResultsForSearch: -1,
        placeholder: '0.00'
    });
    $(".popup-measure-select").select2({
        minimumResultsForSearch: -1,
        placeholder: '--'
    });


    $(".popup-measure-face svg").click(function () {
        $(".popup-prescription-hover").addClass('active');
    });
    $(".popup-prescription-cancel").click(function (e) {
        e.preventDefault();
        $(".popup-prescription-hover").removeClass('active');
    });

    $(".popup-color-label").click(function () {
        $(this).parents().find(".popup-color-list").addClass('active').parents().siblings().removeClass('active');
        $(this).parent().parent().find(".popup-color-span").addClass('active').parent().parent().parent().siblings().removeClass('active');

        let getColor = $(this).css('background-color'),
            getColorLinse = $("#swatch").css('fill');
        if ( $(".checkbox").is(':checked') === true) {
            $("#swatch").css("fill", getColor);
        } else {

        }
    });
    $( ".popup-color-range" ).slider({
        animate: true,
        min: 0,
        max: 100,
        slide: function (event, ui )
        {
            var value = $(".popup-color-range").slider("value");
            var opacity = value / 100;
            $(".popup-color-change").css({ opacity: opacity });
            $( ".popup-color-level" ).val(ui.value + "% (Pale)" );
        }
    }).slider("value", 100);//startup value


    $( ".popup-color-level" ).val($( ".popup-color-range" ).slider( "value" ) + "% (Pale)" );

    $(".slick-arrow").text("");

    //Style - form face
    $(".style-third-item").click(function () {
        $(this).find(".style-third-figure, .style-third-heart").addClass('active').parent().siblings().find(".style-third-figure, .style-third-heart").removeClass('active');
    });


    //shop - slider in popup
    $(".popup-shop-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 1000
    });

    //shop - popup
    $(".shop-content-item").click(function (e) {
        e.preventDefault();
        $(".popup-shop").addClass('active');
        bodyFreezeScroll();
    });
    $(".popup-shop-close").click(function () {
        $(".popup-shop").removeClass('active');
        bodyUnfreezeScroll();
    });
    let shopHeight = $(".popup-shop").height(),
        winHeight = window.innerHeight;
    if(shopHeight > winHeight){
        $(".popup-shop").addClass("height");

    } else {
        $(".popup-shop").removeClass("height");
    }

    $(".popup-boxes-select").select2({
        minimumResultsForSearch: -1,
        placeholder: '0.00',
    }).data('select2').$dropdown.addClass('select-boxes-container');

    $(".popup-boxes-select2").select2({
        minimumResultsForSearch: -1,
        placeholder: '0.00',
    }).data('select2').$dropdown.addClass('select-boxes-container');
    $(".popup-boxes-select3").select2({
        minimumResultsForSearch: -1,
        placeholder: '0.00',
    }).data('select2').$dropdown.addClass('select-boxes-container');
    $(".popup-boxes-select4").select2({
        minimumResultsForSearch: -1,
        placeholder: '0.00',
    }).data('select2').$dropdown.addClass('select-boxes-container');
    $(".popup-boxes-select5").select2({
        minimumResultsForSearch: -1,
        placeholder: '0.00',
    }).data('select2').$dropdown.addClass('select-boxes-container');
    $(".popup-boxes-select6").select2({
        minimumResultsForSearch: -1,
        placeholder: '0.00',
    }).data('select2').$dropdown.addClass('select-boxes-container');
    $(".popup-boxes-select7").select2({
        minimumResultsForSearch: -1,
        placeholder: '0.00',
    }).data('select2').$dropdown.addClass('select-boxes-container');
    $(".popup-boxes-select8").select2({
        minimumResultsForSearch: -1,
        placeholder: '0.00',
    }).data('select2').$dropdown.addClass('select-boxes-container');
    $(".popup-boxes-select9").select2({
        minimumResultsForSearch: -1,
        placeholder: '0',
    }).data('select2').$dropdown.addClass('select-boxes-container');
    $(".popup-boxes-select10").select2({
        minimumResultsForSearch: -1,
        placeholder: '0',
    }).data('select2').$dropdown.addClass('select-boxes-container');


});

$(document).ready(function () {

    if (window.matchMedia("(max-width: 993px)").matches) {
        $(".popup-measure-face svg").click(function () {
            $(".popup-prescription-hover, .popup-measure-overlay").addClass('active');
        });
        $(".popup-prescription-cancel, .popup-measure-overlay").click(function (e) {
            e.preventDefault();
            $(".popup-prescription-hover, .popup-measure-overlay").removeClass('active');
        });
    }
    //Rewards - accordion
    $(".rewards-third-item").click(function () {
        $(this).parent().find(".rewards-third-drop").slideToggle(500).parents().siblings().find(".rewards-third-drop").slideUp(500);
        $(this).find(".rewards-third-plus, .rewards-third-main").toggleClass('active').parents().siblings().find(".rewards-third-plus, .rewards-third-main").removeClass('active');
    });
    $(".popup-type-one").click(function () {
        setTimeout(function () {
            $(".popup-type-list").hide();
            $(".popup-type-sunglasses").addClass('active');
        }, 500);
    });
    $(".popup-type-two").click(function () {
        setTimeout(function () {
            $(".popup-type-list").hide();
            $(".popup-type-optical").addClass('active');
        }, 500);
    });
    //Collection - read less
    $(".collection-drop").click(function () {
        $(".collection-change").slideToggle(500);
        $(".collection-drop-arrow").toggleClass('active');
    });

    //Lenses - slider
    $(".lenses-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1000
    });
    $(".collection-fouth-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    centerMode: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    variableWidth: true,
                    arrows: false,
                }
            }
        ]
    });
    $(".blog-fifth-blogs").slick({
        slidesToScroll: 1,
        slidesToShow: 5,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }

            },
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    variableWidth: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    variableWidth: true
                }

            },
        ]
    });

    //Light - range
    $( ".light-range" ).slider({
        animate: true,
        slide: function (event)
        {
            var value = $(".light-range").slider("value");
            var opacity = value / 100;
            $(".light-glasses-path").css({ opacity: opacity });
        }
    }).slider("value", 0.1);//startup value

    $(".light-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        dots: true
    });
    //Visit - slider
    $(".visit-slider").slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 1000,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000
    });
    $(".fifth-slider").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        variableWidth: true,
        centerMode: false,
        focusOnSelect: true,
        infinite: true
    });
    //terms
    if (window.matchMedia("(min-width: 768px)").matches) {
        $(".terms-tabs-item").on('click', function () {
            $(this).addClass('active').parent().siblings().find(".terms-tabs-item").removeClass('active');
            let index = $(this).index(),
                headHeight = $(".header").height();
            $('html,body').animate({scrollTop:$('.terms-article-tema').eq(index).offset().top - headHeight + "px"},{duration:1E3});

        });
    } else {
        $(".terms-tabs-item").on('click', function () {
            $(this).find(".terms-arrow").toggleClass('active').parents().siblings().find(".terms-arrow").removeClass('active');
            $(this).toggleClass('active').parent().siblings().find(".terms-tabs-item").removeClass('active');
            $(this).parent().find(".terms-drop").slideToggle(500);


        });

    }
    if (window.matchMedia("(max-width: 767px)").matches) {
        $(".style-menu-select").select2({
            minimumResultsForSearch: -1,
            placeholder: '0',
        }).data('select2').$dropdown.addClass('style-menu-container');
    }

    $(".collection-lv1").select2({
        minimumResultsForSearch: -1,
        placeholder: 'sort',
    });



});
$(document).ready(function () {
    $(".collection-third-color").click(function (e) {
        $(e.target).parent().parent().children().removeClass('active');
        $(e.target).parent().addClass('active');
        const closestSlideItem = $(e.target).closest(".collection-third-sub").find(".collection-slide-item");
        closestSlideItem.parent().children().removeClass('active');
        closestSlideItem.eq($(this).index()).addClass('active');
    });

    $(".header-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 800,
        cssEase: 'linear'
    });

    $(".second-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 800
    });
    function slickPause() {
        $('.second-slider').slick('slickPause');
        $('.header-slider').slick('slickPause');
    }
    slickPause();

    $('.second-slider').mouseover(function() {
        $(this).slick('slickPlay');
    });
    $('.second-slider').mouseout(function() {
        slickPause();
    });
    $('.header-slider').mouseover(function() {
        $(this).slick('slickPlay');
    });
    $('.header-slider').mouseout(function() {
        slickPause();
    });
    var $cacheHeader = $('.header');
    //store the initial position of the element
    var vTopHeader = $cacheHeader.offset().top - parseFloat($cacheHeader.css('margin-top').replace(/auto/, 0));
    $(window).scroll(function (event) {
        // what the y position of the scroll is
        var y = $(this).scrollTop();

        // whether that's below the form
        if (y > vTopHeader) {
            // if so, ad the fixed class
            $cacheHeader.addClass('active');
        } else {
            // otherwise remove it
            $cacheHeader.removeClass('active');
        }
    });
    $(".header-news-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        dots: false,
        arrows: true,
        prevArrow: ' <div class="slick-prev header-news-btn header-news-btn_prev">\n' +
            '                <svg width="9" height="17" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                    <path d="M4 1L1 4L4 7" stroke="white"/>\n' +
            '                </svg>\n' +
            '            </div>',
        nextArrow: '<div type="button" class="slick-next header-news-btn header-news-btn_next">\n' +
            '                <svg width="9" height="17" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                    <path d="M1 7L4 4L1 1" stroke="white"/>\n' +
            '                </svg>\n' +
            '            </div>',

    });
    if (window.matchMedia("(max-width: 993px)").matches) {
        var $cache1 = $('.brand-second-flex');
        //store the initial position of the element
        var vTop1 = $cache1.offset().top - parseFloat($cache1.css('margin-top').replace(/auto/, 0));
        $(window).scroll(function (event) {
            // what the y position of the scroll is
            var y = $(this).scrollTop();

            // whether that's below the form
            if (y >= vTop1) {
                // if so, ad the fixed class
                $cache1.addClass('stuck');
                $(".header").slideUp();
            } else {
                // otherwise remove it
                $cache1.removeClass('stuck');
                $(".header").slideDown();
            }
        });
    }
    //arrow up

    $('.post-third-bottom').append('<a href="#" id="go-top" title="up"><img src="img/arrow-up.svg" alt="" class="post-third-arrow"><p class="post-third-text">back to the beginning</p></a>');
    $('.brand-up-block').append('<div id="brand-up" title="up"></div>');
    $('.footer-bottom-up').append('<a href="#" id="go-top" title="up"><img src="img/arrow-up.svg" alt="" class="footer-bottom-arrow"> <p class="footer-bottom-top">TOP</p></a>');

    $(function() {
        $.fn.scrollToTop = function() {
            $(this).hide().removeAttr("href");
            if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
            var scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
                else $(scrollDiv).fadeIn("slow")
            });
            $(this).click(function() {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        }
    });

    $(function() {
        $("#go-top").scrollToTop();
    });
    $(function() {
        $.fn.scrollToTopTwo = function() {
            if ($(window).scrollTop() >= "250") $(this)
            var scrollDiv = $(this);
            $(window).scroll(function() {
                if ($(window).scrollTop() <= "250") $(scrollDiv)
                else $(scrollDiv)
            });
            $(this).click(function() {
                $("html, body").animate({scrollTop: 0}, "slow")
            })
        }
    });
    $(function() {
        $("#brand-up").scrollToTopTwo();
    });





    if (window.matchMedia("(max-width: 767px)").matches) {
        var $cache = $('.made-mob-fixed');
        //store the initial position of the element
        var vTop = $cache.offset().top - parseFloat($cache.css('margin-top').replace(/auto/, 0));
        $(window).scroll(function (event) {
            // what the y position of the scroll is
            var y = $(this).scrollTop();

            // whether that's below the form
            if (y >= vTop) {
                // if so, ad the fixed class
                $cache.addClass('stuck');
            } else {
                // otherwise remove it
                $cache.removeClass('stuck');
            }
        });
    }


    if (window.matchMedia("(min-width: 994px)").matches) {
        var $cache = $('.blog-header-container');
        //store the initial position of the element
        var vTop = $cache.offset().top - parseFloat($cache.css('margin-top').replace(/auto/, 0));
        $(window).scroll(function (event) {
            // what the y position of the scroll is
            var y = $(this).scrollTop();

            // whether that's below the form
            if (y >= vTop) {
                // if so, ad the fixed class
                $cache.addClass('stuck');
            } else {
                // otherwise remove it
                $cache.removeClass('stuck');
            }
        });
    }



});
$(document).ready(function () {
    var $cacheBlog = $('.blog-menu');
    //store the initial position of the element
    var vTopBlog = $cacheBlog.offset().top - parseFloat($cacheBlog.css('margin-top').replace(/auto/, 0));
    $(window).scroll(function (event) {
        // what the y position of the scroll is
        var y = $(this).scrollTop();

        // whether that's below the form
        if (y > vTopBlog) {
            // if so, ad the fixed class
            $cacheBlog.addClass('stuck');
        } else {
            // otherwise remove it
            $cacheBlog.removeClass('stuck');
        }
    });
    //FAQ - accordion
    $(".faq-menu-item").click(function () {
        $(this).parent().find(".faq-menu-drop").slideToggle(500).parents().siblings().find(".faq-menu-drop").slideUp(500);
        $(this).find(".faq-menu-text, .faq-menu-line, .faq-menu-plus").toggleClass('active').parents().siblings().find(".faq-menu-text, .faq-menu-line, .faq-menu-plus").removeClass('active');;
    });

    $(".brand-select").select2({
        minimumResultsForSearch: -1,
        placeholder: 'select a letter',
    }).data('select2').$dropdown.addClass('brand-select-drop');

});
$(document).ready(function () {
    $(".wishlist-select").select2({
        minimumResultsForSearch: -1
    }).data('select2').$dropdown.addClass('wishlist-select-container');
});