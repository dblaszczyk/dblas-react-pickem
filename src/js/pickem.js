// ---------- Dependencies ---------- //
import React from 'react';

import GameList from './gamelist';

import get from './helpers/get';
// ---------- Component Definition ---------- //
const Pickem = React.createClass({
  getInitialState: function(){
    return {
      games : [],
      week : 1
    }
  },

  componentDidMount: function(){
    get('http://www.nfl.com/liveupdate/scores/scores.json').then(response => {
      let data = JSON.parse(response);
      let gamesArray = [];

      for ( let prop in data ){
        data[prop].id = prop;
        gamesArray.push(data[prop]);
      }

      this.setState({games: gamesArray});
    });
  },

  render: function(){
    return (
      <div className="pickem">
        <h1>Week  Pickem</h1>
        <GameList games={this.state.games} />
      </div>
    );
  }
});

export default Pickem;
