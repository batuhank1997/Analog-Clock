
const btn = document.getElementById("myButton");
const img = document.getElementById("myImg");

btn.addEventListener("click", () => toggleFullscreen());

function getFullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullscreenElement || document.msFullscreenElement;
}

function toggleFullscreen() {
    if (getFullscreenElement()) { document.exitFullscreen(); } else {
        document.documentElement.requestFullscreen().catch(console.log);
    }
}