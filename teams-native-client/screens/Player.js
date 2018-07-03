import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


class Player extends Component {
  constructor(props) {
    super(props)

    const player = this.props.navigation.getParam('body');

    this.state = {
      value: player.player_name,
      skill: player.skill.toString(),
      id: player.id,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    let { id, value, skill } = this.state;
    let skillNum = +skill

    this.props.onUpdate(id, value, skillNum);
    this.props.navigation.navigate('Players');
  }

  render() {

    let { value, skill } = this.state;
    let valueError = value.length < 1 || value.length > 30 ? true : false;
    let skillError = skill === "1" || skill === "2" || skill === "3" ? false : true;

    return (
      <View>
        <FormLabel>Name</FormLabel>
        <TextInput
          placeholder='Player Name'
          autoCapitalize='none'
          autoCorrect={false}
          autoFocus={true}
          keyboardType='default'
          value={this.state.value}
          onChangeText={(text) => this.setState({ value: text })} />
        { valueError ? <FormValidationMessage>{'Name must be between 1 and 30 characters'}</FormValidationMessage> : null }
        <FormLabel>Skill</FormLabel>
        <TextInput
          placeholder='Skill'
          autoCapitalize='none'
          keyboardType='number-pad'
          autoCorrect={false}
          value={this.state.skill}
          onChangeText={(num) => this.setState({ skill: num })} />
        { skillError ? <FormValidationMessage>{'Skill must be between 1 and 3'}</FormValidationMessage> : null }
        <Button
          title="Add Player"
          onPress={this.handleSubmit}
        />
      </View>
    )
  }
}

Player.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title'),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 5,
  },
});

export default Player
