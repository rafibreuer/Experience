import * as React from 'react';
import './App.css';
import Home from './components/home';
import CreateUserForm from './components/createUserForm';
import Navbar from './components/navbar';
import ShulList from './components/shulList';
import KollelList from './components/kollelList';

import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <div>

            <Route exact path="/" component={Home} />
            <Route path="/createUserForm" component={CreateUserForm} />
            <Route path="/shulList" component={ShulList} />
            <Route path="/kollelList" component={KollelList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
