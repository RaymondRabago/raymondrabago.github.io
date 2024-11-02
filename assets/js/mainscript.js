/* CHECK IF THERE IS THE ELEMENT */ 
const isThere = (element) => {
    return typeof(element) != 'undefined' && element != null;
}

const siteFunc = {

    initMobNavbar: () => {
        const hamburger = document.querySelector('.hamburger');

        if(isThere(hamburger)) {
            hamburger.addEventListener('click', function(){
                let answer = this.classList.contains('hamburger--open');
                siteFunc.showMobNavbar(answer);
            });
        }
     
    },

    activateMobOverlayFunc: () => {
        const hamburger = document.querySelector('.hamburger');
        const menuOverlay = document.querySelector('.navbar-overlay');

        if(isThere(sidebar_overlay)  && isThere(hamburger)) {
            menuOverlay.addEventListener('click', function(){
                let answer = hamburger.classList.contains('hamburger--open');
                siteFunc.showMobNavbar(answer);
            });   
        }        
    },

    showMobNavbar: (data) => {
        let hamburger = document.querySelector('.hamburger');
        let menu = document.querySelector('.navbar-menu');

        if(isThere(hamburger) && isThere(menu)) {
            if(data === false) {
                hamburger.classList.add('hamburger--open'); 
                menu.classList.add('navbar-menu--show');
                document.body.classList.add('body-overflow');

                // CREATE MENU OVERLAY 
                const menuOverlay = document.createElement('span');
                menuOverlay.className = 'navbar-overlay';
                document.body.append(menuOverlay);
                siteFunc.activateMobOverlayFunc();

            } else { 
                hamburger.classList.remove('hamburger--open'); 
                menu.classList.remove('navbar-menu--show');
                document.body.classList.remove('body-overflow');

                // REMOVE MENU OVERLAY 
                document.querySelector('.navbar-overlay').remove();
            }
        }

    },

    updateActiveSection: () => {
        const sections = document.querySelectorAll('.js-section');

        sections.forEach((section) => {
            const halfwindow = window.innerHeight / 2;
            const curPos = window.scrollY;
            let newPosition = section.getBoundingClientRect().top + window.scrollY - halfwindow;

            const menus = ['.navbar__link', '.sidebar-menu__link'];

            if (newPosition <= curPos) {
                const sectionId = section.getAttribute('id');

                menus.forEach((menu) => {
                    const navbarLinks = document.querySelectorAll(`${menu}`);
                    const activeNavLink = document.querySelector(`${menu}[href="#${sectionId}"]`);
    
                    // Remove the class in the navbar
                    navbarLinks.forEach((navLink) => {
                        navLink.classList.remove('active');
                    });
    
                    if(isThere(activeNavLink)) {
                        // Add class to the active navbar
                        activeNavLink.classList.add('active');
                    }
                })


            }
    

        })

    },

    goToSection: () => {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

    },

    automatedYear: () => {
        var date = new Date();
        document.querySelector('.copyright__span').innerHTML = date.getFullYear();
    },

    init: () => {
        siteFunc.initMobNavbar();
        siteFunc.goToSection();
        siteFunc.automatedYear();
    },
}

window.addEventListener("DOMContentLoaded", (event) => {
    siteFunc.init();

    /* RELOAD WHEN RESIZE */
    // window.onresize = () => location.reload();
});

// DURING SCROLL
window.addEventListener('scroll', () => {
    siteFunc.updateActiveSection();
});