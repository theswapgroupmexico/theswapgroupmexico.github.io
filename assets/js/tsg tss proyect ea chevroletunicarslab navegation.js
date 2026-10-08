
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("bd-grid-nav",window.scrollY>10);
  })

  window.addEventListener("scroll", function(){
    var logoscroll = document.querySelector(".svg_bmwlogoscroll");
    logoscroll.classList.toggle("bmwlogo_scroll", window.scrollY>10);
  })

  window.addEventListener("scroll", function(){
    var logovideo = document.querySelector(".svg_bmwlogovideo");
    logovideo.classList.toggle("bmwlogo_video", window.scrollY>10);
  })




/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }
};
showMenu("nav-toggle", "nav-menu");

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL SECTIONS ACTIVEN LINK =====*/
const sections = document.querySelectorAll("section[id]");

function scrollActiven() {
    const scrollY = window.scrollY;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50; // Ajusta el margen superior
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(`.nav__menu a[href*=${sectionId}]`)
                ?.classList.add("activen");
        } else {
            document
                .querySelector(`.nav__menu a[href*=${sectionId}]`)
                ?.classList.remove("activen");
        }
    });
}

window.addEventListener("scroll", scrollActiven);

/*===== SMOOTH SCROLL TO SECTIONS =====*/
navLink.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

/*===== ICON TOGGLE =====*/
const icono = document.getElementById("miIcono");

icono.addEventListener("click", function () {
    if (icono.classList.contains("uil-align-center-alt")) {
        icono.classList.remove("uil-align-center-alt");
        icono.classList.add("uil-times");
    } else {
        icono.classList.remove("uil-times");
        icono.classList.add("uil-align-center-alt");
    }
});


/*===== RESET ICONO AL HACER CLIC EN .nav__link =====*/
navLink.forEach((link) => {
    link.addEventListener("click", () => {
        // Al hacer clic en un enlace, restauramos el icono a su estado inicial
        if (icono.classList.contains("uil-times")) {
            icono.classList.remove("uil-times");
            icono.classList.add("uil-align-center-alt");
        }
    });
});

/*===== RESET ICON ON CLICK ANYWHERE =====*/
document.addEventListener("click", function(e) {
    // Aseguramos que el clic no afecte el icono ni el menú
    if (
        !icono.contains(e.target) && 
        !document.getElementById("nav-menu").contains(e.target) &&
        !e.target.closest('section[id]')
    ) {
        // Si el clic fue fuera de estos elementos, restablecer el icono a "uil-align-center-alt"
        if (icono.classList.contains("uil-times")) {
            icono.classList.remove("uil-times");
            icono.classList.add("uil-align-center-alt");
        }
    }
});















// window.addEventListener('scroll', function() {
//     const logo = document.querySelector('.bmwlogo_scroll');

//     if (window.scrollY > 100) {  // Si el scroll es mayor a 100px
//         logo.classList.add('scrolled');
//     } else {
//         logo.classList.remove('scrolled');
//     }
    
// });

// window.addEventListener('scroll', function() {
//     const logo = document.querySelector('.bmwlogo_video');

//     if (window.scrollY > 100) {  // Si el scroll es mayor a 100px
//         logo.classList.add('scrolled');
//     } else {
//         logo.classList.remove('scrolled');
//     }
    
// });



// window.addEventListener('scroll', function() {
//     const logoanimation = document.querySelector('.logoanimation');

//     if (window.scrollY > 100) {  // Si el scroll es mayor a 100px
//         logoanimation.classList.add('scrolled');
//     } else {
//         logoanimation.classList.remove('scrolled');
//     }
// });






// gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// ScrollSmoother.create({
//   smooth: 3,
//   effects: true,
//   smoothTouch: 0.1,
//   normalizeScroll: true
// })

