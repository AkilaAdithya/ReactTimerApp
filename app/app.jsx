var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require ('Timer');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//Load Css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}/>
      <Route path="Countdown" component={Countdown}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
