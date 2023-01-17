const featuresTag = document.querySelector('.features')
const companyTag = document.querySelector('.company')
const subLinks = document.querySelectorAll('.focus')


const subMenu1 = document.querySelector('.sub-menu-1')
const subMenu2 = document.querySelector('.sub-menu-2')

const mobileMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.close-menu')

const menuOpenMobile = document.querySelector('.icon-menu-mobile')

const featuresMobiletag = document.querySelector('.features-mobile')
const subMenuMobile1 = document.querySelector('.mobile-menu .sub-link ')



featuresTag.addEventListener("click", () => {
    console.log("you clicked")
    subMenu1.classList.toggle('open')
})

companyTag.addEventListener('click', () => {
    console.log("you clicked")
    subMenu2.classList.toggle('open')
})

menuOpenMobile.addEventListener('click', () => {
    console.log("you clicked on mobile menu")
    mobileMenu.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none'
})

featuresMobiletag.addEventListener('click', () => {
    console.log("it works")
    subMenuMobile1.toggle('open')
})
