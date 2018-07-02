// react redux's connect function
import { connect } from "react-redux";

// import in the Player component
import Player from "../screens/Player";

import { patchPlayer, deletePlayer } from "../data/actions/api";

const mapDispatchToProps = (dispatch, { player }) => {
  return {
    onUpdate: (player_name, skill) => dispatch(patchPlayer(player.id, player_name, skill)),
  };
};

export default connect(null, mapDispatchToProps)(Player);