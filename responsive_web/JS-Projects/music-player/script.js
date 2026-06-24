const playlistSongs = document.getElementById('playlist-songs');

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
];

const audio = new Audio();

const userData = {
        songs: allSongs,
        currentSong: null,
        songCurrentTime: 0
};

const playSong = (songId, start = true) => {
  const song = userData.songs.find((song) => song.id === songId);
  audio.src = song.src;
  audio.title = song.title;
  if(!userData.currentSong || start){
      audio.currentTime = 0;
  } else {
      audio.currentTime = userData.songCurrentTime;
    }
  playButton.classList.add('playing');
  userData.currentSong = song;
  audio.play();
}

const getCurrentSongIndex = () => {
  return userData.currentSong !== null ? allSongs.indexOf(userData.currentSong) : -1;
}

const getNextSong = () => {
  let currentSong = getCurrentSongIndex();
  return currentSong === allSongs.length - 1 ? undefined : allSongs[currentSong + 1];
}

const getPreviousSong = () => {
  let currentSong = getCurrentSongIndex();
  return currentSong === 0 ? undefined : allSongs[currentSong - 1];
}

const playPreviousSong = () => {
  let previous = getPreviousSong();
  if(previous === undefined){
    playSong(userData.songs[0].id);
  } else {
    playSong(getPreviousSong().id);
  }
}

const playNextSong = () => {
  if(userData.currentSong === null){
    playSong(userData.songs[0].id);
  } else {
    if(allSongs.indexOf(userData.currentSong) === allSongs.length - 1){
      userData.currentSong = null;
      userData.songCurrentTime = 0;
      pauseSong();
    } else {
      playSong(getNextSong().id);
    }
  }
}

playButton.addEventListener('click', () => {
    if(userData.currentSong !== null){
        playSong(userData.currentSong.id, false);
    } else {
        playSong(userData.songs[0].id, false);
    }
});

const songs = document.querySelectorAll('.playlist-song');


/*

this solution was awesome but fCC didn't accept it

songs.forEach(song => {
    song.addEventListener('click', (n) => {
        playSong(Number(n.currentTarget.id.substring(5)));
    });
});

*/

// kinda sucky solution but ok
songs.forEach(song => {
    const songButton = song.querySelector('.playlist-song-info');
    songButton.addEventListener('click', () => {
        playSong(Number(song.id.substring(5)));
    });
});

const pauseSong = () => {
  userData.songCurrentTime = audio.currentTime;
  playButton.classList.remove('playing');
  audio.pause();
}

pauseButton.addEventListener('click', () => {
  pauseSong();
});

nextButton.addEventListener('click', playNextSong);
previousButton.addEventListener('click', playPreviousSong);


