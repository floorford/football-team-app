import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

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

  handleDelete(e) {
    this.props.onDelete();
  }

  renderItem({ item }) {

    onPress = (item) => {
      this.props.navigation.navigate('Player', {
        title: `Player: ${item.player_name}`,
        body: item
      })
    }

    return (
      <View>
        <TouchableHighlight underlayColor='#e4e4e4' style={ styles.news } onPress={ () => onPress(item) }>
          <View>
            <Text style={ styles.text }>
              { item.player_name }
            </Text>
            <Text style={ styles.text }>
              { item.skill }
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  keyExtractor(item, index) {
    return `${index}`;
  }

  render() {
    let { players } = this.props;

    return (
      <View>
        { players.length > 0 ?
          <FlatList data={ players } renderItem={ this.renderItem } keyExtractor={this.keyExtractor}/>
          :
          <Text>Add some players above to start your team creation!</Text>
        }
        <TouchableHighlight onPress={ this.handleWipe }>
          <Text>Remove all players</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={ this.handleAssign }>
          <Text>Make your teams</Text>
        </TouchableHighlight>
        {/* onDelete for the swipe needs to be built */}
      </View>
    )
  }
};

Players.navigationOptions = {
  title: 'Create Your Players',
  headerBackTitle:'Back to players'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  news: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    paddingLeft: 10
  },
  time: {
    fontSize: 15,
    color: 'grey',
    paddingLeft: 10,
    marginBottom: 5
  },
});

export default Players;
