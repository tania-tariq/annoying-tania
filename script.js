/* =========================
   PAGE CHANGE
========================= */

function goTo(number) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });

    document
        .getElementById("page" + number)
        .classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   NO BUTTON ESCAPE
========================= */

let noCount = 0;

function moveNo() {

    const button =
        document.getElementById("noButton");

    const message =
        document.getElementById("noMessage");

    noCount++;

    const messages = [

        "Nice try 😂❤️",

        "No button is shy! 😭",

        "Zahraaaa, try YES! 😂",

        "You can't escape Tania! 😌❤️",

        "NO is not available here 😂",

        "Just click YES already! 🥹",

        "I know you love me! 😭❤️"

    ];

    message.innerText =
        messages[
            Math.min(
                noCount - 1,
                messages.length - 1
            )
        ];


    const maxX = 180;

    const maxY = 50;

    const x =
        Math.random() * maxX - maxX / 2;

    const y =
        Math.random() * maxY - maxY / 2;

    button.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* =========================
   YES ANSWER
========================= */

function yesAnswer() {

    heartExplosion();

    setTimeout(() => {

        goTo(8);

        heartExplosion();

    }, 500);

}


/* =========================
   HEART CREATOR
========================= */

function createHeart() {

    const emojis = [

        "❤️",
        "💗",
        "💕",
        "💖",
        "💓",
        "💞",
        "✨",
        "🌷"

    ];

    const heart =
        document.createElement("div");

    heart.className = "heart";

    heart.innerText =
        emojis[
            Math.floor(
                Math.random() *
                emojis.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 5) + "s";

    document
        .getElementById("hearts")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}


/* =========================
   HEART EXPLOSION
========================= */

function heartExplosion() {

    for (let i = 0; i < 70; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 25);

    }

}


/* Continuous hearts */

setInterval(createHeart, 600);