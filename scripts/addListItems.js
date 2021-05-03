import { viewalbum } from "./open_playlist.js"


function addArtistToUl(artist, ul_id) {
    let artists_ul = document.getElementById(ul_id);
    let li = document.createElement("li");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    img.src = artist.cover;
    let text = document.createElement("FIGCAPTION");
    text.innerHTML = artist.name;
    figure.appendChild(img);
    figure.appendChild(text);
    li.appendChild(figure);
    li.onclick = () => {
        viewalbum(artist);
    }
    artists_ul.appendChild(li);
}


export function addAlbum(album) {
    let albums_ul = document.getElementById("albums_ul");
    let li = document.createElement("li");
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = album.cover;
    let name = document.createElement("p");
    name.innerHTML = album.name;
    let artist = document.createElement("p");
    artist.innerHTML = album.artist;
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(artist);
    li.appendChild(div);
    li.onclick = () => {
        viewalbum(album);
    }
    albums_ul.appendChild(li);
}

export function addRecommendedArtist(artist) {
    addArtistToUl(artist, "recommended_artists_ul");
}

export function addArtist(artist) {
    addArtistToUl(artist, "artists_ul");
}
