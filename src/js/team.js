// ---------- Dependencies ---------- //
import React from 'react';

// ---------- Component Definition ---------- //
const Team = React.createClass({
  render: function(){
    let imgUrl
    return(
        <span>
          <img src={'http://i.nflcdn.com/static/site/7.2/img/logos/teams-matte-80x53/'+this.props.teamAbbr+'.png'} />
          {this.props.teamAbbr}
        </span>
    );
  }
});

export default Team;
