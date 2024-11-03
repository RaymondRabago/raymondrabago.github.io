const deskAnimationFunc = { 

    animateHeader:() =>  {
        /* ========== AFTER LOADING ========== */
        let afterloading = gsap.timeline();
        let element_transition = CSSRulePlugin.getRule('.elmnt-transition::after');
    
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
    },

    animateAbout: () => {
    
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
        let about_pfpic = gsap.timeline({
            scrollTrigger: {
                trigger: '.about-pfpic',
                start: 'top center',
            }
        });
        let about_pfpic_after = CSSRulePlugin.getRule('.about-pfpic::after');
        
        about_pfpic
            .to(about_pfpic_after, {duration: 0.4, cssRule: {scaleY: 1}})
            .to('.about-pfpic__img', { duration: 0.3,  opacity:1})
            .to(about_pfpic_after, {duration: 0.4, cssRule: {transformOrigin: 'bottom', scaleY: 0}})        
    },

    animateFeatureProj: () => {

        const scrollValue = {
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
        
    
        const featuredscroll = document.querySelectorAll('.ftcard');
        let ctr = 1;
        
        featuredscroll.forEach(function() {
            let ftcard = gsap.timeline({
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
        
    },    

    animateExperiments: () => {
        /* ========== FUN EXPERIMENTS ========== */
        const experiment_scroll = gsap.timeline({
            scrollTrigger: {
                trigger: '.experiment-info__title',
                start: 'top 60%'
            }
        });
        const experiment_title_after = CSSRulePlugin.getRule('.experiment-info__title::after');
    
        experiment_scroll.to(experiment_title_after, {duration: 0.5, cssRule: {y: '10%'}});  
    },
    
    init: () => {
        deskAnimationFunc.animateHeader();
        deskAnimationFunc.animateAbout();
        deskAnimationFunc.animateFeatureProj();
        deskAnimationFunc.animateExperiments();
    }

}

window.addEventListener("DOMContentLoaded", (event) => {
    deskAnimationFunc.init();
});

