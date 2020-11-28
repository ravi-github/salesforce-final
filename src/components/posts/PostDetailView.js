import React, { Component } from 'react';
import axios from 'axios';
import config from "../../config/config.json";

let backgroundColors = ['lightgoldenrodyellow', 'lightcoral', 'lightsalmon', 'lightsalmon', 'lightgreen'];

class PostDetailView extends Component { 

  constructor(props) {
    window.scrollTo(0, 0)
    super(props);
    let baseURL;
    if(config.useMock) {
      baseURL = 'mock/data.json';
    } else {
      baseURL = 'https://salesforce-blogs.herokuapp.com/blogs/api/';
    }
    this.state = {
      post: {},  
      loading: true,
      baseURL: baseURL,
  };
  }
  
  deletePost() {
    const { post } = this.state;
    axios.delete(this.state.baseURL + post.id)
    .then( (response) => { 
      console.log('Post deleted !!!', response);
      document.location.href="/dashboard";
    } );
  }

  componentDidMount() { 
    let id = window.location.pathname.split('/')[2];
    axios.get(this.state.baseURL + id)
    .then( (response) => { 
      console.log('esr', response);
        setTimeout(() => {
            this.setState({ post: response.data, loading: false });
        }, 0);
    } );
  }

  render() {
    let randIndex, randColor, linkJSON, displayString = '';
    randIndex = Math.floor(Math.random() * 5);
    randColor = backgroundColors[randIndex];
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
