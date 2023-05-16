import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import defaultImg from '../../assets/images/defaultUser.png';
import menuConst from '../../constants/menu';
import { connect } from 'react-redux';
import './header.css';
import ScriptTag from 'react-script-tag';


@connect((store) => {
  return {
    user: store.user
  };
})

class Header extends Component {
  constructor(props) {
    super(props);
    this.menu = [];
    this.active = '';
  }
  shouldComponentUpdate(nextProps){
    return nextProps.user !== this.props.user || this.props.location.pathname !== nextProps.location.pathname;
  }
  dropDown = () => {
    if(!isEmpty(this.menu.dropDown)){
      return (
        <div className='col-12'>
        <ul className="navbar-nav min-width-130">
         
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle cacc " href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">
              <img className="header-img1" onError={(e)=>{e.target.src=defaultImg}} src={this.props.user.details.image}/> {this.props.user.details.name || 'Create Account'}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {
                Object.keys(this.menu.dropDown).map((item) => (<Link key={item} to={this.menu.dropDown[item].url} className='dropdown-item'>{this.menu.dropDown[item].label}</Link>))
              }
            </div>
          </li>
         
        </ul>
        
        </div>
      )
    }
  };

  render() {
    this.menu = this.props.user.isAuthenticated ? menuConst.private : menuConst.public;
    this.active = this.props.history.location.pathname || this.props.menu.home.url;
    return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-clr kys-ul'>
      <a className="navbar-brand" href={this.menu.list.home.url}>
      <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>


      </a>
     
      <div className='collapse navbar-collapse '>
        <ul className='navbar-nav mr-auto kys-tab' >
          {
            Object.keys(this.menu.list).map((item) => {
              return (
                <li className={this.active === this.menu.list[item].url ? 'nav-item active' : 'nav-item'} key={item}>
                  {this.menu.list[item].menu && (<Link to={this.menu.list[item].url} className='nav-link kys-li'>{this.menu.list[item].label}</Link>)}
                  <div id="indicator"></div>
                </li>
              );
            })
          }
         
        </ul>
        {this.dropDown()}
        </div > 
    </nav>
    );
  }
}

export default withRouter(Header);