import { addArtist, addRecommendedArtist, addAlbum } from "./addListItems.js";
import { Database } from "./database.js";


const db = new Database();


export function initialize() {
    let artists = [
        db.artists[0],
        db.artists[1],
    ];

    let recommended_artists = [
        db.artists[2],
    ]

    let albums = db.albums;

    addItems(artists, albums, recommended_artists);
}

function addItems(artists, albums, recommended_artists) {
    console.log(artists);
    for (let artist of artists) {
        addArtist(artist);
    }
    for (let album of albums) {
        addAlbum(album);
    }
    for (let artist of recommended_artists) {
        addRecommendedArtist(artist);
    }
}
