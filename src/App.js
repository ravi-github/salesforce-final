import React, { Component } from 'react';
import { Redirect, Route, BrowserRouter } from "react-router-dom"
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
            <div className="app">
                <BrowserRouter>
                  <Header/>
                  <Route exact path="/">
                    <Redirect to="/dashboard" /> : <Body />
                  </Route>
                  <Footer/>
                </BrowserRouter>
            </div>
            );
  } 

}

export default App;



