import React, { Component } from "react";

import { Link } from "react-router-dom";

import Player from "../containers/Player";

class Players extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: "",
      check: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleRadio2 = this.handleRadio2.bind(this);
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

  handleRadio2(e, i) {
    let input = +i;

    this.setState({
      check: input,
    });
  }

  handleSubmit(e) {
    if(e && e.keyCode === 13) {
      e.preventDefault();

      let player_name = this.state.value;
      let skill = this.state.check

      this.props.onSubmit(player_name, skill);

      this.setState({
        value: "",
        check: null
      });
    }
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

    let disabled = true ? (value.length < 1 || this.state.check === null) : false;

    return(
      <React.Fragment>
        <form className="form" onSubmit={ this.handleSubmit }>
          <label className="label" htmlFor="player_name">Add a player: </label>
          <input className="main input" id="player_name" onChange={ this.handleChange } value={ value } autoFocus></input>
          <p className="skill-label">Skill Level: </p>
          <div className="radio-pad" onClick={ (e) => this.handleRadio2(e, 1) }>
            <input className="radio"  name="skill" type="radio" value="1" id="poor"/>
            <label className="radio-label" htmlFor="poor">
              Poor
            </label>
          </div>
          <div className="radio-pad" onClick={ (e) => this.handleRadio2(e, 2) }>
            <input className="radio" name="skill" type="radio" value="2" id="average"/>
            <label className="radio-label" htmlFor="average">
              Average
            </label>
          </div>
          <div className="radio-pad" onClick={ (e) => this.handleRadio2(e, 3) }>
            <input className="radio" name="skill" type="radio" value="3" id="good"/>
            <label className="radio-label" htmlFor="good">
              Good
            </label>
          </div>
          <button className="solo-buttons btn btn-info" disabled={ disabled }>Add</button>
        </form>
        { disabled ? <p className="validation alert alert-secondary">Please enter a player name and select and skill level. Max 30 characters</p> : null }

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
            { /* map over each player and display a section for each one */ }
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
