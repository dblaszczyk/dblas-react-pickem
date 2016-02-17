// ---------- Dependencies ---------- //
import React from 'react';

import Team from './team';
import Chooser from './chooser';
// ---------- Component Definition ---------- //
const Game = React.createClass({
  render: function(){
    return(
      <li>
        <Team teamAbbr={this.props.awayTeam} />
        <Chooser />
        <Team teamAbbr={this.props.homeTeam} />
      </li>
    );
  }
});

export default Game;
