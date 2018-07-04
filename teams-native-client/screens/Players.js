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

  renderSeparator() {
    const style = { height: 1, backgroundColor: '#777', marginLeft: 4, marginRight: 4 };
    return <View style={style} />;
  }

  render() {
    let { players } = this.props;
    let disabled = players.length < 2 ? true : false;

    let color = disabled ? 'lightgrey' : '#009999';

    const disableColor = {
      backgroundColor: color,
    }

    return (
      <View style={ styles.container }>
        <ScrollView>
        { players.length > 0 ?
          <FlatList data={ players } renderItem={ this.renderItem } keyExtractor={this.keyExtractor} ItemSeparatorComponent={ this.renderSeparator }/>
          :
          <Text style={ styles.text }>Add some players above to start your team creation!</Text>
        }
        </ScrollView>
        <View style={ styles.buttonContainer }>
          { disabled ? <Text style={ styles.text }>Add another player to create two teams</Text> : null }
          <TouchableHighlight style={[ styles.button, styles.button1 ]} onPress={ this.handleWipe } underlayColor="#00cccc">
            <Text style={ styles.buttonText }>Remove all players</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[ styles.button, styles.button2, disableColor ]} onPress={ this.handleAssign } underlayColor="#00cccc" disabled={ disabled }>
            <Text style={ styles.buttonText }>Make your teams</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
};

Players.navigationOptions = ({ navigation }) => {
  return {
    title: 'Your Players',
    headerRight: (
      <TouchableHighlight
        onPress={ () => navigation.navigate('Create') }
        style={{marginRight: 10}}
        underlayColor = "#009999"
      >
        <Ionicons name="ios-add" size={ 38 } color="white" />
      </TouchableHighlight>
    ),
    headerBackTitle:'Back to Players',
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },
  players: {
    height: 50,
    backgroundColor: '#fff',
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
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    borderRadius: 10,
    width: 40 + '%',
    margin: 2,
    backgroundColor: '#009999'
  },
  button1: {
    marginTop: 5
  },
  button2: {
    marginBottom: 30
  },
  buttonText: {
    color: 'white',
    paddingTop: 6,
    paddingBottom: 6,
    textAlign: 'center'
  }
});

export default Players;
