import { Artist, Album, Song } from "./sources.js";


export class Database {

    constructor () {
        this.artists = [
            new Artist("Linkin Park", "artists/linkin_park.jpg"),
            new Artist("Slipknot", "artists/slipknot.jpg"),
            new Artist("Green Day", "artists/green_day.jpg"),
        ];
        
        this.albums = [
            new Album("Hybrid Theory", "Linkin Park", "covers/HT_cover.jpg"),
            new Album("Meteora", "Linkin Park", "covers/Meteora_cover.jpg"),
            new Album("We Are Not Your Kind", "Slipknot", "covers/we_are_not_your_kind.png"),
            new Album("A Thousand Suns", "Linkin Park", "covers/ATS_cover.jpg"),
        ]

        this.songs = [
            new Song(
                "01 - Papercut",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/01 - Papercut.mp3",
            ),
            new Song(
                "02 - One Step Closer",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/02 - One Step Closer.mp3",
            ),
            new Song(
                "03 - With You",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/03 - With You.mp3",
            ),
            new Song(
                "04 - Points of Authority",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/04 - Points of Authority.mp3",
            ),
            new Song(
                "05 - Crawling",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/05 - Crawling.mp3",
            ),
            new Song(
                "06 - Runaway",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/06 - Runaway.mp3",
            ),
            new Song(
                "07 - By Myself",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/07 - By Myself.mp3",
            ),
            new Song(
                "08 - In the End",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/08 - In the End.mp3",
            ),
            new Song(
                "09 - A Place for My Head",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/09 - A Place for My Head.mp3",
            ),
            new Song(
                "10 - Forgotten",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/10 - Forgotten.mp3",
            ),
            new Song(
                "11 - Cure for the Itch",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/11 - Cure for the Itch.mp3",
            ),
            new Song(
                "12 - Pushing Me Away",
                "Linkin Park",
                "Hybrid Theory",
                "music/Hybrid Theory/12 - Pushing Me Away.mp3",
            ),
            new Song(
                "01 - Foreword",
                "Linkin Park",
                "Meteora",
                "music/Meteora/01 - Foreword.mp3",
            ),
            new Song(
                "02 - Don't Stay",
                "Linkin Park",
                "Meteora",
                "music/Meteora/02 - Don't Stay.mp3",
            ),
            new Song(
                "03 - Somewhere I Belong",
                "Linkin Park",
                "Meteora",
                "music/Meteora/03 - Somewhere I Belong.mp3",
            ),
            new Song(
                "04 - Lying from You",
                "Linkin Park",
                "Meteora",
                "music/Meteora/04 - Lying from You.mp3",
            ),
            new Song(
                "05 - Hit the Floor",
                "Linkin Park",
                "Meteora",
                "music/Meteora/05 - Hit the Floor.mp3",
            ),
            new Song(
                "06 - Easier to Run",
                "Linkin Park",
                "Meteora",
                "music/Meteora/06 - Easier to Run.mp3",
            ),
            new Song(
                "07 - Faint",
                "Linkin Park",
                "Meteora",
                "music/Meteora/07 - Faint.mp3",
            ),
            new Song(
                "08 - Figure.09",
                "Linkin Park",
                "Meteora",
                "music/Meteora/08 - Figure.09.mp3",
            ),
            new Song(
                "09 - Breaking the Habit",
                "Linkin Park",
                "Meteora",
                "music/Meteora/09 - Breaking the Habit.mp3",
            ),
            new Song(
                "10 - From the Inside",
                "Linkin Park",
                "Meteora",
                "music/Meteora/10 - From the Inside.mp3",
            ),
            new Song(
                "11 - Nobody's Listening",
                "Linkin Park",
                "Meteora",
                "music/Meteora/11 - Nobody's Listening.mp3",
            ),
            new Song(
                "12 - Session",
                "Linkin Park",
                "Meteora",
                "music/Meteora/12 - Session.mp3",
            ),
            new Song(
                "13 - Numb",
                "Linkin Park",
                "Meteora",
                "music/Meteora/13 - Numb.mp3",
            ),
        ]

        for (let song of this.songs) {
                console.log(song);
            for (let album of this.albums) {
                if (album.name === song.album) {
                    album.songs.push(song);
                    break;
                }
            }
            for (let artist of this.artists) {
                if (artist.name == song.artist) {
                    artist.songs.push(song);
                    break;
                }
            }
        }
    }
}