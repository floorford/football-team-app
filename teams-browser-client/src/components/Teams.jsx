import React, { Component } from "react";

import { Link } from "react-router-dom";

class Teams extends Component {
  render() {
    const { players } = this.props;

    let teamOne = players.filter(player => player.team === 1);
    let teamTwo = players.filter(player => player.team === 2);

    let averageSkill = Math.round(players.reduce((acc, player) => {
      return acc + player.skill;
    }, 0) / players.length);

    let skill = averageSkill === 1 ? "Poor" : averageSkill === 2 ? "Average" : "Good";

    return(
      <React.Fragment>
        { players.length ?
          <div>
            <Link to="/">
              <button type="button">Change your players</button>
            </Link>
            <h2>Team One</h2>
            <h4>Team Skill Level: { skill }</h4>
            <ul>
              { teamOne.map((player, i) => (
                <li key={ i }>{ player.player_name }</li>
              ))}
            </ul>
            <h2>Team Two</h2>
            <h4>Team Skill Level: { skill }</h4>
            <ul>
              { teamTwo.map((player, i) => (
                <li key={ i }>{ player.player_name }</li>
              ))}
            </ul>
          </div>
        :
        <p>You can't have teams without players! Go to the <Link to="/">team creator</Link> to add some.</p>
      }
      </React.Fragment>
    )
  }
}

export default Teams;
