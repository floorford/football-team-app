import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Swipeout from 'react-native-swipeout';

class Players extends Component {
  constructor (props) {
    super(props);

    this.handleWipe = this.handleWipe.bind(this);
    this.handleAssign = this.handleAssign.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.onLoad();
  }

  handleWipe(e) {
    e.preventDefault();

    this.props.onWipe();
  }

  handleAssign() {
    this.props.onAssign();

    this.props.navigation.navigate('Teams', {
      title: `Teams`,
    })
  }

  handleDelete(e, item) {
    this.props.onDelete(item);
  }

  renderItem({ item }) {

    let swipeBtns = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'white',
      onPress: (e) => { this.handleDelete(e, item) }
    }];

    onPress = (item) => {
      this.props.navigation.navigate('Player', {
        title: `Player: ${item.player_name}`,
        body: item
      })
    }

    return (
      <View>
        <Swipeout right={swipeBtns}
          autoClose={ true }
          backgroundColor= 'transparent'
        >
        <TouchableHighlight underlayColor='#e4e4e4' style={ styles.players } onPress={ () => onPress(item) }>
          <View>
            <Text style={ styles.text }>
              { item.player_name }
            </Text>
            <Text style={ styles.skill }>
              Skill: { item.skill }
            </Text>
          </View>
        </TouchableHighlight>
        </Swipeout>
      </View>
    );
  }

  keyExtractor(item, index) {
    return `${index}`;
  }

  render() {
    let { players } = this.props;

    return (
      <ScrollView>
        { players.length > 0 ?
          <FlatList data={ players } renderItem={ this.renderItem } keyExtractor={this.keyExtractor}/>
          :
          <Text>Add some players above to start your team creation!</Text>
        }
        <TouchableHighlight style={ styles.button } onPress={ this.handleWipe }>
          <Text style={ styles.buttonText }>Remove all players</Text>
        </TouchableHighlight>
        <TouchableHighlight style={ styles.button } onPress={ this.handleAssign }>
          <Text style={ styles.buttonText }>Make your teams</Text>
        </TouchableHighlight>
        {/* onDelete for the swipe needs to be built */}
      </ScrollView>
    )
  }
};

Players.navigationOptions = ({ navigation }) => {
  return {
    title: 'Your Players',
    headerRight: (
      <TouchableHighlight
        onPress={ () => navigation.navigate('Create') }
        style={{marginRight: 5}}
      >
        <Ionicons name="ios-add" size={ 38 } color="white" />
      </TouchableHighlight>
    ),
    headerBackTitle:'Back to Players',
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  players: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    paddingLeft: 10
  },
  skill: {
    fontSize: 15,
    color: 'grey',
    paddingLeft: 10,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'pink',
    borderRadius: 10,
    width: 50 + '%'
  },
  buttonText: {
    color: 'white',
    padding: 3
  }
});

export default Players;
