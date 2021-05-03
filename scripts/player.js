export class Player {

    constructor (queue = [], position = -1) {
        this.audio_source = document.getElementById("audiosource");
        this.player = document.getElementById("musicplayer");
        this.cover = document.getElementById("song_cover");
        this.name = document.getElementById("song_name");
        this.artist = document.getElementById("song_artist");
        this.progressBar = document.getElementById("progressbar");
        this.play_button = document.getElementById("play_button");
        this.volumeBar = document.getElementById("volume");

        this.player.volume = this.volumeBar.value / 100;
        this.progressBar.value = 0;
        this.queue = queue;
        this.position = position;
        this.playing = false;

        this.player.onended = () => {
            if (this.position < this.queue.length) {
                this.next();
            }
        }

        this.player.ontimeupdate = () => {
            if (!Number.isNaN(this.player.duration)) {
                this.progressBar.value = this.player.currentTime / this.player.duration * 100;
            }
        }
        
        this.progressBar.oninput = () => {
            if (!Number.isNaN(this.player.duration)) {
                this.player.currentTime = this.player.duration * this.progressBar.value / 100;
            }
        }

        this.play_button.onclick = () => {
            this.play();
        }

        this.volumeBar.oninput = () => {
            player.volume = this.volumeBar.value / 100;
        }
    }

    play(queue, position) {
        console.log('1', this.queue);
        console.log('2', this.position);
        console.log('3', this.playing);
        if (typeof queue === "undefined") {
            if (!Number.isNaN(this.player.duration)) {
                if (this.playing) {
                    this.player.pause();
                    this.playing = false;
                } else {
                    this.player.play();
                    this.playing = true;
                }
            } else {
                this.next();
                this.playing = true;
            }
        } else {
            this.queue = queue;
            console.log('123', typeof position)
            this.position = (typeof position === "undefined") ? 0 : position;
            this.next();
        }
    }

    next() {
        let song = this.queue[this.position];
        console.log('1', this.queue);
        console.log('2', this.position);
        this.audio_source.src = song.src;
        this.cover.src = song.cover;
        console.log(song);
        this.name.innerHTML = song.stripped_name;
        this.artist.innerHTML = song.artist;
        this.position++;
        this.player.load();
        this.player.play();
    }
}