function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;
    if(scrollValue < 500) {
        navbar.classList.remove('navbarColor');
    } else {
        navbar.classList.add('navbarColor');
    }
}
window.addEventListener('scroll', changeBg);

window.addEventListener("hashchange", function() { scrollBy(0, -50) })


