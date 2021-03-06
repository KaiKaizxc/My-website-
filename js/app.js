


//Need to make a function that gets rid of the preloader


window.addEventListener('load', ()=> {
    const preload = document.querySelector('.preloader');
   
    setTimeout(()=> {
        preload.style.display = "none"
    }, 4700);
    
})



console.log("test")
// ======================= MENU SHOW HIDDEN =======================


const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");



// ====================== MENU SHOW ===============

if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
        navToggle.classList.add("nav__toggle__hide")
        console.log("test")
    })
}


// ======= MENU HIDDEN ==========
if (navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
        navToggle.classList.remove("nav__toggle__hide")
        console.log("man")
    })
}


// ========================== ARROW SKILLS ================================

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills(){
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills__content skills__close"
    }

    if (itemClass === "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open"


    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

 //loading effects here

// const loadBar = document.querySelector('skills__python')

// setTimeout(function() {
//     loadBar.addClass('active');
//   }, 500);


// ============================ QUALIFICATION TABS =========================

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content");

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');

        tab.forEach(tab=>{
            tab.classList.remove('qualification__active');
    })

        tab.classList.add("qualification__active")

    })
})


// ============================ SWIPER =======================================
var swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

// ============================= DARK LIGHT THEME ============================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const icontTheme = "fa-sun"


//previously selectedtopic 

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'fa-moon' : 'fa-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark'? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', ()=> {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})