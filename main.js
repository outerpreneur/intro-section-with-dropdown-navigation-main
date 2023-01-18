const featuresTag = document.querySelector('.features')
const companyTag = document.querySelector('.company')
const subLinks = document.querySelectorAll('.focus')


const subMenu1 = document.querySelector('.sub-menu-1')
const subMenu2 = document.querySelector('.sub-menu-2')

const mobileMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.close-menu')

const menuOpenMobile = document.querySelector('.icon-menu-mobile')
const overflowTag = document.querySelector('.overflow')

const featuresMobileTag = document.querySelector('.features-mobile')
const subMenuMobile1 = document.querySelector('.sub-menu-1-mobile')

const companyMobileTag = document.querySelector('.company-mobile')
const subMenuMobile2 = document.querySelector('.sub-menu-2-mobile')

const bodyTag = document.querySelector("body")



featuresTag.addEventListener("click", () => {
    console.log("you clicked on features tag")
    subMenu1.classList.toggle('open')
})

companyTag.addEventListener('click', () => {
    console.log("you clicked on company tag")
    subMenu2.classList.toggle('open')
})

menuOpenMobile.addEventListener('click', () => {
    console.log("you clicked on mobile menu")
    mobileMenu.style.display = 'block'
    overflowTag.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    console.log("you closed mobile menu")
    mobileMenu.style.display = 'none'
    overflowTag.style.display = 'none'
})

featuresMobileTag.addEventListener('click', () => {
    console.log("you deployed menu1")
    subMenuMobile1.classList.toggle('open')
})

companyMobileTag.addEventListener('click', () => {
    console.log("You deoployed menu2")
    subMenuMobile2.classList.toggle('open')
})
