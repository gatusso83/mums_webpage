var music = document.getElementById("panjam");
var vow = document.getElementById("vowtobe");
var playvow = document.querySelector('video')

window.onload = function() {
    music.play();
    console.log("Hello1");
}

playvow.addEventListener('playing', (Event) => {
    music.pause();
});

playvow.addEventListener('pause', (Event) => {
    music.play();
});

