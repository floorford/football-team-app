//
// this.handleChange = this.handleChange.bind(this);
// this.handleRadio = this.handleRadio.bind(this);
// this.handleSubmit = this.handleSubmit.bind(this);
//
//
// handleChange(e) {
//   let input = e.target.value;
//
//   this.setState({
//     value: input,
//   });
// }
//
// handleRadio(e) {
//   let input = +e.target.value;
//
//   this.setState({
//     checked: input,
//   });
// }
//
// handleSubmit(e) {
//   e.preventDefault();
//
//   let player_name = this.state.value;
//   let skill = this.state.checked
//
//   this.props.onSubmit(player_name, skill);
//
//   this.setState({
//     value: ""
//   });
// }
//
//
//
//
// <form className="form" onSubmit={ this.handleSubmit }>
//   <label className="label" htmlFor="player_name">Add a player: </label>
//   <input className="main input" id="player_name" onChange={ this.handleChange } value={ value }></input>
//   <label className="label" htmlFor="poor">
//     <input className="radio" onClick={ this.handleRadio } name="skill" type="radio" value="1" id="poor"/>
//     Poor
//   </label>
//   <label className="label" htmlFor="average">
//     <input className="radio" onClick={ this.handleRadio } name="skill" type="radio" value="2" id="average"/>
//     Average
//   </label>
//   <label className="label" htmlFor="good">
//     <input className="radio" onClick={ this.handleRadio } name="skill" type="radio" value="3" id="good"/>
//     Good
//   </label>
//   <button className="solo-buttons btn btn-info" disabled={ disabled }>Add</button>
// </form>
//
//       { value.length < 1 ? <p className="validation alert alert-secondary">Please enter a player name and select and skill level. Max 100 characters</p> : null }
//
//

import React, { Component } from "react";
import { View, Text } from "react-native";

class Create extends Component {
  render() {
    return(
      <View>
        <Text>Create Page</Text>
      </View>
    )
  }
}

Create.navigationOptions = {
  title: 'Create a Player',
};

export default Create
