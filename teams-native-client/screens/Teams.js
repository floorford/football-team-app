import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableHighlight, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

class Teams extends Component {
  // setting what will be rendered using the FlatList data
  renderItem({ item }) {

    return (
      <View>
        <Text style={[ styles.team, {fontSize:16} ]}  >
          { item.player_name }
        </Text>
      </View>
    );
  }

  // assigning a key to each item for rendering efficiency
  keyExtractor(item, index) {
    return `${index}`;
  }

  render() {
    // destructuring the props object
    const { players } = this.props;

    // filtering the players into two teams based on the team value assigned to them by the backend
    let teamOne = players.filter(player => player.team === 1);
    let teamTwo = players.filter(player => player.team === 2);

    // logic which figures out the average skill level on the team based on the skill of each player
    let averageSkill = Math.round(players.reduce((acc, player) => {
      return acc + player.skill;
    }, 0) / players.length);

    // logic which renders the team skill text based on the value above
    let skill = averageSkill === 1 ? "Poor" : averageSkill === 2 ? "Average" : "Good";

    return (
      <View style={ styles.container }>
        {/* Checks there are player to show, else renders text prompting the user to go back a screen to create some, this page shouldn't be accessible to the user through button clicks if there are no players initially, but is put in as a safegaurd if connection to the database is lost during the screen load */}
        { !players.length ? <Text style={ styles.title }>You can't have teams without players! Go to the team creator to add some.</Text>
        :
        <View>
          <ScrollView>
            {/* Team one is rendered in this ScrollView */}
            <Text style={[styles.title, {fontSize: 20, color: 'red'}]}>Team One</Text>
            <Text style={[styles.skill, {fontSize: 17}]}>Team Skill Level: { skill }</Text>
            <FlatList data={ teamOne } renderItem={ this.renderItem } keyExtractor={this.keyExtractor}/>
          </ScrollView>
          {/* Team two is rendered in this ScrollView */}
          <View style={ styles.separator }/>
          <View style={ styles.separator }/>
          <ScrollView>
            <Text style={[ styles.title, {fontSize: 20, color: 'blue'} ]}>Team Two</Text>
            <Text style={[ styles.skill, {fontSize: 17} ]}>Team Skill Level: { skill }</Text>
            <FlatList data={ teamTwo } renderItem={ this.renderItem } keyExtractor={this.keyExtractor}/>
          </ScrollView>
        </View>
        }
      </View>
    )
  }
}

// The header bar includes a link to the five a side football rules
Teams.navigationOptions = {
  title: 'Your Teams',
  headerRight: (
    <TouchableHighlight
      onPress={
        async (url) => WebBrowser.openBrowserAsync('http://www.5-a-side.com/summary-of-5-a-side-rules/')
      }
      style={{marginRight: 7}}
      underlayColor="rgb(21, 160, 180)"
    >
      <Ionicons name="ios-football" size={ 36 } color="white" />
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
    textAlign: 'center',
    marginTop: 30
  },
  skill: {
    color: 'lightgrey',
    textAlign: 'center',
    marginTop: 10
  },
  team: {
    textAlign: 'center',
    marginTop: 10
  },
  two: {
    marginTop: 70
  },
  separator: {
    height: 1,
    backgroundColor: 'rgb(21, 160, 180)',
    marginTop: 30,
  }
});

export default Teams;
