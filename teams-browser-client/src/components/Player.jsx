import React, { Component } from "react";

class Player extends Component {
constructor(props) {
  super(props)

  this.state = {
    editing: false,
    value: this.props.player.player_name,
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
    let input = e.target.value;

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
    const { editing, value } = this.state;

    return (
      <React.Fragment>
        { editing ?
          <form style={{ display: "inline-block" }} onSubmit={ this.handleSubmit }>
            <input id="player" onChange={ this.handleChange } value={ value }></input>
            <input onClick={ this.handleRadio } type="radio" name="skill" value="1"/>Poor
            <input onClick={ this.handleRadio } type="radio" name="skill" value="2"/>Average
            <input onClick={ this.handleRadio } type="radio" name="skill" value="3"/>Good
            <button style={{ margin: "2px" }}>Update</button>
          </form>
          :
          <p style={{display: "inline-block", marginLeft: "5px", marginRight: "10px" }}>{ player.player_name }</p> }
        <button onClick={ this.handleEdit } style={{ margin: "4px" }}>Edit</button>
        <button onClick={ this.handleDelete } style={{ margin: "4px" }}>Delete</button>
        <p style={{display: "block", marginLeft: "5px", marginRight: "10px" }}>Skill level: { player.skill }</p>
      </React.Fragment>
    )
  }
}

export default Player;
