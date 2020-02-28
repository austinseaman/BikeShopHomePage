import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header.js';
import Nav from './Nav.js';
import Main from './Main.js';
import Footer from './Footer.js';
import About from './About.js';
import Contact from './Contact.js'

function App() {

  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
      <Footer />
      <Switch>
        <Route exact path='/' component={App}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </div>
  );
}

export default App;