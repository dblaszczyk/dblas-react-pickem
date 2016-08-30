// ---------- Dependencies ---------- //
import React from 'react';

import GameList from './gamelist';

import get from './helpers/get';
import buildGamesArray from './helpers/build-games-array';
// ---------- Component Definition ---------- //
const Pickem = React.createClass({
  getInitialState: function(){
    return {
      week : 1,
      gameList: []
    }
  },

  getGameList: function() {
      get('http://www.nfl.com/ajax/scorestrip?season=2016&seasonType=REG&week=' + this.state.week).then((response) => {
          this.setState({gameList: buildGamesArray(response)});
      });
  },

  componentDidMount: function(){
      this.getGameList();
  },

  handleWeekNavClick: function(e) {
      let thisClass = e.target.className;

      this.setState((previousState) => {
          return {week: thisClass === 'next' ? previousState.week + 1 : previousState.week - 1};
      }, this.getGameList);
  },

  render: function(){
    return (
      <div className="pickem">
        <span className="prev" onClick={this.handleWeekNavClick}>&#x25C0;</span>
        <span className="next" onClick={this.handleWeekNavClick}>&#x25B6;</span>
        <h1>Week {this.state.week} Pickem</h1>
        <GameList games={this.state.gameList} />
      </div>
    );
  }
});

export default Pickem;
