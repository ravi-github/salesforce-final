import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from "../../config/config.json";

let backgroundColors = ['lightgoldenrodyellow', 'lightcoral', 'lightsalmon', 'lightsalmon', 'lightgreen'];

class PostListView extends Component { 

  constructor(props) {
    window.scrollTo(0, 0)
    super(props);
    let baseURL;
    if(config.useMock) {
      baseURL = 'mock/data.json';
    } else {
      baseURL = 'https://salesforce-blogs.herokuapp.com/blogs/api/';
    }
  }

  render() {
    let randIndex, randColor, linkJSON;
    randIndex = Math.floor(Math.random() * 5);
    randColor = backgroundColors[randIndex];
    linkJSON = {  
      pathname: "/post-view/" + this.props.post.id,
      data: { 
        mockID: this.props.post.id,
       } 
    };
    return (
            <div className="post col-md-4">
                <div className="postDiv">
                    <Link to={linkJSON}>   
                      <div style={{background : randColor}} className="title">
                          {this.props.post.title && this.props.post.title.substr(0, 50) + "..."}
                      </div>
                    </Link>
                    <Link to={linkJSON}>   
                      <div className="row description">
                        <div className="col-md-6">
                          <img className="userImage" src={this.props.post.imageURL} alt="LOGO" />
                        </div>
                        <div className="col-md-6">
                          {this.props.post.text.substr(0, 170)} ...
                        </div>
                      </div>
                    </Link>
                    <Link to="/user/1">
                      <div className="source">
                          {this.props.post.publishDate}
                      </div>
                    </Link>
                </div>
            </div>
    );
  }
}

export default PostListView;
