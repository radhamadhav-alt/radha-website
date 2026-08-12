// ===============================
// RADHA COUNTER
// ===============================

let radhaCount = 0;

function radhaJap() {

    radhaCount++;

    document.getElementById("radhaCount").innerText = radhaCount;

}


// ===============================
// KRISHNA COUNTER
// ===============================

let krishnaCount = 0;

function krishnaJap() {

    krishnaCount++;

    document.getElementById("krishnaCount").innerText = krishnaCount;

}


// ===============================
// RESET RADHA
// ===============================

function resetRadha() {

    radhaCount = 0;

    document.getElementById("radhaCount").innerText = 0;

}


// ===============================
// RESET KRISHNA
// ===============================

function resetKrishna() {

    krishnaCount = 0;

    document.getElementById("krishnaCount").innerText = 0;

}


// ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}


// ===============================
// CLOSE MOBILE MENU
// ===============================

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("navMenu").classList.remove("active");

    });

});


// ===============================
// TOP BUTTON
// ===============================

window.addEventListener("scroll", function() {

    const button = document.getElementById("topBtn");

    if (window.scrollY > 400) {

        button.style.display = "block";

    } else {

        button.style.display = "none";

    }

});


function scrollTopPage() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ===============================
// BHAJAN BUTTON
// ===============================

function showBhajanMessage() {

    alert("🙏 राधे राधे! भक्ति संगीत का फीचर जल्द जोड़ा जाएगा।");

}


// ===============================
// JAP ANIMATION
// ===============================

document.addEventListener("click", function(event) {

    if (
        event.target.classList.contains("jap-btn")
    ) {

        event.target.style.transform = "scale(0.95)";

        setTimeout(function() {

            event.target.style.transform = "scale(1)";

        }, 100);

    }

});
