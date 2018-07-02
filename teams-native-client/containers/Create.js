// react redux's connect function
import { connect } from "react-redux";

// import in the Create component
import Create from "../screens/Create";

import { postPlayer } from "../data/actions/api";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (player_name, skill) => dispatch(postPlayer(player_name, skill)),
  };
};

export default connect(null, mapDispatchToProps)(Create);
