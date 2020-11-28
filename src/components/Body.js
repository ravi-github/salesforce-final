import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import PostDashboard from './posts/PostDashboard';
import PostNew from './posts/PostNew';
import PostStats from './posts/PostStats';
import PostDetailView from './posts/PostDetailView';
import NavMenu from './NavMenu';
import Help from './Help';

class Body extends Component {

  render() {
    return (
        <div className="mainContainer container-fluid">
          <div className="row">
          <div className="leftCol col-md-2 col-lg-2">
            <NavMenu/>
          </div>
          <div className="col-md-9 col-lg-9">
                <Switch>
                    <Route path="/" exact component={PostDashboard}/>
                    <Route path="/dashboard" exact component={PostDashboard}/>
                    <Route path="/post-new" exact component={PostNew}/>
                    <Route path="/post-stats" exact component={PostStats}/>
                    <Route path="/post-view/:mockID" component={PostDetailView}/>
                    <Route path="/help" component={Help}/>
                </Switch>
          </div>
          </div>
        </div>
    );
  }

}

export default Body;


