var btnOpen = document.querySelector(".open-model");
var modal = document.querySelector(".model");
var btnClose = document.querySelector(".model__footer button");
var iconClose = document.querySelector(".model__header i");

const toggleModal = () =>{
    modal.classList.toggle("hide")
}

btnOpen.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);