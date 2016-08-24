var React = require('react');
var styles = require('../styles');
var MainContainer = require('../containers/MainContainer');

var data = [
  {
    project: '1',
    title: 'Idea Storm', 
    description: 'Collaboratively create and rank ideas', 
    technologies: 'Backbone, Heroku, Flask, PostgreSQL, JavaScript',
    github: 'https://github.com/yujinjcho/brainStorm',
    imageUrl: 'http://i.imgur.com/4m9dQSe.png',
    projectUrl: 'http://ideastorm.herokuapp.com/'
  },
  {
    project: '2',
    title: 'Its Pong', 
    description: 'Connect local ping pong players', 
    technologies: 'Flask, PostgreSQL, OAuth, Geolocation',
    github: 'https://github.com/yujinjcho/itspong',
    imageUrl: 'http://i.imgur.com/czQbhmx.png',
    projectUrl: 'http://www.itspong.com/'
  },
  {
    project: '3',
    title: 'Productivity Timer', 
    description: 'Tool used to help manage work sessions inspired by the Pomodoro method', 
    technologies: 'HTML, CSS, JavaScript',
    github: 'https://github.com/yujinjcho/timer',
    imageUrl: 'http://i.imgur.com/aEVSfKq.png',
    projectUrl: 'http://timer-sessions.bitballoon.com/'
  },
  {
    project: '4',
    title: 'Tic Tac Toe', 
    description: 'Unbeatable Tic Tac Toe Game', 
    technologies: 'JavaScript',
    github: 'https://github.com/yujinjcho/tictactoe',
    imageUrl: 'http://i.imgur.com/IeYJBHl.png',
    projectUrl: 'http://tictactoe-verysmart.bitballoon.com/'
  }
];



var Home = React.createClass({
  render: function() {
    return (
      <MainContainer data={data}/>
    )
  }
})

module.exports = Home;