import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';





function App() {
  return (
    <Router>
      <div className="page-container">
        <div className="content-wrap">
        <Navbar />
        <Route exact path='/' component={Homepage} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/projects' component={Projects} />
        <div className="footer">
        <Footer />
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
