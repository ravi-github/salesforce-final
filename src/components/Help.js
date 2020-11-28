import React, { Component } from 'react';
import config from "../config/config.json";
import axios from 'axios';

class Footer extends Component {

  constructor(props) {
    window.scrollTo(0, 0);
    super(props);
    let baseURL;
    if(config.useMock) {
      baseURL = 'mock/data.json';
    } else {
      baseURL = 'https://salesforce-blogs.herokuapp.com/blogs/api/';
    }
    this.state = {
      loading: true,
      baseURL: baseURL,
  };
  }

  deleteAllPosts() {
    axios.delete(this.state.baseURL)
    .then( (response) => { 
      console.log('All posts deleted !!!', response);
      document.location.href="/dashboard";
    } );
  }

  generateSampleData() {
    axios.get(this.state.baseURL + 'generateSampleData')
    .then( (response) => { 
      console.log('Sample Data Generated !!!', response);
      document.location.href="/dashboard";
    } );
  }

  render() {
    return (
        <div className="actionButtonContainer">
          <button onClick={this.generateSampleData.bind(this)} className="actionBtn btn btn-success">GENERATE SAMPLE DATA</button>
          <button onClick={this.deleteAllPosts.bind(this)} className="actionBtn btn btn-danger">Delete All</button>
        </div>
    );
  }

}

export default Footer;


