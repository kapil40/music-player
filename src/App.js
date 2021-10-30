import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Music from './containers/Music/Music';
import Favourites from './containers/Favourites/Favourites'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/favourites' component={Favourites}/>
            <Route path='/' component={Music}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
