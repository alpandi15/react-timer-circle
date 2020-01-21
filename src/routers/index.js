import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Countdown from '../pages/countdown'
import Home from '../pages/home'

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/countdown" component={Countdown} />
      </Switch>
    </BrowserRouter>
  )
}

export default router
