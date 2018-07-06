// react redux's connect function
import { connect } from "react-redux";

// import in the Teams component
import Teams from "../components/Teams";

import { assignTeams } from "../data/actions/api";

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

// this onLoad function means that when the user hard refreshes the /my-teams page the data will still be passed through to render, without this a 404 error occurs on the hosted version.
const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => dispatch(assignTeams()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
