import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Home, About, Register, Login } from '../components/index';
import ContactState from './../context/contact/contact.state';
import AuthState from '../context/auth/auth.state';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </ContactState>
    </AuthState>
  );
};

export default App;
