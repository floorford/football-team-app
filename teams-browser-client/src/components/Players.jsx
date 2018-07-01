import React, { Component } from "react";

import { Link } from "react-router-dom";

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
    let input = +e.target.value;

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

  handleAssign() {
    this.props.onAssign();
  }

  render() {
    let { players } = this.props;
    const { value } = this.state;

    return(
      <React.Fragment>
        <form className="form" onSubmit={ this.handleSubmit }>
          <label className="label" htmlFor="player_name">Add a player: </label>
          <input className="main input" id="player_name" onChange={ this.handleChange } value={ value }></input>
          <label className="label" htmlFor="poor">
            <input className="radio" onClick={ this.handleRadio } type="radio" value="1" id="poor"/>
            Poor
          </label>
          <label className="label" htmlFor="average">
            <input className="radio" onClick={ this.handleRadio } type="radio" value="2" id="average"/>
            Average
          </label>
          <label className="label" htmlFor="good">
            <input className="radio" onClick={ this.handleRadio } type="radio" value="3" id="good"/>
            Good
          </label>
          <button className="solo-buttons btn btn-info">Add</button>
        </form>
        { /* check there are players to show */ }
        { players.length ?
          <div>
            <div className="btn-group">
              <button onClick={ this.handleWipe } className="btn btn-danger group">Remove all players</button>
              <Link to="/my-teams">
                <button className="btn btn-success group" onClick={ this.handleAssign } type="button">Make your teams</button>
              </Link>
            </div>
            <div className="player-grid">
              { /* map over each player and display a card for each one */ }
              { players.map(player => (
                <div className="players" key={ player.id }>
                { /* link to the player using its id */ }
                  <Player player={ player }/>
                </div>
              ))}
            </div>
          </div>
          :
          <p className="error">There are no players, add some above to get creating your teams!</p>
        }
      </React.Fragment>
    )
  }
};

export default Players;
