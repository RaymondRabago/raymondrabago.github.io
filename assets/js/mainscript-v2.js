/* CHECK IF THERE IS THE ELEMENT */ 
const isThere = (element) => {
    return typeof(element) != 'undefined' && element != null;
}

const siteFunc = {

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


    init: () => {
    
    },
}

// During Scroll
window.addEventListener('scroll', () => {
    siteFunc.updateActiveSection();
});