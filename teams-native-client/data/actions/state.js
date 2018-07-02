export const setPlayers = (players) => {
  return {
    type: "setPlayers",
    players: players,
  };
};

export const addPlayer = (player) => {
  return {
    type: "addPlayer",
    player: player,
  };
};

export const editPlayer = (player) => {
  return {
    type: "editPlayer",
    player: player,
  };
};

export const removePlayer = (id) => {
  return {
    type: "removePlayer",
    id: id
  };
};

export const resetPlayers = () => {
  return {
    type: "resetPlayers",
  };
};

export const makeTeams = (players) => {
  return {
    type: "makeTeams",
    players: players,
  };
};
