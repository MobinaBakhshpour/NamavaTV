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

// manage dropdown list of question
function initAccordion() {
    const questionElms = document.querySelectorAll(".questions__box__item__question")
    const answerElms = document.querySelectorAll('.questions__box__item__answer')

    questionElms.forEach((question) => {
        question.addEventListener("click", event => {

            answerElms.forEach(answer => {
                if (answer !== event.currentTarget.nextElementSibling) {
                    answer.classList.remove("show")
                }
            })
            event.currentTarget.nextElementSibling.classList.toggle('show')
            event.currentTarget.children[1].classList.toggle("active")

        })
    })
}


function initApp() {
    initHeader()
    initMoreBtn()
    initAccordion()
}

document.addEventListener("DOMContentLoaded", initApp)
