import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Countdown from '../pages/countdown'
import Countdown2 from '../pages/countdown-test'
import CountdownTest2 from '../pages/countdown-test2'
import Paginate from '../pages/paginate'
import Paginate2 from '../pages/paginate2'
import Home from '../pages/home'
import PaginationApi from '../pages/paginate_real'
import PaginationUrl from '../pages/pagination_url'

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/countdown" component={Countdown} />
        <Route exact path="/countdown-test" component={Countdown2} />
        <Route exact path="/countdown-test2" component={CountdownTest2} />
        <Route exact path="/paginate" component={Paginate} />
        <Route exact path="/paginate2" component={Paginate2} />
        <Route exact path="/team" component={PaginationApi} />
        <Route exact path="/url_paginate*" component={PaginationUrl} />
      </Switch>
    </BrowserRouter>
  )
}

export default router
