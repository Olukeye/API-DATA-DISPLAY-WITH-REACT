import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CompanyList from './components/CompanyList';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';



class App extends Component {
  state = {
    brandinfoarray: [],
  };

  // This object is appended to the array of 
  // objects stored in arrayofcompanydata on the state
  addCompany =  (companydata) => {
    this.setState(prevState => ({
      brandinfoarray: [...prevState.brandinfoarray, companydata],
    }));
  };

  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
      <div className="pages">
        <Switch>
        <Route  exact path="/" component={Home} />
        <Route  exact path="/about" component={About} />
        <Route  exact path="/contact" component={Contact} />
        </Switch>
        <Form onSubmit={this.addCompany}/>
        <CompanyList brandinfoarray={this.state.brandinfoarray} />
      </div>
      </div>
    </ Router>
    )
  }
}


export default  App;
