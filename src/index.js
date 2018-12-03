import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BackLog from './container/BackLog';
import Releases from './container/Releases';
import Sprints from './container/Sprints';
import Home from './container/Home';

import * as serviceWorker from './serviceWorker';
 import { Router, Route, IndexRoute, hashHistory} from 'react-router';
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={App} >
      <IndexRoute component={Home}/>
      <Route path='/BackLog' component={BackLog} />
      <Route path='/Releases' component={Releases} />
      <Route path='/Sprints' component={Sprints} />
      </Route>
    </Router>
    
    
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
