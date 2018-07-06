import axios from "../axios";

import { setPlayers, editPlayer, removePlayer, addPlayer, resetPlayers, makeTeams } from "./state";

// gets the list of players from the database, returns an array of objects to be used in the state action
export const getPlayers = () => dispatch => {
  axios.get("/players").then(({ data }) => {
    const players = data;
    dispatch(setPlayers(players));
  });
};

// creates a player with the name and skill the user entered, returns the new player object to be used in the state action
export const postPlayer = (player_name, skill) => dispatch => {
  axios.post("/players", {
    player_name: player_name,
    skill: skill
  }).then(({ data }) => {
    const player = data.data;
    dispatch(addPlayer(player));
  });
};

// updates the object with the player id with the skill level value and/or player name, returns the new player object to be used in the state action
export const patchPlayer = (id, player_name, skill) => dispatch => {
  axios.patch(`/players/${id}`, {
    player_name: player_name,
    skill: skill
  }).then(({ data }) => {
    const player = data.data;
    dispatch(editPlayer(player));
  });
};

// deletes the object with the player id from the database and returns nothing, sends the same id to the state
export const deletePlayer = (id) => dispatch => {
  axios.delete(`/players/${id}`).then(() => {
    dispatch(removePlayer(id));
  });
};

// resets the database, returns nothing, calls the resetPlayers state action
export const deletePlayers = () => dispatch => {
  axios.delete("/players").then(() => {
    dispatch(resetPlayers());
  });
};

// triggers the assign teams public function in the database which sets the team value in each player object to either 1 or 2 based on their skill level (see the logic in the teams-api). Returns the entire updated players array of objects and passes that to the state action
export const assignTeams = () => dispatch => {
  axios.get("/players/teams").then(({ data }) => {
    const players = data
    dispatch(makeTeams(players));
  });
};
