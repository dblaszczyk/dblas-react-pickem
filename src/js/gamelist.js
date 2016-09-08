// ---------- Dependencies ---------- //
import React from 'react';

import Game from './game';
// ---------- Component Definition ---------- //
const GameList = React.createClass({
    propTypes: {
        games: React.PropTypes.array,
        onSelectClick: React.PropTypes.func
    },

    render: function() {
        let props = this.props;
        let gameItems = props.games.map(function(game) {
            return (
                <Game onSelect={props.onSelectClick} key={game.id} data={game} />
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
