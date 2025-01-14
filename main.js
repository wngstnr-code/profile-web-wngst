
// TOGGLE ICON NAVBAR

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
};

// SCROLL SECTION AVTIVE LINK

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.ForEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*='+id+']');
            });
        };
    });

    // STICKY NAVBAR
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // REMOVE TOGGLE ICON AND NAVBAR
    menuIcon.classList.remove('fa-x');
    navbar.classList.remove('active');
};

// SCROLL REVEAL
ScrollReveal({
    distance: '80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img, .portfolio-container, .contact form', {origin:'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});

// TYPED JS
