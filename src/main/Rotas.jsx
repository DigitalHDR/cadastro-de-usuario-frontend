import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <Switch>
        {/* exact é para ir exatamente e somente quando tiver / apenas */}
        <Route exact path='/' component={Home} /> 
        <Route path='/users' component={UserCrud} />
        {/* Redirect é para caso não caia em nenhuma dessa rota volte para home */}
        <Redirect from='*' to='/' />
    </Switch>