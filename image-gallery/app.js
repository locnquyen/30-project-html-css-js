var images = document.querySelectorAll(".images img");
var gallery = document.querySelector(".gallery");
var galleryImg = document.querySelector('.gallery__inner img');
var currentIndex = 0;
var controlNext = document.querySelector(".next i");
var controlPrev = document.querySelector(".prev i");

const showGallery = () => {

    if (currentIndex == 0) {
        controlPrev.classList.add('hide');
    } else {
        controlPrev.classList.remove('hide');
    }

    if (currentIndex == images.length - 1) {
        controlNext.classList.add('hide');
    } else {
        controlNext.classList.remove('hide');
    }

    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show');
}

images.forEach((image, index) => {

    image.addEventListener('click', () => {
        currentIndex = index;
        showGallery()
    })
})
console.log(currentIndex);


var galleryClose = document.querySelector(".gallery__close i");
galleryClose.addEventListener('click', () => {
    gallery.classList.remove('show');
})

controlNext.addEventListener('click', () => {
    currentIndex++;
    showGallery()
})

controlPrev.addEventListener('click', () => {
    currentIndex--;
    showGallery()
})

document.addEventListener('keydown', event => {
    if (event.keyCode = 27) {
        gallery.classList.remove('show');
    }

})