import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Main from '../Main';
import Contact from './Contact';
import Footer from '../Footer';
import '../App.css';

function App() {

  return (

    <Router>
      <Switch>
        <Route>    
            <Header/>
            <Main/>
            <Contact/>
            <Footer/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;