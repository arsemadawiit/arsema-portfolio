/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {

        const id = link.getAttribute("href");

        if (id.length > 1) {

            const target = document.querySelector(id);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


/* =========================================================
   CHANGING HERO STATEMENT
   ========================================================= */

const changingWord = document.querySelector(".hero-changing-word");

const heroWords = [
    "PRODUCT DESIGNER",
    "FRONTEND DEVELOPER",
    "VISUAL STORYTELLER",
    "CREATIVE TECHNOLOGIST"
];

let currentWord = 0;


if (changingWord) {

    setInterval(() => {

        /* Fade current phrase out */

        changingWord.classList.add("word-out");


        setTimeout(() => {

            /* Move to next phrase */

            currentWord =
                (currentWord + 1) % heroWords.length;

            changingWord.textContent =
                heroWords[currentWord];


            /* Fade new phrase in */

            changingWord.classList.remove("word-out");

        }, 300);

    }, 2400);

}


/* =========================================================
   BACK TO TOP
   ========================================================= */

const backToTopButton =
    document.querySelector(".back-to-top");


if (backToTopButton) {

    function updateBackToTopButton() {

        if (window.scrollY > 500) {

            backToTopButton.classList.add("show");

        } else {

            backToTopButton.classList.remove("show");

        }

    }


    window.addEventListener(
        "scroll",
        updateBackToTopButton
    );


    backToTopButton.addEventListener(
        "click",
        () => {

            const reduceMotion =
                window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches;


            window.scrollTo({

                top: 0,

                behavior:
                    reduceMotion
                        ? "auto"
                        : "smooth"

            });

        }
    );


    updateBackToTopButton();

}