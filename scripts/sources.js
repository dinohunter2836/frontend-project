export class Artist {
    
    constructor (name, cover) {
        this.name = name;
        this.cover = cover;
        this.songs = [];
    }
}

export class Album {

    constructor (name, artist, cover) {
        this.name = name;
        this.artist = artist;
        this.cover = cover;
        this.songs = [];
    }
}

export class Song {

    strip(name) {
        let result = "";
        let save = 0;
        for (const letter of name) {
            if (letter == '-') {
                save = 1;
            } else if (save == 1) {
                result += letter;
            }
        }
        return result.substring(1, result.length);
    }

    constructor(name, artist, album, src) {
        this.name = name;
        this.stripped_name = this.strip(name);
        this.artist = artist;
        this.album = album;
        this.src = src;
    }
}
