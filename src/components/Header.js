import React, { Component } from 'react';

class Header extends Component {

  handleClick() {
    document.location.href="/dashboard";
  }

  render() {
    return (
        <div className="stickyHeader" onClick={this.handleClick}>
            <div className="header">
                <img className="headerLogo" src="images/salesforce.png" alt="LOGO" />
                <div className="headerText">SALESFORCE BLOG SYSTEM</div>
            </div>
        </div>
    );
  }

}

export default Header;


