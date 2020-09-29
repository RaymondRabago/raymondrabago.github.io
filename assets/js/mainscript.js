(function(){

    // FOR DESKTOP MEDIA QUERY
    var mquery = window.matchMedia('(min-width: 992px)');
    mquery.addEventListener("change", function() {
       mediaQueryFunc(mquery);
    });
    mediaQueryFunc(mquery);


    // MEDIA QUERY FUNCTION
    function mediaQueryFunc (reso) {
        if(reso.matches) {
            desktopAnimation();
        }
    }

    // ANIMATION
    function desktopAnimation() {
        deskAnimation_header();
        deskAnimation_about();
        deskAnimation_featured();
        deskAnimation_experiments();
    }


    // SMOOTH SCROLL NAVBAR 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    /* SIDEBAR */
    var hamburger = document.querySelector('.hamburger');
    var sidebar_overlay = document.querySelector('.sidebar-overlay');

    hamburger.addEventListener('click', function(){
        var answer = this.classList.contains('hamburger--open');
        showSidebar(answer);
    });

    sidebar_overlay.addEventListener('click', function(){
        var answer = hamburger.classList.contains('hamburger--open');
        showSidebar(answer);
    });


    // AUTOMATED YEAR DATE 
    var date = new Date();
    document.querySelector('.copyright__span').innerHTML = date.getFullYear();


})();


function showSidebar(data) {
    
    var hamburger = document.querySelector('.hamburger');
    var sidebar = document.querySelector('.sidebar');
    var sidebar_overlay = document.querySelector('.sidebar-overlay');

    if(data === false) {
        hamburger.classList.add('hamburger--open'); 
        sidebar.classList.add('sidebar--show');
        sidebar_overlay.classList.add('sidebar-overlay--show');
        document.body.classList.add('body-overflow');

    } else { 
        hamburger.classList.remove('hamburger--open'); 
        sidebar.classList.remove('sidebar--show');
        sidebar_overlay.classList.remove('sidebar-overlay--show');         
        document.body.classList.remove('body-overflow');
    }
}


function deskAnimation_header() {
    /* ========== AFTER LOADING ========== */
    var afterloading = gsap.timeline();
    var element_transition = CSSRulePlugin.getRule('.elmnt-transition::after');

    afterloading
        .to(element_transition, {duration: 0.2, cssRule: {scaleX: 1}, stagger: 1})
        .to('.elmnt-transition__span', { duration: 0.4,  opacity:1})
        .to(element_transition, {duration: 0.4, cssRule: {transformOrigin: 'right', scaleX: 0}, stagger: 1})
        .to('.header-main-opacity', { duration: 0.5, opacity:1})
        .from('.header-background__span', {duration: 1, y:"100%", ease: Power4.easeOut, stagger: 0.2});


    /* ========== HEADER SCROLL ========== */
    gsap.to('.header-main', {
        scrollTrigger: {
            trigger: '.header',
            start: 'top top',
            scrub: 0.5
        },            
        y:"-50%", 
        ease: "none"
    });            
}


function deskAnimation_about() {
    
    /* ========= ABOUT TITLE ======== */
    gsap.from('.about-titles__span', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 50%',
        },
        duration: 1, 
        y:"100%", 
        ease: Power4.easeOut, 
        stagger: 0.2                   
    });

    /* ========= ABOUT PROFILE PIC ======== */
    var about_pfpic = gsap.timeline({
        scrollTrigger: {
            trigger: '.about-pfpic',
            start: 'top center',
        }
    });
    var about_pfpic_after = CSSRulePlugin.getRule('.about-pfpic::after');
    
    about_pfpic
        .to(about_pfpic_after, {duration: 0.4, cssRule: {scaleY: 1}})
        .to('.about-pfpic__img', { duration: 0.3,  opacity:1})
        .to(about_pfpic_after, {duration: 0.4, cssRule: {transformOrigin: 'bottom', scaleY: 0}})        
}


function deskAnimation_featured() {

    var scrollValue = {
        trigger: '.featured',
        start: 'top 80%',
        scrub: true,
    };

    gsap.to('.featured-slide-1st', {
        duration: 1.5,
        scrollTrigger: scrollValue,
        x:"-30%"
    });

    gsap.to('.featured-slide-2nd', {
        duration: 2.5,
        scrollTrigger: scrollValue,
        x:"-50%"
    });        
    
    gsap.to('.featured-slide-main', {
        duration: 3,
        scrollTrigger:{
            trigger: '.featured',
            start: 'top 80%',
            scrub: 0.8   
        },
        x:"-30%"
    });
    

    var featuredscroll = document.querySelectorAll('.ftcard');
    var ctr = 1;
    
    featuredscroll.forEach(function() {
        var ftcard = gsap.timeline({
            scrollTrigger:{
                trigger: '#ftcard'+ctr,
                start: 'top 90%',
                end: 'bottom 10%',
                scrub: 0.6,
            }
        });
    
        ftcard
            .from('.ftcard'+ctr+'-photo', {duration: 0.5, y:"30%"})
            .to('.ftcard'+ctr+'-photo', {duration: 0.5, y:"-10%"});  
            
        ctr++;
    
    });
    
    
}

function deskAnimation_experiments() {
    /* ========== FUN EXPERIMENTS ========== */
    var experiment_scroll = gsap.timeline({
        scrollTrigger: {
            trigger: '.experiment-info__title',
            start: 'top 60%'
        }
    });
    var experiment_title_after = CSSRulePlugin.getRule('.experiment-info__title::after');

    experiment_scroll.to(experiment_title_after, {duration: 0.5, cssRule: {y: '10%'}});  
}

