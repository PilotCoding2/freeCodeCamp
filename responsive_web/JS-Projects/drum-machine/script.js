const drumPads = document.querySelectorAll('.drum-pad');
const audio = new Audio();

const playDrum = drumId => {
    const drum = Array.from(drumPads).find(drums => drums.id === drumId);
    const soundId = drum.textContent.replace(/\s/g, '');
    const audioSrc = document.querySelector(`#${soundId}`).getAttribute('src');
    audio.src = audioSrc;
    audio.play();
}

drumPads.forEach(drum =>
    drum.addEventListener('click', (e) => {
        playDrum(e.currentTarget.id);
    })
)