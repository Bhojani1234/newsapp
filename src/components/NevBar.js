
import React, { Component } from 'react'


export class NevBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsMonkey
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                <li className="nav-item"><a className="nav-link" href="/Entertainment">Entertainment</a></li>
                <li className="nav-item"><a className="nav-link" href="/general">General</a></li>
                <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
                <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
                <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
              </ul>
              <form className="d-flax">
              <a className="btn btn-primary mx-1" href="/Login" role="button">Login</a>
                 <a className="btn btn-primary mx-1" href="/Signup" role="button">Signup</a>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NevBar;