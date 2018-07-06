# football-team-app
This is an app built with react-redux and laravel which allows people to generate a two balanced football teams

Installation Guide

1 - Get vagrant - https://www.vagrantup.com/intro/getting-started/install.html

2 - Clone my repo - https://github.com/floorford/football-team-app

For the API backend:

3 - If you don’t have composer, install it here - https://getcomposer.org/

4 - Make sure laravel and homestead are installed
   run: composer global require laravel/installer

5 - Install homstead
	 run: vendor/bin/homestead make

6 - Run vagrant up

For the react app:

7 - To run the react app open a new terminal window and cd to the teams-browser-client directory 

8 - Run yarn/npm install 

9 - To run the app locally with the vagrant api you will need to open the teams-api directory in your text editor, and uncomment the second baseURL line found in ./src/data/axios.js and then run yarn/npm start

For the react native app:

10 - To run the react native app open a new terminal window and cd to the teams-native-client directory 

11 - Run yarn/npm install, follow step 9 again for this directory, then run yarn/npm start

12 - Use X-Code or another mobile phone simulator to run the app according to the directions given by the command terminal after the start command has completed

13 - If you wish to run the mobile app on your phone, do so via the Expo app (https://expo.io/) and change the baseURL to the web hosted API using the same method as step 11
