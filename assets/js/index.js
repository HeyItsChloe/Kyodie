import React from 'react';
//import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import '../css/styles.scss'; /* added here so that webpack can bundle styles */
import '../images/working_together.png'
import '../images/working_together_2.png'

import App from '../../Components/App.jsx';
import ResultsPage from '../../Components/Results/ResultsPage.jsx';
import ResultsDetails from '../../Components/Results/ResultsDetails.jsx';
import CategoryDetails from '../../Components/Categories/CategoryDetails.jsx';
import About from '../../Components/About.jsx';
import Contact from '../../Components/Contact.jsx';
import store from '../../Redux/store.js'
import { Provider } from 'react-redux';
import { render } from 'react-dom';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/searchSubmit" component={ResultsPage} />
        <Route path="/resultsDetails" component={ResultsDetails} />
        <Route path="/categoryDetails" component={CategoryDetails} />
      </div>
    </Router>
  )

render(
    <Provider store={store}>
    {routing}
    </Provider>,
    document.getElementById('root')
);
