// ---------- Dependencies ---------- //
import React, { PropTypes } from 'react';

// ---------- Component Definition ---------- //
const Team = React.createClass({
  render: function(){
    let data = this.props.data;
    let imgUrl = 'http://i.nflcdn.com/static/site/7.4/img/logos/helmet-' + (this.props.home ? 'right' : 'left') + '-115x93/' + data.abbr + '.png';
    let addClass = this.props.addClass ? ' ' + this.props.addClass : '';

    return(
        <div className={'team' + addClass}>
            <img src={imgUrl} />
            <h2>{data.abbr}</h2>
            <h2>{data.name}</h2>
            <h2>{data.score}</h2>
        </div>
    );
  }
});

export default Team;
