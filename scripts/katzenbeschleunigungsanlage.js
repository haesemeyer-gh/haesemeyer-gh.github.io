const katze = document.getElementById('katze').firstElementChild;
const explosion = document.getElementById('katze').lastElementChild;

let speed = 4;
katze.addEventListener("animationiteration", () => {
    if (speed > 0.7) {
        speed -= 0.001;
        katze.style.animationDuration = `${speed}s`;
    } else {
        explosion.classList.remove("display-none");
    }
});
