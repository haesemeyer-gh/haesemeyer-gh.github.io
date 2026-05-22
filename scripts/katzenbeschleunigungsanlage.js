const katze = document.getElementById('katze').firstElementChild;

let speed = 4;
setInterval(() => {
    if (speed > 0.7) {
        speed -= 0.001;
        katze.style.animationDuration = `${speed}s`;
    } else {
        // explosion
    }
}, 1000);
