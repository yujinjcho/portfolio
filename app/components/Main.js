var React = require('react');

var Home = require('./Home');


var Main = React.createClass({
  render: function(){
    return (
      <div className='main-container'>
        <Home />
      </div>
      
    )
  }
});


module.exports = Main;