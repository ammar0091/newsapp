import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import logo from './Logo.PNG'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-white">
          <div className="container-fluid">
            <span className="navbar-brand" ><img src={logo} alt="logo error" style={{ height: '30px' }}></img></span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/sports">sports </Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">Entertainment </Link></li>
                  </ul>
                </li>

              </ul>
              {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            </div>
          </div>
        </nav>

        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <div className="text-white d-flex" >
              <div className='mx-3'>
                
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
              <span className="navbar"></span>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
