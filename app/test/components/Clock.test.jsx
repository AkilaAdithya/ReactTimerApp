var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ =require('JQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock',()=>{
  it('Should exists', ()=>{
    expect(Clock).toExist();
  });
  describe('Should format seconds',()=>{
    it('Should format seconds',()=>{
      var clock= TestUtils.renderIntoDocument(<Clock/>);
      var seconds=602;
      var expected='10:02';
      var actual=clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});
