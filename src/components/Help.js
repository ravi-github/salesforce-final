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
      baseURL = config.baseURL;
    }
    this.state = {
      loading: false,
      baseURL: baseURL,
    };
  }

  deleteAllPosts() {
    this.setState({ loading: true });
    axios.delete(this.state.baseURL)
    .then( (response) => { 
      document.location.href="/dashboard";
    } );
  }

  generateSampleData() {
    this.setState({ loading: true });
    axios.get(this.state.baseURL + 'generateSampleData')
    .then( (response) => { 
      document.location.href="/dashboard";
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
    return (
        <div className="actionButtonContainer">
          <button onClick={this.generateSampleData.bind(this)} className="actionBtn btn btn-success">GENERATE SAMPLE DATA 1</button>
          <button onClick={this.deleteAllPosts.bind(this)} className="actionBtn btn btn-danger">DELETE SAMPLE DATA SET 1</button>
          <button onClick={this.generateSampleData.bind(this)} className="actionBtn btn btn-success">GENERATE SAMPLE DATA SET 2</button>
          <button onClick={this.deleteAllPosts.bind(this)} className="actionBtn btn btn-danger">DELETE SAMPLE DATA SET 2</button>
          <button onClick={this.generateSampleData.bind(this)} className="actionBtn btn btn-success">GENERATE SAMPLE DATA SET 3</button>
          <button onClick={this.deleteAllPosts.bind(this)} className="actionBtn btn btn-danger">DELETE SAMPLE DATA SET 3</button>
        </div>
    );
  }

}

export default Footer;


