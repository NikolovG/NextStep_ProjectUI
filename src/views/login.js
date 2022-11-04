import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Miniature Remorseful Rabbit</title>
        <meta property="og:title" content="Miniature Remorseful Rabbit" />
      </Helmet>
      <div className="login-container1">
        <div className="login-container2">
          <h1 className="login-text">
            <span>
              Welcome to
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="login-text02">NextStep</span>
          </h1>
        </div>
        <div className="login-container3">
          <input
            type="text"
            placeholder="Username"
            className="login-textinput input"
          />
          <input
            type="text"
            placeholder="Password"
            className="login-textinput1 input"
          />
        </div>
        <div className="login-container4">
          <button className="login-button button">Login</button>
          <button className="login-button1 button">Sign-up</button>
        </div>
        <div className="login-steps">
          <h1 className="login-text03">
            Approach to Keeping Track of Applications
          </h1>
          <div className="login-container5">
            <div className="login-container6">
              <div className="login-step">
                <h1 className="login-text04">
                  <span>1</span>
                </h1>
                <span className="login-text06">
                  <span>Phase 1. Getting through behavioral interviews</span>
                  <br></br>
                </span>
              </div>
              <div className="login-step1">
                <h1 className="login-text09">
                  <span>2</span>
                </h1>
                <span className="login-text11">
                  <span>Phase 2. Ensuring Technical Conditions met</span>
                  <br></br>
                </span>
              </div>
            </div>
            <div className="login-container7">
              <div className="login-step2">
                <h1 className="login-text14">
                  <span>3</span>
                </h1>
                <span className="login-text16">
                  <span>Phase 3. Organizing and Sorting Offers </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
