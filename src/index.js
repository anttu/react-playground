import React from 'react';
import ReactDOM from 'react-dom';
import Template from './Template';
import { Router, Route, Link, browserHistory } from 'react-router'


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="*" component={Template} />
    </Router>,
    document.getElementById('root')
);
