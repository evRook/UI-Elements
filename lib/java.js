console.log('hello world')

let modal = document.querySelectorAll('.js-modal')
let img = document.querySelectorAll('.js-img--box')
let overlay = document.querySelector('.js-modal--overlay')

for(let i=0; i<img.length; i++){
    img[i].addEventListener('click', openModal = (event) => {
        overlay.classList.add('js-visible--overlay')
        modal[i].classList.add('js-visible--modal')
    })
}

// document.body.addEventListener('click', closeModal)

// function closeModal(){

// }