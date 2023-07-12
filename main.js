const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuIcon = document.querySelector('.menu')
const menuCarIcon = document.querySelector('.navbar-shopping-cart')
const mobileMenu = document.querySelector('.mobile-menu')
const asideShopCart = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu);
menuIcon.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleAsideCart)


function toggleDesktopMenu() {
    const isAsideShopCartClosed = asideShopCart.classList.contains('inactive')

    if (!isAsideShopCartClosed) {
        asideShopCart.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideShopCartClosed = asideShopCart.classList.contains('inactive')

    if (!isAsideShopCartClosed) {
        asideShopCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleAsideCart() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    asideShopCart.classList.toggle('inactive');

}