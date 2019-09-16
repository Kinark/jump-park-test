import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from '~/components/PrivateRoute';

import Home from '~/views/Home';
import Login from '~/views/Login';

export default class AppRoutes extends PureComponent {
   render() {
      return (
         <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
         </Switch>
      )
   }
}
