const katze = document.getElementById('katze').firstElementChild;
const explosion = document.getElementById('katze').lastElementChild;

let speed = 4;

katze.style.animationIterationCount = '1'; // overwrite with animation that can end

katze.addEventListener("animationend", () => {

    // reset animation to that of CSS
    katze.style.animation = 'none';
    katze.offsetHeight; // reflow
    katze.style.animation = null;

    if (speed > 0.7) {
        speed -= 0.001;
        katze.style.animationIterationCount = '1'; // make animation endable again
    } else {
        explosion.classList.remove("display-none");
    }

    // apply new speed on top
    katze.style.animationDuration = `${speed}s`;

});
