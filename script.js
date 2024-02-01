// Declare variables below


class Song {
  constructor(title, artist, imageUrl, link, length) {
    this.title = title;
    this.artist = artist;
    this.imageUrl = imageUrl;
    this.link = link;
    this.length = length;
  }
}


let playlist = [
  // PLACEHOLDER DATA
  new Song("Phases of my Life", "Sofasound", "https://i.scdn.co/image/ab67616d0000b273ea6e710908c84591eae14994", "https://youtu.be/qPvVl-bganM", "3:19"),
  new Song("Better Days", "Lakey Inspired", "https://i1.sndcdn.com/artworks-000222487806-ucylzp-t500x500.jpg", "https://www.youtube.com/watch?v=RXLzvo6kvVQ", "3:15"),
]

// Use the body of this function to display your playlist.
function displaySongInfo(songs) {
  songsDiv = document.querySelector(".songs");
  imagesDiv = document.querySelector(".images");
  artistsDiv = document.querySelector(".artists");
  linksDiv = document.querySelector(".links");
  lengthsDiv = document.querySelector(".lengths");
  for (i = 0; i < songs.length; i++){
    // title
    if (songs[i].title != undefined) {
    let title = document.createElement("p");
    title.innerHTML = songs[i].title;
    songsDiv.append(title);
    }
    // artist
    if (songs[i].artist != undefined){
    let artist = document.createElement("p");
    artist.innerHTML = songs[i].artist;
    artistsDiv.append(artist);
    }
    // image
    if (songs[i].imageUrl != undefined){
    let image = document.createElement("img");
    image.src = songs[i].imageUrl;
    imagesDiv.append(image);
    }

    // link
    if (songs[i].link != undefined){
    let link = document.createElement("a");
    link.href = songs[i].link;
    link.target = "_blank";
    link.innerHTML = "Listen";
    linksDiv.append(link);
    }
    // length
    if (songs[i].length != undefined){
    let length = document.createElement("p");
    length.innerHTML = songs[i].length;
    lengthsDiv.append(length);
    }


    // console.log(songs[i].title);
  }



}
  



  // This function empties the divs each time the button is clicked.
  // This prevents the playlist from repeatedly adding data.
  // Try commenting out this function call to see what happens without it!
  function emptySongInfo() {
    songsDiv = document.querySelector(".songs");
    songsDiv.innerHTML = "";
    imagesDiv = document.querySelector(".images");
    imagesDiv.innerHTML = "";
    artistsDiv = document.querySelector(".artists");
    artistsDiv.innerHTML = "";
    linksDiv = document.querySelector(".links");
    linksDiv.innerHTML = "";
    lengthsDiv = document.querySelector(".lengths");
    lengthsDiv.innerHTML = "";
  }
  

// Use the body of this function to add new songs to your playlist.
  function addSongInfo() {
    
    let title = document.getElementById("title").value;
    let artist = document.getElementById("artist").value;
    let imageUrl = document.getElementById("image").value;
    let link = document.getElementById("link").value;

    let song = new Song(title, artist, imageUrl, link, );
    playlist.push(song);


  }
  
  
  document.querySelector("#add").addEventListener("click", function () {
    emptySongInfo();
    addSongInfo();
    displaySongInfo(playlist);
  });
  
  displaySongInfo(playlist);

  // MAYBE CALL SPOTIFY API