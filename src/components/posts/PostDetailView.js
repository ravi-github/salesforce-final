import React, { Component } from 'react';
import axios from 'axios';
import config from "../../config/config.json";

class PostDetailView extends Component { 

  constructor(props) {
    window.scrollTo(0, 0)
    super(props);
    let baseURL;
    if(config.useMock) {
      baseURL = 'mock/data.json';
    } else {
      baseURL = config.baseURL;
    }
    this.state = {
      post: {},  
      loading: true,
      baseURL: baseURL,
  };
  }
  
  deletePost() {
    const { post } = this.state;
    this.setState({ loading: true });
    axios.delete(this.state.baseURL + post.id)
    .then( () => { 
      document.location.href="/dashboard";
    } );
  }

  componentDidMount() { 
    let id = window.location.pathname.split('/')[2];
    axios.get(this.state.baseURL + id)
    .then( (response) => { 
      this.setState({ post: response.data, loading: false });
    } );
  }

  render() {
    if (this.state.loading) {
      return ( 
          <div className="row spinnerRow">
              <div className="loader">LOADING</div>
          </div>
      );
    }
    let randIndex, randColor, linkJSON, displayString = '';
    randIndex = Math.floor(Math.random() * 5);
    randColor = config.backgroundColors[randIndex];
    linkJSON = {}; 
    const { post, loading } = this.state;  
    for(let i = 0;i < 100; i ++) {
      displayString += post.text;
    }
    post.imageURL = "../images/post" + randIndex + ".jpg";

    if (loading) {
      return ( 
          <div className="row spinnerRow">
              <div className="loader">LOADING</div>
          </div>
      );
    }
    return (
            <div className="post col-md-12">
                <div className="postDivDetail">
                  <div className="row mainDescription">
                    <div className="col-md-6">
                      <img className="userImageMain" src={post.imageURL} alt="LOGO" />
                    </div>
                    <div className="postDetailText col-md-6">
                      {displayString}
                    </div>
                    <div class="deleteBtnContainer">
                      <button onClick={this.deletePost.bind(this)} className="deleteBtn btn btn-danger">Delete Post</button>
                    </div>
                  </div>
                </div>
            </div>
    );
  }
}

export default PostDetailView;
