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

keys.forEach((key) => {
    key.addEventListener('click', () => {
        
        const audio = document.getElementById(key.innerText);
        audio.currentTime = 0; // Reset audio to start
        audio.play();
        displayText.innerText = key.id;
        key.style.backgroundColor = "darkorange";
        setTimeout(() => 
        key.style.backgroundColor = "", 100);
    })
});
keys.forEach((key) => {
    key.addEventListener('touchstart', () => {
        key.addEventListener('touchstart', () => {});
        key.addEventListener('touchend', () => {});
        key.addEventListener('touchcancel', () => {});
        key.addEventListener('touchmove', () => {});
        const audio = document.getElementById(key.innerText);
        audio.currentTime = 0; // Reset audio to start
        audio.play();
        displayText.innerText = key.id;
        key.style.backgroundColor = "darkorange";
        setTimeout(() => 
        key.style.backgroundColor = "", 100);
    })
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

