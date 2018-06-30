import React, { Component } from "react";

import Player from "../containers/Player";

class Players extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWipe = this.handleWipe.bind(this);
    this.handleAssign = this.handleAssign.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  handleChange(e) {
    let input = e.target.value;

    this.setState({
      value: input,
    });
  }

  handleRadio(e) {
    let input = e.target.value;

    this.setState({
      checked: input,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    let player_name = this.state.value;
    let skill = this.state.checked

    this.props.onSubmit(player_name, skill);

    this.setState({
      value: ""
    });
  }

  handleWipe(e) {
    e.preventDefault();

    this.props.onWipe();
  }

  handleAssign(e) {
    e.preventDefault();

    this.props.onAssign();
  }

  render() {
    let { players } = this.props;
    const { value } = this.state;

    return(
      <React.Fragment>
        <form onSubmit={ this.handleSubmit } style={{ textAlign: "center", marginBottom: "25px" }}>
          <label htmlFor="player_name" style={{ display: "block" }}>Add a player: </label>
          <input id="player_name" onChange={ this.handleChange } value={ value }></input>
          <input type="radio" onClick={ this.handleRadio } name="skill" value="1"/>Poor
          <input type="radio" onClick={ this.handleRadio } name="skill" value="2"/>Average
          <input type="radio" onClick={ this.handleRadio } name="skill" value="3"/>Good
          <button style={{ margin: "4px" }}>Add</button>
        </form>
        <form onSubmit={ this.handleWipe } style={{ textAlign: "center", marginBottom: "25px" }}>
          <button style={{ margin: "4px" }}>Remove all players</button>
        </form>
        <form onSubmit={ this.handleAssign } style={{ textAlign: "center", marginBottom: "25px" }}>
          <button style={{ margin: "4px" }}>Make your teams</button>
        </form>
        { /* check there are players to show */ }
        { players.length ?
          <ul className="list-group">
            { /* map over each player and display a list item for each one */ }
            { players.map(player => (
              <li className="list-group-item" key={ player.id }>
              { /* link to the player using its id */ }
                <Player player={ player }/>
              </li>
            ))}
          </ul>
          :
          <p>There are no players, add some above to get creating your teams!</p>
        }
      </React.Fragment>
    )
  }
};

export default Players;
