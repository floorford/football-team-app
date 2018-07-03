import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableHighlight, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

class Teams extends Component {
  renderItem({ item }) {

    return (
      <View>
        <Text style={ styles.team } >
          { item.player_name }
        </Text>
      </View>
    );
  }

  keyExtractor(item, index) {
    return `${index}`;
  }

  render() {
    const { players } = this.props;

    let teamOne = players.filter(player => player.team === 1);
    let teamTwo = players.filter(player => player.team === 2);

    let averageSkill = Math.round(players.reduce((acc, player) => {
      return acc + player.skill;
    }, 0) / players.length);

    let skill = averageSkill === 1 ? "Poor" : averageSkill === 2 ? "Average" : "Good";

    return (
      <View style={ styles.container }>
        { !players.length ? <Text>You can't have teams without players! Go to the team creator to add some.</Text>
        :
        <View>
          <ScrollView>
            <Text style={[ styles.title, styles.one ]}>Team One</Text>
            <Text style={ styles.skill }>Team Skill Level: { skill }</Text>
            <FlatList data={ teamOne } renderItem={ this.renderItem } style={[ styles.team, styles.one ]} keyExtractor={this.keyExtractor}/>
          </ScrollView>
          <ScrollView>
            <Text style={[ styles.title, styles.two ]}>Team Two</Text>
            <Text style={ styles.skill }>Team Skill Level: { skill }</Text>
            <FlatList data={ teamTwo } renderItem={ this.renderItem } keyExtractor={this.keyExtractor}/>
          </ScrollView>
        </View>
        }
      </View>
    )
  }
}

Teams.navigationOptions = {
  title: 'Your Teams',
  headerRight: (
    <TouchableHighlight
      onPress={
        async (url) => WebBrowser.openBrowserAsync('https://img.fifa.com/image/upload/datdz0pms85gbnqy4j3k.pdf')
      }
      style={{marginRight: 5}}
    >
      <Ionicons name="ios-football" size={ 38 } color="white" />
    </TouchableHighlight>
  ),
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center'
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20
  },
  skill: {
    fontSize: 17,
    color: 'lightgrey',
    textAlign: 'center'
  },
  team: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5
  },
  one: {
    color: 'red'
  },
  two: {
    color: 'blue',
    marginTop: 50
  }
});

export default Teams;
