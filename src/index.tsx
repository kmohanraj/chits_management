import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './components/header/header';
import ListCustomer from './components/customer/list-customer.component';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/customer" component={ListCustomer}/>
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById("root"));
