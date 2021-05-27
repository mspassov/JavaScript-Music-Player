 const musicContainer = document.querySelector('.music-container');
 const playBtn = document.querySelector('#play');
 const prevBtn = document.querySelector('#previous');
 const nextBtn = document.querySelector('#next');
 const audio = document.querySelector('#audio');
 const progress = document.querySelector('.progress');
 const progressContainer = document.querySelector('.progress-container');
 const title = document.querySelector('#title');
 const cover = document.querySelector('#cover');

 /* Song Title Array */
const songs = ['EDM', 'Rock'];

//Keep track of songs
let songIndex = 0;

//load in first song into the player
loadSong(songs[songIndex]);

//update song details
function loadSong(song){
    title.innerText = song;
    audio.src = `./music/${song}.mp3`;
    cover.src = `./images/${song}.jpg`;

}

function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
}

//Event Listeners
playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play');
    if(isPlaying){
        pauseSong();
    }
    else{
        playSong();
    }
})

prevBtn.addEventListener('click', () =>{
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
})

nextBtn.addEventListener('click', () =>{
    songIndex++;
    if(songIndex > songs.length - 1){
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
})

audio.addEventListener('timeupdate', () => {
    
})