/* Modules */
import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
/* Assets */
import '../css/styles.scss'; 
import '../images/working_together.png';
import 'typeface-roboto';
/* Components */
import App from '../../Components/App.jsx';
import ResultsPage from '../../Components/Results/ResultsPage.jsx';
import ResultsDetails from '../../Components/Results/ResultsDetails.jsx';
import About from '../../Components/About.jsx';
import Contact from '../../Components/Contact.jsx';
import Forum from '../../Components/Forum/Forum.jsx';
import Login from '../../Components/Auth/Login.jsx';
import SignUp from '../../Components/Auth/SignUp.jsx';
import Profile from '../../Components/Auth/Profile.jsx';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/searchSubmit" component={ResultsPage} />
      <Route path="/resultsDetails" component={ResultsDetails} />
      <Route path="/api/forum/:id" component={Forum} /> 
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path='/profile' component={Profile} />
    </div>
  </Router>
);



render(
  <div>
    {routing}
  </div>,
  document.getElementById('root')
);
