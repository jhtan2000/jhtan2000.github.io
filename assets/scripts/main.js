/* ========== MENU SHOW Y HIDDEN ========== */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/* --- Menu Show --- */
//Validate if const exists
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* --- Menu Hidden --- */
//Validate if const exists
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ========== REMOVE MENU MOBILE ========== */
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ========== CHANGE BACKGROUND HEADER ========== */
function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80){
        nav.classList.add('scroll-header')
    }
    else{
        nav.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)