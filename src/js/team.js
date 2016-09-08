// ---------- Dependencies ---------- //
import React from 'react';

// ---------- Component Definition ---------- //
const Team = React.createClass({
    propTypes: {
        addClass: React.PropTypes.string,
        data: React.PropTypes.object,
        gameId: React.PropTypes.string,
        home: React.PropTypes.bool,
        onSelect: React.PropTypes.func
    },

    handleSelect: function() {
        let props = this.props;

        props.onSelect(props.gameId, props.data.abbr);
    },

    render: function() {
        let data = this.props.data;
        let imgUrl = 'http://i.nflcdn.com/static/site/7.4/img/logos/helmet-' + (this.props.home ? 'right' : 'left') + '-115x93/' + data.abbr + '.png';
        let addClass = this.props.addClass ? ' ' + this.props.addClass : '';
        let selectedIcon = this.props.home ? 'check-square-o' : 'square-o';

        return (
            <div onClick={this.handleSelect} className={'team' + addClass}>
                <img width="115" height="93" src={imgUrl} />
                <div className="info">
                    <h3 className="abbr">{data.abbr}</h3>
                    <p className="name">{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</p>
                    <p>{data.score}</p>
                </div>
                <i className={'fa-2x fa fa-' + selectedIcon} aria-hidden="true" />
            </div>
        );
    }
});

export default Team;
