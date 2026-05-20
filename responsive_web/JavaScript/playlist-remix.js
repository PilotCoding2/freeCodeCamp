const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(arr){
    let playlist = [];
    if(!Array.isArray(arr)){
        return [];
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            arr[i][j].source = [i, j];
            playlist.push(arr[i][j]);
            console.log(playlist);
        }
    }
    return playlist;
}

function scoreTracks(arr){
    let playlist = [];
    for(let i = 0; i < arr.length; i++){
        arr[i].score = arr[i].votes * 10 - Math.abs(arr[i].bpm - 120);
        playlist.push(arr[i]);
    }
    console.log(playlist);
    return playlist;
}

function dedupeTracks(arr){
    let playlist = [];
    for(let i = 0; i < arr.length; i++){
        if(playlist.find(function(track){
            return track.trackId === arr[i].trackId;
        }) === undefined){
            playlist.push(arr[i]);
        }
    }
    console.log(playlist);
    return playlist;
}

function enforceArtistQuota(arr, num){
    let playlist = [];
    for(let i = 0; i < arr.length; i++){
        if(playlist.filter(function(artists){
            return artists.artist === arr[i].artist
        }).length < num){
            playlist.push(arr[i]);
        }
    }
    console.log(playlist);
    return playlist;
}

function buildSchedule(arr){
    let broadcast = [];
    let slot = 1;
    for(let i = 0; i < arr.length; i++){
        broadcast.push({slot: slot, trackId: arr[i].trackId});
        slot++;
    }
    console.log(broadcast);
    return broadcast;
}

function remixPlaylist(arr, num){
    let flattenedPlaylist = flattenPlaylists(arr);
    let scoreTrack = scoreTracks(flattenedPlaylist);
    let dedupedTracks = dedupeTracks(scoreTrack);
    let enforcedArtists = enforceArtistQuota(dedupedTracks, num);
    let finalSchedule = buildSchedule(enforcedArtists);
    return finalSchedule;
}