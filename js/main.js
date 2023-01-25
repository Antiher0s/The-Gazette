// SWIPER
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', 
    loop: true,
    autoplay: {
        delay: 8000,
    },
});
// SCROLL UP
var halfWindow = window.innerHeight / 2;
var scrollButton = document.querySelector(".btn-scroll-up");
var lastScroll = 0;
window.addEventListener("scroll", function(){
    var scrolled = window.scrollY;
    if(scrolled >= halfWindow){
        scrollButton.classList.add('--active');
    } else {
        scrollButton.classList.remove('--active');
    }
})
scrollButton.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

// SEARCH
var recherche = document.querySelector('.loupe');
var barreRecherche = document.querySelector('.research')
var navigation = document.querySelector('nav')
// Evenments
recherche.addEventListener('click', function() {
    var searchInput = document.querySelector('.search');
    if(barreRecherche.classList.contains('research')){
    barreRecherche.classList.remove('research');
    searchInput.focus();
    } else {
        barreRecherche.classList.add('research');
    }
});


