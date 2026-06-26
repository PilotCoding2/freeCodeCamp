const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

const playDrumClick = drumId => {
    const drum = Array.from(drumPads).find(drums => drums.id === drumId);
    const soundId = drum.textContent.replace(/\s/g, '');
    const audioSrc = document.querySelector(`#${soundId}`);
    audioSrc.currentTime = 0;
    audioSrc.play();
    showInstrumentName(audioSrc.parentNode.id);
}

const playDrumKey = e => {
    const audioSrc = document.querySelector(`#${e.toUpperCase()}`);
    if(!audioSrc){
        return;
    }
    audioSrc.currentTime = 0;
    audioSrc.play();
    showInstrumentName(audioSrc.parentNode.id);
}

const showInstrumentName = instrumentName => {
    display.textContent = instrumentName;
}

drumPads.forEach(drum => {
    drum.addEventListener('click', (e) => {
        playDrumClick(e.currentTarget.id);
    });
});


document.addEventListener('keydown', (event) => {
    playDrumKey(event.key);
});