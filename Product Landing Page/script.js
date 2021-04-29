'use strict'

const hamburger = document.getElementById('menu-hamburger');
const hamburgerSpan1 = document.querySelector('.menu__hamburger span:first-child');
const hamburgerSpan2 = document.querySelector('.menu__hamburger span:last-child');
const navMenu = document.getElementById('nav-menu');
const navMenuUl = document.querySelector('.nav_menu ul');
const linkHome = document.getElementById('link-home');
const linkTrees = document.getElementById('link-trees');
const linkSub = document.getElementById('link-sub');
const linkVideo = document.getElementById('link-video');
const body = document.querySelector('body');
const open = document.querySelector(".open");
const treeOne = document.querySelector(".tree-one");
const treeTwo = document.querySelector(".tree-two");
const treeThree = document.querySelector(".tree-three");
const treeFour = document.querySelector(".tree-four");
const treeFive = document.querySelector(".tree-five");


let active = false;

hamburger.addEventListener('click', (e) => {
    if(active) { // close menu
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid black';
        hamburgerSpan1.style.background = "black";
        hamburgerSpan2.style.background = "black";
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
        hamburger.style.border = '2px solid white';
        hamburgerSpan1.style.background = "white";
        hamburgerSpan2.style.background = "white";
        body.style.overflow = 'hidden';
        active = true;
    }
});

linkHome.addEventListener('click', (e) => {
    if(window.screen.width < 812) {
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid black';
        hamburgerSpan1.style.background = "black";
        hamburgerSpan2.style.background = "black";
        document.getElementById('hero').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

linkTrees.addEventListener('click', (e) => {
    if(window.screen.width < 812) {        
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid black';
        hamburgerSpan1.style.background = "black";
        hamburgerSpan2.style.background = "black";
        document.getElementById('our-products').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

linkSub.addEventListener('click', (e) => {
    if(window.screen.width < 812) {        
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid black';
        hamburgerSpan1.style.background = "black";
        hamburgerSpan2.style.background = "black";
        document.getElementById('form-section').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

linkVideo.addEventListener('click', (e) => {
    if(window.screen.width < 812) {        
        e.preventDefault();
        hamburger.classList.remove('open');
        navMenu.classList.add('invisible');
        navMenu.classList.remove('fade-in');
        navMenu.classList.add('fade-out');
        hamburger.style.border = '2px solid black';
        hamburgerSpan1.style.background = "black";
        hamburgerSpan2.style.background = "black";
        document.getElementById('video-section').scrollIntoView();
        body.style.overflow = 'initial';
        active = false;
    }
});

treeOne.ontouchstart = function () {
const allClasses = [treeTwo, treeThree, treeFour, treeFive];

    if(open) {
    this.classList.remove('open');
    } else {
    allClasses.forEach(function(el) {
        el.classList.remove("open")
        });

    this.classList.add('open');
    }
}

treeTwo.ontouchstart = function () {
const allClasses = [treeOne, treeThree, treeFour, treeFive];

    if(open) {
    this.classList.remove('open');
    } else {
    allClasses.forEach(function(el) {
        el.classList.remove("open")
        });

    this.classList.add('open');
    }
}

treeThree.ontouchstart = function () {
const allClasses = [treeOne, treeTwo, treeFour, treeFive];

    if(open) {
    this.classList.remove('open');
    } else {
    allClasses.forEach(function(el) {
        el.classList.remove("open")
        });

    this.classList.add('open');
    }
}

treeFour.ontouchstart = function () {
const allClasses = [treeOne, treeTwo, treeThree, treeFive];

    if(open) {
    this.classList.remove('open');
    } else {
    allClasses.forEach(function(el) {
        el.classList.remove("open")
        });

    this.classList.add('open');
    }
}

treeFive.ontouchstart = function () {
const allClasses = [treeOne, treeTwo, treeThree, treeFour];

    if(open) {
    this.classList.remove('open');
    } else {
    allClasses.forEach(function(el) {
        el.classList.remove("open")
        });

    this.classList.add('open');
    }
}