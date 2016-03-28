// ---------- Dependencies ---------- //
import React, { PropTypes } from 'react';

// ---------- Component Definition ---------- //
const Team = React.createClass({
  render: function(){
    let imgUrl = 'http://i.nflcdn.com/static/site/7.2/img/logos/teams-matte-80x53/'+this.props.teamAbbr+'.png';
    let addClass = this.props.addClass ? ' ' + this.props.addClass : '';

    return(
        <div className={'team' + addClass}>
            <img src={imgUrl} />
            <h2>{this.props.teamAbbr}</h2>
        </div>
    );
  }
});

export default Team;
