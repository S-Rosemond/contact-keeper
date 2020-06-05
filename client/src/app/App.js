import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Home, About } from '../components/index';
import ContactState from './../context/contact/contact.state';

const App = () => {
  return (
    <ContactState>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
