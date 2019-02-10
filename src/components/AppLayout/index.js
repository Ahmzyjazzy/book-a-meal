
import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.scss';

// components
import Header from '../Header';
import HomeLayout from '../HomeLayout';
import LoginLayout from '../LoginLayout';

class App extends Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={HomeLayout} />
            <Route exact path='/login' component={LoginLayout} />
          </Switch>
        </main>
        <footer>
          <p>Developed by Ahmzyjazzy</p>
          <p>&copy; { new Date().getFullYear() } All rights reserved.</p>
          <p>Made for ALCwithForloop</p>
        </footer>
      </Fragment>
    );
  }
}

export default App;