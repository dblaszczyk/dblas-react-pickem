// ---------- Dependencies ---------- //
import React from 'react';

import Game from './game';
// ---------- Component Definition ---------- //
const GameList = React.createClass({
  render: function(){
    let gameItems = this.props.games.map(function(game) {
      return (
        <Game key={game.id} away={game.away} home={game.home} />
      );
    });
    return (
      <ul className="gameList">
        {gameItems}
      </ul>
    );
  }
});

export default GameList;
