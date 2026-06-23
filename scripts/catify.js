const katze = document.getElementById('katze').firstElementChild;
const explosion = document.getElementById('katze').lastElementChild;

const source = document.getElementById('catify-src');
const speed = document.getElementById('catify-speed');
const stretchiness = document.getElementById('catify-stretchiness');
const height = document.getElementById('catify-height');
const explosiontoggle = document.getElementById('catify-explosiontoggle');

source.addEventListener('input', () => {
    katze.src = source.value;
});
speed.addEventListener('input', () => {
    katze.style.animationDuration = `${speed.value}s`;
});
stretchiness.addEventListener('input', () =>  {
    document.documentElement.style.setProperty('--katze-stretchiness', stretchiness.value);
});
height.addEventListener('input', () => {
    katze.style.height = `${height.value}px`;
    explosion.style.height = `${(explosionDefaultHeight/100)*height.value}px`;
});
explosiontoggle.addEventListener('input', () => {
    explosion.classList.toggle("display-none");
});

/* Restore default Values */
const reset = document.getElementById('catify-reset');

// get defaults
const sourceDefaultVal = source.value;
const speedDefaultVal = speed.value;
const stretchinessDefaultVal = getComputedStyle(document.documentElement).getPropertyValue('--katze-stretchiness');
const heightDefaultVal = height.value;
const explosionDefaultHeight = 70; //px, see css
const explosiontoggleDefaultVal = explosiontoggle.checked;

// reset
reset.addEventListener('click', () => {
    source.value = sourceDefaultVal;
    katze.src = sourceDefaultVal;

    speed.value = speedDefaultVal;
    katze.style.animationDuration = `${speedDefaultVal}s`;

    stretchiness.value = stretchinessDefaultVal;
    document.documentElement.style.setProperty('--katze-stretchiness', stretchinessDefaultVal);

    height.value = heightDefaultVal;
    katze.style.height = `${heightDefaultVal}px`;
    explosion.style.height = `${explosionDefaultHeight}px`;
    
    explosiontoggle.checked = explosiontoggleDefaultVal;
    explosion.classList.add("display-none");
});
