import React from  'react';
import {Route, Link, browserHistory, Router} from 'react-router';

import LoginComponent from './components/login.jsx';
import NotFoundComponent from './components/notfound.jsx';
import RegisterComponent from './components/register.jsx';

export const renderRouter = () => (
    <Router history={browserHistory}>
        <Route path="/" >
            <Route path="login" component={LoginComponent}/>
            <Route path="register" component={RegisterComponent} />
            <Route path="*" component={NotFoundComponent}/>
        </Route>
    </Router>
);



