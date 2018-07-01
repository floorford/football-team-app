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
            <div class="wrapper">
              <Link to="/">
                <button className="btn btn-info" type="button">Change your players</button>
              </Link>
            </div>
            <div className="team-grid one">
              <h2 className="team1">Team One</h2>
              <p className="player-skill team-skill1">Team Skill Level: { skill }</p>
                { teamOne.map((player, i) => (
                  <div className="team-group" key={ i }>
                    <span>{ player.player_name }</span>
                  </div>
                ))}
            </div>
            <div className="team-grid two">
              <h2 className="team2">Team Two</h2>
              <p className="player-skill team-skill2">Team Skill Level: { skill }</p>
                { teamTwo.map((player, i) => (
                  <div className="team-group" key={ i }>
                    <span>{ player.player_name }</span>
                  </div>
                ))}
            </div>
          </div>
          :
          <p className="error">You can't have teams without players! Go to the <Link to="/">team creator</Link> to add some.</p>
        }
      </React.Fragment>
    )
  }
}

export default Teams;
