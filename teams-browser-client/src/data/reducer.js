const setPlayers = (state, { players }) => {
  return {
    ...state,
    players: players
  };
};

const addPlayer = (state, { player }) => {
  return {
    ...state,
    players: state.players.concat(player)
  };
};

const editPlayer = (state, { player }) => {

  let list = state.players.slice()

  let newPlayers = list.map(listItem => {
    if (listItem.id === player.id) {
      return player
    } else {
      return listItem
    }
  })

  return {
    ...state,
    players: newPlayers
  };
};

const removePlayer = (state, { id }) => {
  let list = state.players.slice()

  let newPlayers = list.filter(listItem => listItem.id !== id)

  return {
    ...state,
    players: newPlayers
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setPlayers": return setPlayers(state, action);
    case "addPlayer": return addPlayer(state, action);
    case "editPlayer": return editPlayer(state, action);
    case "removePlayer": return removePlayer(state, action);
    default: return state;
  }
};

export default reducer;
