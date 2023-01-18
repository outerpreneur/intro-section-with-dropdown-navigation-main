// desktop tags
const featuresTag = document.querySelector('.features')
const companyTag = document.querySelector('.company')
const subLinks = document.querySelectorAll('.focus')
// desktop arrows
const featuresArrowTag = document.querySelector('.arrow-1')
const companyArrowTag = document.querySelector('.arrow-2')

// submenu tags
const subMenu1 = document.querySelector('.sub-menu-1')
const subMenu2 = document.querySelector('.sub-menu-2')

// open / close mobile menu
const mobileMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.close-menu')
const menuOpenMobile = document.querySelector('.icon-menu-mobile')
const overflowTag = document.querySelector('.overflow')

// mobile arrows
const featuresArrowTagMobile = document.querySelector('.arrow-mobile-1')
const companyArrowTagMobile = document.querySelector('.arrow-mobile-2')

// submenu mobile menus
// menu 1
const featuresMobileTag = document.querySelector('.features-mobile')
const subMenuMobile1 = document.querySelector('.sub-menu-1-mobile')
// menu 2
const companyMobileTag = document.querySelector('.company-mobile')
const subMenuMobile2 = document.querySelector('.sub-menu-2-mobile')




featuresTag.addEventListener("click", () => {
    console.log("you clicked on features tag")
    subMenu1.classList.toggle('open')
    featuresArrowTag.classList.toggle('active-arrow')
})

companyTag.addEventListener('click', () => {
    console.log("you clicked on company tag")
    subMenu2.classList.toggle('open')
    companyArrowTag.classList.toggle('active-arrow')
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
    featuresArrowTagMobile.classList.toggle('active-arrow')
})

companyMobileTag.addEventListener('click', () => {
    console.log("You deoployed menu2")
    subMenuMobile2.classList.toggle('open')
    companyArrowTagMobile.classList.toggle('active-arrow')
})
