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
import Select from '../pages/select'
import Bracket from '../pages/bracket'
import Bracket2 from '../pages/bracket/test2'
import Form from '../pages/form'

const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/countdown" component={Countdown} />
        <Route path="/countdown-test" component={Countdown2} />
        <Route path="/countdown-test2" component={CountdownTest2} />
        <Route path="/paginate" component={Paginate} />
        <Route path="/paginate2" component={Paginate2} />
        <Route path="/team" component={PaginationApi} />
        <Route path="/url_paginate*" component={PaginationUrl} />
        <Route path="/select" component={Select} />
        <Route path="/bracket" component={Bracket} />
        <Route path="/bracket2" component={Bracket2} />
        <Route path="/form" component={Form} />
      </Switch>
    </BrowserRouter>
  )
}

export default router
