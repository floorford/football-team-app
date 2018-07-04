import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableHighlight, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

class Teams extends Component {
  renderItem({ item }) {

    return (
      <View>
        <Text style={[ styles.team, {fontSize:16} ]}  >
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
        { !players.length ? <Text style={ styles.title }>You can't have teams without players! Go to the team creator to add some.</Text>
        :
        <View>
          <ScrollView>
            <Text style={[styles.title, {fontSize: 20, color: 'red'}]}>Team One</Text>
            <Text style={[styles.skill, {fontSize: 17}]}>Team Skill Level: { skill }</Text>
            <FlatList data={ teamOne } renderItem={ this.renderItem } keyExtractor={this.keyExtractor}/>
          </ScrollView>
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

Teams.navigationOptions = {
  title: 'Your Teams',
  headerRight: (
    <TouchableHighlight
      onPress={
        async (url) => WebBrowser.openBrowserAsync('http://www.5-a-side.com/summary-of-5-a-side-rules/')
      }
      style={{marginRight: 7}}
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
    backgroundColor: '#009999',
    marginTop: 30,
  }
});

export default Teams;
