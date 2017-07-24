import * as React from 'react';
import { NavbarType } from '../types/header';
import { Link } from 'react-router-dom';
import { Button } from '../swift-events';
import '../html-css/navbar.css';
class Navbar extends React.Component<NavbarType, {}> {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <ul className="nav nav-pills">
              <li className="col-sm-3 col-md-2 col-xs-6 text-center" role="presentation"><Link to={'/'}><img src={require("../html-css/aak-logo.jpg")} /></Link></li>
              <li className="col-sm-3 col-xs-12 text-center" role="presentation"><Link to={'/shulList'}>Shuls that joined</Link></li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="row well text-center">
            {this.props.title}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
