const fullscreenElement = document.getElementById('fullscreen-img');
const fullscreenClose = document.getElementById('fullscreen-close');
const fullscreenSrc = document.getElementById('fullscreen-src');
const allFigures = document.getElementsByTagName('figure');

function toggleFullscreen() {
    fullscreenElement.classList.toggle("display-none");
}

function setFullscreen(url) {
    fullscreenSrc.style.backgroundImage = `url(${url})`;
}

for (let i = 0; i < allFigures.length; i++) {
    const image = allFigures[i].firstElementChild;
    image.addEventListener("click", () => {
        setFullscreen(image.src);
        toggleFullscreen();
    })
}
fullscreenClose.onclick = toggleFullscreen;
