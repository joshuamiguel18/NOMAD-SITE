var button = document.querySelector('.hamburger');
button.addEventListener('click', (e) => {
    e.preventDefault();
   

    document.querySelectorAll("nav ul li a").forEach((link => {
        link.classList.toggle('show2')
    }))

    document.querySelector("ul.links").classList.toggle('show');
    document.querySelector("svg").classList.toggle('rotate');
    document.querySelector("svg .line-top-bottom").classList.toggle('animate');
});



let currentIndex = 0;
const slides = document.querySelectorAll('.hero .slide');
const dots = document.querySelectorAll('.hero .dot');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    slides.forEach((slide, i) => {
        const isCurrent = i === currentIndex;

        const transformValue = isCurrent ? 'scale(1)' : 'scale(.8)';

        slide.style.transform = transformValue;

      });
      
    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.hero .slider').style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}


// setInterval(nextSlide, 5000); // Change slide every 3 seconds


let currentIndex2 = 0;
const background = document.querySelector('.inclusion .body');
const cards = document.querySelectorAll('.card');
const images = ["accomodation.jpg", "workspace.jpg", "community.jpg", "eating.jpg"];
const screenWidth = window.innerWidth;
function changeslide(index) {
    if (index < 0) {
        currentIndex2 = images.length - 1;
    } else if (index >= images.length) {
        currentIndex2 = 0;
    } else {
        currentIndex2 = index;
    }
    console.log(currentIndex2);
    console.log(images[currentIndex2]);



    
    background.style.backgroundImage = `url(/images/${images[currentIndex2]})`;
    cards.forEach((card) => {
        card.classList.remove('active-card');
    });

    // Add active-card class to the current card
    console.log(cards[0])
    cards[currentIndex2].classList.add('active-card');

}


function nextImage() {
    changeslide(currentIndex2 + 1);
}

function prevImage() {
    changeslide(currentIndex2 - 1);
}

function currentSlide(index) {
    changeslide(index);
}
changeslide(0)
setInterval(nextImage, 3000); // Change slide every 3 seconds

let currentIndex3 = 0;
const slides3 = document.querySelectorAll('.testimonials .slide');
const dots3 = document.querySelectorAll('.testimonials .dot');
const totalSlides3 = slides3.length;

function showSlide3(index) {
    if (index < 0) {
        currentIndex3 = totalSlides3 - 1;
    } else if (index >= totalSlides3) {
        currentIndex3 = 0;
    } else {
        currentIndex3 = index;
    }

    slides3.forEach((slide3, i) => {
        const isCurrent2 = i === currentIndex3;
        dots3[i].classList.toggle('active-dot', isCurrent2);
    });

    const translateValue = -currentIndex3 * 100 + '%';
    document.querySelector('.testimonials .slider').style.transform = 'translateX(' + translateValue + ')';
}

function nextSlide3() {
    showSlide3(currentIndex3 + 1);
}

function prevSlide3() {
    showSlide3(currentIndex3 - 1);
}

function currentSlide3(index) {
    showSlide3(index);
}
