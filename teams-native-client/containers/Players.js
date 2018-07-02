// react redux's connect function
import { connect } from "react-redux";

// import in the Players component
import Players from "../screens/Players";

import { getPlayers, deletePlayers, assignTeams, deletePlayer } from "../data/actions/api";

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getPlayers()),
    onWipe: () => dispatch(deletePlayers()),
    onAssign: () => dispatch(assignTeams()),
    onDelete: () => dispatch(deletePlayer(player.id)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Players);
