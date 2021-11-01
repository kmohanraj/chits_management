import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './components/header/header';
import CustomerList from './components/customer/customer-list.component';
import GroupList from './components/group/group-list.component';
import MappingList from './components/mapping/mapping-list.component';
import 'bootstrap/dist/css/bootstrap.css';

const routing = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/customers" component={CustomerList}/>
        <Route path="/groups" component={GroupList} />
        <Route path="/groups" component={GroupList} />
        <Route path="/mapping" component={MappingList} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById("root"));
