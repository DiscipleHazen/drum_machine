const Q = document.getElementById("Heater-1");
const W = document.getElementById("Heater-6");
const E = document.getElementById("Kick");
const A = document.getElementById("Closed-HH");
const S = document.getElementById("Open-HH");
const D = document.getElementById("heater-2");
const Z = document.getElementById("heater-3");
const X = document.getElementById("heater-4");
const C = document.getElementById("Kick-n-Hat");
const displayText = document.getElementById("display-text");

const keys = [Q, W, E, A, S, D, Z, X, C];


function playSound(key) {
    const audio = document.getElementById(key.innerText.trim());
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
    displayText.innerText = key.id;
    key.style.backgroundColor = "darkorange";
    setTimeout(() => key.style.backgroundColor = "", 100);
}
let touchHandled = false;

keys.forEach((key) => {
    key.addEventListener('touchstart', (e) => {
        touchHandled = true;
        playSound(key);
        // Prevents the following click event
        e.preventDefault();
    });
    key.addEventListener('click', () => {
        if (touchHandled) {
            touchHandled = false;
            return;
        }
        playSound(key);
    });
});


document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    const audio = document.getElementById(key);
    if (audio) {
        audio.currentTime = 0; // Reset audio to start
        audio.play();
        const btn = document.getElementById(key).parentElement
        displayText.innerText = btn.id;
        btn.style.backgroundColor = "darkorange";
        setTimeout(() => {
            btn.style.backgroundColor = ""; // Reset background color after 100ms
        }, 100);
    }
});

