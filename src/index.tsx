import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './header/header';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/customers" component={App}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById("root"));
