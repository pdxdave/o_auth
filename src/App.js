import React, {Component} from 'react';
import './App.css';
import {Route, Redirect, Switch} from 'react-router-dom'

import Home from './Home'
import Profile from './Profile'
import Nav from './Nav'
import Auth from './Auth/Auth';
import Callback from './Callback'
import Public from './Public'
import Private from './Private'


class App extends Component {

  constructor(props){
    super(props)
    this.auth = new Auth(this.props.history)
  }

  render(){
    return (
      <div className="App">
        <Nav auth={this.auth}/>
        <Switch>
          <Route exact path="/" render={props => <Home auth={this.auth} {...props}/> }/>
          <Route exact path="/callback" render={props => <Callback auth={this.auth} {...props}/> }/>
          <Route path="/profile"
            render={props => this.auth.isAuthenticated() ? ( 
              <Profile auth={this.auth} {...props} />
              ) : (
              <Redirect to="/" />
              )
            }
          />
          <Route path="/public" component={Public}/>
          {/* <Route path="/private" render={props => <Private auth={this.auth} {...props}/> }/> */}
          <Route
            path="/private"
            render={props =>
              this.auth.isAuthenticated() ? (
                <Private auth={this.auth} {...props} />
              ) : (
                this.auth.login()
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;
