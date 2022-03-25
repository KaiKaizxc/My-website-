


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