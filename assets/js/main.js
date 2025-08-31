//up/down header

const headerElem = document.querySelector('.header')
let lastScroll = 0;

const showHeaderHandler = () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 20) {
        headerElem.classList.add('header--hidden')
    } else {
        headerElem.classList.remove('header--hidden')
    }
    lastScroll = currentScroll
}

window.addEventListener('scroll', showHeaderHandler)

