import React from 'react';
import { StatusBar } from 'react-native';

import { createStackNavigator } from 'react-navigation';

import Players from './containers/Players';
import Teams from './containers/Teams';
import Create from './containers/Create';
import Player from './containers/Player';

// ************* Status Bar Stuff ***************

StatusBar.setBarStyle('light-content');

// ************** Root Nav ****************

const RootNavigator = createStackNavigator({
  Players: Players,
  Teams: Teams,
  Create: Create,
  Player: Player
}, {
  navigationOptions: {
    headerStyle: {
        backgroundColor: 'rgb(21, 160, 180)'
    },
    headerTintColor: '#ffffff'
  }
});

export default RootNavigator;
