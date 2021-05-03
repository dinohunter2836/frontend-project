export function viewalbum(album) {
    const home = document.getElementsByTagName("main")[0].innerHTML;
    let back = document.createElement("button");
    back.style.width = "50px";
    back.style.height = "100px";
    back.onclick = () => {
        document.getElementsByTagName("main")[0].innerHTML = home;
    }
    let header = document.createElement("div");
    header.style.display = "flex";
    header.style.flexDirection = "row";
    header.style.alignItems = "center";
    header.style.marginTop = "5px";
    header.style.marginLeft = "5px";
    let cover = document.createElement("img");
    cover.src = album.cover;
    cover.style.maxHeight = "100px";
    let title = document.createElement("p");
    title.innerHTML = album.name;
    header.appendChild(cover);
    header.appendChild(title);
    let ul = document.createElement("ul");
    console.log(album.songs);
    for (let i = 0; i < album.songs.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = album.songs[i].name;
        li.index = i;
        li.onclick = () => {
            // create query and play starting with i-th song
        }
        ul.appendChild(li);
    }
    let main = document.getElementsByTagName("main")[0];
    main.innerHTML = "";
    main.appendChild(back);
    main.appendChild(header);
    main.appendChild(ul);
}