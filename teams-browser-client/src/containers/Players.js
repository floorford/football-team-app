// react redux's connect function
import { connect } from "react-redux";

// import in the Players component
import Players from "../components/Players";

import { getPlayers, postPlayer, deletePlayers, assignTeams } from "../data/actions/api";

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(getPlayers()),
    onSubmit: (player_name, skill) => dispatch(postPlayer(player_name, skill)),
    onWipe: () => dispatch(deletePlayers()),
    onAssign: () => dispatch(assignTeams()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Players);
