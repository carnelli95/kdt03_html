document.addEventListener('DOMContentLoaded', () => {

    const selectedImg = document.querySelector('#selectedImg')
    const selectImg = document.querySelectorAll('.selectImg')


    for (let img of selectImg) {
        img.addEventListener('click', () => {
            selectedImg.setAttribute('src', img.getAttribute('src'));
            selectedImg.setAttribute('alt', img.getAttribute('alt'));
            console.log(img.getAttribute('src'))
            console.log(img.getAttribute('alt'))
        }
    )}
})