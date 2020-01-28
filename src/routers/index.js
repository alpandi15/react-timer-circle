import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Countdown from '../pages/countdown'
import Countdown2 from '../pages/countdown-test'
import CountdownTest2 from '../pages/countdown-test2'
import Paginate from '../pages/paginate'
import Home from '../pages/home'

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/countdown" component={Countdown} />
        <Route exact path="/countdown-test" component={Countdown2} />
        <Route exact path="/countdown-test2" component={CountdownTest2} />
        <Route exact path="/paginate" component={Paginate} />
      </Switch>
    </BrowserRouter>
  )
}

export default router
