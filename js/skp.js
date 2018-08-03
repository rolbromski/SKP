$(window).ready(function() {
    
    $(window).resize();
    
    $('.skSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 10000,
        fade: true,
        focusOnSelect: false,
        pauseOnHover: false
    });
    
    $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false,
        menu: '#menu',
        anchors: ['start', 'o-nas', 'zespol', 'uslugi', 'wspolpraca', 'kariera', 'kontakt'],
    });
    
    $('.navigation .link1').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".aboutUs").offset().top
        }, 1000);
    });
    
    $('.navigation .link2').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".ourTeam").offset().top-90
        }, 1000);
    });
    
    $('.navigation .link3').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".services").offset().top-90
        }, 1000);
    });
    
    $('.navigation .link4').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".cooperation").offset().top-90
        }, 1000);
    });
    
    $('.navigation .link5').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".career").offset().top-40
        }, 1000);
    });
    
    $('.navigation .link6').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".contact").offset().top-90
        }, 1000);
    });
    
    $(".navigationSection li:eq(0)").addClass("current");
    
    $(".skSlider").on("afterChange", function (event, slick, currentSlide) {
        $currentIndex = currentSlide;
        $(".navigationSection li").removeClass("current");
        $(".navigationSection li:eq("+ $currentIndex +")").addClass("current")
    });
    
    $('.navigationSection li[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.skSlider').slick('slickGoTo', slideno - 1);
    });
    
    $('.blueSection .box2').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".aboutUs").offset().top
        }, 1000);
    });
    
    $('.services .nextSection').click(function(e) {
        $('html, body').animate({
            scrollTop: $(".services2").offset().top-95
        }, 1000);
    });
    
    $('.careerSlider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: false,
        focusOnSelect: false,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 572,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    
    $('.careerSliderContainer .sliderPrev').click(function(e) {
        $('.careerSlider .slick-prev').click();
    });
    
    $('.careerSliderContainer .sliderNext').click(function(e) {
        $('.careerSlider .slick-next').click();
    });
    
    $('.clickButton').click(function(e) {
        $(this).next("button").click();
    });
    
    //
    
    $('.showAllRule').click(function(e) {
        $(this).parent().parent().find(".hidden").show();
        $(this).hide();
        e.preventDefault();
    });
    
    //
    
    $('#typewriteText').on('typewriteComplete', function() {
            $(this).typewrite({
                actions: [
                    {type: 'Witaj'},
                    {delay: 2000},
                    {remove: {num: 5, type: 'stepped'}},
                    {delay: 200},
                    {type: 'Hello'},
                    {delay: 2000},
                    {remove: {num: 5, type: 'stepped'}},
                    {delay: 200},
                    {type: 'Bonjour'},
                    {delay: 2000},
                    {remove: {num: 7, type: 'stepped'}},
                    {delay: 200},
                    {type: 'Wilkommen'},
                    {delay: 2000},
                    {remove: {num: 9, type: 'stepped'}},
                    {delay: 200}
                ]
            });
        })
        .typewrite({
        actions: [
            {type: 'Witaj'},
            {delay: 2000},
            {remove: {num: 5, type: 'stepped'}},
            {delay: 200},
            {type: 'Hello'},
            {delay: 2000},
            {remove: {num: 5, type: 'stepped'}},
            {delay: 200},
            {type: 'Bonjour'},
            {delay: 2000},
            {remove: {num: 7, type: 'stepped'}},
            {delay: 200},
            {type: 'Wilkommen'},
            {delay: 2000},
            {remove: {num: 9, type: 'stepped'}},
            {delay: 200}
        ]
    });
    
    //
    
    $('.servicesSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: false,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: false,
        focusOnSelect: false,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 572,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });
    
    $('.services2 .sliderPrev').click(function(e) {
        $('.servicesSlider .slick-prev').click();
    });
    
    $('.services2 .sliderNext').click(function(e) {
        $('.servicesSlider .slick-next').click();
    });
    
    function showPageMask(){
        $(".pageMask").addClass("active");
    }
    
    function hidePageMask(){
        $(".pageMask").removeClass("active");
    }
    
    function showAside(){
        $(".aside").addClass("active");
        $('body').addClass("noscroll");
    }
    
    function hideAside(){
        $(".aside").removeClass("active");
        $('body').removeClass("noscroll");
    }
    
    $(".pageMask").click(function(e) {
        hidePageMask();
        hideAside();
        e.preventDefault();
    });
    
    $(".showAside").click(function() {
        showPageMask();
        setTimeout(function() {
            showAside();
        }, 500);
    });
    
    $(".closeProductDetails").click(function() {
        hideAside();
        hidePageMask();
    });
    
    $('ol > li').each(function() {
        $(this).prepend("<span>" + ($(this).index() +1) + "</span>");
    });
    
    //
    
    function showMobileMenu(){
        $(".hamburger").addClass("disabled");
        $(".closeMenu").removeClass("disabled");
        $('.mobileMenu').addClass("active");
        $('.header').addClass("whiteMobile");
    }
    
    function closeMobileMenu(){
        $(".hamburger").removeClass("disabled");
        $(".closeMenu").addClass("disabled");
        $('.mobileMenu').removeClass("active");
        $('.header').removeClass("whiteMobile");
    }
    
    $(".hamburger").click(function(e) {
        showMobileMenu();
    });
    
    $(".closeMenu, .mobileMenu a").click(function(e) {
        closeMobileMenu();
    });

});

$(window).on('load', function() {
    
});

$(window).on('resize', function() {
    
    if ($(window).width() > 1440) {
        $(".hamburger").removeClass("disabled");
        $(".closeMenu").addClass("disabled");
        $('.mobileMenu').removeClass("active");
        $('.header').removeClass("whiteMobile");
    }
    
});

$(window).scroll(function(){
    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".header").addClass("white");
        $(".hamburger").addClass("top");
        $(".closeMenu").addClass("top");
    }
    else {
        $(".header").removeClass("white");
        $(".hamburger").removeClass("top");
        $(".closeMenu").removeClass("top");
    }
    
    
    
});