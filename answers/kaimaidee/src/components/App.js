import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import NavbarContainer from '../containers/NavbarContainer';
import MyCartContainer from '../containers/MyCartContainer';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <NavbarContainer />
        <div style={{ height: 50 }}/>
        <Container>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/my-cart' component={MyCartContainer}/>
          </Switch>
        </Container>
      </div>
    );
  }
}

export default App;
