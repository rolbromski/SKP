$(window).ready(function() {
    
    window.sr = ScrollReveal();
    
    sr.reveal('.cooperation .column', { 
        scale: 1,
        afterReveal: function (domEl) {
            setTimeout(function(){
                $(".cooperation .icon1").addClass("draw");
            }, 0);
            setTimeout(function(){
                $(".cooperation .icon2").addClass("draw");
            }, 200);
            setTimeout(function(){
                $(".cooperation .icon3").addClass("draw");
            }, 400);
            setTimeout(function(){
                $(".cooperation .icon4").addClass("draw");
            }, 600);
        }
    }, 200);
    
    sr.reveal('.aboutUs .photo', { 
        distance: '60px',
        scale: 1,
        origin: 'left'
    }, 100);
    
    sr.reveal('.aboutUs .photo', { 
        distance: '60px',
        scale: 1,
        origin: 'left'
    }, 100);
    
    sr.reveal('.aboutUs .aboutUsContainer', { 
        distance: '60px',
        scale: 1,
        origin: 'right'
    }, 100);
    
    sr.reveal('.aboutUs .timeline', { 
        distance: '60px',
        scale: 1,
        origin: 'bottom'
    }, 200);
    
    sr.reveal('.ourTeam h2.sectionName', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 100);
    
    sr.reveal('.ourTeam h3.headline', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 200);
    
    sr.reveal('.ourTeam .desc', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 300);
    
    sr.reveal('.ourTeam .columnLeft', { 
        distance: '60px',
        scale: 1,
        origin: 'left'
    }, 100);
    
    sr.reveal('.ourTeam .columnRight', { 
        distance: '60px',
        scale: 1,
        origin: 'right'
    }, 100);
    
    sr.reveal('.services h2.sectionName', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 100);
    
    sr.reveal('.services h3.headline', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 200);
    
    sr.reveal('.services .desc', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 300);
    
    sr.reveal('.services .item', { 
        scale: 1
    }, 100);
    
    sr.reveal('.services2 .photo', { 
        distance: '60px',
        scale: 1,
        origin: 'left'
    }, 100);
    
    sr.reveal('.services2 .services2Container', { 
        distance: '60px',
        scale: 1,
        origin: 'right'
    }, 100);
    
    sr.reveal('.cooperation h2.sectionName', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 100);
    
    sr.reveal('.cooperation h3.headline', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 200);
    
    sr.reveal('.cooperation .desc', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 300);
    
    sr.reveal('.cooperation .info', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 100);
    
    sr.reveal('.rewardSection .title', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 100);
    
    sr.reveal('.rewardSection .item', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 100);
    
    sr.reveal('.career h2.sectionName', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 100);
    
    sr.reveal('.career h3.headline', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 200);
    
    sr.reveal('.career .desc', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 300);
    
    sr.reveal('.contact .map', { 
        distance: '60px',
        scale: 1,
        origin: 'left'
    }, 100);
    
    sr.reveal('.contact .contactContainer', { 
        distance: '60px',
        scale: 1,
        origin: 'right'
    }, 100);
    
    sr.reveal('.contact .items', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 100);
    
    sr.reveal('.contactForm h2.sectionName', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 100);
    
    sr.reveal('.contactForm h3.headline', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 200);
    
    sr.reveal('.contactForm .desc', { 
        scale: 1,
        distance: '30px',
        origin: 'bottom'
    }, 300);
    
});