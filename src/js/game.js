// ---------- Dependencies ---------- //
import React from 'react';

import Team from './team';
import Chooser from './chooser';
// ---------- Component Definition ---------- //
const Game = React.createClass({
  render: function(){
    return(
      <li className="game">
        <Team data={this.props.away} />
        <Chooser />
        <Team addClass="home" data={this.props.home} home={true} />
      </li>
    );
  }
});

export default Game;
