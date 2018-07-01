import React, { Component } from "react";
import '../index.css';

class Player extends Component {
constructor(props) {
  super(props)

  this.state = {
    editing: false,
    value: this.props.player.player_name,
    checked: this.props.player.skill
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
    let input = +e.target.value;

    this.setState({
      checked: input,
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
    let skill = this.state.checked

    this.setState({
      editing: false
    });

    this.props.onUpdate(player_name, skill);
  }

  render() {
    const { player } = this.props;
    const { editing, value, checked } = this.state;

    let skill = player.skill === 1 ? "Poor" : player.skill === 2 ? "Average" : "Good";

    return (
      <React.Fragment>
        { editing ?
          <form className="player-form" onSubmit={ this.handleSubmit }>
            <input className="input" id="player" onChange={ this.handleChange } value={ value }></input>
            <label className="label" htmlFor="poor">
              <input className="radio" onClick={ this.handleRadio } type="radio" value="1" id="poor" checked={ checked === 1 } />
              Poor
            </label>
            <label className="label" htmlFor="average">
              <input className="radio" onClick={ this.handleRadio } type="radio" value="2" id="average" checked={ checked === 2 } />
              Average
            </label>
            <label className="label" htmlFor="good">
              <input className="radio" onClick={ this.handleRadio } type="radio" value="3" id="good" checked={ checked === 3 } />
              Good
            </label>
            <button className="update btn btn-info">Update</button>
          </form>
          :
          <p className="player">{ player.player_name }</p> }
        <button className="solo-buttons btn btn-info" onClick={ this.handleEdit }>Edit</button>
        <button className="solo-buttons btn btn-info" onClick={ this.handleDelete }>Delete</button>
        <p className="player-skill">Skill level: { skill }</p>
      </React.Fragment>
    )
  }
}

export default Player;
