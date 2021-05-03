'use strict'

const hamburger = document.getElementById('menu-hamburger');
const navMenu = document.getElementById('nav-menu');
const linkIntro = document.getElementById('link-introduction');
const linkGuarantees = document.getElementById('link-guarantees');
const linkChaining = document.getElementById('link-chaining');
const linkFurtherInfo = document.getElementById('link-further_informations');
const linkRef = document.getElementById('link-reference');
const body = document.querySelector('body');

const yOffset = -10;


let active = false;

hamburger.addEventListener('click', (e) => {
    if(active) { // close menu
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        body.style.overflow = 'initial';
        active = false;
    } else { // open menu
        e.preventDefault();
        hamburger.classList.add('open');
        navMenu.classList.add('nav_overlay');
        navMenu.classList.add('fade-in');
        navMenu.classList.remove('fade-out');
        body.style.overflow = 'hidden';
        active = true;
    }
});

linkIntro.addEventListener('click', (e) => {
    if(window.screen.width < 848) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        window.scrollTo(0, 0);
        body.style.overflow = 'initial';
        active = false;
    }
});

linkGuarantees.addEventListener('click', (e) => {
    let elementPosition = document.getElementById('guarantees').offsetTop;

    if(window.screen.width < 848) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');

        if(window.screen.width < 382) {
            window.scrollTo({
                top: elementPosition - 80
              });
        } else {
            window.scrollTo({
                top: elementPosition - 60
              });
        }
          
        body.style.overflow = 'initial';
        active = false;
    }
});

linkChaining.addEventListener('click', (e) => {
    let elementPosition = document.getElementById('chaining').offsetTop;
    
    if(window.screen.width < 848) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');

        if(window.screen.width < 382) {
            window.scrollTo({
                top: elementPosition - 80
              });
        } else {
            window.scrollTo({
                top: elementPosition - 60
              });
        }

        body.style.overflow = 'initial';
        active = false;
    }
});

linkFurtherInfo.addEventListener('click', (e) => {
    let elementPosition = document.getElementById('further_informations').offsetTop;
    
    if(window.screen.width < 848) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');

        if(window.screen.width < 382) {
            window.scrollTo({
                top: elementPosition - 80
              });
        } else {
            window.scrollTo({
                top: elementPosition - 60
              });
        }

        body.style.overflow = 'initial';
        active = false;
    }
});

linkRef.addEventListener('click', (e) => {
    let elementPosition = document.getElementById('reference').offsetTop;

    if(window.screen.width < 848) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');

        if(window.screen.width < 382) {
            window.scrollTo({
                top: elementPosition - 80
              });

        } else {
            window.scrollTo({
                top: elementPosition - 60
              });
        }

        body.style.overflow = 'initial';
        active = false;
    }
});
