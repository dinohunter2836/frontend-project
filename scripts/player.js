let player = document.getElementById("musicplayer");
let audio_source = document.getElementById("audiosource");
let volumeBar = document.getElementById("volume");
let progressBar = document.getElementById("progressbar");
let queue = [];
let position = 0;
player.volume = volumeBar.value / 100;
progressBar.value = 0;

function play_audio(url) {
    audio_source.src = url;
    player.load();
    player.play();
}

player.ontimeupdate = () => {
    if (!Number.isNaN(player.duration)) {
        progressBar.value = player.currentTime / player.duration * 100;
    }
}

progressBar.oninput = () => {
    if (!Number.isNaN(player.duration)) {
        player.currentTime = player.duration * progressBar.value / 100;
    }
}

let play_button = document.getElementById("play_button");

play_button.onclick = () => {
    let url = "music/LinkinPark-Meteora/07 - Faint.mp3";
    play_audio(url);
}

volumeBar.oninput = () => {
    player.volume = volumeBar.value / 100;
}
