// =========================
// MUSIC + ENTER SCREEN
// =========================

const enterScreen = document.getElementById("enterScreen");
const enterBtn = document.getElementById("enterBtn");
const tributeMusic = document.getElementById("tributeMusic");

enterBtn.addEventListener("click", () => {

    tributeMusic.volume = 0.4;

    tributeMusic.play()
        .catch(error => {
            console.log("Music playback failed:", error);
        });

    enterScreen.classList.add("hide");

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".memorial-content, .memory-content, .memory-card, .letter-content, .assam-text"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// =========================
// HERO FADE
// =========================

window.addEventListener("scroll", () => {

    const heroContent = document.querySelector(".hero-content");

    if (!heroContent) return;

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {

        heroContent.style.transform =
            `translateY(${scroll * 0.12}px)`;

        heroContent.style.opacity =
            Math.max(0, 1 - scroll / 650);

    }

});