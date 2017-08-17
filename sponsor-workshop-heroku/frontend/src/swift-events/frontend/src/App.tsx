import * as React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import Verify from './Verify';
import verifyEmail from './components/verifyEmail';
import Login from './screens/login';
import SignUp from './screens/signUp';
import vendorSignUpServiceSelector from './screens/vendorSignUpServiceSelector';


class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/vendorSignUpServiceSelector" component={vendorSignUpServiceSelector} />
            <Route path="/verify/:token" component={Verify} />
            <Route path="/verifyEmail/:tempToken" component={verifyEmail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;