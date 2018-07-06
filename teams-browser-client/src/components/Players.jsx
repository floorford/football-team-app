import React, { Component } from "react";

import { Link } from "react-router-dom";

import Player from "../containers/Player";

class Players extends Component {
  constructor (props) {
    super(props);

    // the initial state is an empty string for the input field, and no assignment to the checkboxes
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

  // using the lifecycle method that occurs when the page loads to call the onLoad property, which gets the players from the database
  componentDidMount() {
    this.props.onLoad();
  }

// sets the value in state to the value of the name input field
  handleChange(e) {
    let input = e.target.value;

    this.setState({
      value: input,
    });
  }

// sets the check in state to the value of the radio button clicked for player skill
  handleRadio2(e, i) {
    let input = +i;

    this.setState({
      check: input,
    });
  }

// submits the form with the data filled in by the user
  handleSubmit(e) {
    if(e || e.keyCode === 13) {
      e.preventDefault();

      let player_name = this.state.value;
      let skill = this.state.check

      this.props.onSubmit(player_name, skill);

      // resets the state to it's initial values so the user can add more players easily
      this.setState({
        value: "",
        check: null
      });
    }
  }

  // allows the player to delete the database to start fresh
  handleWipe(e) {
    e.preventDefault();

    this.props.onWipe();
  }

  // takes the user to teams page to see their assigned teams
  handleAssign() {
    this.props.onAssign();
  }

  render() {

    // destructuring the state and props objects
    let { players } = this.props;
    const { value } = this.state;

    // render logic effected by the state which is used on the form submission
    let disabled = true ? (value.length < 1 || this.state.check === null) : false;

    return(
      <React.Fragment>
        {/* the form which allows users to submit new players, this is always rendered */}
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
        {/* This error message appears when the form data is invalid */}
        { disabled ? <p className="validation alert alert-secondary">Please enter a player name and select and skill level. Max 30 characters</p> : null }

        { /* This checks there are players to show and renders either the players, or text which prompts the user to add players */ }
        { players.length ?
        <div>
          <div className="btn-group">
            <button onClick={ this.handleWipe } className="btn btn-danger group">Remove all players</button>
            <Link to="/my-teams">
              <button className="btn btn-success group" onClick={ this.handleAssign } type="button">Make your teams</button>
            </Link>
          </div>
          <div className="player-grid">
            { /* This map iterates over each player and display a div with a player component for each one */ }
            { players.map(player => (
              <div className="players" key={ player.id }>
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
