var React = require('react');
var CountdownForm = React.createClass({
  render:function(){

    <div>
      <form onSubmit={this.onSubmit} ref="form" className="">
        <input type="text" ref="seconds" placeholder="please enter seconds"/>
        <button>Start</button>
      </form>
    </div>
  }
});
module.exports = CountdownForm;
