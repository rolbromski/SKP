$(window).ready(function() {
    
    $(window).resize();
    
    /*
     
    new Vivus('bigCirclesSvg', {
        type: 'delayed',
        start: 'autostart',
        duration: 100
    });
    
    setTimeout(function() {
        new Vivus('whyCircle1', {
            type: 'delayed',
            start: 'autostart',
            duration: 80
        });
    }, 100);
    
    setTimeout(function() {
        new Vivus('whyCircle2', {
            type: 'delayed',
            start: 'autostart',
            duration: 80
        });
    }, 120);
    
    setTimeout(function() {
        new Vivus('whyCircle3', {
            type: 'delayed',
            start: 'autostart',
            duration: 80
        });
    }, 140);
    
    setTimeout(function() {
        new Vivus('whyCircle4', {
            type: 'delayed',
            start: 'autostart',
            duration: 80
        });
    }, 160);
    
    var path = document.querySelector('.test1');
    alert(path.getTotalLength());
    
    */
   
   
    $('#fullpage').fullpage({
        autoScrolling: false,
        fitToSection: false,
        scrollingSpeed: 1500,
        menu: '#menu',
        anchors: ['homePage', 'whyPage', 'clientsPage', 'websitesPage', 'premiumPage', 'whoPage', 'contactPage'],
    });
    
    $('.scrollDown a').click(function(){
        $.fn.fullpage.moveSectionDown();
    });
    
    $('.scrollUp a').click(function(){
        $('html,body').animate({scrollTop: $('body').offset().top}, 1200);
    });
    
    $('.muffinSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        focusOnSelect: false,
        arrows: true,
        dots: false,
        autoplay: false,
        autoplaySpeed: 5000,
        fade: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
    $('.quoteSlider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: false,
        focusOnSelect: true,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
    $('.logoSlider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: false,
        focusOnSelect: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1
              }
            }
        ]
    });
    
});

$(window).scroll(function(){
    
});

$(window).resize(function() {
    
    
});