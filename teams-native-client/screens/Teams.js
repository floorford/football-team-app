import React, { Component } from "react";
import { ScrollView, View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

class Teams extends Component {
  renderItem({ item }) {

    return (
      <View>
        <Text>
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
      <View>
        { !players.length ? <Text>You can't have teams without players! Go to the team creator to add some.</Text>
        :
        <View>
          <ScrollView>
            <Text>Team One</Text>
            <Text>Team Skill Level: { skill }</Text>
            <FlatList data={ teamOne } renderItem={ this.renderItem } keyExtractor={this.keyExtractor}/>
          </ScrollView>
          <ScrollView>
            <Text>Team Two</Text>
            <Text>Team Skill Level: { skill }</Text>
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
      <Ionicons name="ios-film" size={ 38 } color="white" />
    </TouchableHighlight>
  ),
};

export default Teams;
