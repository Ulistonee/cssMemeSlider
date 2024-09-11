const slides = document.querySelectorAll('.meme-slide');
const dots = document.querySelectorAll('.dot');
const indicators = document.querySelector('.indicators');
let currentIndex = 0;

let memes = [
    {
        id: 1,
        src: 'assets/images/pets-hight500/charly.png'
    },
    {
        id: 2,
        src: 'assets/images/pets-hight500/freddie.png'
    },
    {
        id: 3,
        src: 'assets/images/pets-hight500/jennifer.png'
    },
    {
        id: 4,
        src: 'assets/images/pets-hight500/scarlett.png'
    },
    {
        id: 5,
        src: 'assets/images/pets-hight500/katrine.png'
    }
]

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i === index);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

indicators.addEventListener('click', (event) => {
    if (event.target.classList.contains('dot')) {

    }
})

function init(){
    let slider = document.querySelector('.meme-slider')
    let image = document.createElement('img');

    image.classList.add('meme-slide');
    image.src = memes[currentIndex].src;
    slider.appendChild(image);
}

init();
