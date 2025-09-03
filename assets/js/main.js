//show or hide header
function initHeader() {
    const headerElem = document.querySelector('.header')
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset;

        if (currentScroll > lastScroll && currentScroll > 20) {
            headerElem.classList.add('header--hidden')
        } else {
            headerElem.classList.remove('header--hidden')
        }
        lastScroll = currentScroll
    })
}

// show more or less of the config__features
function initMoreBtn() {
    const moreBtn = document.querySelector(".config__features__moreBtn")
    const cols = document.querySelectorAll(".col2, .col3, .col4");
    const titleMoreBtn = document.querySelector(".config__features__moreBtn span");
    const svgMoreBtn = document.querySelector(".config__features__moreBtn svg");

    moreBtn.addEventListener("click", () => {
        const isOpen = svgMoreBtn.classList.toggle("active")
        cols.forEach(elm => {
            elm.classList.toggle('is-open')
        })
        titleMoreBtn.innerHTML = isOpen ? "اطلاعات کمتر" : "اطلاعات بیشتر";

    })
}


function initApp() {
    initHeader()
    initMoreBtn()
}

document.addEventListener("DOMContentLoaded", initApp)
