// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar')

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset ||
        this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// Typed librairie importé
var typed = new Typed('.typed', {
    strings: ["Salut wesh ça va ou bien ???", "Bonjour si vous êtes ici c'est que vous consultez mon CV miinnnce", "Après une carrière dans différents secteurs, mais toujours en tant que représentant. J'ai du commencé à apprendre à utiliser différents langages informatiques par exemple le VBA. C'est pour cela que pour moi l'apprentissage du code, me semblait une suite logique et surtout une passion. Depuis près de 6 mois je me forme en autodidacte aux langages Front, afin de devenir rapidement Dev Web. Je continuerais dans le but d'apprendre la partie programmation avec le langage Python."],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackSpeed: true, // default
    loop: false,
});

// Compteur lives

let compteur = 0;

$(window).scroll(function() {

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 10000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});
//AOS
AOS.init();