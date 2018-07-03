// react redux's connect function
import { connect } from "react-redux";

// import in the Player component
import Player from "../screens/Player";

import { patchPlayer } from "../data/actions/api";

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdate: (id, player_name, skill) => (dispatch(patchPlayer(id, player_name, skill))),
  };
};

export default connect(null, mapDispatchToProps)(Player);
