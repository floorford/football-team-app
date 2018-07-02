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

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleEdit = this.handleEdit.bind(this);
  this.handleRadio = this.handleRadio.bind(this);
}

  handleEdit() {

    this.setState({
      editing: true,
    });

  }

  handleRadio(e) {
    let val = +e.target.value;

    this.setState({
      skill: val,
    });
  }

  handleChange(e) {
    let input = e.target.value;

    this.setState({
      value: input
    });

  }

  handleDelete(e) {
    this.props.onDelete();
  }

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
    const { player } = this.props;
    const { editing, value } = this.state;

    let skillWord = player.skill === 1 ? "Poor" : player.skill === 2 ? "Average" : "Good";

    return (
      <React.Fragment>
        { editing ?
          <form className="player-form" onSubmit={ this.handleSubmit }>
            <input className="input edit" id="player" onChange={ this.handleChange } value={ value }></input>
            <label className="label" htmlFor="poor">
              <input className="radio" name="skill" onClick={ this.handleRadio } type="radio" value="1" id="poor" />
              Poor
            </label>
            <label className="label" htmlFor="average">
              <input className="radio" name="skill" onClick={ this.handleRadio } type="radio" value="2" id="average" />
              Average
            </label>
            <label className="label" htmlFor="good">
              <input className="radio" name="skill" onClick={ this.handleRadio } type="radio" value="3" id="good" />
              Good
            </label>
            <button className="update btn btn-info">Update</button>
          </form>
          :
          <p className="player">{ player.player_name }</p> }
        <button className="solo-buttons btn btn-info" onClick={ this.handleEdit }>Edit</button>
        <button className="solo-buttons btn btn-info" onClick={ this.handleDelete }>Delete</button>
        <p className="player-skill">Skill level: { skillWord }</p>
      </React.Fragment>
    )
  }
}

export default Player;
