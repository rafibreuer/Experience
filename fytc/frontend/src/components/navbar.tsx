import * as React from 'react';
import { NavbarType } from '../types/header';
import { Link } from 'react-router-dom';
import { Button } from '../swift-events';
import '../html-css/navbar.css';
import axios from 'axios';
import setHeader from '../utils/setHeader';
class Navbar extends React.Component<NavbarType, any> {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  async componentWillMount() {
    const name = await axios.get('aak/users/getName', setHeader());
    this.setState({ name: name.data.name +"'s" });
  }
  render() {
    let choose;
    let name;
    if (localStorage.getItem('fytcId')) {
      name = <li className="col-sm-3 col-xs-12 text-center" role="presentation"><Link className="li" to={'/profiles'}>{this.state.name + " Profile"}</Link></li>;
      choose = <li className="col-sm-4 col-xs-12 text-center" role="presentation"><Link className="li" to={'/workShopTable'}>{this.state.name + " Collection"}</Link></li>;
    }
    return (
      <div>
        <div className="container fd">
          <div className="row">
            <ul className="nav nav-pills">
              <li className="col-sm-4 col-xs-12 text-center" role="presentation"><Link className="li" to={'/'}>Home</Link></li>
              {choose}
              {name}
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="nw row well text-center">
            {this.props.title}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
