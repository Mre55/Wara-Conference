const openMobileMenu = document.querySelector('.hamburger-icon');
const closeMobileMenu = document.querySelector('.close-button');
const menuContainer = document.querySelector('.mobile-menu-list');
const humburgerButton = document.querySelector('.hamburger-icon');
const mobile_menu = document.querySelector('.mobile-menu')

closeMobileMenu.addEventListener('click', ()=> {
    mobile_menu.classList.remove('active');
    humburgerButton.classList.remove('hide');
})

menuContainer.addEventListener('click', ()=> {
    mobile_menu.classList.remove('active');
    humburgerButton.classList.remove('hide');
})

openMobileMenu.addEventListener('click', ()=> {
    mobile_menu.classList.add('active');
    humburgerButton.classList.add('hide');
})