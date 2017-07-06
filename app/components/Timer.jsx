var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');


var Timer = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Timer.jsx</h1>
        <Clock totalSeconds={610}/>
        <CountdownForm/>
      </div>
    );
  }
});
module.exports=Timer;
