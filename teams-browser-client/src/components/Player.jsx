import React, { Component } from "react";
import '../index.css';

class Player extends Component {
constructor(props) {
  super(props)

  this.state = {
    editing: false,
    value: this.props.player.player_name,
    skill: this.props.player.skill
  }

  // setting the initial state to the player properties for the input and radio values. Editing is set to false so that the input field isn't initially rendered.

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleRadio = this.handleRadio.bind(this);
}

// determines whether the input field for the name is rendered or not
  handleEdit() {

    this.setState({
      editing: true,
    });

  }

// changes the skill state to match the radio input
  handleRadio(e) {
    let val = +e.target.value;

    this.setState({
      skill: val,
    });
  }

// sets the value state to match the name input field
  handleChange(e) {
    let input = e.target.value;

    this.setState({
      value: input
    });

  }

// allows the player to be deleted from the database
  handleDelete(e) {
    this.props.onDelete();
  }

// takes the player information, which has either been updated or is still set to its initial value and submits it to the database
  handleSubmit(e) {
    e.preventDefault();

    let player_name = this.state.value;
    let skill = this.state.skill

    this.setState({
      editing: false
    });

    this.props.onUpdate(player_name, skill);
  }

  render() {
    // destructuring the state and props objects
    const { player } = this.props;
    const { editing, value } = this.state;

    // logic to change the way the skill text is rendered
    let skillWord = player.skill === 1 ? "Poor" : player.skill === 2 ? "Average" : "Good";

    return (
      <React.Fragment>
      {/* the form which appears if 'editing' in state is true: an input field, 3 radio buttons & a submit button */}
        { editing ?
          <form className="player-form" onSubmit={ this.handleSubmit }>
            <input className="input edit form-control" id="player" onChange={ this.handleChange } value={ value }></input>
            <label className="label" htmlFor="poor">
              <input className="radio radio-edit" name="skill" onClick={ this.handleRadio } type="radio" value="1" id="poor" />
              Poor
            </label>
            <label className="label" htmlFor="average">
              <input className="radio radio-edit" name="skill" onClick={ this.handleRadio } type="radio" value="2" id="average" />
              Average
            </label>
            <label className="label" htmlFor="good">
              <input className="radio radio-edit" name="skill" onClick={ this.handleRadio } type="radio" value="3" id="good" />
              Good
            </label>
            <button className="update btn btn-info">Update</button>
          </form>
          :
          // the name renders as a p element if there if 'editing' in state is false
          <p className="player">{ player.player_name }</p> }
        {/* This section appears regardless of editing state to allow for editing and deletion*/}
        <button className="solo-buttons btn btn-info" onClick={ this.handleEdit }>Edit</button>
        <button className="solo-buttons btn btn-info" onClick={ this.handleDelete }>Delete</button>
        <p className="player-skill">Skill level: { skillWord }</p>
      </React.Fragment>
    )
  }
}

export default Player;
