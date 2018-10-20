import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import AddContact from './components/contacts/AddContact'
import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>

          <div className="App">
            <Header logo="Contact Manager" />
            <div style = {{maxWidth: "700px"}} className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/add" component={AddContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>

        </Router>
      </Provider>
    );
  }
}

export default App;
