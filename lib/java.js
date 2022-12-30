
let modal = document.querySelectorAll('.js-modal')
let img = document.querySelectorAll('.js-img--box')
let overlay = document.querySelector('.js-modal--overlay')
let closeBtn = document.querySelectorAll('.js-modal--closeBtn')

for(let i=0; i<img.length; i++){
    img[i].addEventListener('click', openModal => {
        overlay.classList.add('js-visible--overlay')
        modal[i].classList.add('js-visible--modal')
    })
}

for(k=0; k<closeBtn.length; k++){
    closeBtn[k].addEventListener('click', closeModal => {
        overlay.classList.remove('js-visible--overlay')
        for(j=0; j<modal.length; j++){
            modal[j].classList.remove('js-visible--modal')
        }
    })
}