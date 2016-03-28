// ---------- Dependencies ---------- //
import React from 'react';

import Team from './team';
import Chooser from './chooser';
// ---------- Component Definition ---------- //
const Game = React.createClass({
  render: function(){
    return(
      <li className="game">
        <Team teamAbbr={this.props.awayTeam} />
        <Chooser />
        <Team addClass="home" teamAbbr={this.props.homeTeam} />
      </li>
    );
  }
});

export default Game;
