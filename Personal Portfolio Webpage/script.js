const hamburger = document.getElementById('menu-hamburger');
const hamburgerSpan1 = document.querySelector('.menu__hamburger span:first-child');
const hamburgerSpan2 = document.querySelector('.menu__hamburger span:last-child');
const navMenu = document.getElementById('nav-menu');
const navMenuUl = document.querySelector('.nav_menu ul');
const linkHome = document.getElementById('link-home');
const linkAbout = document.getElementById('link-about');
const linkProjects = document.getElementById('link-projects');
const linkSkills = document.getElementById('link-skills');
const linkContact = document.getElementById('link-contact');
const body = document.querySelector('body');


let active = false;

// HAMBURGER
hamburger.addEventListener('click', (e) => {
    if(active) { // close menu
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid #1d0708';
        hamburgerSpan1.style.background = "#1d0708";
        hamburgerSpan2.style.background = "#1d0708";
        body.style.overflow = 'initial';
        active = false;

    } else { // open menu
        e.preventDefault();
        hamburger.classList.add('open');
        navMenu.classList.remove('invisible');
        navMenu.classList.add('nav_overlay');
        navMenu.classList.add('fade-in');
        navMenu.classList.remove('fade-out');
        navMenuUl.classList.add('nav_mobile');
        hamburger.style.border = '2px solid #FBF9F9';
        hamburgerSpan1.style.background = "#FBF9F9";
        hamburgerSpan2.style.background = "#FBF9F9";
        body.style.overflow = 'hidden';
        active = true;
    }
});

// OVERLAY NAV-LINKS
linkHome.addEventListener('click', (e) => {
    if(window.screen.width < 831) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid #1d0708';
        hamburgerSpan1.style.background = "#1d0708";
        hamburgerSpan2.style.background = "#1d0708";
        document.getElementById('hero').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

linkAbout.addEventListener('click', (e) => {
    if(window.screen.width < 831) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid #1d0708';
        hamburgerSpan1.style.background = "#1d0708";
        hamburgerSpan2.style.background = "#1d0708";
        document.getElementById('about').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

linkAbout.addEventListener('click', (e) => {
    if(window.screen.width < 831) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid #1d0708';
        hamburgerSpan1.style.background = "#1d0708";
        hamburgerSpan2.style.background = "#1d0708";
        document.getElementById('about').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

linkProjects.addEventListener('click', (e) => {
    if(window.screen.width < 831) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid #1d0708';
        hamburgerSpan1.style.background = "#1d0708";
        hamburgerSpan2.style.background = "#1d0708";
        document.getElementById('projects').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

linkSkills.addEventListener('click', (e) => {
    if(window.screen.width < 831) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid #1d0708';
        hamburgerSpan1.style.background = "#1d0708";
        hamburgerSpan2.style.background = "#1d0708";
        document.getElementById('my-skills').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

linkContact.addEventListener('click', (e) => {
    if(window.screen.width < 831) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid #1d0708';
        hamburgerSpan1.style.background = "#1d0708";
        hamburgerSpan2.style.background = "#1d0708";
        document.getElementById('contact').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

// SCROLL SECTIONS ACTIVE LINK
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);