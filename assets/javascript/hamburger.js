

const hamburger = document.getElementById('hamburger')
const navItems = document.getElementsByClassName('nav_items')
hamburger.addEventListener('click', (event) => {
    Array.from(navItems).forEach(navItem => {
        navItem.classList.toggle('nav_items--hidden');
    })
})