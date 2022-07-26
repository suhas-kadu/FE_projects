
const navbar = document.getElementById('navbar')
let scrolled = false;

window.onscroll = () => {
    if(window.pageYOffset > 100) {
        navbar.classList.remove('top');
        if(!scrolled) {
            navbar.style.transform = 'translateY(-70px)';
        }
        setTimeout(() => {
            navbar.style.transform = 'translateY(0)';
            scrolled = true;
        }, 500)
    } else {
        navbar.classList.add('top');
        scrolled = false;
    }
}