import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import config from "../../config/config.json";

class PostNew extends Component { 

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
      postTitle: '',
      postType: 'Technical',
      postText: '',
      loading: false,
      baseURL, baseURL,
    };
  }

  createPost() {
    const { baseURL, postTitle, postText } = this.state;
    const newPost = {
      text: postText, 
      title: postTitle,
    };
    axios.post(baseURL, newPost)
    .then( (response) => { 
      console.log('NEW POST CREATED !!!', response);
      document.location.href="/dashboard";
    } );
  }

  render() {
    return (
          <div className="addContainer">

                <input required type="text" maxLength="30" className="form-control" id="inputEmail" placeholder="Title" onChange={(e) => {
                  this.setState({
                    postTitle: e.target.value
                  })
                }}/>

                <select className="form-control" onChange={(e) => {
                  this.setState({
                    postType: e.target.value
                  })
                }}>
                  <option value="type">Select Post Type</option>
                  <option value="Technical">Technical</option>
                  <option value="Non Technical">Non Technical</option>
                  <option value="Personal">Personal</option>
                </select> 

                <textarea class="synopsis form-control" placeholder="Text" 
                  onChange={(e) => {
                    this.setState({
                      postText: e.target.value
                    })
                  }}
                  rows="5" id="comment"></textarea>

                <button onClick={this.createPost.bind(this)} className="addNew btn btn-primary">ADD NEW POST</button>

            </div>
    );
  }
}

export default PostNew;
