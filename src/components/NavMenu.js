import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavMenu extends Component {

  render() {
    let menu, displayHTML;
    menu = [
        {"text": "DASHBOARD", "link": "/dashboard"},
        {"text": "ADD NEW", "link": "/post-new"},
        {"text": "STATS", "link": "/post-stats"},
        {"text": "ACTIONS", "link": "/help"}
    ];
    displayHTML = menu.map((menutem, index) =>
    (<Link key={index} to={menutem.link}>
        <button className="navItem btn btn-primary">{menutem.text}</button>
     </Link>) 
    );
    return (
      <div className="pR">
            <div className="navMenu">
              {displayHTML}
            </div>
      </div>
    );
  }

}

export default NavMenu;



