import React, { Component } from 'react';
import axios from 'axios'
import PostListView from './PostListView';
import config from "../../config/config.json";

class PostDashboard extends Component { 

  constructor(props) {
    let baseURL;
    super(props);
    if(config.useMock) {
      baseURL = 'mock/data.json';
    } else {
      baseURL = 'https://salesforce-blogs.herokuapp.com/blogs/api/';
    }
    this.state = {
        loading: true,
        posts: [],
        baseURL: baseURL,
    };
  } 

  componentDidMount() {   
    let posts;
    const { baseURL } = this.state;
    axios.get(baseURL)
    .then( (response) => {
      console.log('R', response);
        posts = response.data;
        for(let i = 0; i < 4; i ++) {   
          posts = posts.concat(response.data);
        }
        console.log('POSTS', posts);
        posts.map( (post, index) => {
          post.imageURL = "images/post" + (index % 5) + ".jpg";
          return post;
        }
        );
        setTimeout(() => {
            this.setState({ loading: false, posts: posts });
        }, 1000);
    } );  
  }

  render() {
    const { posts} =  this.state;
    if (this.state.loading) {
        return ( 
            <div className="row spinnerRow">
                <div className="loader">LOADING</div>
            </div>
        );
    } else {
        const postsHTML = posts.map((post, index) =>
        (<PostListView ind={index} key={index} post={post}/>) 
        );
        return (
            <div className="mainCont">
                <br></br>
                <div className="row">
                    {postsHTML}
                </div>
            </div>
        );
    }


  }

}

export default PostDashboard;
