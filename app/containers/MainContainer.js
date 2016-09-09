var React = require('react');
var styles = require('../styles');
var ActiveContainer = require('./ActiveContainer');
var ScrollContainer = require('./ScrollContainer');
var FontAwesome = require('react-fontawesome');

var MainContainer = React.createClass({
  getInitialState: function(){
    return {
      active_project: '1'
    }
  },
  focusProject: function(proj){
    this.setState({
      active_project: proj
    })
  },
  render: function() {
    return (
      <div style={styles.mainContainer}>        
        <h1 style={styles.header}>Yujin J. Cho</ h1>
        <h5 style={styles.header}>
          
          <button title="GitHub" onClick={function() {return window.open('https://github.com/yujinjcho')}}>
            <FontAwesome size="lg" name='github' />
          </button>

          
          <button title="Linkedin" onClick={function() {return window.open('https://www.linkedin.com/in/yujinjcho')}}>
            <FontAwesome size="lg" name='linkedin' />
          </button>

          
          <button title="yujinjcho@gmail.com" onClick={function() {return window.open('mailto:yujinjcho@gmail.com')}}>
            <FontAwesome  name='envelope' />
          </button>

          
          <button title="Personal" onClick={function() {return window.open('https://ycnotes.com/')}}>
            <FontAwesome size="lg" name='rocket' />
          </button>

        </h5> <br />

        <ActiveContainer data={this.props.data} active_project = {this.state.active_project} />
        <ScrollContainer data={this.props.data} currentProject={this.focusProject} />
      </div>
    )
  }
})

module.exports = MainContainer;