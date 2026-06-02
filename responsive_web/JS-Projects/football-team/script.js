const footballTeam = {
  team: 'Mexico',
  year: 2026,
  headCoach: 'Javier Aguirre',
  players: [
    // Goalkeepers
    { name: 'Guillermo Ochoa',   position: 'goalkeeper',   isCaptain: false },
    { name: 'Raúl Rangel',       position: 'goalkeeper',   isCaptain: false },
    { name: 'Carlos Acevedo',    position: 'goalkeeper',   isCaptain: false },

    // Defenders
    { name: 'Israel Reyes',      position: 'defender',      isCaptain: false },
    { name: 'Jesús Gallardo',    position: 'defender',      isCaptain: false },
    { name: 'Jorge Sánchez',     position: 'defender',      isCaptain: false },
    { name: 'César Montes',      position: 'defender',      isCaptain: false },
    { name: 'Johan Vásquez',     position: 'defender',      isCaptain: false },
    { name: 'Mateo Chávez',      position: 'defender',      isCaptain: false },

    // Midfielders
    { name: 'Edson Álvarez',     position: 'midfielder',   isCaptain: true  },
    { name: 'Erik Lira',         position: 'midfielder',   isCaptain: false },
    { name: 'Luis Romo',         position: 'midfielder',   isCaptain: false },
    { name: 'Obed Vargas',       position: 'midfielder',   isCaptain: false },
    { name: 'Brian Gutiérrez',   position: 'midfielder',   isCaptain: false },
    { name: 'Orbelín Pineda',    position: 'midfielder',   isCaptain: false },
    { name: 'Gilberto Mora',     position: 'midfielder',   isCaptain: false },
    { name: 'César Huerta',      position: 'midfielder',   isCaptain: false },
    { name: 'Álvaro Fidalgo',    position: 'midfielder',   isCaptain: false },
    { name: 'Luis Chávez',       position: 'midfielder',   isCaptain: false },

    // Forwards
    { name: 'Raúl Jiménez',      position: 'forward',      isCaptain: false },
    { name: 'Santiago Giménez',  position: 'forward',      isCaptain: false },
    { name: 'Julián Quiñones',   position: 'forward',      isCaptain: false },
    { name: 'Roberto Alvarado',  position: 'forward',      isCaptain: false },
    { name: 'Alexis Vega',       position: 'forward',      isCaptain: false },
    { name: 'Guillermo Martínez',position: 'forward',      isCaptain: false },
    { name: 'Armando González',  position: 'forward',      isCaptain: false }
  ]
};

const teamSpan = document.getElementById('team');
const yearSpan = document.getElementById('year');
const coachSpan = document.getElementById('head-coach');

teamSpan.innerText = footballTeam["team"];
yearSpan.innerText = footballTeam["year"];
coachSpan.innerText = footballTeam["headCoach"];

const selectionPlayers = document.getElementById('players');
const playerCards = document.getElementById('player-cards');

const playerSelector = (para) => {
  let playersArray = [];
  if(para === "all"){
    footballTeam['players'].forEach(player => {
      if(player.isCaptain){
        playersArray.push(`<div class='player-card'><h2>(Captain) ${player.name}</h2><p>Position: ${player.position}</p></div>`);
      } else {
        playersArray.push(`<div class='player-card'><h2>${player.name}</h2><p>Position: ${player.position}</p></div>`);
      }
    });
  } else {
    let newPlayerArr = footballTeam['players'].filter(player => player.position === para);
    newPlayerArr.forEach(player => {
      if(player.isCaptain){
        playersArray.push(`<div class='player-card'><h2>(Captain) ${player.name}</h2><p>Position: ${player.position}</p></div>`);
      } else {
        playersArray.push(`<div class='player-card'><h2>${player.name}</h2><p>Position: ${player.position}</p></div>`);
      }
    });
  }
  return playersArray.join("");
}

selectionPlayers.addEventListener("change", () => {
  playerCards.innerHTML = playerSelector(selectionPlayers.value);
});