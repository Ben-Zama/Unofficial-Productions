/* Sidebar open & close function */

var hamburger = document.getElementById('hamburger')
var close = document.getElementById('navCloseBtn')
var sidebar = document.getElementById('sidebar')

hamburger.addEventListener('click', () => {
    sidebar.style.bottom = '0'
    sidebar.style.transition = '1s'
})
close.addEventListener('click', () => {
    sidebar.style.bottom = '2000px'
    sidebar.style.transition = '1s'
})

/* Get current year */

document.getElementById('year').innerHTML = new Date().getFullYear();
document.getElementById('year2').innerHTML = new Date().getFullYear();
