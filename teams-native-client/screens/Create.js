import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

class Create extends Component {
  constructor(props) {
    super(props)

    // sets the initial state to empty strings to allow for easy input by the user
    this.state = {
      value: "",
      skillSet: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  // submits the form with the data filled in by the user
  handleSubmit(e) {
    const { value, skillSet } = this.state;

    e.preventDefault();

    let player_name = value;
    let skill = +skillSet

    this.props.onSubmit(player_name, skill);

    // resets the state to it's initial values so the user can add more players easily
    this.setState({
      value: "",
      skillSet: "0"
    });

    // takes the user back to the players screen to show the updated player list
    this.props.navigation.navigate('Players');
  }

  render() {

    // destructuring the state object
    let { value, skillSet } = this.state;

    // render logic for form validation
    let valueError = value.length < 1 || value.length > 30 ? true : false;
    let skillError = skillSet === "1" || skillSet === "2" || skillSet === "3" ? false : true;
    let disabled = (valueError || skillError) ? true : false;

    return(
      <View style={ styles.container }>
        {/* A form is rendered */}
        <FormLabel>Name</FormLabel>
        <TextInput
          placeholder='Player Name'
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          style={ styles.input }
          keyboardType='default'
          value={this.state.value}
          onChangeText={(text) => this.setState({ value: text })} />
        { valueError ? <FormValidationMessage>{'Name must be between 1 and 30 characters'}</FormValidationMessage> : null }
        <FormLabel>Skill</FormLabel>
        <TextInput
          placeholder='Skill'
          autoCapitalize='none'
          keyboardType='number-pad'
          autoCorrect={ false }
          value={ this.state.skill }
          style={ styles.input }
          onChangeText={(num) => this.setState({ skillSet: num })} />
        { skillError ? <FormValidationMessage>{'Skill must be between 1 and 3'}</FormValidationMessage> : null }
        <Button
          title="Add Player"
          onPress={ this.handleSubmit }
          style={ styles.button }
          disabled={ disabled }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    marginLeft: 20,
    fontSize: 18,
    marginTop: 10
  },
  button: {
    marginTop: 15
  }
});


Create.navigationOptions = {
  title: 'Add a Player',
};

export default Create;
