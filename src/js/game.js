// ---------- Dependencies ---------- //
import React from 'react';

import Team from './team';
// ---------- Component Definition ---------- //
const Game = React.createClass({
    propTypes: {
        data: React.PropTypes.object,
        onSelect: React.PropTypes.func
    },

    render: function() {
        let data = this.props.data;

        return (
            <li className="game">
                <Team onSelect={this.props.onSelect} gameId={data.id} data={data.away} />
                <Team onSelect={this.props.onSelect} gameId={data.id} addClass="home" data={data.home} home={true} />
            </li>
        );
    }
});

export default Game;
