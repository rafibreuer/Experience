import * as React from 'react';
import './App.css';
import Home from './components/home';
import CreateUserForm from './components/createUserForm';
import Navbar from './components/navbar';
import WorkShopList from './components/workShopList';
import WorkShopTable from './components/workShopTable';
import Profiles from './components/profiles';

import { Link } from 'react-router-dom';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/createUserForm" component={CreateUserForm} />
            <Route path="/workShopList" component={WorkShopList} />
            <Route path="/workShopTable" component={WorkShopTable} />
            <div className='ct' ><a href='https://rafibreuer.com'>&copy; rafibreuer.com</a></div>
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
