import initial from "./initial";

// sets the empty players array defined in initial.js to the players object from the database
const setPlayers = (state, { players }) => {
  return {
    ...state,
    players: players
  };
};

// concatenates the new player object passed in from the database onto the players array
const addPlayer = (state, { player }) => {
  return {
    ...state,
    players: state.players.concat(player)
  };
};

// creates a copy of the players array, finds where the id it's been passed in the updated player object matches the existing id in the players array of objects and replaces the entire player object with the new one. If there is no match the object is returned as is.
const editPlayer = (state, { player }) => {

  let list = state.players.slice()

  let newPlayers = list.map(listItem => {
    if (listItem.id === player.id) {
      return player
    } else {
      return listItem
    }
  })

  // assigns the new array of objects to the players array, overwriting the old one.
  return {
    ...state,
    players: newPlayers
  };
};

// returns a new array of objects without the player object with the corresponding id and overwrites the existing players array
const removePlayer = (state, { id }) => {
  let list = state.players.slice()

  let newPlayers = list.filter(listItem => listItem.id !== id)

  return {
    ...state,
    players: newPlayers
  };
};

// takes the players array which has now been assigned team numbers for each player and overwrites the previous array with unassigned teams
const makeTeams = (state, { players }) => {
  return {
    ...state,
    players: players,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setPlayers": return setPlayers(state, action);
    case "addPlayer": return addPlayer(state, action);
    case "editPlayer": return editPlayer(state, action);
    case "removePlayer": return removePlayer(state, action);
    case "resetPlayers": return initial;
    case "makeTeams": return makeTeams(state, action);
    default: return state;
  }
};

export default reducer;
