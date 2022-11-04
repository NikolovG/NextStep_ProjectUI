import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Login from './views/login'
import Home from './views/home'
import Help from './views/help'
import Profile from './views/profile'
import Documents from './views/documents'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Login} exact path="/" />
        <Route component={Home} exact path="/home" />
        <Route component={Help} exact path="/help" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Documents} exact path="/documents" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
