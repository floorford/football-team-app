import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Player extends Component {
  constructor(props) {
    super(props)
    //
    // this.state = {
    // editing: false,
    // value: this.props.player.player_name,
    // checked: this.props.player.skill
    // }

    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
    // this.handleRadio = this.handleRadio.bind(this);
  }

  // handleEdit() {
  // 
  //   this.setState({
  //     editing: true,
  //   });
  //
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
  // handleChange(e) {
  //   let input = e.target.value;
  //
  //   this.setState({
  //     value: input
  //   });
  //
  // }
  //
  // handleSubmit(e) {
  //   e.preventDefault();
  //
  //   let player_name = this.state.value;
  //   let skill = this.state.checked
  //
  //   this.setState({
  //     editing: false
  //   });
  //
  //   this.props.onUpdate(player_name, skill);
  // }

  render() {
    const player = this.props.navigation.getParam('body');

    return (
      <View style={ styles.container }>
        <Text style={ styles.text }>
          Player Name: { player.player_name }.
        </Text>
        <Text style={ styles.text }>
          Skill Level: { player.skill }.
        </Text>
      </View>
    )
  }
}

Player.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title')
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
