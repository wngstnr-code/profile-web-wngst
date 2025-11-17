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


document.addEventListener('DOMContentLoaded', function() {
    
    emailjs.init("6LTGIqIQX4guZrVLc");

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) { 
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            emailjs.sendForm('service_erul6cq', 'template_qoymze9', this)
                .then(function() {
                    
                    Toastify({
                        text: "✅ Message sent successfully!",
                        duration: 3000,
                        gravity: "top",
                        position: "right",
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                        }
                    }).showToast();
                    
                    contactForm.reset(); 
                    
                }, function(error) {
                    
                    Toastify({
                        text: "❌ Failed: " + error.text, 
                        duration: 5000,
                        gravity: "top",
                        position: "right",
                        style: {
                            background: "linear-gradient(to right, #ff0015ff, #fe5842ff)",
                        }
                    }).showToast();
                });
        });
    } else {
        console.error('Form dengan ID "contactForm" tidak ditemukan.');
    }
});

// CAROUSEL 1 FUNCTIONALITY
let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('#carousel1 .carousel-slide');
    const dots = document.querySelectorAll('#dots1 .dot');
    
    if (!slides.length) return; 
    
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function moveSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
    showSlide(index);
}

// CAROUSEL 2 FUNCTIONALITY
let currentSlideIndex2 = 0;

function showSlide2(index) {
    const slides = document.querySelectorAll('#carousel2 .carousel-slide');
    const dots = document.querySelectorAll('#dots2 .dot');
    
    if (!slides.length) return; 
    
    if (index >= slides.length) {
        currentSlideIndex2 = 0;
    } else if (index < 0) {
        currentSlideIndex2 = slides.length - 1;
    } else {
        currentSlideIndex2 = index;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex2].classList.add('active');
    dots[currentSlideIndex2].classList.add('active');
}

function moveSlide2(direction) {
    showSlide2(currentSlideIndex2 + direction);
}

function currentSlide2(index) {
    showSlide2(index);
}

// Auto slide every 5 seconds
setInterval(() => {
    moveSlide(1);
    moveSlide2(1);
}, 5000);
