/* Canvas */

var canvas = document.createElement('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.position = "fixed";
canvas.style.height = "100vh";
canvas.style.width = "100%";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.pointerEvents = "none";
canvas.style.display = "none";

document.body.appendChild(canvas);

var zeigestock = new Image();
zeigestock.onload = function() {
	drawZeigestock(0);
};
zeigestock.src = "https://haesemeyer.dev/assets/zeigestock.png";
zeigestock.style.objectFit = "cover";

var ctx = canvas.getContext('2d');

function drawZeigestock(angle, mouseX, mouseY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(canvas.width, canvas.height);
    ctx.rotate((Math.PI/2)+0.02);
    ctx.rotate(angle);
    zeigestock.height = Math.sqrt( Math.pow((canvas.height - mouseY), 2) + Math.pow((canvas.width - mouseX), 2) );
    ctx.drawImage(zeigestock, -zeigestock.width, -zeigestock.height, );
    ctx.restore();
}

document.onmousemove = function(e) {
    var dx = e.pageX - canvas.width;
    var dy = e.pageY - canvas.height;
    var theta = Math.atan2(dy, dx);
    drawZeigestock(theta, e.pageX, e.pageY);
};

/* Menu */

const zeigestockToggleText = document.createElement('span');
zeigestockToggleText.innerText = "Zeigestock: ";

const zeigestockToggleBox = document.createElement('input');
zeigestockToggleBox.type = "checkbox";
zeigestockToggleBox.addEventListener('input', () => {
    canvas.style.display = (zeigestockToggleBox.checked ? "block" : "none");
});

const zeigestockToggle = document.createElement('label');
zeigestockToggle.append(zeigestockToggleText, zeigestockToggleBox);

const zeigestockMenu = document.createElement('div');
zeigestockMenu.ariaHidden = true;
zeigestockMenu.style.position = "absolute";
zeigestockMenu.style.bottom = 0;
zeigestockMenu.style.right = 0;
zeigestockMenu.appendChild(zeigestockToggle);

document.body.appendChild(zeigestockMenu);
