// react redux's connect function
import { connect } from "react-redux";

// import in the Teams component
import Teams from "../components/Teams";

const mapStateToProps = state => {
  return {
    players: state.players,
  };
};

export default connect(mapStateToProps)(Teams);
